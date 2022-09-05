import { createSlice } from "@reduxjs/toolkit";
import { getSampleData } from "../api";
import { RootState } from "../store";

const initialState: string[] = [];

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    sampleAction: (state, action) => {
      state[0] = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getSampleData.fulfilled, (_, action) => action.payload)
  },
});

export const { sampleAction } = sampleSlice.actions

export const selectRoot = (state: RootState) => state.sample

export default sampleSlice.reducer
