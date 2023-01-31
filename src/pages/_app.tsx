import React from 'react';
import { AppProps } from 'next/app';
import NavBar from './components/NavBar';
import HeadComponent from './components/Head';
import '../styles/global.css';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <HeadComponent />
      <NavBar content={<Component {...pageProps} />} />
    </>
  )
}
