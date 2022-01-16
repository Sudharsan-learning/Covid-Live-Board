import React from "react";

function AsideContainer() {
  return (
    <>
      <section className="text-white">
        <section>
          <div className="text-center mt-10">
            <img src="/covid-icon.png" className="icon-img" />
          </div>
        </section>

        <section className="mt-10">
          <div className="text-center">
            <img src="/dashboard.png" className="nav-icon-img  mt-10" />
            <p>Dashboard</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default AsideContainer;
