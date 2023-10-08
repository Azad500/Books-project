import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbar } from "./Components/Navbar/navbar";
import { Main } from "./Components/Main/main";

export function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}
