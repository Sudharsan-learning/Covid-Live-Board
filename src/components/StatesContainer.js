import axios from "axios";
import React, { useEffect, useState } from "react";

function StatesContainer() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = process.env.REACT_APP_BASEURL;

  console.log("REACT_BASE_URL", baseUrl);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/stats/latest`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [loading]);

  if (loading) {
    return null;
  }
  const regional = data.data.regional;
  console.log("data", data);
  return (
    <>
      <section className="block-container">
        <table>
          <tr>
            <th>STATES</th>
            <th>TOTAL CASES</th>
            <th>TOTAL CASES(Foreign)</th>
            <th>DISCHARGED</th>
            <th>DEATHS</th>
            <th>DISCHARGE RATIO</th>
            <th>DEATH RATIO</th>
          </tr>

          {regional &&
            regional
              .sort((a, b) => b.totalConfirmed - a.totalConfirmed)
              .map((region) => {
                const total = region.totalConfirmed;
                const deaths = region.deaths;
                const discharged = region.discharged;
                const dischargeRatio = (discharged / total) * 100;
                const deathRatio = (deaths / total) * 100;

                return (
                  <tr>
                    <td>{region.loc}</td>
                    <td>{Number(total).toLocaleString("en-in")}</td>
                    <td>{region.confirmedCasesForeign}</td>
                    <td>{Number(discharged).toLocaleString("en-in")}</td>
                    <td>{Number(deaths).toLocaleString("en-in")}</td>
                    <td>{Number(dischargeRatio).toFixed(2)}%</td>
                    <td>{Number(deathRatio).toFixed(2)}%</td>
                  </tr>
                );
              })}
        </table>
      </section>
    </>
  );
}

export default StatesContainer;
