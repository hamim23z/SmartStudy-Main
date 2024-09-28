"use client";
import { useState } from "react";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Grid,
  IconButton,
  TextField,
  Snackbar,
  MenuItem,
  Container,
  Stack,
  Drawer,
} from "@mui/material";
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

export default function Contact() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(""); // Clear error if valid
    }
  };

  const handleSendMessage = async () => {
    try {
      // Save the message to Firestore
      await addDoc(collection(db, "Contact Form"), {
        firstName,
        lastName,
        email,
        feedback,
        timestamp: new Date(),
      });

      // Show Snackbar
      setSnackbarOpen(true);

      // Clear form inputs
      setFirstName("");
      setLastName("");
      setEmail("");
      setFeedback("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
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

      {/*Contact Form Section*/}
      <Box
        sx={{
          minHeight: { xs: "90vh", sm: "95vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: { xs: "flex-start", sm: "center" },
          background: "linear-gradient(270deg, #000000, #2838ae)",
          overflow: "auto",
          padding: {
            xs: "20px 10px 40px",
            sm: "60px 20px",
          },
          pt: { xs: "40px", sm: "60px" },
        }}
      >
        <Box
          sx={{
            background: "transparent",
            maxWidth: "1000px",
            width: "100%",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              textAlign: "center",
            }}
          >
            Contact Us:
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "rgba(145, 83, 209, 1)",
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              textAlign: "center",
            }}
          >
            We&apos;re Here to Help
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: "white",
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              textTransform: "uppercase",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
              maxWidth: "800px",
              display: "block",
              mx: "auto",
              mb: "20px",
              paddingBottom: "10px",
            }}
          >
            We would love to hear from you! Please fill out the form below with
            any inquiries or suggestions you may have.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="filled"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  "& .MuiInputLabel-root": { color: "black" },
                  opacity: 1,
                }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="filled"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  "& .MuiInputLabel-root": { color: "black" },
                  opacity: 1,
                }}
              />
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Email Address"
            variant="filled"
            value={email}
            onChange={handleEmailChange}
            sx={{
              backgroundColor: "white",
              mt: 2,
              borderRadius: 1,
              "& .MuiInputLabel-root": { color: "black" },
              opacity: 1,
            }}
            required
            type="email"
            error={Boolean(emailError)}
            helperText={emailError}
          />

          <TextField
            fullWidth
            label="Message goes here"
            variant="filled"
            multiline
            rows={6}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            sx={{
              backgroundColor: "white",
              mt: 2,
              borderRadius: 1,
              "& .MuiInputLabel-root": { color: "black" },
              opacity: 1,
            }}
            required
          />

          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: 900,
              color: "white",
              mt: 3,
              border: "1px solid primary",
              transition: "0.4s ease-in-out",
              "&:hover": {
                border: "1px solid rgba(145, 83, 209, 1)",
              },
            }}
            onClick={handleSendMessage}
          >
            Send Message
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Your message has been sent. Someone from our team will reach out to you soon!"
      />

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
