"use client";
import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
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
      <Box sx={{ textAlign: "center" }}>
        <h1>RetroBites</h1>
        <h4 style={{ marginTop: "0.7rem" }}>
          Eine kulinarische Reise durch das Berlin der Jahrhundertwende
        </h4>
      </Box>

      <Divider
        sx={{
          width: "80%",
          maxWidth: 450,
          marginTop: "3rem",
          marginBottom: "1rem",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Link href="/main" style={{ textDecoration: "none" }}>
          <Box className="button-landingPage" sx={{ textAlign: "center" }}>
            START
          </Box>
        </Link>
        <Link href="/sammlung" style={{ textDecoration: "none" }}>
          <Box className="button-landingPage" sx={{ textAlign: "center" }}>
            DIE SAMMLUNG
          </Box>
        </Link>
        <Link href="/credits" style={{ textDecoration: "none" }}>
          <Box className="button-landingPage" sx={{ textAlign: "center" }}>
            CREDITS
          </Box>
        </Link>
      </Box>
      <Divider
        sx={{
          width: "80%",
          maxWidth: 450,
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      />
      <Typography variant="caption" color="grey">
        Version 0.1.0
      </Typography>
    </Box>
  );
}
