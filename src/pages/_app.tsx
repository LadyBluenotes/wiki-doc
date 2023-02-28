import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { Box } from '@mui/material';
import NavBar from '@/components/NavBar';
import MobileNav from '@/components/MobileNav';
import HeadComponent from '../components/Head';
import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {

  

  return (
    <>
      <HeadComponent />
      {width !== undefined && width < 900 ? 
        <MobileNav>
          <Box padding={2}>
            <Component {...pageProps} />
          </Box>
        </MobileNav> : 
        <NavBar>
          <Box padding={2}>
            <Component {...pageProps} />
          </Box>
        </NavBar>
      }
    </>
  )
}
