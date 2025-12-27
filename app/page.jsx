"use client";
import { Box, Divider, Switch, Typography } from "@mui/material";
import Link from "next/link";
import { useMyContext } from "./components/ContextProvider";
import { useState } from "react";

export default function Home() {
  const { menu, setMenu, DBmenu, DBmenuEN, checked, setChecked } =
    useMyContext();

  const handlechange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <Typography variant="body2">DE | EN</Typography>
        <Switch checked={checked} onChange={handlechange} />
      </Box>
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
          <h1>{menu.title}</h1>
          <h4 style={{ marginTop: "0.7rem" }}>{menu.subtitle}</h4>
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
              {menu.start}
            </Box>
          </Link>
          <Link href="/sammlung" style={{ textDecoration: "none" }}>
            <Box className="button-landingPage" sx={{ textAlign: "center" }}>
              {menu.collection}
            </Box>
          </Link>
          <Link href="/credits" style={{ textDecoration: "none" }}>
            <Box className="button-landingPage" sx={{ textAlign: "center" }}>
              {menu.credits}
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
    </>
  );
}
