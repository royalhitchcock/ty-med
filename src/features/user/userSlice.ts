import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface userSliceState{
    username: string
} 

const initialState: userSliceState = {
    username: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: create => ({
        updateName: create.reducer((state, action: PayloadAction<string>)=> {
            state.username = action.payload;
            },
        )
    })
})

export const { updateName } = userSlice.actions;