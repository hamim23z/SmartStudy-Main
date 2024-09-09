"use client";
import { useEffect, useState, MouseEvent } from "react";
import {
  Grid,
  AppBar,
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  Toolbar,
  IconButton,
  Icon,
  Menu,
  Stack,
  Snackbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { keyframes } from "@mui/material";
import Image from "next/image";
import chronicleai from "../public/chronicleai.png";
import selfgenerate from "../public/selfgenerate.png";
import smartstudytimer from "../public/smartstudytimer.png";
import studykitcomingsoon from "../public/studykitcomingsoon.png";
import videovaultcomingsoon from "../public/videovaultcomingsoon.png";
import dashboard from "../public/dashboard.png";
import { UserButton } from "@stackframe/stack";
import { db } from "@/firebase";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import WhiteRain from "./components/whiterain";

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
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

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
      setEmailError(""); // Clear error if valid
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
      setEmailError(""); // Clear any previous error messages

      // Clear form inputs
      setEmail("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  {
    /*For the Newsletter Submit Button*/
  }
  const [snackbarOpenNews, setSnackbarOpenNews] = useState(false);
  // State variables for form inputs
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
      setEmailErrorNews("Please enter a valid email address.");
    } else {
      setEmailErrorNews(""); // Clear error if valid
    }
  };

  const handleSendMessageNews = async () => {
    if (!emailNews.trim()) {
      // Show Snackbar with error message if the email is empty
      setSnackbarOpenNews(true);
      setEmailErrorNews("Please enter a valid email address.");
      return;
    }

    if (!emailRegexNews.test(emailNews)) {
      // Show Snackbar with error message if the email is not valid
      setSnackbarOpenNews(true);
      setEmailErrorNews("Please enter a valid email address.");
      return;
    }

    try {
      // Save the message to Firestore
      await addDoc(collection(db, "Newsletter - Homepage"), {
        email: emailNews,
        timestamp: new Date(),
      });

      // Show success Snackbar
      setSnackbarOpenNews(true);
      setEmailErrorNews(""); // Clear any previous error messages

      // Clear form inputs
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
            background: "linear-gradient(-270deg, #000000, #2838ae)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/*Toolbar allows us to write and add elements. Gives the appbar spacing and whatnot*/}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Link
              href="/"
              passHref
              style={{
                textDecoration: "none",
                display: "block",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  color: "white",
                  textTransform: "uppercase",
                  margin: 0,
                  padding: 0,
                }}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Smart Study
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            <Link
              href="/pricing"
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
                Pricing
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
                "&:hover": {
                  border: "1px solid rgba(145, 83, 209, 1)",
                },
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{ paddingTop: "30px", alignItems: "flex-start" }}
        >
          <Box sx={{ position: "relative", width: "350px" }}>
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
          "You have successfully signed up for the waitlist! We will reach out when the site is ready, which is very soon!"
        }
      />

      {/*BENTO BOX SECTION*/}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(-270deg, #000000, #2838ae)",
          padding: "20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          THE NEW
          <br />
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "rgba(145, 83, 209, 1)",
          }}
        >
          PREMIERE STANDARD.
        </Typography>

        <Typography
          variant="caption"
          sx={{
            textAlign: "center",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "white",
            marginBottom: "50px",
            paddingTop: "25px",
          }}
        >
          Introducing a new way of building flashcards, getting study materials,
          and reviewing that leaves the competition in the dust.
          <br />
          And we don&apos;t look back.
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "transparent",
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                background: "transparent",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                position: "relative",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
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
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                  marginBottom: "20px",
                }}
              >
                Customized Cards
                <Typography
                  sx={{
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "700",
                    color: "white",
                    paddingTop: "7px",
                    textAlign: "left",
                  }}
                >
                  Create and tailor your own flashcards with no limitations for
                  a personalized learning experience. Do it your way.
                </Typography>
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <IconButton
                  sx={{
                    color: "rgba(145, 83, 209, 1)",
                    alignItems: "center",
                    marginBottom: "7px",
                    fontSize: "95px", // Increase icon size
                  }}
                >
                  <SpeakerNotesIcon sx={{ fontSize: "inherit" }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                background: "transparent",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                position: "relative",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
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
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                  marginBottom: "20px",
                }}
              >
                Quizzes & Timers
                <Typography
                  sx={{
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "700",
                    color: "white",
                    paddingTop: "7px",
                  }}
                >
                  Use our timer to test your skills under pressure. Also have
                  access to our Pomodoro Technique. Quizzes are in our study
                  kit!
                </Typography>
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <IconButton
                  sx={{
                    color: "rgba(145, 83, 209, 1)",
                    alignItems: "center",
                    marginBottom: "7px",
                    height: "20px",
                    fontSize: "95px",
                  }}
                >
                  <TimerIcon sx={{ fontSize: "inherit" }}></TimerIcon>
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                background: "transparent",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                height: "300px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
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
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                }}
              >
                AI Brilliance
                <Typography
                  sx={{
                    paddingTop: "20px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "700",
                    color: "white",
                    paddingTop: "7px",
                    paddingBottom: "10px",
                  }}
                >
                  Never worry about running out of topics to study. Thanks to
                  our own AI, you can generate your own flashcards, ask it
                  anything, and can even use it to help study along side with
                  you! ChronicleAI is integrated both in the website and
                  externally.
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: "170px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <IconButton
                    sx={{
                      color: "rgba(145, 83, 209, 1)",
                      alignItems: "center",
                      marginBottom: "25px",
                      height: "20px",
                      fontSize: "95px",
                    }}
                  >
                    <SmartToyIcon sx={{ fontSize: "inherit" }}></SmartToyIcon>
                  </IconButton>
                </Box>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                background: "transparent",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                height: "300px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
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
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                }}
              >
                Video Vault
                <Typography
                  sx={{
                    paddingTop: "20px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "700",
                    color: "white",
                    paddingTop: "7px",
                    paddingBottom: "10px",
                  }}
                >
                  No need to worry about continuously going on YouTube for
                  videos, we have videos for nearly every engineering major
                  directly on our website. Videos are updated at the end of
                  every month.
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: "170px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <IconButton
                    sx={{
                      color: "rgba(145, 83, 209, 1)",
                      alignItems: "center",
                      marginBottom: "7px",
                      height: "20px",
                      fontSize: "95px",
                    }}
                  >
                    <YouTubeIcon sx={{ fontSize: "inherit" }}></YouTubeIcon>
                  </IconButton>
                </Box>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                background: "transparent",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                position: "relative",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
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
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                  marginBottom: "20px", // Space between text and image
                }}
              >
                Custom Control
                <Typography
                  sx={{
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "700",
                    color: "white",
                    paddingTop: "7px",
                  }}
                >
                  Your account, your rules. Choose different themes and
                  customize your experience.
                </Typography>
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <IconButton
                  sx={{
                    color: "rgba(145, 83, 209, 1)",
                    alignItems: "center",
                    marginBottom: "7px",
                    height: "20px",
                    fontSize: "95px",
                  }}
                >
                  <DashboardCustomizeIcon
                    sx={{ fontSize: "inherit" }}
                  ></DashboardCustomizeIcon>
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                background: "transparent",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                position: "relative",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
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
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                  marginBottom: "20px", // Space between text and image
                }}
              >
                Study Kit
                <Typography
                  sx={{
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "700",
                    color: "white",
                    paddingTop: "7px",
                  }}
                >
                  Get access to our own study guides, practice tests, and
                  numerous tips to succeed.
                </Typography>
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <IconButton
                  sx={{
                    color: "rgba(145, 83, 209, 1)",
                    alignItems: "center",
                    marginBottom: "7px",
                    height: "20px",
                    fontSize: "95px",
                  }}
                >
                  <LibraryBooksIcon
                    sx={{ fontSize: "inherit" }}
                  ></LibraryBooksIcon>
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/*Card Section Here, Only Showcases Chronicle AI*/}
      <Box
        sx={{
          height: "150vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(-270deg, #000000, #2838ae)",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Header and Text */}
        <Box
          sx={{
            textAlign: "center",
            mb: "40px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              textTransform: "uppercase",
              color: "white",
            }}
          >
            Your Smart Study
            <br />
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              textTransform: "uppercase",
              color: "rgba(145, 83, 209, 1)",
              paddingBottom: "25px",
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
              marginTop: "500px",
            }}
          >
            Get access to your own personalized AI chatbot to help you succeed.
          </Typography>
        </Box>

        {/* Showcase Card */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "transparent",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
            overflow: "hidden",
            width: "1200px",
            height: "500px",
            padding: "20px",
            position: "relative",
            transition: "box-shadow 0.4s ease-in-out",
            "&:hover": {
              boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
            },
          }}
        >
          <Box
            sx={{
              width: "60%",
              position: "relative",
              overflow: "visible",
              marginRight: "20px",
              height: "300px",
            }}
          >
            <Image
              src={chronicleai}
              alt="Showcase"
              fill
              sizes="(max-width: 600px) 100vw, 50vw"
              style={{
                position: "absolute",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "900",
                color: "rgba(145, 83, 209, 1)",
                marginBottom: "10px",
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
              }}
            >
              Use our AI, ChronicleAI aka Chad, to help guide you to new topics,
              generate flashcards for you, or any engineering advice you may
              need.
              <Link href="/sign-up">
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
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(-270deg, #000000, #2838ae)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
          }}
        >
          Students like you
          <br />
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "rgba(145, 83, 209, 1)",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
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
          }}
        >
          Learn why hundreds and thousands of engineering students love to use
          Smart Study&apos;s
          <br />
          intuitive interface to study and ace their exams.
        </Typography>

        <Box
          sx={{
            paddingTop: "80px",
          }}
        >
          <Stack spacing={5}>
            <Box
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                padding: "20px",
                transition: "box-shadow 0.4s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(145, 83, 209, 1)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "rgba(145, 83, 209, 1)",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                }}
              >
                Organize your Study Materials
                <Icon sx={{ marginLeft: "15px" }}>
                  <Inventory2Icon></Inventory2Icon>
                </Icon>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  paddingTop: "15px",
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
              }}
            >
              <Typography
                sx={{
                  color: "rgba(145, 83, 209, 1)",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                }}
              >
                Personalize your Learning
                <Icon sx={{ marginLeft: "10px" }}>
                  <PersonPinIcon></PersonPinIcon>
                </Icon>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  paddingTop: "15px",
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
              }}
            >
              <Typography
                sx={{
                  color: "rgba(145, 83, 209, 1)",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                }}
              >
                Track your Progress
                <Icon sx={{ marginLeft: "10px" }}>
                  <PieChartIcon></PieChartIcon>
                </Icon>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  paddingTop: "15px",
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
              }}
            >
              <Typography
                sx={{
                  color: "rgba(145, 83, 209, 1)",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                }}
              >
                Watch Videos Directly
                <Icon sx={{ marginLeft: "10px" }}>
                  <VideoLibraryIcon></VideoLibraryIcon>
                </Icon>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  paddingTop: "15px",
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
              }}
            >
              <Typography
                sx={{
                  color: "rgba(145, 83, 209, 1)",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                }}
              >
                Pomodoro Technique
                <Icon
                  sx={{
                    marginLeft: "10px",
                  }}
                >
                  <TimelapseIcon></TimelapseIcon>
                </Icon>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  paddingTop: "15px",
                }}
              >
                Balance your study sessions with Smart Study’s Pomodoro timer,
                which reminds you to take breaks and stay productive without
                burning out.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          height: "130vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(-270deg, #000000, #2838ae)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
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
            paddingTop: "20px",
            textTransform: "uppercase",
          }}
        >
          If your question is not listed, please fill out our contact form.
        </Typography>

        {/* FAQ Accordion Section */}
        <Stack
          spacing={2}
          sx={{
            marginTop: "40px",
            width: "80%",
            background: "transparent",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Accordion
            sx={{
              background: "transparent",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx = {{color: "white"}}></ExpandMoreIcon>}
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

          <Accordion
            sx={{
              background: "transparent",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx = {{color: "white"}}></ExpandMoreIcon>}
              aria-controls="panel2a-content"
              id="panel2a-header"
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

          <Accordion
            sx={{
              background: "transparent",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx = {{color: "white"}}></ExpandMoreIcon>}
              aria-controls="panel3a-content"
              id="panel3a-header"
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

          <Accordion
            sx={{
              background: "transparent",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx = {{color: "white"}}></ExpandMoreIcon>}
              aria-controls="panel3a-content"
              id="panel3a-header"
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

          <Accordion
            sx={{
              background: "transparent",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx = {{color: "white"}}></ExpandMoreIcon>}
              aria-controls="panel3a-content"
              id="panel3a-header"
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

      {/*Footer*/}
      <Box
        component="footer"
        sx={{
          height: "40vh",
          py: 4,
          background: "linear-gradient(-270deg, #000000, #2838ae)",
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" spacing={4} justifyContent="space-between">
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
                sx={{
                  color: "white",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                }}
              >
                Subscribe to our newsletter
              </Typography>
              <Stack direction="row" spacing={1}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Your email"
                  value={emailNews}
                  onChange={handleEmailChangeNews}
                  type="email"
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
              </Stack>

              <Snackbar
                open={snackbarOpenNews}
                autoHideDuration={6000}
                onClose={handleSnackbarCloseNews}
                message={
                  emailErrorNews ||
                  "You have successfully signed up for the newsletter!"
                }
              />

              <Stack direction="row" spacing={1}>
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

            <Stack direction="row" spacing={4}>
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
                    paddingTop: "30px",
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
                <Link
                  href="https://github.com/hamim23z"
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  GitHub
                </Link>
              </Stack>
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
                    paddingTop: "30px",
                  }}
                >
                  Documentation
                </Link>
                <Link
                  href="/pricing"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Pricing
                </Link>
                <Link
                  href="/demos"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Demos
                </Link>
              </Stack>
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
                    paddingTop: "30px",
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
