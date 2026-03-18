import { Box, Button, FormControl, Input, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import "../globals.css"

function SceneForm({ number }) {
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "center", margin: "1.5rem" }}>
                <Paper elevation={4} sx={{ width: "42rem", padding: "1rem", background: "rgba(255, 255, 255, 0.1)" }}>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <p>#{number + 1}</p>
                    </Box>

                    <Box ml={5} mr={5} sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1.5rem", }}>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <TextField variant='filled' label="ID" />
                            <TextField variant='filled' label="Ort" />
                            <TextField variant='filled' label="Avatar" />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <TextField multiline rows={4.47} maxRows={5} variant='filled' label="Beschreibung" sx={{ width: "100%" }} />
                            <TextField variant='filled' label="Dialog-Optionen" />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "1.5rem" }}>
                        <Button variant='contained'>Abbrechen</Button>
                        <Button variant='contained'>Speichern</Button>
                    </Box>
                </Paper>
            </Box>


        </div >
    )
}

export default SceneForm