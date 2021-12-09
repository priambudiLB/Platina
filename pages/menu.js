import Head from "next/head";
import { useState } from "react";
import { getData } from "../utils/fetchData";

import MenuItem from "../components/product/MenuItem";

import Link from "next/link";

import styles from "../css/menu.module.css";
import BackButton from "../components/BackButton";

const Menu = (props) => {
  const [menu, setMenu] = useState(props.menu);

  return (
    <>
      <Link href="/">
        <a>
          <BackButton />
        </a>
      </Link>

      <div className="container" style={{ marginTop: "10px" }}>
        <Head>
          <title>Menu</title>
        </Head>

        <div className={styles.menu}>
          {menu.length === 0 ? (
            <h2>No Menu</h2>
          ) : (
            menu.map((product) => <MenuItem key={product._id} menu={product} />)
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await getData("product");

  // server side rendering
  return {
    props: {
      menu: res.menu,
      result: res.result,
    }, // will be passed to the page component as props
  };
}

export default Menu;
