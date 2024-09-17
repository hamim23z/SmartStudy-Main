// File: components/Dashboard.js

"use client";

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { AccountSettings } from "@stackframe/stack";

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    console.log("Dashboard component mounted");
    // We'll need to find a way to get the user email from Stack
    // This might involve using a Stack-provided method or hook
  }, []);

  return (
    <Box>
      <Typography variant="h4">Welcome to the Dashboard!</Typography>
      {userEmail && <Typography>User: {userEmail}</Typography>}
      <AccountSettings 
        onUserLoad={(user) => {
          if (user && user.email) {
            setUserEmail(user.email);
          }
        }}
      />
    </Box>
  );
}