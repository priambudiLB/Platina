/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { getData } from '../utils/fetchData';

import MenuItem from '../components/product/MenuItem';

import styles from '../css/menu.module.css';
import BackButton from '../components/BackButton';

const Menu = function (props) {
  const [menu, setMenu] = useState(props.menu);

  return (
    <>
      <Link href="/">
        <a>
          <BackButton />
        </a>
      </Link>

      <div className="container" style={{ marginTop: '10px' }}>
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
  const res = await getData('product');

  // server side rendering
  return {
    props: {
      menu: res.menu,
      result: res.result,
    }, // will be passed to the page component as props
  };
}

export default Menu;
