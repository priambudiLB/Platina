/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable func-names */
import Head from 'next/head';
import { useState, useContext /* useEffect, useRef */ } from 'react';
import Link from 'next/link';
import { getData } from '../../utils/fetchData';
import { DataContext } from '../../store/GlobalState';
import { addToCart } from '../../store/Actions';

import styles from '../../css/menu.module.css';
import BackButton from '../../components/BackButton';

const DetailMenu = function (props) {
  const [menu] = useState(props.menu);
  const [tab, setTab] = useState(0);

  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  // const imgRef = useRef();

  const isActive = (index) => {
    if (tab === index) return ' active';
    return '';
  };

  return (
    <>
      <Link href="/menu">
        <a>
          <BackButton />
        </a>
      </Link>
      <div className="container" style={{ marginTop: '5px' }}>
        <div
          className="row detail_page"
          style={{ marginTop: '-10px', padding: '0 20px' }}
        >
          <Head>
            <title>Detail Menu</title>
          </Head>

          <div className="col-md-6">
            <img
              src={menu.images[tab].url}
              alt={menu.images[tab].url}
              className={`img-thumbnail mt-4 w-100 ${styles.imgFit}`}
            />

            <div
              className="row mx-0"
              style={{ cursor: 'pointer' }} /* ref={imgRef} */
            >
              {menu.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.url}
                  className={`img-thumbnail ${styles.imgThumb}
                  } ${isActive(index)}`}
                  // style={{ height: "80px", width: "20%" }}
                  onClick={() => setTab(index)}
                />
              ))}
            </div>
          </div>

          <div className={`col-md-6 ${styles.cartTitle}`}>
            <h2 className="text-uppercase">{menu.title}</h2>
            <p className="text-uppercase">
              {menu.price}
              k
            </p>

            <div className="row mx-0 d-flex justify-content-between">
              {menu.inStock > 0 ? (
                <h6 className="text-danger">
                  In Stock:
                  {menu.inStock}
                </h6>
              ) : (
                <h6 className="text-danger">Out Stock</h6>
              )}

              <h6 className="text-danger">
                Sold:
                {menu.sold}
              </h6>
            </div>

            <div className="my-2" style={{ textAlign: 'justify' }}>
              {menu.description}
            </div>
            <div className="my-2" style={{ textAlign: 'justify' }}>
              {menu.content}
              {' '}
              {menu.content}
              {' '}
              {menu.content}
            </div>

            <button
              type="button"
              className="btn btn-warning d-block my-4 px-5"
              onClick={() => dispatch(addToCart(menu, cart))}
            >
              Pesan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);

  // server side rendering
  return {
    props: { menu: res.menu }, // will be passed to the page component as props
  };
}
export default DetailMenu;
