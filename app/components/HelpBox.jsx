import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import Typewriter from './Typewriter';


function HelpBox() {

  const style = {
    width: "350px",
    minHeight: "150px",
    padding: "0.5rem",
    position: "relative",
    backgroundImage:
      "radial-gradient(circle at center, white, lightyellow), linear-gradient(150deg, brown, lightyellow)",
  };
  return (<>
    <Box sx={style}>
      <Avatar sx={{ width: 150, height: 150, top: "-6rem", left: "14rem", position: "absolute" }} src="/assets/avatars/heinzi-avatar.png">OP</Avatar>
      <Box mt={3}><Typewriter text="Wo klemmt denn der Schuh? Vielleicht mal bei Lorenz Adlon nachfragen, der is hier janz umtriebig dieser Tage." speed={35} /></Box>
    </Box></>
  )
}

export default HelpBox