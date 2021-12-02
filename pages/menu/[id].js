import Head from "next/head";
import { useState /* useEffect, useRef */ } from "react";
import { getData } from "../../utils/fetchData";

import Link from "next/link";

import styles from "../../css/menu.module.css";

const DetailMenu = (props) => {
  const [menu] = useState(props.menu);

  const [tab, setTab] = useState(0);
  // const imgRef = useRef();

  const isActive = (index) => {
    if (tab === index) return " active";
    return "";
  };
  // useEffect(() => {
  //   const images = imgRef.current.children;
  //   for (let i = 0; i < images.length; i++) {
  //     images[i].className = images[i].className.replace(
  //       "active",
  //       "img-thumbnail rounded"
  //     );
  //   }

  //   images[tab].className = "img-thumbnail rounded active";
  // }, [tab]);

  return (
    <>
      <div className="container">
        <Link href="/menu">
          <button>Back</button>
        </Link>

        <div className="row detail_page">
          <Head>
            <title>Detail Menu</title>
          </Head>

          <div className="col-md-6">
            <img
              src={menu.images[tab].url}
              alt={menu.images[tab].url}
              className={`d-block img-thumbnail rounded mt-4 w-100 ${styles.imgFit}`}
              style={{ height: "350px" }}
            />

            <div
              className="row mx-0"
              style={{ cursor: "pointer" }} /* ref={imgRef} */
            >
              {menu.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.url}
                  className={`img-thumbnail rounded ${isActive(index)}`}
                  style={{ height: "80px", width: "20%" }}
                  onClick={() => setTab(index)}
                />
              ))}
            </div>
          </div>

          <div className="col-md-6" style={{ paddingTop: "20px" }}>
            <h2 className="text-uppercase">{menu.title}</h2>
            <p
              className="text-uppercase"
              style={{ fontSize: "40px", fontWeight: "700" }}
            >
              {menu.price}k
            </p>

            {/* <div className="row mx-0 d-flex justify-content-between">
              {menu.inStock > 0 ? (
                <h6 className="text-danger">In Stock: {menu.inStock}</h6>
              ) : (
                <h6 className="text-danger">Out Stock</h6>
              )}

              <h6 className="text-danger">Sold: {menu.sold}</h6>
            </div> */}

            <div className="my-2">{menu.description}</div>
            <div className="my-2">
              {menu.content} {menu.content} {menu.content}
            </div>

            <button type="button" className="btn btn-warning d-block my-4 px-5">
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
