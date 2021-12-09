import Head from "next/head";

// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextBox from "../components/TextBox";
import Panel from "../components/Panel";
import MenuSpesial from "../components/MenuSpesial";
import GorenganPopuler from "../components/GorenganPopuler";
import Map from "../components/Map";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Head>
        <title>MENDOAN.ID</title>
      </Head>
      <TextBox />
      <Panel />
      <MenuSpesial />
      <GorenganPopuler />
      <Map />
      <Footer />
    </>
  );
};

export default HomePage;
