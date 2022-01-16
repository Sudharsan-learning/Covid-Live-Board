import axios from "axios";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

function CounterContainer() {
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

  return (
    <>
      {data && (
        <div>
          <section className="flex space-between align-center">
            <div className="text-center block-container block-container-width">
              <p>Total Confirmed</p>
              <h3 className="crimson">
                <CountUp
                  end={data.data.summary.confirmedCasesIndian}
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
