import Layout from "../components/Layout/Layout";
import { useSearch } from "../context/Search";
import { useCart } from "../context/Cart";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values.results?.length === 0
              ? "No Products Found"
              : `${values?.results?.length || 0} Products Found`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results?.map((p) => (
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

export default SearchResults;
