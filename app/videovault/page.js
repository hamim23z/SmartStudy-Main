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
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UserButton } from "@stackframe/stack";
import { keyframes } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

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
  /*For the width of the drawer*/
}
const drawerWidth = 260;

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Introduction");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleListItemClick = (text) => {
    setSelectedTopic(text);
  };

  {
    /*Return Content Here*/
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "black",
          boxShadow: "none",
        }}
        elevation={0}
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

      {/* Mobile Drawer */}
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

      {/* Main content area */}
      <Box
        sx={{
          display: "flex",
          background: "linear-gradient(270deg, #000000, #2838ae)",
          flexGrow: 1,
          pt: "84px", // Increased from 64px to account for the AppBar's padding
        }}
      >
        {/* Permanent left drawer */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "transparent",
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(145, 83, 209, 1)",
                borderRadius: "10px",
              },
              top: "40px", // Increased from 64px to account for the AppBar's padding
              height: "calc(100% - 40px)",
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
                color: "white",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontSize: "13px",
              }}
            >
              Getting Started
            </Typography>

            {["Introduction", "Live Demo", "Feedback"].map((text) => (
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
              Computer Science - Part 2
            </Typography>
            {[
              "Discrete Math",
              "Computer Systems",
              "Data Structures",
              "Probability & Stats",
              "Algorithms",
              "Scientific Computing",
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
              Computer Science - Part 3
            </Typography>
            {[
              "Theoretical Computer Science",
              "Computer Security",
              "Programming Language Paradigms",
              "Software Engineering",
              "Intro to Database Systems",
              "Operating Systems",
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
              Computer Science - Part 4
            </Typography>
            {[
              "Computer Organization",
              "Artificial Intelligence",
              "Big Data Management & Analysis",
              "Computer Networks",
              "Intro to Database Systems",
              "Operating Systems",
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

        {/* Main content */}
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
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 700,
              }}
            >
              In this live demo page, you will learn how to use the video vault.
              It may seem simple at first, but we want to make sure that you can
              maximize your learning while saving time and our main focal point
              was to make sure that you don&apos;t scroll forever trying to find
              the perfect video.
            </Typography>
          )}
          {selectedTopic === "Feedback" && (
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 700,
              }}
            >
              We value your feedback, whether positive or constructive, as it
              helps us learn and improve. By sharing your thoughts, you enable
              us to better understand your needs. Unlike our regular contact
              form, this feedback form ensures a quicker response from our team.
            </Typography>
          )}
          {selectedTopic === "Algebra" && (
            <Typography variant="body1" sx={{ color: "white" }}>
              Algebruh
            </Typography>
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
    </Box>
  );
}
