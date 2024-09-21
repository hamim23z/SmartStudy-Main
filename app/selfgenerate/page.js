"use client";
import { useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Toolbar,
  IconButton,
  Icon,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Drawer,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { keyframes } from "@mui/material";

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

export default function GenerateSelf() {
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});
  const [newFlashcard, setNewFlashcard] = useState({ front: "", back: "" });
  const [open, setOpen] = useState(false); // State for dialog visibility
  const [name, setName] = useState(""); // State for collection name

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSubmit = () => {
    if (newFlashcard.front && newFlashcard.back) {
      setFlashcards([...flashcards, newFlashcard]);
      setNewFlashcard({ front: "", back: "" }); // Reset the input fields
    }
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

      <Box
        sx={{
          padding: "20px",
          background: "linear-gradient(270deg, #000000, #2838ae)",
          minHeight: "100vh",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
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
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                sx={{
                  fontWeight: "bold",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={saveFlashcards}
                sx={{
                  fontWeight: "bold",
                }}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              component="div"
              sx={{
                color: "rgba(145, 83, 209, 1)",
                fontFamily: "Kanit, sans-serif",
                fontWeight: "900",
                textAlign: "center",
                paddingBottom: "30px",
              }}
            >
              Create Your Own Flashcards
            </Typography>
            <TextField
              placeholder="Front"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newFlashcard.front}
              onChange={(e) =>
                setNewFlashcard({ ...newFlashcard, front: e.target.value })
              }
              sx={{
                borderRadius: "10px",
                "& .MuiInputBase-input": {
                  color: "black", // Color of the input text
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "black", // Placeholder text color
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                },
                background: "white",
              }}
            />
            <TextField
              placeholder="Back"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newFlashcard.back}
              onChange={(e) =>
                setNewFlashcard({ ...newFlashcard, back: e.target.value })
              }
              sx={{
                borderRadius: "10px",
                "& .MuiInputBase-input": {
                  color: "black", // Color of the input text
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "black", // Placeholder text color
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                },
                background: "white",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                paddingTop: "30px",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  fontFamily: "Kanit, sans-serif",
                }}
              >
                Create Card
              </Button>
              <Button
                variant="contained"
                onClick={handleOpen} // Show the dialog
                sx={{
                  fontFamily: "Kanit, sans-serif",
                }}
              >
                Save to Collection
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                }}
              >
                Timer
              </Button>
              <Link href="/aigenerate">
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Kanit, sans-serif",
                  }}
                >
                  Generate using AI
                </Button>
              </Link>

              <Link
                href="https://chronicle-ai-omega.vercel.app/chat"
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
          </Box>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 800,
                    maxHeight: 400, // Adjust as needed
                    overflow: "hidden", // Ensure overflow is handled
                    display: "flex", // To ensure the content aligns properly
                    alignItems: "center", // Center the content
                    justifyContent: "center", // Center the content
                  }}
                >
                  <CardActionArea onClick={() => handleCardClick(index)}>
                    <CardContent sx={{ p: 0, height: "100%" }}>
                      {" "}
                      {/* Ensure CardContent takes full height */}
                      <Box
                        sx={{
                          perspective: "1000px",
                          width: "100%",
                          height: "250px", // Height for flipping content
                          position: "relative",
                          overflow: "hidden", // Handle overflow
                          "& > div": {
                            transition: "transform 0.6s",
                            transformStyle: "preserve-3d",
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                            transform: flipped[index]
                              ? "rotateY(180deg)"
                              : "rotateY(0deg)",
                          },
                          "& > div > div": {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backfaceVisibility: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 2,
                            boxSizing: "border-box",
                          },
                          "& > div > div:nth-of-type(2)": {
                            transform: "rotateY(180deg)",
                          },
                        }}
                      >
                        <div>
                          <div>
                            <Typography
                              variant="body2"
                              component="div"
                              sx={{
                                fontSize: "12px",
                                textAlign: "center",
                                fontFamily: "Kanit, sans-serif",
                                fontWeight: "bold",
                                color: "black",
                              }}
                            >
                              {flashcard.front}
                            </Typography>
                          </div>
                          <div>
                            <Typography
                              variant="body2"
                              component="div"
                              sx={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "red",
                                fontFamily: "Kanit, sans-serif",
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
                  placeholder="Your email"
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
                >
                  Submit
                </Button>
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
                  href="https://www.linkedin.com/in/hamimc/"
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
                  href="https://instagram.com"
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
                  href="https://x.com"
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
