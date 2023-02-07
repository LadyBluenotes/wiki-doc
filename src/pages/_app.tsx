import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import HeadComponent from './components/Head';
import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {

  const [width, setWidth] = useState<number | undefined>(undefined);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <HeadComponent />
      {width !== undefined && width < 900 ? 
        <MobileNav content={<Component {...pageProps} />} /> : 
        <NavBar content={<Component {...pageProps} />} />
      }
    </>
  )
}
