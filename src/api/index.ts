import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { apiResponse, GET_DATA } from "./constants";

export const getSampleData = createAsyncThunk(GET_DATA, async () => {
  const result = await new Promise<string[]>((resolve) => {
    resolve(apiResponse)
  })
  return result;
});

export const createInitiative = (options: string[], description: string) => {
  axios.post("/api/initiative", {
    options,
    description,
  });
} 