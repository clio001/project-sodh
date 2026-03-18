"use client"
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import SceneForm from "../components/SceneForm";
import "../globals.css";

function page() {
    const [components, setComponents] = useState([])


    const addComponent = () => {
        setComponents([...components, <SceneForm key={components.length} number={components.length} />])
    }

    return (
        <Box className="new"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh"

            }}
        >
            <Box m={3}><h1>Szeneneditor</h1></Box>

            <Box m={3}> <p>Erstellen Sie neue Szenen für Ihr Spiel mit dem Szeneneditor.</p></Box>



            {components}

            <Button variant="outlined" onClick={addComponent} sx={{ width: "max-content", marginBottom: "36rem" }}>Hinzufügen</Button>
        </Box>
    );
}

export default page;
