import axios from "axios";
import React, { useEffect, useState } from "react";

function RightContainer() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = process.env.REACT_APP_BASEURL;

  console.log("REACT_BASE_URL", baseUrl);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/stats/testing/latest`);
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
  const total = data.data.totalSamplesTested;

  return (
    <>
      <section className="block-container text-center pd-1 bg-color-right text-white">
        <div>
          <img src="/test-img.png" alt="image-covid-test" />
          <h3>COVID Tested Details</h3>
          <br />
          <p>
            TESTING STATUS UP TO <h3 className="yellow">{data.data.day}</h3>
          </p>
        </div>
        <br />

        <div>
          <h4>Total Samples Tested </h4>
          <h1 className="yellow">{Number(total).toLocaleString("en-in")}</h1>
        </div>
      </section>
    </>
  );
}

export default RightContainer;
