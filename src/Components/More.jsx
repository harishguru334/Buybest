import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Navbar from "./Navbar";

function More() {
    const [productId] = useSearchParams();
    let id = productId.get("id");
    let [Products, setProducts] = useState([]);
    // console.log(Products)
    console.log(Products)



    async function getProducts() {
        const data = await fetch("https://dummyjson.com/products");
        const jsondata = await data.json();
        let newData = jsondata.products.find((item) => item.id == id);
        setProducts(newData);

        // console.log(setProducts)
    }
    useEffect(() => {
        getProducts();
    }, []);

    return (

        <div className="box1">
             <Navbar />
             <Navbar2 />
            {/* <p>{Products.id}</p>  */}
            <div className="box">
                <div className="box2">
                    <img src={Products.images} alt="" />
                </div>
                <div className="details">
                    <div className="Moredetails">
                        <h1>Product Details</h1>
                        {/* <p> Product Name :- {Products?.tags[1]}</p> */}
                        <p>specification :- {Products.title}</p>
                        <p>Price :- $ {Products.price}</p>
                        <p>{Products.brand}</p>
                        <p>{Products.warrantyInformation}</p>
                        <p>description:- {Products.description}</p>

                        <button className="butnn">Add To Cart</button>
                    </div>
                    <div className="qr">
                        <img src={Products.qrCode} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default More;