import React from "react";

function RightContainer({ data }) {
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
