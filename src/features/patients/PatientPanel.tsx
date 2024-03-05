import { Box } from '@mui/material'
import React from 'react'
import PatientPicture from './PatientPicture'

export default function PatientPanel({patient}) {
   
    return (
        <Box >
            <Box sx={{maxHeight: 1/4, alignContent:'center', justifyContent:'center'}}>
                <PatientPicture patient={patient} />
            </Box>
            <Box sx={{maxHeight: 1/2}}>
                {patient && <p>{patient.name}</p>}
                {patient && <p>{patient.id}</p>}
                {patient && <p>{patient.username}</p>}
            </Box>
        </Box>
    )
}
/**                 
                {<p>{patient.address.street}</p>}
                {<p>{patient.address.city}</p>}
                {<p>{patient.address.zipcode}</p>}
*/