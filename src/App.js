import * as React from "react";
import Button from "@mui/material/Button";
import TourCard from "./components/TourCard";

export default function App() {
  return (
    <div>
      <h1>Scratch with Material UI</h1>
      <TourCard />
      <Button variant="contained" color="secondary">
        Hello world
      </Button>
    </div>
  );
}
