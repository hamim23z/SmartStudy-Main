"use client";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import { db } from "@/firebase";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";

export default function SaveDialog({ open, handleClose, flashcards }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const user = useUser();
  const router = useRouter();

  const saveFlashcards = async () => {
    if (!user) {
      setError("Please log in to save flashcards");
      return;
    }

    console.log("Current user:", user); // Debug user object

    if (!name.trim()) {
      setError("Please enter a name for the flashcards!");
      return;
    }

    if (!Array.isArray(flashcards) || flashcards.length === 0) {
      setError("No flashcards to save!");
      return;
    }

    setIsSaving(true);
    setError("");

    try {
      // First, save collection metadata in the user document
      const userDocRef = doc(db, "users", user.id);

      console.log("Attempting to save to path:", `users/${user.id}`); // Debug path

      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.collections?.some((c) => c.name === name)) {
          setError("A collection with this name already exists");
          setIsSaving(false);
          return;
        }
      }

      // Save the collection metadata
      await setDoc(
        userDocRef,
        {
          collections: [
            ...(userDoc.exists() ? userDoc.data().collections || [] : []),
            {
              name,
              createdAt: new Date().toISOString(),
              cardCount: flashcards.length,
            },
          ],
        },
        { merge: true }
      );

      // Save each flashcard
      const savePromises = flashcards.map((flashcard, index) => {
        const flashcardRef = doc(
          db,
          "users",
          user.id,
          "flashcards",
          `${name}_${index}`
        );
        return setDoc(flashcardRef, {
          ...flashcard,
          collectionName: name,
          createdAt: new Date().toISOString(),
          order: index,
        });
      });

      await Promise.all(savePromises);

      console.log("Flashcards saved successfully");
      handleClose();
      setName("");
      router.push("/collection");
    } catch (error) {
      console.error("Error saving flashcards:", error);
      setError(`Error saving flashcards: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: "500px",
          p: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontFamily: "Kanit, sans-serif",
          fontWeight: 900,
          textTransform: "uppercase",
        }}
      >
        Save Flashcards
      </DialogTitle>
      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <DialogContentText
          sx={{
            fontFamily: "Kanit, sans-serif",
            paddingBottom: "20px",
          }}
        >
          Please enter a name for your flashcards collection.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Collection Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          required
          error={!!error && !name.trim()}
          disabled={isSaving}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ fontWeight: "bold" }}
          disabled={isSaving}
        >
          Cancel
        </Button>
        <Button
          onClick={saveFlashcards}
          sx={{
            fontWeight: "bold",
            position: "relative",
          }}
          disabled={!name.trim() || !flashcards?.length || !user || isSaving}
        >
          {isSaving ? (
            <>
              Saving
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            </>
          ) : (
            "Save"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
