import React, { Fragment } from "react"
import { useAppSelector } from "../../app/hooks"
import { Box } from "@mui/material";


export default function Footer() {
  const data = useAppSelector((state)=>state.patient.patientInfo)

  return (
    <Box sx={{bgcolor: '#1976d2', boxShadow: 1, p: 1, color: '#fff', minHeight: 60, maxHeight: 60}}>
      {data && (<div><Fragment>Patient ID: {data.id}</Fragment></div>)}
      {data && (<div><Fragment>Patient Name: {data.name}</Fragment></div>)}
    </Box>
  )
}