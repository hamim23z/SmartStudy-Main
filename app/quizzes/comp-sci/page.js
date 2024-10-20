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
import TopicContent from "./topiccontent";
import MenuIcon from "@mui/icons-material/Menu";
import { UserButton } from "@stackframe/stack";
import { keyframes } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
const drawerWidth = 240;

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
            <Link href="/" passhref style={{ textDecoration: "none" }}>
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
              passhref
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
              passhref
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
            passhref
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit" sx={{ paddingBottom: "10px" }}>
              Home
            </Button>
          </Link>
          <Link
            href="https://smartstudy-0f4a59fc.mintlify.app/introduction"
            target="_blank"
            passhref
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit" sx={{ paddingBottom: "10px" }}>
              Documentation
            </Button>
          </Link>
          <Link
            href="/blog"
            target="_blank"
            passhref
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit" sx={{ paddingBottom: "10px" }}>
              Blog
            </Button>
          </Link>
          <Link
            href="/aboutus"
            passhref
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="inherit" sx={{ paddingBottom: "10px" }}>
              About Us
            </Button>
          </Link>
          <Link
            href="/contact"
            passhref
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
                width: "2px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(145, 83, 209, 1)",
                borderRadius: "10px",
              },
              top: "40px",
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
                marginLeft: "5px",
              }}
            >
              Getting Started
            </Typography>

            {["Introduction", "Feedback Form"].map((text) => (
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

          <List>
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
              Section One
            </Typography>

            {[
              "Intro to HTML & CSS",
              "Intro to Javascript",
              "Intro to Typescript",
              "Intro to React",
              "Intro to Node.js & Next.js",
            ].map((text) => (
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

          <List>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 900,
                color: "white",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontSize: "13px",
                paddingTop: "30px",
              }}
            >
              Section Two
            </Typography>

            {[
              "Intro to Python",
              "Intro to Java",
              "Intro to C/C++",
              "Intro to Go",
              "Intro to Ruby",
            ].map((text) => (
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

          <List>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 900,
                color: "white",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontSize: "13px",
                paddingTop: "30px",
              }}
            >
              Section Three
            </Typography>

            {[
              "Discrete Math",
              "Fundamentals of Computer Systems",
              "Data Structures",
              "Algorithms",
              "Probability & Statistics",
            ].map((text) => (
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

          <List>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 900,
                color: "white",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontSize: "13px",
                paddingTop: "30px",
              }}
            >
              Section Four
            </Typography>

            {[
              "Theoretical Computer Science",
              "Numerical Issues in Scientific Programming",
              "Computer Security",
              "Programming Language Paradigms",
              "Software Engineering",
            ].map((text) => (
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

          <List>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 900,
                color: "white",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontSize: "13px",
                paddingTop: "30px",
              }}
            >
              Section Five
            </Typography>

            {[
              "Intro to Database Systems",
              "Operating Systems",
              "Computer Organization",
              "Modern Distributed Computing",
              "Artificial Intelligence",
            ].map((text) => (
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
        </Drawer>

        {/* Main content */}
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontFamily: "Kanit, sans-serif",
              fontWeight: 900,
              paddingBottom: "20px",
            }}
          >
            {selectedTopic}
          </Typography>
          <TopicContent selectedTopic={selectedTopic} />
        </Box>
      </Box>
    </Box>
  );
}
