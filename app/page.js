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
              href="/blog" target="_blank"
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


      {/*Bento Box Layout Here. Showcases some features*/}
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
          The new
          <br></br>
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
            paddingTop: "25px"
          }}
        >
          Introducing a new way of building flashcards, getting study materials,
          and reviewing that leaves the competition in the dust.
          <br></br>
          And we don&apos;t look back.
        </Typography>
      </Box>

      

      {/*Card Section Here, Only Showcases Chronicle AI*/}
      <Box
        sx = {{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(-270deg, #000000, #2838ae)",
        }}
      >
        <Typography variant="h2"
          sx = {{
            textAlign: "center",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          Your Smart Study
          <br></br>
          Your ChronicleAI
        </Typography>

        <Typography variant="caption"
          sx = {{
            textAlign: "center",
            fontFamily: "Kanit, sans-serif",
            fontWeight: "900",
            textTransform: "uppercase",
            color: "white",
            paddingTop: "25px"
          }}
        >
          Get access to your own personalized AI chatbot to help you succeed
        </Typography>
      </Box>

    </>
  );
}
