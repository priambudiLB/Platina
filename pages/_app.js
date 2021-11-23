import "../styles/globals.css";
import { ThemeProvider } from "@chakra-ui/core";
import Layout from "../components/Layout";
import { AuthProvider } from "../services/auth";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
