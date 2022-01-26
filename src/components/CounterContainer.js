import React from "react";
import CountUp from "react-countup";

function CounterContainer({ data }) {
  let date = new Date(data.lastOriginUpdate);
  let updatedDate = date.toLocaleDateString("en-in");
  let updatedTime = date.toLocaleTimeString("en-in");
  return (
    <>
      {data && (
        <div>
          <div>
            <p className="time-text">
              Updated {updatedDate} {updatedTime} local
            </p>
          </div>
          <br />
          <section className="flex space-between align-center">
            <div className="text-center block-container block-container-width">
              <p>Total Confirmed</p>
              <h3 className="crimson">
                <CountUp
                  end={data.data.summary.total}
                  separator=","
                  duration={3}
                />
              </h3>
            </div>
            <div className="text-center block-container block-container-width">
              <p>
                Foreign Confirmed
                <span style={{ fontSize: "0.5rem" }}>(in India)</span>
              </p>
              <h3 className="orange">
                <CountUp
                  end={data.data.summary.confirmedCasesForeign}
                  separator=","
                  duration={3}
                />
              </h3>
            </div>
            <div className="text-center block-container block-container-width">
              <p>Total Recovered</p>
              <h3 className="lawngreen">
                <CountUp
                  end={data.data.summary.discharged}
                  separator=","
                  duration={3}
                />
              </h3>
            </div>
            <div className="text-center block-container block-container-width">
              <p>Total Death</p>
              <h3 className="violet">
                <CountUp
                  end={data.data.summary.deaths}
                  separator=","
                  duration={3}
                />
              </h3>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default CounterContainer;
