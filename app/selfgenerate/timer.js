// selfgenerate/timer.js

import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

function Timer({ open, onClose }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Timer functions
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Clean up on unmount
  }, []);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent sx={{ textAlign: "center", position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h4" component="div" sx={{ mt: 3, mb: 2 }}>
          {new Date(time * 1000).toISOString().substr(11, 8)}
        </Typography>

        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="outlined" onClick={startTimer}>
            Start
          </Button>
          <Button variant="outlined" onClick={stopTimer}>
            Stop
          </Button>
          <Button variant="outlined" onClick={resetTimer}>
            Reset
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default Timer;
