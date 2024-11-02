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
import { Rnd } from "react-rnd";

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
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      hideBackdrop
      disableEnforceFocus
      style={{ pointerEvents: "none" }}
      PaperProps={{ style: { overflow: "visible", pointerEvents: "auto" } }}
      maxWidth="xs"
    >
      <DialogContent sx={{ padding: 0 }}>
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 300,
            height: 200,
          }}
          minWidth={200}
          minHeight={150}
          bounds="window"
          enableResizing={false}
        >
          <Box
            sx={{
              textAlign: "center",
              padding: 2,
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "white",
              fontFamily: "Kanit, sans-serif",
            }}
          >
            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                fontFamily: "Kanit, sans-serif",
              }}
            >
              <CloseIcon />
            </IconButton>

            <Typography
              variant="h4"
              component="div"
              sx={{
                mt: 3,
                mb: 2,
                fontFamily: "Kanit, sans-serif",
              }}
            >
              {new Date(time * 1000).toISOString().substr(11, 8)}
            </Typography>

            <Box display="flex" justifyContent="center" gap={2}>
              <Button
                variant="outlined"
                onClick={startTimer}
                sx={{ fontFamily: "Kanit, sans-serif" }}
              >
                Start
              </Button>
              <Button
                variant="outlined"
                onClick={stopTimer}
                sx={{ fontFamily: "Kanit, sans-serif" }}
              >
                Stop
              </Button>
              <Button
                variant="outlined"
                onClick={resetTimer}
                sx={{ fontFamily: "Kanit, sans-serif" }}
              >
                Reset
              </Button>
            </Box>
          </Box>
        </Rnd>
      </DialogContent>
    </Dialog>
  );
}

export default Timer;
