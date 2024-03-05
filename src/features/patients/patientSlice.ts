import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PatientInfo } from "../dashboard/Dashboard";

interface patientInitialState{
    patientArray: PatientInfo[],
    patientInfo: PatientInfo | null
}

const initialState: patientInitialState = {
    patientArray: [],
    patientInfo: null,
};

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: create => ({
        createPatientArray: create.reducer((state, action: PayloadAction<PatientInfo[]>) => {
            state.patientArray = action.payload;
        }),
        setPatientInfo: create.reducer((state, action: PayloadAction<number>) => {
            state.patientInfo = state.patientArray[action.payload];
        }),
    })
});

export const { createPatientArray, setPatientInfo } = patientSlice.actions;

//export default patientSlice.reducer;