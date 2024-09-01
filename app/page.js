/* eslint-disable @next/next/no-img-element */
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
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { keyframes } from "@mui/material";
import Image from "next/image";
import chronicleai from "../public/chronicleai.png";

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

export default function Home() {
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
          }}
        >
          {/*Toolbar allows us to write and add elements. Gives the appbar spacing and whatnot*/}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              textTransform: "uppercase",
            }}
          >
            Smart Study
          </Typography>

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
              href="/documentation"
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
            color: "white",
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
              }}
            >
              Sign Up
            </Button>
          </Link>
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
          padding: "20px",
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
            marginBottom: "30px",
          }}
        >
          The new
          <br />
          Premiere Standard
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
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(255, 255, 0, 1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                }}
              >
                Customized Cards
                <IconButton
                  sx={{
                    color: "white",
                    alignItems: "center",
                    marginBottom: "7px",
                    height: "20px",
                  }}
                >
                  <SpeakerNotesIcon></SpeakerNotesIcon>
                </IconButton>
                <Typography
                  sx={{
                    paddingTop: "20px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Create and tailor your own flashcards with no limitations for
                  a personalized learning experience. Do it your way.
                </Typography>
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
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(255, 255, 0, 1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                }}
              >
                Quizzes & Timers
                <IconButton
                  sx={{
                    color: "white",
                    alignItems: "center",
                    marginBottom: "6px",
                    height: "20px",
                  }}
                >
                  <TimerIcon></TimerIcon>
                </IconButton>
                <Typography
                  sx={{
                    paddingTop: "20px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  You can create your own quiz using your flashcards to track
                  your progress. And you can start a timer to really focus!
                </Typography>
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
                  boxShadow: "0 4px 8px rgba(255, 255, 0, 1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                }}
              >
                AI Brilliance
                <IconButton
                  sx={{
                    color: "white",
                    alignItems: "center",
                    marginBottom: "7px",
                    height: "20px",
                  }}
                >
                  <SmartToyIcon></SmartToyIcon>
                </IconButton>
                <Typography
                  sx={{
                    paddingTop: "20px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Never worry about running about of topics or problems, thanks
                  to our AI, guiding you to newer topics and problems.
                </Typography>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                background: "#1e88e5",
                background: "transparent",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                height: "300px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(255, 255, 0, 1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                }}
              >
                Video Vault
                <IconButton
                  sx={{
                    color: "white",
                    alignItems: "center",
                    marginBottom: "3px",
                    height: "20px",
                  }}
                >
                  <YouTubeIcon></YouTubeIcon>
                </IconButton>
                <Typography
                  sx={{
                    paddingTop: "20px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  No need to worry about continuously going on YouTube for
                  videos, we have videos for nearly every engineering major
                  directly on our website.
                </Typography>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                background: "transparent",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
                height: "300px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(255, 255, 0, 1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                }}
              >
                Custom Control
                <IconButton
                  sx={{
                    color: "white",
                    alignItems: "center",
                    marginBottom: "3px",
                    height: "20px",
                  }}
                >
                  <DashboardCustomizeIcon></DashboardCustomizeIcon>
                </IconButton>
                <Typography
                  sx={{
                    paddingTop: "20px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Your account, your rules. Choose different themes and
                  customize your experience.
                </Typography>
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
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: "box-shadow 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(255, 255, 0, 1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "900",
                  paddingTop: "20px",
                  paddingLeft: "15px",
                  fontSize: "18px",
                }}
              >
                Study Kit
                <IconButton
                  sx={{
                    color: "white",
                    alignItems: "center",
                    marginBottom: "3px",
                    height: "20px",
                  }}
                >
                  <LibraryBooksIcon></LibraryBooksIcon>
                </IconButton>
                <Typography
                  sx={{
                    paddingTop: "20px",
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Get access to our own study guides, practice tests, and
                  numerous tips to succeed.
                </Typography>
              </Typography>
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
            Your ChronicleAI
          </Typography>

          <Typography
            variant="caption"
            sx={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              textTransform: "uppercase",
              color: "white",
              paddingTop: "25px",
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
              boxShadow: "0 4px 8px rgba(255, 251, 0, 5)",
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
                color: "white",
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
              Use our AI, ChronicleAI aka Chad to help guide you to new topics,
              generate flashcards for you, or any engineering advice.
              <Link href="/sign-up">
                <Button
                  variant="outlined"
                  sx={{
                    marginTop: "20px",
                    fontFamily: "Kanit, sans-serif",
                    color: "white",
                    fontWeight: "900",
                    borderRadius: "10px",
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
          love Smart Study
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
      </Box>

      <Box
        sx={{
          height: "100vh",
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
                }}
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
                      fontWeight: "700",
                    },
                  }}
                />
                <Button variant="contained" sx={{ borderRadius: "10px" }}>
                  Submit
                </Button>
              </Stack>
              <Stack direction="row" spacing={1}>
                <IconButton
                  href="https://github.com/hamim23z"
                  target="_blank"
                  sx={{ color: "white" }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/hamimc/"
                  target="_blank"
                  sx={{ color: "white" }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://instagram.com"
                  target="_blank"
                  sx={{ color: "white" }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://x.com"
                  target="_blank"
                  sx={{ color: "white" }}
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
                  href="/documentation"
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
