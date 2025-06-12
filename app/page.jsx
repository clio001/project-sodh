"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [number, setNumber] = useState(1);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
      <Typography variant="h5" mb={3}>PROJECT SODH</Typography>

      <Link href="/main"><Button variant="contained" color="secondary">Start</Button></Link>
      <Typography  mt={5}>A world of delicacies awaits ...</Typography>
    </Box>
  )
}
