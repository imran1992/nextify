import React, { useContext } from "react";
import Head from "next/head";
import { Container, Typography, Box } from "@material-ui/core";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { Context } from "../Context/testContext";
const Home = () => {
  const {
    setCount,
    setLoading,
    setText,
    state: { loading, myText, count },
  } = useContext(Context);

  return (
    <Container maxWidth="sm">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box my={4}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          onClick={() => {
            setCount(1);
            console.log("CLicking", "yo its clicking");
          }}
        >
          {count}
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};
export default Home;
