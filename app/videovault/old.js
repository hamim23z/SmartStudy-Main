"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Link,
  Divider,
  Grid,
  Container,
  Stack,
  Snackbar,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UserButton } from "@stackframe/stack";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const drawerWidth = 260;

export default function Home() {
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

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Introduction");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleListItemClick = (text) => {
    setSelectedTopic(text);
  };

  const algebraVideos = [
    {
      title: "Algebra Basics",
      url: "https://www.youtube.com/embed/6tuZHqcf2QA?si=5qupz2vYWe5eb4Qi",
    },
    {
      title: "Linear Equations",
      url: "https://www.youtube.com/embed/3tKj2vU3l8I",
    },
    {
      title: "Quadratic Equations",
      url: "https://www.youtube.com/embed/6uZtYOFIjqg",
    },
    // Add more videos as needed
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
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
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              px: 2,
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: "35px" }} />
            </IconButton>
            <UserButton />
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Link href="/" passHref style={{ textDecoration: "none" }}>
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
                }}
              >
                Smart Study
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Link
              href="https://smartstudy-0f4a59fc.mintlify.app/introduction"
              target="_blank"
              passHref
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "15px",
                  transition: "transform 0.6s ease-in-out",
                  "&:hover": {
                    animation: "slideUpDown 0.6s ease-in-out",
                  },
                }}
              >
                Documentation
              </Button>
            </Link>
            <Link
              href="/contact"
              passHref
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: "700",
                  fontSize: "15px",
                  transition: "transform 0.6s ease-in-out",
                  "&:hover": {
                    animation: "slideUpDown 0.6s ease-in-out",
                  },
                }}
              >
                Contact
              </Button>
            </Link>
            <UserButton />
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
            transform: drawerOpen ? "translateY(0)" : "translateY(100%)",
          },
        }}
      >
        <Box
          sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}
        >
          <Link
            href="https://smart-study-official.vercel.app/"
            passHref
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit" sx={{ paddingBottom: "10px" }}>
              Home
            </Button>
          </Link>
          <Link
            href="https://smartstudy-0f4a59fc.mintlify.app/introduction"
            target="_blank"
            passHref
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit" sx={{ paddingBottom: "10px" }}>
              Documentation
            </Button>
          </Link>
          <Link
            href="/blog"
            target="_blank"
            passHref
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit" sx={{ paddingBottom: "10px" }}>
              Blog
            </Button>
          </Link>
          <Link
            href="/aboutus"
            passHref
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit" sx={{ paddingBottom: "10px" }}>
              About Us
            </Button>
          </Link>
          <Link
            href="/contact"
            passHref
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit" sx={{ paddingBottom: "10px" }}>
              Contact
            </Button>
          </Link>
        </Box>
      </Drawer>

        
      {/*Permanent Left Side Drawer*/}
      <Box
        sx={{
          display: "flex",
          background: "linear-gradient(270deg, #000000, #2838ae)",
          height: "100vh",
        }}
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "transparent",
              "&::-webkit-scrollbar": {
                width: "5px", // Width of the scrollbar
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(145, 83, 209, 1)",
                borderRadius: "10px",
              },
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <List sx={{ color: "white", marginBottom: "10px" }}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 900,
                paddingTop: "30px",
                color: "white",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontSize: "13px",
              }}
            >
              Getting Started
            </Typography>

            {["Introduction", "Live Demo"].map((text) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                <ListItemButton onClick={() => handleListItemClick(text)}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 700,
                          color: "white",
                          fontSize: "13px",
                          fontFamily: "Kanit, sans-serif",
                        }}
                      >
                        {text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider
            sx={{
              bgcolor: "white",
            }}
          ></Divider>

          <List sx={{ color: "white", marginBottom: "10px" }}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 900,
                paddingTop: "30px",
                color: "white",
                fontSize: "13px",
                textTransform: "uppercase",
                paddingBottom: "20px",
              }}
            >
              Computer Science - Part 1
            </Typography>
            {[
              "Intro to C++",
              "Intro to Python",
              "Intro to Java",
              "Intro to HTML & CSS",
              "Intro to Javascript",
              "Intro to SQL",
            ].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleListItemClick(text)}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color: "white",
                          fontFamily: "Kanit, sans-serif",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          fontSize: "13px",
                        }}
                      >
                        {text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider
            sx={{
              bgcolor: "white",
            }}
          ></Divider>
          <List sx={{ color: "white", marginBottom: "10px" }}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 900,
                paddingTop: "30px",
                color: "white",
                fontSize: "13px",
                textTransform: "uppercase",
                paddingBottom: "20px",
              }}
            >
              Math Topics
            </Typography>
            {[
              "Algebra",
              "Pre-Calc",
              "Calculus 1",
              "Calculus 2",
              "Calculus 3",
              "Linear Algebra",
              "Differential Equations",
            ].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleListItemClick(text)}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color: "white",
                          fontFamily: "Kanit, sans-serif",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          fontSize: "13px",
                        }}
                      >
                        {text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: 2,
              color: "white",
              fontFamily: "Kanit, sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              paddingBottom: "20px",
            }}
          >
            {selectedTopic}
          </Typography>

          {/* Inline content for each topic */}
          {selectedTopic === "Introduction" && (
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 700,
              }}
            >
              Welcome to the Video Vault! In this introduction page, you will
              learn how to use the video vault, search for topics, search for
              videos, and maximize your learning. If you have any questions,
              concerns, or feedback, please send us a message.
            </Typography>
          )}
          {selectedTopic === "Live Demo" && (
            <Typography variant="body1" sx={{ color: "white" }}>
              In the live demo section, you can explore real-time features and
              functionalities of the platform.
            </Typography>
          )}
          {selectedTopic === "Algebra" && (
            <Box>
              {/* Algebra Description */}
              <Typography
                variant="body1"
                sx={{ color: "white", marginBottom: 3 }}
              >
                This section covers basic to advanced topics in Algebra,
                including linear equations, polynomials, and more.
              </Typography>

              {/* Algebra Videos */}
              <Grid container spacing={4}>
                {algebraVideos.map((video, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        paddingBottom: "56.25%", // 16:9 aspect ratio
                        height: 0,
                        overflow: "hidden",
                        borderRadius: "8px",
                        boxShadow: 3,
                      }}
                    >
                      <iframe
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      ></iframe>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: 1, color: "white" }}
                    >
                      {video.title}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          {selectedTopic === "Pre-Calc" && (
            <Typography variant="body1" sx={{ color: "white" }}>
              Pre-Calculus prepares you for Calculus by introducing key concepts
              like functions, trigonometry, and limits.
            </Typography>
          )}
          {selectedTopic === "Calculus 1" && (
            <Typography variant="body1" sx={{ color: "white" }}>
              Calculus 1 dives into limits, derivatives, and the fundamentals of
              integration.
            </Typography>
          )}
          {selectedTopic === "Calculus 2" && (
            <Typography variant="body1" sx={{ color: "white" }}>
              Calculus 2 explores techniques of integration, sequences, and
              series.
            </Typography>
          )}
          {selectedTopic === "Calculus 3" && (
            <Typography variant="body1" sx={{ color: "white" }}>
              In Calculus 3, youll study multivariable calculus including
              partial derivatives and multiple integrals.
            </Typography>
          )}
          {selectedTopic === "Linear Algebra" && (
            <Typography variant="body1" sx={{ color: "white" }}>
              Linear Algebra covers vectors, matrices, determinants,
              eigenvalues, and eigenvectors.
            </Typography>
          )}
          {selectedTopic === "Differential Equations" && (
            <Typography variant="body1" sx={{ color: "white" }}>
              Differential Equations introduces solving techniques for ordinary
              differential equations and real-world applications.
            </Typography>
          )}
        </Box>
      </Box>

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
