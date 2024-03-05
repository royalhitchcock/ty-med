import React from "react";
import { useLoaderData } from "react-router-dom";
import { getMedical } from "../../services/patientAPI";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { createPatientArray, setPatientInfo } from "../patients/patientSlice";
import PatientList from "../patients/patientList";
import { Box } from "@mui/material";
import PatientPanel from "../patients/PatientPanel";

export interface geoInfo {
    "lat": string,
    "lng": string,
}

export interface addressInfo {
    "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": geoInfo,
}

export interface companyInfo {
    "name": string,
    "catchPhrase": string,
    "bs": string,
}

export interface PatientInfo {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": addressInfo,
    "phone": string,
    "website": string,
    "company": companyInfo,
}

function Dashboard() {
  
  const [patient, setPatient] = useState({});
  const [holdPatients, setHoldPatients] = useState({});
  const patients = useLoaderData() as PatientInfo[];
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(createPatientArray(patients));
    setHoldPatients(patients)
    setPatient(patients[0])
  },[])

  function handleClick(e: number) {
    setPatient(holdPatients[e - 1])
    dispatch(setPatientInfo(e - 1))
}
  
return (
    <Box sx={{ width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', maxHeight: '100%'}}>
        <Box sx={{ width: '60%', display: 'inline'}}>
            <PatientList handleClick={handleClick} />
        </Box>
        <Box sx={{ width: '35%', display: 'inline' }}>
            <PatientPanel patient={patient}/>
        </Box>
    </Box>
    )
}

export async function loader():Promise<PatientInfo[]> {
  const patients:PatientInfo[] = await getMedical();
  return patients;
}

export default Dashboard;