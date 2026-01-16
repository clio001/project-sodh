import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typewriter from "./Typewriter";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { useMyContext } from "./ContextProvider";
import Image from "next/image";

function HeinziBlurb({ badge }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const { setPlayer, player } = useMyContext();
  console.log("badge.id", badge.id);
  console.log("inventory badges", player.inventory.badges);

  useEffect(() => {
    setPlayer({
      ...player,
      inventory: {
        items: [...player.inventory.items],
        journalEntries: [...player.inventory.journalEntries],
        badges: [...player.inventory.badges, badge.id],
      },
    });
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "6px solid brown",
    boxShadow: 24,
    p: 2,
    backgroundImage:
      "radial-gradient(circle at center, white, lightyellow), linear-gradient(150deg, brown, lightyellow)",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "-4rem",
          }}
        >
          <Avatar
            sx={{
              width: 150,
              height: 150,
            }}
            src="/assets/avatars/heinzi-avatar.png"
          ></Avatar>

          {/*           <MilitaryTechIcon
            color={badge.color}
            fontSize="large"
            sx={{ my: "1rem" }}
          /> */}
          <Image
            src="/assets/badges/lehrling-badge.png"
            width={100}
            height={100}
            alt="Auszeichnung als Lehrling"
          />
          <Typography variant="h6">{badge.name}</Typography>
          <Box textAlign="center">
            <Typewriter text={badge.Heinzi} />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default HeinziBlurb;
