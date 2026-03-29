import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../context/Cart";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();

  //product details
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `/api/v1/product/get-product/${params.slug}`,
        );

        setProduct(data?.product);
      } catch (error) {
        console.log(error);
      }
    };
    if (params?.slug) getProduct();
  }, [params?.slug]);

  return (
    <Layout>
      <div className="container">
        <div className="row p-4">
          <div className="col-md-5">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ borderRadius: "25px" }}
            />
          </div>

          <div className="col-md-6 mt-4">
            <h1 className="product-name">{product.name}</h1>
            <p className="fs-3 fw-bold">Rs {product.price}/-</p>
            <div className="d-flex">
              <div className="d-flex me-3">
                <p className="fs-5 fw-bold">{product.rating}</p>
                <img
                  src="https://www.freeiconspng.com/thumbs/star-icon/star-icon-32.png"
                  alt="star"
                  className="mt-1"
                  height={"22px"}
                />
              </div>
              <p className="fs-5">{product.reviews} Reviews</p>
            </div>
            <p className="fs-5">{product.description}</p>

            <div className="label-value-container">
              <p className="fs-5 fw-bold">
                Brand :<span className="fw-light fs-4"> {product.brand}</span>
              </p>
            </div>
            <hr className="horizontal-line" />

            <button
              className="btn btn-secondary ms-2"
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product]),
                );
                toast.success(`${product.name} Added to Cart`);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
