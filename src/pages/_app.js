import MainLayout from '../components/layout/main_layout';
import '../styles/general.sass';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
