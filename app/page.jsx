"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useMyContext } from "./components/ContextProvider";

export default function Home() {
  const { setXp } = useMyContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Typography variant="h5" mb={3}>
        PROJECT SODH
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setXp((prev) => prev + 10)}
        >
          +10 XP
        </Button>
        <Link href="/main">
          <Button variant="contained" color="secondary">
            Start
          </Button>
        </Link>
      </Box>

      <Typography mt={5}>A world of delicacies awaits ...</Typography>
    </Box>
  );
}
