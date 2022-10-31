import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import "./index.scss";
import App from "./App";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
