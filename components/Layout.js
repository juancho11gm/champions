import Head from 'next/head';
import { Header } from '../components/Header';
import { GlobalProvider } from '../components/GlobalProvider';

const Layout = ({ children, title = 'Home' }) => {

  return (
    <GlobalProvider>
      <Head>
        <title>Star wars | {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
    </GlobalProvider>
  );
};

export default Layout;
