import React, { useEffect } from "react";
import { getSampleData } from "./api";
import { CreateInitiative } from "./components/CreateInitiative";
import { useAppDispatch } from "./hooks";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch])
  return <CreateInitiative />;
};
