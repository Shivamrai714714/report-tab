import React from "react";
import "./styles/App.css";
import Navbar from "./Navbar";
import Heading from "./Heading";
import ScoreCard from "./ScoreCard";
import Weeks from "./Weeks";
import WeekCard from "./WeekCard";

export default function App() {
  return (
    <div>
      <Navbar />
      <Heading />
      <ScoreCard />
      {/* <WeekCard /> */}
      <Weeks />
    </div>
  );
}
