import type { AppProps } from 'next/app';
import NavBar from './components/NavBar';
import HeadComponent from './components/Head';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <HeadComponent title="Sarah Gerrard - Personal Wiki" description="A personal wiki for Sarah Gerrard containing information about her software development work." />
      <NavBar content={<Component {...pageProps} />} />
    </>
  )
}
