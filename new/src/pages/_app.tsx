import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import {
  CssBaseline,
} from "@mui/joy";
import { AppProps } from "next/app";

import Header from "@/components/Header";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Layout.Root>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Main>
          <Component {...pageProps} />
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider>
  );
}
