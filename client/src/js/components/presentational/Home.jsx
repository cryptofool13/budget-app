import React from "react";

import requireAuth from "../requireAuth.jsx";
import TableContainer from "../container/TabelContainer.jsx";
import ChartContainer from "../container/ChartContainer.jsx";
import ModalContainer from "../container/ModalContainer.jsx";

// import "../../../styles/home.scss";

const Home = props => {
  return (
    <>
      <main className="home">
        <TableContainer />
        <ChartContainer />
      </main>
      <ModalContainer history={props.history} />
    </>
  );
};

export default requireAuth(Home);
