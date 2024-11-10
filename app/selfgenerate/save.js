"use client"
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";
import { db } from "@/firebase";
import { collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";

export default function SaveDialog({ open, handleClose, flashcards }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { user, isLoading, isError } = useUser({ or: "redirect" });
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      console.error("useUser Hook Error:", isError);
    }
  }, [isError]);

  const saveFlashcards = async () => {
    if (isLoading) {
      console.log("User data loading...");
      return;
    }

    if (!user) {
      console.log("User not logged in");
      alert("Please log in to save flashcards");
      return;
    }

    if (!name.trim()) {
      setError("Please enter a name for the flashcards!");
      return;
    }

    if (!Array.isArray(flashcards) || flashcards.length === 0) {
      setError("No flashcards to save!");
      return;
    }

    try {
      const batch = writeBatch(db);
      const userDocRef = doc(collection(db, "users"), user.id);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const collections = data.flashcards || [];

        if (collections.find((f) => f.name === name)) {
          setError("Flashcard collection with the same name already exists");
          return;
        }

        collections.push({ name });
        batch.update(userDocRef, { flashcards: collections });
      } else {
        batch.set(userDocRef, { flashcards: [{ name }] });
      }

      const colRef = collection(userDocRef, name);
      flashcards.forEach((flashcard) => {
        const cardDocRef = doc(colRef);
        batch.set(cardDocRef, flashcard);
      });

      await batch.commit();
      console.log("Flashcards saved successfully");
      handleClose();
      router.push("/collection");
    } catch (error) {
      console.error("Error saving flashcards:", error);
      setError(`Error saving flashcards: ${error.code} ${error.message}`);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
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
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ fontWeight: "bold" }}>
          Cancel
        </Button>
        <Button
          onClick={saveFlashcards}
          sx={{ fontWeight: "bold" }}
          disabled={!name.trim() || !flashcards.length || isLoading}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
