import axios from "axios";
import { PatientInfo } from "../features/dashboard/Dashboard";

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function getMedical() {
    
    const res: PatientInfo[] = (await axios.get(`${API_URL}`)).data;
    console.log(res);
    return res;
}