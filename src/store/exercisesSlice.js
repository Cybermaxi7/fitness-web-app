import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: []
};

const exercisesSlice = createSlice({
    initialState,
    name: 'exercises',
    reducers: {
        setExercises: (state, action) => {
            state.data = action.payload
        }
    }
})
export const {setExercises} = exercisesSlice.actions;
export default exercisesSlice.reducer