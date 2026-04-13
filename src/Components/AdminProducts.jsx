import { useEffect, useState } from "react";
import Admin from "./Admin";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { data } from "react-router-dom";


function AddProducts() {
  const [Products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [Loading, setLoading] = useState(false)
  console.log(Products)


  async function getProducts() {
    try {
      const res = await axios.get("http://localhost:8000/product/get").then((res) => {
        setProducts(res.data.message)
      })
     
         } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function deleteProduct(id) {
    try {
      setLoading(true)
      await axios.post(`http://localhost:8000/deleteProduct/${id}`).then((res) => {
        if (res.data.status == true) {
          setProducts((prev) => prev.filter((p) => p._id !== id));
          toast.success("Product deleted successfully")
        } else {
          toast.error("something went Wrong")
        }
      })

    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();
    console.log("Funnccccccc")

    try {
      const res = await axios.post(`http://localhost:8000/product/update/${editProduct._id}`, editProduct, Image).then((res) => {
        console.log(res)
        getProducts()
      })
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <Toaster />
      <Admin />
      <div className="Products" style={{ flex: 1 }}>
        <h2 style={{ textAlign: "center" }}>Products Details</h2>

        {Products.map((item) => (
          <div
            key={item._id}
            style={{
              display: "flex",
              border: "1px solid",
              alignItems: "center",
              margin: "10px 200px",
              padding: "5px",
              borderRadius: "8px",
            }}
          >
            {/* ✅ Safe Image Rendering */}
            {item?.image?.data?.data ? (
              <img
                src={`data:image/jpeg;base64,${btoa(
                  String.fromCharCode(...new Uint8Array(item.image.data.data))
                )}`}
                alt="product"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#ddd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                }}
              >
                No Img
              </div>
            )}

            <div style={{ marginLeft: "15px", flex: 1, display: "flex", justifyContent: "space-between" }}>
              <p>{item?.Title}</p>
              <p>Category: {item?.catagory}</p>
              <p>Price: ₹{item?.Rate}</p>
            </div>

            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => deleteProduct(item._id)}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => {
                setEditProduct(item);
                setShowPopup(true);
              }}
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
        ))}

        {/* ✅ Popup Form */}
        {showPopup && editProduct && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form
              onSubmit={handleUpdate}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "300px",
              }}
            >
              <h3>Edit Product</h3>

              <input
                type="text"
                value={editProduct.Rate}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, Rate: e.target.value })
                }
                placeholder="Title"
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <input
                type="text"
                value={editProduct.Rate}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, Rate: e.target.value })
                }
                placeholder="Rate"
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button type="button" onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddProducts;
