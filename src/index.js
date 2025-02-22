import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import {store} from './Redux/store';
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
    </ChakraBaseProvider>
  </React.StrictMode>
);
reportWebVitals();
