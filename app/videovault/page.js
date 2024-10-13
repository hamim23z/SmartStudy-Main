"use client";
import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Toolbar,
  IconButton,
  Stack,
  Snackbar,
  Drawer,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion, wrap } from "framer-motion";
import Link from "next/link";
import { keyframes } from "@mui/material";
import { db } from "@/firebase";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";

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

export default function VideoVault() {
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

      {/* Main Content */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(270deg, #000000, #2838ae)",
          padding: "64px 0",
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
            textTransform: "uppercase",
            paddingBottom: "40px",
          }}
        >
          Video Vault
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5,
            maxWidth: "1500px",
          }}
        >
          {/* First row */}
          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Biomedical Engineering
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                A field that applies principles of engineering and biology to
                develop technologies and solutions for improving healthcare.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link
                  href="/videovault/biomed-engr"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chemical Engineering
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                A field that applies principles of chemistry and engineering to
                design processes for transforming raw materials into useful
                products
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/chem-engr"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Civil Engineering
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                A field that applies engineering principles to design,
                construct, and maintain infrastructure projects to ensure proper
                assembly.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/civil-engr"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Computer Engineering
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                A field that applies principles of science and technology to
                design and maintain hardware components in modern computing
                systems.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/comp-engr"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          {/* Second row */}
          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Computer Science
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                A field that applies principles of mathematics and logic to
                design, develop, and optimize software systems and algorithms
                for computing tasks.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/comp-sci"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Electrical Engineering
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                A field that applies knowledge of electricity, electronics, and
                electromagnetism to design and create modern technological
                systems and solutions.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/elec-engr"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Environmental Engineering
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                A field that applies engineering disciplines to design systems
                for managing water supplies, treating waste, and developing
                solutions for pollution control and environmental remediation.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/environ-engr"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mechanical Engineering
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                A field that applies the principles of physics and materials
                science for analysis, design, manufacturing, and maintenance of
                mechanical systems.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/mech-engr"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          {/* Third row */}
          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cybersecurity
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                A field that applies principles of security and technology to
                protect networks, systems, and data from cyber threats, ensuring
                confidentiality, integrity, and availability.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/cybersecurity"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Math
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
              A field that applies principles of numbers, structure, and patterns to 
              solve problems in various scientific, engineering, and practical 
              contexts.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/math"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Science
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
              A field that uses systematic observation, experimentation, and analysis to 
              explore and understand natural phenomena, advancing knowledge across diverse 
              areas.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/science"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 345, marginBottom: 5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/mapofcs.png"
              title="Map of CS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Career Toolkit
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                This is something that we at Smart Study focus on. Equip yourself with essential tools 
                for success, including coding practice resources, resume templates, and job application tips.
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">
                <Link
                  href="/videovault/career-toolkit"
                  style ={{
                    textDecoration: "none",
                    color: "red"
                  }}
                >
                  Videos
                </Link>
              </Button>
              <Button size="small">Worksheets</Button>
              <Button size="small">Quizzes</Button>
            </CardActions>
          </Card>
        </Box>
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
