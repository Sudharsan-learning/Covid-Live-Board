import axios from "axios";
import React, { useEffect, useState } from "react";
import AsideContainer from "./components/AsideContainer";
import CounterContainer from "./components/CounterContainer";
import RightContainer from "./components/RightContainer";
import StatesContainer from "./components/StatesContainer";

function App() {
  return (
    <>
      <section>
        <h1 className="text-center">COVID Live Board</h1>
      </section>
      <section className="container flex">
        <aside className="sidebar">
          <AsideContainer />
        </aside>
        <main className="main-container">
          <CounterContainer />
          <StatesContainer />
        </main>
        <aside className="right-sidebar">
          <RightContainer />
        </aside>
      </section>
    </>
  );
}

export default App;
