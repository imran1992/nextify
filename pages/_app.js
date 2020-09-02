import React, { useEffect, Fragment } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../src/theme";
//import "../styles/globals.css";
import { Provider } from "../Context/testContext";
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content={`Schoolx is the largest online learning platform in Pakistan for A Level, O Level, FSc & Matric. ✓ Get best tuition and study all subjects online with best teachers of Pakistan`}
        />
        <meta name="theme-color" content="#ad29c8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </Fragment>
  );
};
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
export default MyApp;
