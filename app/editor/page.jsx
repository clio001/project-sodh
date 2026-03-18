"use client"
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import SceneForm from "../components/SceneForm";
import "../globals.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function page() {
    const [components, setComponents] = useState([<SceneForm count={0} number={1} />])
    const [checked, setChecked] = useState(1)


    const addComponent = () => {
        setChecked(checked + 1)
        setComponents([...components, <SceneForm key={components.length} count={components.length} number={checked} />])

    }

    const deleteComponent = () => {
        components.pop()
        setComponents([...components])
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
            <div className="addButton" onClick={addComponent} style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "lightblue", width: "50px", height: "50px", borderRadius: "75px", marginTop: "-3.5rem", fontStyle: "bold" }}><AddCircleIcon color="primary" />  </div>
            <Box sx={{ display: "flex", gap: "1rem" }}>
                <Button variant="outlined" onClick={deleteComponent} sx={{ width: "max-content", marginBottom: "36rem" }}>Löschen</Button>

            </Box>
        </Box >
    );
}

export default page;
