/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable func-names */
import '../styles/globals.css';
import Layout from '../components/Layout';
import { DataProvider } from '../store/GlobalState';

const MyApp = function ({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
};

export default MyApp;
