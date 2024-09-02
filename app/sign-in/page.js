"use client";
import { SignIn } from "@stackframe/stack";
import { useStackApp } from "@stackframe/stack";
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

export default function CustomSignIn() {
  const app = useStackApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async () => {
    if (!password) {
      setError("Please enter your password");
      return;
    }
    const errorCode = await app.signInWithCredential({ email, password });
    if (errorCode) {
      setError(errorCode.message);
    }
  };

  const signOut = async () => {
    await app.signOut();
    router.push("/"); // Redirect to home page after sign out
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
          background: "linear-gradient(270deg, #000000, #2838ae)",
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
          Sign into Smart Study
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            paddingTop: "20px",
          }}
        >
          Need an account?
          <Link
            href="sign-up"
            style={{
              textDecoration: "none",
              color: "red",
            }}
          >
            {" "}
            Create One Here{" "}
          </Link>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "30px",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={async () => {
              await app.signInWithOAuth("Google");
            }}
          >
            Sign In with Google
          </Button>
          <Button
            variant="contained"
            onClick={async () => {
              await app.signInWithOAuth("github");
            }}
          >
            Sign In with GitHub
          </Button>
          <Button
            variant="contained"
            onClick={async () => {
              await app.signInWithOAuth("microsoft");
            }}
          >
            Sign In with Microsoft
          </Button>
        </Box>

        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingTop: "30px",
          }}
        >
          {error && <Typography color="error">{error}</Typography>}

          <TextField
            type="email"
            variant="outlined"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "black", // Placeholder text color
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
              },
              "& .MuiInputBase-input": {
                color: "black", // Color of the input text
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
              },
              background: "white",
              width: "700px",
            }}
          />

          <TextField
            type="password"
            variant="outlined"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "black", // Placeholder text color
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
              },
              "& .MuiInputBase-input": {
                color: "black", // Color of the input text
                fontFamily: "Kanit, sans-serif",
                fontWeight: "700",
              },
              background: "white",
            }}
          />

          <Button type="submit" variant="contained">
            Sign In
          </Button>

          <Typography
            variant="caption"
            sx={{
              textAlign: "center",
              fontFamily: "Kanit, sans-serif",
              fontWeight: "900",
              textTransform: "uppercase",
              color: "white",
              paddingTop: "20px",
              paddingBottom: "10px",
            }}
          >
            Upon signing in, you will be redirected to the create flashcards
            page.
          </Typography>
        </Box>
      </Box>

      {/*Footer*/}
      <Box
        component="footer"
        sx={{
          height: "40vh",
          py: 4,
          background: "linear-gradient(270deg, #000000, #2838ae)",
          paddingTop: "100px",
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
                  sx={{
                    color: "white",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "purple",
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
                      color: "purple",
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
                      color: "purple",
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
                      color: "purple",
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
