import React from "react";

function StatesContainer({ data }) {
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
