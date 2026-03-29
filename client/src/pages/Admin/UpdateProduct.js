import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    //get single product
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(
          `/api/v1/product/get-product/${params.slug}`,
        );
        const product = data?.product;

        setId(product._id);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setQuantity(product.quantity);
        setImage(product.image);
        setBrand(product.brand);
        setRating(product.rating);
        setReviews(product.reviews);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  }, [params.slug]);

  // create product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData(); //or we can wrap all input, select tags in form element and can use onSubmit for handleCreate function
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("image", image);
      productData.append("brand", brand);
      productData.append("rating", rating);
      productData.append("reviews", reviews);

      const { data } = await axios.put(
        `/api/v1/product/update-product/${id}`,
        productData,
      );
      if (data?.success) {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //delete product
  const handleDelete = async () => {
    try {
      const confirmed = window.confirm(
        "Are you sure want to delete this product?",
      );
      if (!confirmed) return;
      const { data } = await axios.delete(
        `/api/v1/product/delete-product/${id}`,
      );
      if (data.success) {
        toast.success("Product Deleted Successfully");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data.message || "Delete failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Update Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Update Product</h1>
            <div className="m-1 w-75">
              <div className="mb-3">
                <label className="text-primary fw-semibold">IMAGE URL</label>
                <input
                  type="text"
                  value={image}
                  placeholder="Enter Product image url"
                  className="form-control"
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="text-primary fw-semibold">NAME</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Enter Name of the Product"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="text-primary fw-semibold">DESCRIPTION</label>
                <textarea
                  value={description}
                  placeholder="Enter Product Description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="text-primary fw-semibold">PRICE</label>
                <input
                  type="text"
                  value={price}
                  placeholder="Enter Product Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="text-primary fw-semibold">QUANTITY</label>
                <input
                  type="text"
                  value={quantity}
                  placeholder="Enter Product Quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="text-primary fw-semibold">BRAND</label>
                <input
                  type="text"
                  value={brand}
                  placeholder="Enter Product Brand"
                  className="form-control"
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="text-primary fw-semibold">RATING</label>
                <input
                  type="text"
                  value={rating}
                  placeholder="Enter Product Rating"
                  className="form-control"
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="text-primary fw-semibold">
                  NUMBER OF REVIEWS
                </label>
                <input
                  type="text"
                  value={reviews}
                  placeholder="Enter Number of Reviews"
                  className="form-control"
                  onChange={(e) => setReviews(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Update Product
                </button>
              </div>
              <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
