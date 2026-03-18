"use client"
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import SceneForm from "../components/SceneForm";
import "../globals.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useMyContext } from "../components/ContextProvider";
import Link from "next/link";

function Page() {
    const { components, setComponents } = useMyContext()
    const [checked, setChecked] = useState(true)


    const addComponent = () => {
        setChecked(true)
        setComponents([...components, <SceneForm key={components.length} count={components.length} number={checked} components={components} />])

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
            <Box mt={6}><h1>Und was ist deine Geschichte?</h1></Box>

            <Box m={3}> <p style={{ width: "69ch", lineHeight: "1.7rem", marginBottom: "2rem" }}>Schreibe Szenen und Dialoge für dein Serious Game rund um die Sammlungen und Geschichten der Stiftung Preußischer Kulturbesitz.</p></Box>


            {components}
            <div className="addButton" onClick={addComponent} style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "lightblue", width: "60px", height: "60px", borderRadius: "75px", marginTop: "-1.5rem", fontStyle: "bold" }}><AddCircleIcon color="primary" />  </div>
            {/* <Box sx={{ display: "flex", gap: "1rem", marginTop: "3rem" }}>
                <Button variant="outlined" onClick={deleteComponent} sx={{ width: "max-content" }}>Löschen</Button>

            </Box> */}
            <Divider
                sx={{
                    width: "80%",
                    maxWidth: 450,
                    marginTop: "3rem",

                }}
            /><Box sx={{ display: "flex", gap: "1rem", marginTop: "3rem" }}>
                <Link href="/" style={{ textDecoration: "none" }}>
                    <Box className="button-landingPage" sx={{ textAlign: "center", marginBottom: "36rem", }}>
                        Home
                    </Box>
                </Link>

            </Box>
        </Box >
    );
}

export default Page;
