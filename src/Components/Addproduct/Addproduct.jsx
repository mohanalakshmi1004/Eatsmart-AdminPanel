import React, { useState } from "react";
import "./addproduct.css";
import uploadarea from "../../assets/upload_area.svg";
import new_collections from '../../assets/new_collections'
import Item from "../../../../../React-Frontend/Components/Item/Item";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const Addproduct = () => {
  const [image, setImage] = useState(null);
  const [productdetails, setProductdetails] = useState({
    name: "",
    image: "",
    category: "vegetable",
    new_price: "",
    old_price: "",
    expiry_date: "", // ✅ optional field
  });

  // Handle text input changes
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductdetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input
  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Add product
  const addProduct = async () => {
    try {
      // 1️⃣ Upload image first
      let formData = new FormData();
      formData.append("product", image);

      const uploadRes = await fetch(`${API_URL}/Upload`, {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();

      if (!uploadData.success) {
        alert("❌ Product failed to add (image upload failed).");
        return;
      }

      for(let item in new_collections)
      {
        if((item.name) === productdetails.name) {
          finalProduct.id = item.id;
          break;
        }
      }

      // 2️⃣ Build final product (expiry_date is optional)
      const finalProduct = {
        ...productdetails,
        image: uploadData.imageurl,
      };

      const productRes = await fetch(`${API_URL}/addproduct`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalProduct),
      });

      const productData = await productRes.json();

      if (productData.success) {
        if (finalProduct.expiry_date) {
          alert("✅ Product Added with Expiry (goes to Quick Discounts)!");
        } else {
          alert("✅ Product Added Successfully!");
        }

        // Reset form
        setProductdetails({
          name: "",
          image: "",
          category: "vegetable",
          new_price: "",
          old_price: "",
          expiry_date: "",
        });
        setImage(null);
      } else {
        alert("❌ Product failed to add.");
      }

      console.log("Server Response:", productData);
    } catch (err) {
      console.error("Error adding product:", err);
      alert("❌ Product failed to add (server error).");
    }
  };

  return (
    <div className="addproduct">
      {/* Product Name */}
      <div className="addproduct-item">
        <p>Product Title</p>
        <input
          type="text"
          name="name"
          value={productdetails.name}
          onChange={changeHandler}
          placeholder="Type Here..."
        />
      </div>

      {/* Product Price */}
      <div className="add-product-price">
        <div className="addproduct-item">
          <p>Old Price</p>
          <input
            type="number"
            name="old_price"
            value={productdetails.old_price}
            onChange={changeHandler}
            placeholder="Type Here..."
          />
        </div>
        <div className="addproduct-item">
          <p>New Price</p>
          <input
            type="number"
            name="new_price"
            value={productdetails.new_price}
            onChange={changeHandler}
            placeholder="Type Here..."
          />
        </div>
      </div>

      {/* Product Category */}
      <div className="addproduct-item">
        <p>Product Category</p>
        <select
          name="category"
          value={productdetails.category}
          onChange={changeHandler}
          className="addproduct-selector"
        >
          <option value="vegetable">Vegetables</option>
          <option value="snack">Snacks</option>
          <option value="dairy">Dairy</option>
          <option value="Essentials">Essentials</option>
        </select>
      </div>

      {/* Expiry Date (optional) */}
      <div className="addproduct-item">
        <p>Expiry Date (optional)</p>
        <input
          type="date"
          name="expiry_date"
          value={productdetails.expiry_date}
          onChange={changeHandler}
        />
      </div>

      {/* Product Image */}
      <div className="addproduct-item">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : uploadarea}
            className="addproduct-thumbnail"
            alt="Upload"
          />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          hidden
          onChange={imageHandler}
        />
      </div>

      {/* Add Button */}
      <button className="addproduct-btn" onClick={addProduct}>
        Add
      </button>
    </div>
  );
};

export default Addproduct;
