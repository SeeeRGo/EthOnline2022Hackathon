import React, { useEffect } from "react";
import { getSampleData } from "./api";
import { SampleList } from "./components/SampleList";
import { useAppDispatch } from "./hooks";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch])
  return (
    <SampleList />
  );
};
