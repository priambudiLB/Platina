import Head from "next/head";
import { useState } from "react";
import { getData } from "../utils/fetchData";

import MenuItem from "../components/product/MenuItem";

import Link from "next/link";

import styles from "../css/menu.module.css";

const Menu = (props) => {
  const [menu, setMenu] = useState(props.menu);
  const [minuman, setMinuman] = useState(props.minuman);

  return (
    <>
      <div className="container">
        <Head>
          <title>Menu</title>
        </Head>
        <Link href="/">
          <button>Back</button>
        </Link>

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
