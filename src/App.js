import React, { useEffect, useState } from "react";
import AsideContainer from "./components/AsideContainer";
import CounterContainer from "./components/CounterContainer";
import RightContainer from "./components/RightContainer";
import StatesContainer from "./components/StatesContainer";
import * as serviceCaller from "./services";
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState();
  const [testdata, setTestdata] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const covidResponse = await serviceCaller.getLatestCovidCases();
        const testResponse = await serviceCaller.getLatestTestResult();
        setData(covidResponse.data);
        setTestdata(testResponse.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
        setTestdata(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [loading]);

  if (loading) {
    return null;
  }
  return (
    <>
      {/* <Routes> */}
      {/* <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<App />} /> */}
      <section>
        <h1 className="text-center">COVID Live Dashboard</h1>
      </section>
      <section className="container flex">
        <aside className="sidebar">
          <AsideContainer />
        </aside>
        <main className="main-container">
          <CounterContainer data={data} />
          <StatesContainer data={data} />
        </main>
        <aside className="right-sidebar">
          <RightContainer data={testdata} />
        </aside>
      </section>
      {/* </Routes> */}
    </>
  );
}

export default App;
