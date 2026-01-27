import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Typewriter from './Typewriter';


function HelpBox() {
  const text = ["Na? Brauchste Hilfe, wa?", "Na mal, sehen wo der Schuh drückt ...", "... ah, ick seh schon! Haste mal oben uff XP jeklickt?"]
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMore = () => {
    setCurrentIndex(prev =>
      prev < text.length - 1 ? prev + 1 : prev
    );
  };


  const style = {
    width: "350px",
    minHeight: "150px",
    padding: "0.5rem",
    position: "relative",
    borderRadius: "50px 20px 50px 50px  ",
    backgroundImage:
      "radial-gradient(ellipse at right top, white, lightyellow), linear-gradient(150deg,  lightyellow)",
  };
  return (<>
    <Box sx={style}>
      <Avatar sx={{ width: 150, height: 150, top: "-6rem", left: "14rem", position: "absolute" }} src="/assets/avatars/heinzi-avatar.png">OP</Avatar>
      <Box mt={3}>
        <Typewriter text={text[currentIndex]} speed={35} />
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end", marginRight: "0.5rem" }}><Button size='small' onClick={handleMore} disabled={currentIndex === text.length - 1}>Weiter</Button></Box>

      </Box>
    </Box></>
  )
}

export default HelpBox