"use client"
import { useEffect, useState } from "react";
import { AppBar, Box, Container, Typography, TextField } from "@mui/material";

{/*MUI ICONS*/}
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "red",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Filler text goes here. Test Test
      </Typography>
    </Box>
  );
}
