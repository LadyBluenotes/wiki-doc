import type { AppProps } from 'next/app';
import NavBar from './components/NavBar';
import HeadComponent from './components/Head';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <HeadComponent title="Sarah's Documentation Site" description="A personal site to display project documentation." />
      <NavBar content={<Component {...pageProps} />} />
    </>
  )
}
