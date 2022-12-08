import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";

import Routes from "./routes";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
