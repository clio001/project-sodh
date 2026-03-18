"use client"
import { Box, Button, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";


function page() {



  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"

      }}
    >
      <h3>DIE SAMMLUNG</h3>
      <Divider
        sx={{
          width: "80%",
          maxWidth: 450,
          marginTop: "3rem",

        }}
      /><Box sx={{ marginTop: "3rem" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Box className="button-landingPage" sx={{ textAlign: "center", marginBottom: "36rem", }}>
            Home
          </Box>
        </Link>

      </Box>
    </Box>

  );
}

export default page;
