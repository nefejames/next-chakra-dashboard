import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Humo Health Care</title>
      </Head>

      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
