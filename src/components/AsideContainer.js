import React from "react";
import { Link } from "react-router-dom";

function AsideContainer() {
  return (
    <>
      <section className="text-white">
        <section>
          <div className="text-center mt-10">
            <img src="/covid-icon.png" className="icon-img" alt="icon" />
          </div>
        </section>

        <section className="mt-10">
          <Link to="/dashboard">
            <div className="text-center">
              <img
                src="/dashboard.png"
                className="nav-icon-img  mt-10"
                alt="icon"
              />
              <p>Dashboard</p>
            </div>
          </Link>
        </section>
      </section>
    </>
  );
}

export default AsideContainer;
