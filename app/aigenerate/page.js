"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  AppBar,
  Toolbar,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Card,
  CardActionArea,
  CardContent,
  Drawer,
  Snackbar,
} from "@mui/material";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import Link from "next/link";
import { keyframes } from "@mui/material";
import Timer from "./timer";
import SaveDialog from "./save";


const slideUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px); /* Adjust the value as needed */
  }
  50% {
    transform: translateY(10px); /* Slide down */
  }
  75% {
    transform: translateY(-5px); /* Adjust to create a smooth effect */
  }
  100% {
    transform: translateY(0);
  }
`;

{
  /*MUI ICONS*/
}
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import MenuIcon from "@mui/icons-material/Menu";
import { UserButton } from "@stackframe/stack";

export default function GenerateAI() {
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const handleOpenTimer = () => setIsTimerOpen(true);
  const handleCloseTimer = () => setIsTimerOpen(false);

  const handleStartTimer = () => {
    // Logic to start the timer goes here
    setOpenTimer(false); // Close the dialog after starting the timer
  };

  const handleSubmit = async () => {
    fetch("api/generate", {
      method: "POST",
      body: text,
    })
      .then((res) => res.json())
      .then((data) => setFlashcards(data));
  };

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveFlashcards = async () => {
    if (!name) {
      alert(`Please enter a name for the flashcards!`);
      return;
    }

    const batch = writeBatch(db);
    const userDocRef = doc(collection(db, "users"), user.id);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const collections = data.flashcards || [];
      if (collections.find((f) => f.name === name)) {
        alert("Flashcard collection with the same name already exists");
        return;
      }

      // Update flashcards array with new collection name
      collections.push({ name });
      batch.update(userDocRef, { flashcards: collections });
    } else {
      // Create new document with flashcards
      batch.set(userDocRef, { flashcards: [{ name }] });
    }

    const colRef = collection(userDocRef, name);
    flashcards.forEach((flashcard) => {
      const cardDocRef = doc(colRef);
      batch.set(cardDocRef, flashcard);
    });

    await batch.commit();
    handleClose();
    router.push("/flashcards");
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  {
    /* For the Newsletter Now */
  }
  const [snackbarOpenNews, setSnackbarOpenNews] = useState(false);
  const [emailNews, setEmailNews] = useState("");
  const [emailErrorNews, setEmailErrorNews] = useState("");
  const emailRegexNews = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSnackbarCloseNews = () => {
    setSnackbarOpenNews(false);
  };

  const handleEmailChangeNews = (e) => {
    const value = e.target.value;
    setEmailNews(value);

    if (!emailRegexNews.test(value)) {
      setEmailErrorNews("Enter a valid email address.");
    } else {
      setEmailErrorNews("");
    }
  };

  const handleSendMessageNews = async () => {
    setEmailErrorNews("");

    if (!emailNews.trim()) {
      setSnackbarOpenNews(true);
      setEmailErrorNews("Email cannot be empty.");
      return;
    }

    if (!emailRegexNews.test(emailNews)) {
      setSnackbarOpenNews(true);
      setEmailErrorNews("Enter a valid email address.");
      return;
    }

    try {
      await addDoc(collection(db, "Newsletter"), {
        email: emailNews,
        timestamp: new Date(),
      });

      setSnackbarOpenNews(true);
      setEmailErrorNews("");

      setEmailNews("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
        }}
      >
        <Toolbar
          sx={{
            paddingTop: "20px",
            paddingBottom: "20px",
            background: "linear-gradient(270deg, #000000, #2838ae)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              px: 2,
              display: { xs: "flex", md: "none" },
            }}
          >
            {/* Menu icon for mobile */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: "35px" }} />
            </IconButton>

            {/* User Button on right side for mobile */}
            <Box>
              <UserButton />
            </Box>
          </Box>

          {/* App Logo */}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" }, // Visible on desktop, hidden on mobile
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                Smart Study
              </Typography>
            </Link>
          </Box>

          {/* Links for desktop, hidden on mobile */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            <Link
              href="https://smartstudy-0f4a59fc.mintlify.app/introduction"
              target="_blank"
              passHref
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "15px",
                  transition: "transform 0.6s ease-in-out",
                  "&:hover": {
                    animation: `${slideUpDown} 0.6s ease-in-out`,
                  },
                }}
              >
                Documentation
              </Button>
            </Link>

            <Link
              href="/blog"
              target="_blank"
              passHref
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "15px",
                  transition: "transform 0.6s ease-in-out",
                  "&:hover": {
                    animation: `${slideUpDown} 0.6s ease-in-out`,
                  },
                }}
              >
                Blog
              </Button>
            </Link>

            <Link
              href="/aboutus"
              passHref
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "15px",
                  transition: "transform 0.6s ease-in-out",
                  "&:hover": {
                    animation: `${slideUpDown} 0.6s ease-in-out`,
                  },
                }}
              >
                About Us
              </Button>
            </Link>

            <Link
              href="/contact"
              passHref
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "15px",
                  transition: "transform 0.6s ease-in-out",
                  "&:hover": {
                    animation: `${slideUpDown} 0.6s ease-in-out`,
                  },
                }}
              >
                Contact
              </Button>
            </Link>

            <Link
              href="/sign-in"
              passHref
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "15px",
                  transition: "transform 0.6s ease-in-out",
                  "&:hover": {
                    animation: `${slideUpDown} 0.6s ease-in-out`,
                  },
                }}
              >
                Sign In
              </Button>
            </Link>

            <Link
              href="/sign-up"
              passHref
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "15px",
                  transition: "transform 0.6s ease-in-out",
                  "&:hover": {
                    animation: `${slideUpDown} 0.6s ease-in-out`,
                  },
                }}
              >
                Sign Up
              </Button>
            </Link>

            <UserButton></UserButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "calc(100% - 40px)",
            height: "50vh",
            background: "black",
            color: "white",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            transition: "transform 0.3s ease",
            position: "fixed",
            bottom: 200,
            left: 20,
            right: 20,
            transform: drawerOpen ? "translateY(100%)" : "translateY(100%)",
          },
        }}
      >
        {/* Drawer content */}
        <Box
          sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}
        >
          <Link
            href="https://smart-study-official.vercel.app/"
            passHref
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
                fontSize: "15px",
                transition: "transform 0.6s ease-in-out",
                "&:hover": {
                  animation: `${slideUpDown} 0.6s ease-in-out`,
                },
                paddingBottom: "10px",
              }}
            >
              Home
            </Button>
          </Link>

          <Link
            href="https://smartstudy-0f4a59fc.mintlify.app/introduction"
            target="_blank"
            passHref
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
                fontSize: "15px",
                transition: "transform 0.6s ease-in-out",
                "&:hover": {
                  animation: `${slideUpDown} 0.6s ease-in-out`,
                },
                paddingBottom: "10px",
              }}
            >
              Documentation
            </Button>
          </Link>

          <Link
            href="/blog"
            target="_blank"
            passHref
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
                fontSize: "15px",
                transition: "transform 0.6s ease-in-out",
                "&:hover": {
                  animation: `${slideUpDown} 0.6s ease-in-out`,
                },
                paddingBottom: "10px",
              }}
            >
              Blog
            </Button>
          </Link>

          <Link
            href="/aboutus"
            passHref
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
                fontSize: "15px",
                transition: "transform 0.6s ease-in-out",
                "&:hover": {
                  animation: `${slideUpDown} 0.6s ease-in-out`,
                },
                paddingBottom: "10px",
              }}
            >
              About Us
            </Button>
          </Link>

          <Link
            href="/contact"
            passHref
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
                fontSize: "15px",
                transition: "transform 0.6s ease-in-out",
                "&:hover": {
                  animation: `${slideUpDown} 0.6s ease-in-out`,
                },
                paddingBottom: "10px",
              }}
            >
              Contact
            </Button>
          </Link>

          <Link
            href="/sign-in"
            passHref
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
                fontSize: "15px",
                transition: "transform 0.6s ease-in-out",
                "&:hover": {
                  animation: `${slideUpDown} 0.6s ease-in-out`,
                },
                paddingBottom: "10px",
              }}
            >
              Sign In
            </Button>
          </Link>

          <Link
            href="/sign-up"
            passHref
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
                fontSize: "15px",
                transition: "transform 0.6s ease-in-out",
                "&:hover": {
                  animation: `${slideUpDown} 0.6s ease-in-out`,
                },
                paddingBottom: "10px",
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        sx={{
          background: "linear-gradient(270deg, #000000, #2838ae)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "900",
                paddingBottom: "30px",
                color: "rgba(145, 83, 209, 1)",
                textAlign: "center",
                mt: { xs: -14, sm: -2, md: -6 },
              }}
            >
              Generate Cards With ChronicleAI
            </Typography>

            <Paper
              sx={{
                width: "100%",
                padding: "10px",
              }}
            >
              <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                required
                sx={{
                  "& .MuiInputBase-input::placeholder": {
                    color: "black", // Placeholder text color
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "700",
                  },
                  "& .MuiInputBase-input": {
                    color: "black", // Color of the input text
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "700",
                  },
                  background: "white",
                }}
              ></TextField>
            </Paper>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 10 },
              paddingTop: "30px",
              justifyContent: "center",
              "& > *": {
                flex: { xs: "1 1 100%", md: "0 1 auto" },
                minWidth: { xs: "100%", md: "auto" },
              },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                fontFamily: "Kanit, sans-serif",
              }}
            >
              Generate Cards
            </Button>

            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ fontFamily: "Kanit, sans-serif" }}
            >
              Save to Collection
            </Button>

            {/* SaveDialog component with props */}
            <SaveDialog
              open={open}
              handleClose={handleClose}
              flashcards={flashcards} // Pass the flashcards state to SaveDialog
            />

            <Button
              variant="contained"
              onClick={handleOpenTimer}
              sx={{ fontFamily: "Kanit, sans-serif" }}
            >
              Timer
            </Button>
            {/* Timer dialog component */}
            <Timer open={isTimerOpen} onClose={handleCloseTimer} />

            <Link href="/selfgenerate" passHref legacyBehavior>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                }}
              >
                Create your Own
              </Button>
            </Link>

            <Link
              href="https://chronicle-ai-omega.vercel.app/chat"
              passHref
              legacyBehavior
              target="_blank"
            >
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                }}
              >
                Chat with Chronicle
              </Button>
            </Link>
          </Box>

          {flashcards.length > 0 && (
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={3}>
                {flashcards.map((flashcard, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card
                      sx={{
                        maxWidth: 800,
                        maxHeight: 400,
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CardActionArea
                        onClick={() => handleCardClick(index)}
                        sx={{ height: "100%" }}
                      >
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            height: "200px",
                          }}
                        >
                          <Box
                            sx={{
                              perspective: "1000px",
                              width: "100%",
                              height: "100%",
                            }}
                          >
                            <div
                              style={{
                                transition: "transform 0.6s",
                                transformStyle: "preserve-3d",
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                transform: flipped[index]
                                  ? "rotateY(180deg)"
                                  : "rotateY(0deg)",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  width: "100%",
                                  height: "100%",
                                  backfaceVisibility: "hidden",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "16px",
                                  boxSizing: "border-box",
                                  backgroundColor: "#fff",
                                }}
                              >
                                <Typography
                                  variant="h5"
                                  sx={{
                                    fontSize: "18px",
                                    fontFamily: "Kanit, sans-serif",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                  }}
                                >
                                  {flashcard.front}
                                </Typography>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  width: "100%",
                                  height: "100%",
                                  backfaceVisibility: "hidden",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "16px",
                                  boxSizing: "border-box",
                                  backgroundColor: "#fff",
                                  transform: "rotateY(180deg)",
                                }}
                              >
                                <Typography
                                  variant="h5"
                                  sx={{
                                    fontSize: "14px",
                                    textAlign: "center",
                                  }}
                                >
                                  {flashcard.back}
                                </Typography>
                              </div>
                            </div>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          height: "auto",
          py: 4,
          pb: 10,
          background: "linear-gradient(270deg, #000000, #2838ae)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                }}
              >
                Smart Study
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", fontFamily: "Kanit, sans-serif" }}
              >
                Subscribe to our newsletter
              </Typography>
              <Stack direction="row" spacing={1}>
                <TextField
                  variant="outlined"
                  size="small"
                  onChange={handleEmailChangeNews}
                  placeholder="Your email"
                  value={emailNews}
                  sx={{
                    flexGrow: 1,
                    background: "white",
                    borderRadius: "10px",
                    "& .MuiInputBase-input::placeholder": {
                      color: "black",
                      fontFamily: "Kanit, sans-serif",
                      fontWeight: "900",
                    },
                    "& .MuiInputBase-input": {
                      color: "black",
                      fontFamily: "Kanit, sans-serif",
                      fontWeight: "900",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    background: "primary",
                    transition: "background 0.4s ease-in-out",
                    "&:hover": {
                      background: "rgba(145, 83, 209, 1)",
                    },
                  }}
                  onClick={handleSendMessageNews}
                >
                  Submit
                </Button>

                <Snackbar
                  open={snackbarOpenNews}
                  autoHideDuration={6000}
                  onClose={handleSnackbarCloseNews}
                  message={
                    emailErrorNews ||
                    "You have successfully signed up for our newsletter."
                  }
                />
              </Stack>

              <Stack direction="row" spacing={1}>
                {/* Social media links */}
                <IconButton
                  href="https://github.com/hamim23z"
                  target="_blank"
                  sx={{
                    color: "white",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "rgba(145, 83, 209, 1)",
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/company/smart-studyapp"
                  target="_blank"
                  sx={{
                    color: "white",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "rgba(145, 83, 209, 1)",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/smartstudy_00/"
                  target="_blank"
                  sx={{
                    color: "white",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "rgba(145, 83, 209, 1)",
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://x.com/smartstudy0"
                  target="_blank"
                  sx={{
                    color: "white",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "rgba(145, 83, 209, 1)",
                    },
                  }}
                >
                  <XIcon />
                </IconButton>
              </Stack>
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
              {/* Company Section */}
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "900",
                  }}
                >
                  Company
                </Typography>
                <Link
                  href="/aboutus"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Blog
                </Link>
              </Stack>

              {/* References Section */}
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "900",
                  }}
                >
                  References
                </Typography>
                <Link
                  href="https://smartstudy-0f4a59fc.mintlify.app/introduction"
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Documentation
                </Link>
                <Link
                  href="/demos"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Demos
                </Link>
              </Stack>

              {/* Legal Section */}
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "900",
                  }}
                >
                  Legal
                </Typography>
                <Link
                  href="/privacy"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Privacy
                </Link>
                <Link
                  href="/termsandcond"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Terms and Conditions
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
