import { Box, Typography } from "@mui/material";

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
