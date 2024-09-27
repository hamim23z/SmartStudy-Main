"use client";
import { useState } from "react";
import {
  Grid,
  AppBar,
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Toolbar,
  IconButton,
  Icon,
  Stack,
  Snackbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Drawer,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { keyframes } from "@mui/material";
import Image from "next/image";
import chronicleainewpic from "../public/chronicleainewpic.png";
import { UserButton } from "@stackframe/stack";
import { db } from "@/firebase";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import RainEffect from "./components/whiterain";

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
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import TimerIcon from "@mui/icons-material/Timer";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PieChartIcon from "@mui/icons-material/PieChart";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import TimelapseIcon from "@mui/icons-material/Timelapse";

export default function Home() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // State variables for form inputs
  const [email, setEmail] = useState("");
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
      setEmailError("");
    }
  };

  const handleSendMessage = async () => {
    if (!email.trim()) {
      // Show Snackbar with error message if the email is empty
      setSnackbarOpen(true);
      setEmailError("Please enter a valid email address.");
      return;
    }

    try {
      // Save the message to Firestore
      await addDoc(collection(db, "Waitlist - Homepage"), {
        email,
        timestamp: new Date(),
      });

      // Show success Snackbar
      setSnackbarOpen(true);
      setEmailError("");

      // Clear form inputs
      setEmail("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
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
            background: "linear-gradient(-270deg, #000000, #2838ae)",
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
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(-270deg, #000000, #2838ae)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "white",
            position: "relative",
            zIndex: 1,
          }}
        >
          Smart Study
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            paddingTop: "10px",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "rgba(145, 83, 209, 1)",
            position: "relative",
            zIndex: 1,
          }}
        >
          To make life a little bit easier for engineering students
        </Typography>

        <Box
          sx={{
            paddingTop: "20px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            gap: 3,
            margin: "0 auto",
            flexDirection: { xs: "column", sm: "row" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: "none", sm: "none" },
              margin: "0 auto",
            }}
          >
            <Link href="/aboutus">
              <Button
                variant="outlined"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "17px",
                  color: "white",
                  border: "1px solid primary",
                  transition: "0.4s ease-in-out",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    border: "1px solid rgba(145, 83, 209, 1)",
                  },
                }}
              >
                Learn More
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outlined"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "17px",
                  color: "white",
                  border: "1px solid primary",
                  transition: "0.4s ease-in-out",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    border: "1px solid rgba(145, 83, 209, 1)",
                  },
                }}
              >
                Contact
              </Button>
            </Link>

            <Link href="/sign-in">
              <Button
                variant="outlined"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "17px",
                  color: "white",
                  border: "1px solid primary",
                  transition: "0.4s ease-in-out",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    border: "1px solid rgba(145, 83, 209, 1)",
                  },
                }}
              >
                Sign In
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button
                variant="outlined"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "17px",
                  color: "white",
                  border: "1px solid primary",
                  transition: "0.4s ease-in-out",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    border: "1px solid rgba(145, 83, 209, 1)",
                  },
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            paddingTop: "30px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "90%", sm: "350px" },
              maxWidth: "350px",
              mx: "auto",
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Your Email Address"
              value={email}
              onChange={handleEmailChange}
              type="email"
              error={Boolean(emailError)}
              helperText={emailError}
              sx={{
                width: "100%",
                background: "white",
                borderRadius: "10px",
                "& .MuiInputBase-input::placeholder": {
                  color: "black",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                },
                "& .MuiFormHelperText-root": {
                  position: "absolute",
                  bottom: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  fontWeight: "bold",
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
          </Box>

          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              fontFamily: "Kanit, sans-serif",
              fontWeight: 900,
              color: "white",
              background: "primary",
              transition: "background 0.4s ease-in-out",
              "&:hover": {
                background: "rgba(145, 83, 209, 1)",
              },
              height: "40px",
              width: "auto",
              mt: { xs: 2, sm: 0 },
              alignSelf: { xs: "center", sm: "flex-start" },
            }}
            onClick={handleSendMessage}
          >
            Join the Waitlist
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={
          emailError ||
          "You have successfully signed up for the waitlist! We will reach out when the site is ready."
        }
      />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(-270deg, #000000, #2838ae)",
          padding: { xs: "20px", sm: "40px" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "white",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            textAlign: "center",
          }}
        >
          THE NEW
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "rgba(145, 83, 209, 1)",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            textAlign: "center",
          }}
        >
          PREMIERE STANDARD.
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
            margin: "0 auto",
          }}
        >
          Introducing a new way of building flashcards, getting study materials,
          and reviewing that leaves the competition in the dust. And we
          don&apos;t look back.
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "transparent",
            paddingX: { xs: 1, sm: 4 },
            marginLeft: { xs: "-10px", sm: "auto" },
          }}
        >
          {[
            {
              title: "Customized Cards",
              description:
                "Create and tailor your own flashcards for a personalized learning experience. Do it your way.",
              icon: <SpeakerNotesIcon sx={{ fontSize: "inherit" }} />,
            },
            {
              title: "Quizzes & Timers",
              description:
                "Use our timer to test your skills and access to our Pomodoro Technique. Quizzes are in our study kit!",
              icon: <TimerIcon sx={{ fontSize: "inherit" }} />,
            },
            {
              title: "AI Brilliance",
              description:
                "Never worry about running out of topics to study. Thanks to our own AI, you can generate your own flashcards, ask it anything, and can even use it to help study along side with you! ChronicleAI is integrated both in the website and externally.",
              icon: <SmartToyIcon sx={{ fontSize: "inherit" }} />,
              gridSize: { xs: 12, sm: 12, md: 6, lg: 6 },
            },
            {
              title: "Video Vault",
              description:
                "No need to worry about continuously going on YouTube for videos, we have videos for nearly every engineering major directly on our website. Videos are updated at the end of every month.",
              icon: <YouTubeIcon sx={{ fontSize: "inherit" }} />,
              gridSize: { xs: 12, sm: 12, md: 6, lg: 6 },
            },
            {
              title: "Custom Control",
              description:
                "Your account, your rules. Choose different themes and customize your experience.",
              icon: <DashboardCustomizeIcon sx={{ fontSize: "inherit" }} />,
            },
            {
              title: "Study Kit",
              description:
                "Get access to our own study guides, practice tests, and numerous tips to succeed.",
              icon: <LibraryBooksIcon sx={{ fontSize: "inherit" }} />,
            },
          ].map((item, index) => (
            <Grid
              item
              xs={12}
              sm={item.gridSize?.sm || 6}
              md={item.gridSize?.md || 3}
              lg={item.gridSize?.lg || 3}
              key={index}
              sx={{
                "@media (min-width: 768px) and (max-width: 1024px)": {
                  flexBasis: "100%",
                  maxWidth: "100%",
                },
              }}
            >
              <Box
                sx={{
                  background: "transparent",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                  height: { xs: "auto", sm: "300px" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  transition: "box-shadow 0.5s ease-in-out",
                  position: "relative",
                  padding: "20px",
                  "&:hover": {
                    boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
                  },
                  "@media (min-width: 768px) and (max-width: 1024px)": {
                    height: "auto",
                    minHeight: "200px",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(145, 83, 209, 1)",
                    textAlign: "left",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "900",
                    fontSize: { xs: "1.2rem", sm: "1.4rem" },
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "700",
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    marginBottom: "20px",
                  }}
                >
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      color: "rgba(145, 83, 209, 1)",
                      fontSize: { xs: "60px", sm: "80px", md: "95px" },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/*ChronicleAI Showcase Section*/}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(-270deg, #000000, #2838ae)",
          padding: { xs: "20px", sm: "40px" },
          boxSizing: "border-box",
        }}
      >
        {/* Header and Text */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: "20px", sm: "40px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              textTransform: "uppercase",
              color: "white",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            Your Smart Study
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              textTransform: "uppercase",
              color: "rgba(145, 83, 209, 1)",
              paddingBottom: { xs: "15px", sm: "25px" },
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            Your ChronicleAI.
          </Typography>

          <Typography
            variant="caption"
            sx={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              textTransform: "uppercase",
              color: "white",
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            Get access to your own personalized AI chatbot to help you succeed.
          </Typography>
        </Box>

        {/* Showcase Card */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            background: "transparent",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
            overflow: "hidden",
            width: "100%",
            maxWidth: "1200px",
            height: "auto",
            padding: { xs: "20px", sm: "30px" },
            position: "relative",
            transition: "box-shadow 0.4s ease-in-out",
            "&:hover": {
              boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              position: "relative",
              overflow: "hidden",
              marginRight: { xs: 0, md: "20px" },
              height: { xs: "200px", sm: "300px", md: "400px" },
              marginBottom: { xs: "20px", md: 0 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={chronicleainewpic}
              alt="Showcase"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 60vw, 60vw"
              style={{
                objectFit: "cover",
                objectPosition: { xs: "center", md: "left" },
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "900",
                color: "rgba(145, 83, 209, 1)",
                marginBottom: "10px",
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              Endless Exploration
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Kanit, sans-serif",
                color: "white",
                paddingTop: "20px",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Use our AI, ChronicleAI aka Chad, to help guide you to new topics,
              generate flashcards for you, or any engineering advice you may
              need.
            </Typography>
            <Link href="/sign-up" passHref>
              <Button
                variant="outlined"
                sx={{
                  marginTop: "20px",
                  fontFamily: "Kanit, sans-serif",
                  color: "white",
                  fontWeight: "900",
                  borderRadius: "10px",
                  border: "1px solid primary",
                  transition: "0.4s ease-in-out",
                  "&:hover": {
                    border: "1px solid rgba(145, 83, 209, 1)",
                  },
                }}
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(-270deg, #000000, #2838ae)",
          padding: { xs: "40px 20px", md: "60px 40px" },
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "white",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            textAlign: "center",
          }}
        >
          Students like you
          <br />
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "rgba(145, 83, 209, 1)",
            paddingBottom: { xs: "15px", sm: "25px" },
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            textAlign: "center",
          }}
        >
          love Smart Study.
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
            margin: "0 auto",
          }}
        >
          Learn why hundreds and thousands of engineering students love to use
          Smart Study&apos;s intuitive interface to study and ace their exams.
        </Typography>

        <Box
          sx={{
            paddingTop: { xs: "40px", md: "80px" },
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <Stack spacing={{ xs: 3, md: 5 }}>
            <Box
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                padding: "20px",
                transition: "box-shadow 0.4s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
                },
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(145, 83, 209, 1)",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Organize your Study Materials
                <Icon sx={{ marginLeft: "15px" }}>
                  <Inventory2Icon />
                </Icon>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  paddingTop: "15px",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Keep all your notes and flashcards in one place. Easy to access.
                Easy to review. Easy to study smart.
              </Typography>
            </Box>

            <Box
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                padding: "20px",
                transition: "box-shadow 0.4s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
                },
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(145, 83, 209, 1)",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Personalize your Learning Experience
                <Icon sx={{ marginLeft: "10px" }}>
                  <PersonPinIcon />
                </Icon>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  paddingTop: "15px",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Focus on the topics where you need the most help. Use our AI to
                help make you flashcards.
              </Typography>
            </Box>

            <Box
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                padding: "20px",
                transition: "box-shadow 0.4s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
                },
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(145, 83, 209, 1)",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Track your Learning Progress
                <Icon sx={{ marginLeft: "10px" }}>
                  <PieChartIcon />
                </Icon>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  paddingTop: "15px",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                See how much you&apos;ve improved with practice tests and
                quizzes. Take a look at our worksheets as well.
              </Typography>
            </Box>

            <Box
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                padding: "20px",
                transition: "box-shadow 0.4s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
                },
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(145, 83, 209, 1)",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Watch Videos Directly and Easily
                <Icon sx={{ marginLeft: "10px" }}>
                  <VideoLibraryIcon />
                </Icon>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  paddingTop: "15px",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                We have YouTube videos directly on our website. No need to open
                any external apps. Videos from different websites are coming
                soon!
              </Typography>
            </Box>

            <Box
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                padding: "20px",
                transition: "box-shadow 0.4s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
                },
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(145, 83, 209, 1)",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Use our In-House Pomodoro Technique
                <Icon
                  sx={{
                    marginLeft: "10px",
                  }}
                >
                  <TimelapseIcon />
                </Icon>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  paddingTop: "15px",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                Balance your study sessions with Smart Studys Pomodoro timer,
                which reminds you to take breaks and stay productive without
                burning out.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/*FAQ Section*/}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          background: "linear-gradient(-270deg, #000000, #2838ae)",
          padding: { xs: "40px 10px", sm: "60px 20px" },
          overflow: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
            textAlign: "center", // Center the text for smaller screens
            marginBottom: { xs: "15px", sm: "20px" }, // Responsive margin
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color: "rgba(145, 83, 209, 1)",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
            textAlign: "center", // Center the text
            marginBottom: { xs: "10px", sm: "15px" }, // Responsive margin
          }}
        >
          You ask. We Answer.
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
            margin: "0 auto 20px",
          }}
        >
          If your question is not listed, please fill out our contact form.
        </Typography>

        <Stack
          spacing={2}
          sx={{
            width: "100%",
            maxWidth: "1000px",
            background: "transparent",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* FAQ Accordions */}
          <Accordion sx={{ background: "transparent" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  color: "rgba(145, 83, 209, 1)",
                }}
              >
                What is Smart Study?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Smart Study is a website where students can create flashcards
                from scratch or use our AI, ChronicleAI, to generate flashcards.
                Students will also have access to study materials such as
                YouTube videos, worksheets, and pre-made cards.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ background: "transparent" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  color: "rgba(145, 83, 209, 1)",
                }}
              >
                How do I create flashcards?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Creating flashcards has never been easier. Upon logging in, you
                will be automatically redirected to the self generate flashcard
                page. On this page, you can make as many flashcards as you want.
                There is also a button that redirects you to the AI where you
                can enter a topic and flashcards will be made for you. All of
                these flashcards can be saved to your own collection.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ background: "transparent" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  color: "rgba(145, 83, 209, 1)",
                }}
              >
                Can I use pre-made flashcards?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Yes! Pre-made flashcards will be available. However, the team is
                still working on this feature due to the number of topics. Rest
                assured, this feature will be available to everyone very soon.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ background: "transparent" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  color: "rgba(145, 83, 209, 1)",
                }}
              >
                Is Smart Study free to use?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Yes, Smart Study is currently free to use. However, we do plan
                to introduce paid features later down the road as we gain more
                users and more traction but nothing anytime soon.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ background: "transparent" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  color: "rgba(145, 83, 209, 1)",
                }}
              >
                Do you offer customer support?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Yes, there are many different ways to contact us. The first
                being through the
                <Link
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    color: "red",
                  }}
                >
                  {" "}
                  Contact Form{" "}
                </Link>
                linked here. It can also be found on the top of every page. The
                second way to contact us is by emailing us at
                smartstudycs0@gmail.com. We will respond to your inquiry as soon
                as possible.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          height: "auto",
          py: 4,
          pb: 10,
          background: "linear-gradient(-270deg, #000000, #2838ae)",
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
