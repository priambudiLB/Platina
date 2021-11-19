import Head from "next/head";
import HomePage from "./home";
import Image from "next/image";
import styles from "../css/layout.module.css";
import Link from "next/link";

import tempe from "../assets/1copy.jpg";

const Home = () => {
  return (
    <>
      <Head>
        <title>MENDOAN.ID</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
