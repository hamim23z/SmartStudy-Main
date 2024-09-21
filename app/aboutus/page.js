"use client";
import { useEffect, useState, MouseEvent } from "react";
import {
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
  Drawer,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { keyframes } from "@mui/material";
import FloatingText from "../components/floatingtext";

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

export default function About() {
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
          boxShadow: "none",
          borderBottom: "none",
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
          minHeight: "110vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(270deg, #000000, #2838ae)",
          overflow: "auto",
          padding: { xs: "40px 10px", sm: "60px 20px" },
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
          About Us:
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "rgba(145, 83, 209, 1)",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            textAlign: "center",
            paddingBottom: "30px",
          }}
        >
          Our Values and Vision
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontFamily: "Kanit, sans-serif",
            fontWeight: 700,
            maxWidth: "800px",
            width: "100%",
            px: 2,
            fontSize: { xs: "body2.fontSize", sm: "18px" },
            lineHeight: 1.6,
            mt: 2,
            margin: "0 auto",
          }}
        >
          At Smart Study, our mission is to revolutionize the way engineering
          students learn and access support. By offering a comprehensive
          platform tailored specifically for computer science and computer
          engineering students — while supporting all branches of engineering —
          we aim to make learning easier, intuitive, and impactful.
        </Typography>

        <br></br>
        <br></br>

        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontFamily: "Kanit, sans-serif",
            fontWeight: 700,
            maxWidth: "800px",
            width: "100%",
            px: 2,
            fontSize: { xs: "body2.fontSize", sm: "18px" },
            lineHeight: 1.6,
            mt: 2,
            margin: "0 auto",
          }}
        >
          We believe that learning should be more than just reading textbooks or
          attending lectures. You can&apos;t do well in a class without
          studying. And studying isn&apos;t just watching YouTube videos for
          hours, it requires practice, memorization, and dedication. Smart Study
          is committed to leading this evolution by providing a user-friendly,
          modern solution that puts students needs first.
        </Typography>

        <br></br>
        <br></br>

        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontFamily: "Kanit, sans-serif",
            fontWeight: 700,
            maxWidth: "800px",
            width: "100%",
            px: 2,
            fontSize: { xs: "body2.fontSize", sm: "18px" },
            lineHeight: 1.6,
            mt: 2,
            margin: "0 auto",
          }}
        >
          Within today&apos;s day and age, the number of students majoring or
          planning to major in Computer Science or Computer Engineering is
          massive. Some of the information online such as textbooks or videos
          are outdated and it can be a hassle to find an up to date version.
          Smart Study does that for you.
        </Typography>

        <br></br>
        <br></br>

        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontFamily: "Kanit, sans-serif",
            fontWeight: 700,
            maxWidth: "800px",
            width: "100%",
            px: 2,
            fontSize: { xs: "body2.fontSize", sm: "18px" },
            lineHeight: 1.6,
            mt: 2,
            margin: "0 auto",
          }}
        >
          Our platform is designed to keep you ahead, because your success is
          our mission.
        </Typography>
      </Box>

      <Box
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(270deg, #000000, #2838ae)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <FloatingText
          text="Smart Study"
          sx={{
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            fontFamily: "Kanit, sans-serif",
            textTransform: "uppercase",
            fontWeight: 900,
          }}
        />
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          height: "auto",
          py: 4,
          pb: 10,
          background: "linear-gradient(270deg, #000000, #2838ae)",
          borderTop: "none",
          boxShadow: "none",
          border: "none",
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
