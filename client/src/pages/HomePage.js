import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { Radio } from "antd";
import { Prices } from "../components/Prices";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/Cart";
import toast from "react-hot-toast";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [radio, setRadio] = useState([]);

  useEffect(() => {
    //get all products
    const getAllProducts = async () => {
      try {
        function shuffleArray(array) {
          return array.sort(() => Math.random() - 0.5);
        }
        const { data } = await axios.get(`/api/v1/product/get-products`);

        const shuffledData = shuffleArray(data.products);
        setProducts(shuffledData);
      } catch (error) {
        console.log(error);
      }
    };
    if (!radio.length) getAllProducts();
  }, [radio]);

  useEffect(() => {
    //get filtered products
    const filterProduct = async () => {
      try {
        const { data } = await axios.post(`/api/v1/product/product-filters`, {
          radio,
        });
        setProducts(data?.products);
      } catch (error) {
        console.log(error);
      }
    };
    if (radio.length) filterProduct();
  }, [radio]);

  return (
    <Layout title={"All Products - Best Offers"}>
      <div className="row mt-2 p-3">
        <div className="col-md-2 p-4">
          {/*price filter*/}
          <h4 className="mt-4 fs-4" style={{ color: "blue" }}>
            Filter By Price
          </h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array} className="fs-5">
                    {p.name}
                  </Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div>
            <button
              className="btn btn-danger mt-3"
              onClick={() => window.location.reload()} // reload using window global object
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-10 ">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img src={p.image} className="card-img-top" alt={p.name} />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{p.name}</h5>
                    <div className="d-flex">
                      <p className="fw-bold fs-5">{p.rating}</p>
                      <img
                        src="https://www.freeiconspng.com/thumbs/star-icon/star-icon-32.png"
                        alt="star"
                        className="mt-1"
                        height={"22px"}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card-text fs-5">by {p.brand}</p>
                    <p className="fw-bold fs-5">Rs {p.price}/-</p>
                  </div>
                </div>
                <div className="mb-3 ms-2 d-flex justify-content-center">
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p]),
                      );
                      toast.success(`${p.name} Added to Cart`);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

/*JSON.stringify(value, replacer, space)
The <pre> tag defines preformatted text.*/
