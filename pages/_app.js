import { useState } from "react";
import Layout from "../components/layout.component";
import { GlobalProvider } from "../context/global.context";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
}

export default MyApp;
