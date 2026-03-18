import { Box, Button, Fade, Paper, TextField } from '@mui/material'
import React from 'react'
import "../globals.css"

function SceneForm({ number, count }) {
    return (
        <div>
            <Fade in={number}>
                <Box sx={{ display: "flex", justifyContent: "center", margin: "1.5rem" }}>
                    <Paper elevation={4} sx={{ width: "42rem", padding: "1rem", background: "rgba(255, 255, 255, 0.1)" }}>
                        <Box sx={{ display: "flex", justifyContent: "end" }}>
                            <p>#{count + 1}</p>
                        </Box>

                        <Box ml={5} mr={5} sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1.5rem", }}>

                            <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <TextField size="small" label="ID" variant='filled' />
                                <TextField variant='filled' label="Ort" size="small" />
                                <TextField variant='filled' label="Avatar" size="small" />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <TextField multiline rows={4.15} variant='filled' label="Beschreibung" sx={{ width: "100%" }} size="small" />
                                <TextField variant='filled' label="Dialog-Optionen" size="small" />
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "1.5rem" }}>
                            <Button variant='contained'>Abbrechen</Button>
                            <Button variant='contained'>Speichern</Button>
                        </Box>
                    </Paper>
                </Box></Fade>


        </div >
    )
}

export default SceneForm