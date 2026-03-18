import { Box, Button, Divider, Fade, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "../globals.css"
import { useMyContext } from './ContextProvider';

function SceneForm({ number, count }) {
    const { components, setComponents } = useMyContext()

    console.log("add", components)

    const deleteComponent = () => {

        components.splice(count, 1)
        setComponents([...components])

    }
    return (
        <div>
            <Fade in={number}>

                <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
                    <Paper className="new" elevation={12} sx={{ width: "38rem", padding: "1rem", background: "rgba(255, 255, 255, 0.1)" }}>
                        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", marginTop: "0.5rem", marginRight: "1rem", marginBottom: "1rem", marginLeft: "2rem" }}>
                            <DeleteIcon color='primary' fontSize='small' onClick={deleteComponent} /><Typography variant="body1" fontFamily="Noto_Serif"> / Szene #{count + 1}</Typography>

                        </Box>

                        <Box ml={5} mr={5} mb={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem", }}>

                            <Box sx={{ display: "flex", flexDirection: "row", gap: "1.5rem", width: "100%" }}>
                                <TextField size="small" label="ID" variant='filled' style={{ width: "20%" }} sx={{

                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Noto_serif',
                                        fontSize: '1.1rem',
                                        fontWeight: 300,
                                    }
                                }} />
                                <TextField variant='filled' label="Ort" size="small" fullWidth sx={{
                                    width: "100%",
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Noto_serif',
                                        fontSize: '1.1rem',
                                        fontWeight: 300,
                                    }
                                }} />

                            </Box>

                            <TextField variant='filled' label="Avatar" size="small" sx={{
                                width: "100%",
                                '& .MuiInputBase-input': {
                                    fontFamily: 'Noto_serif',
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                }
                            }} />
                            <TextField multiline rows={4.15} variant='filled' label="Prompt" size="small" helperText="(max. 25 Wörter)" sx={{
                                width: "100%",
                                '& .MuiInputBase-input': {
                                    fontFamily: 'Noto_serif',
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                }
                            }} />
                            <TextField variant='filled' label="Dialog-Option #1" size="small" helperText="(max. 10 Wörter)" sx={{
                                width: "100%",
                                '& .MuiInputBase-input': {
                                    fontFamily: 'Noto_serif',
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                }
                            }} />
                            <TextField variant='filled' label="Dialog-Option #2" size="small" helperText="(max. 10 Wörter)" sx={{
                                width: "100%",
                                '& .MuiInputBase-input': {
                                    fontFamily: 'Noto_serif',
                                    fontSize: '1.1rem',
                                    fontWeight: 300,
                                }
                            }} />

                        </Box>
                        {/* <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "1.5rem" }}>
                            <Button variant='contained'>Abbrechen</Button>
                            <Button variant='contained'>Speichern</Button>
                        </Box> */}
                    </Paper>
                </Box></Fade >


        </div >
    )
}

export default SceneForm