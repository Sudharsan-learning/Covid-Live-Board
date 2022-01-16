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

  const regional = data.data.regional;
  if (loading) {
    return null;
  }
  return (
    <>
      <section>
        <div className="block-container">
          <aside className="right-sidebar">
            <div>
              <input
                type="search"
                className="search-box"
                placeholder="Search State..."
              />
            </div>
            <div className="overflow-container">
              {regional &&
                regional
                  .sort((a, b) => b.totalConfirmed - a.totalConfirmed)
                  .map((region) => {
                    const total = region.totalConfirmed;
                    const totalConfirmed =
                      Number(total).toLocaleString("en-in");
                    return (
                      <div className="flex align-center ml-5 pd-1">
                        <h5>{totalConfirmed}</h5>
                        <p className="states-name">{region.loc}</p>
                      </div>
                    );
                  })}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default StatesContainer;
