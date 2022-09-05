import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiResponse, GET_DATA } from "./constants";

export const getSampleData = createAsyncThunk(GET_DATA, async () => {
  // pretending to fetch data asyncronously
  const result = await new Promise<string[]>((resolve) => {
    resolve(apiResponse)
  })
  return result;
});