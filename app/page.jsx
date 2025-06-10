"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {

  const [number, setNumber] = useState(1);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
      <Typography variant="h5" mb={3}>PROJECT SODH</Typography>
      <Typography mb={1}>{number}</Typography>
      <Button variant="contained" onClick={() => setNumber(number + 1)}>Click</Button>
      <Typography  mt={5}>A world of delicacies awaits ...</Typography>
    </Box>
  )
}
