import { Box } from "@mui/material"
import React from "react"

export default function PatientPicture({patient}) {

    return (
        <Box sx={{border: 1, p: 2, backgroundColor: '#807e7e', height: 1}}>
            <Box sx={{height: 1/2}}>
                <img src={`https://robohash.org/${patient.name}?size=200x200`} alt={patient.name} />
            </Box>
        </Box>
  )
}