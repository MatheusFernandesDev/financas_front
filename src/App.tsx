import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Suspense fallback={<Load />}> */}
      <Routes />
      {/* </Suspense> */}
    </BrowserRouter>
  );
};

export default App;
