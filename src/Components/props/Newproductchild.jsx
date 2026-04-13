import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Navbar";
import Navbar2 from "../Navbar2";


function Newproductchild() {

    const [productID] = useSearchParams()
    const id = productID.get("id")
    let [Product, setProducts] = useState(null)
    console.log(Product)

    async function getProducts() {
        const res = await axios.post(`http://localhost:8000/get/${id}`).then((res) => {
            const Data = res.data.message
            // console.log( "Products",res)
            setProducts(Data)
        });
    }

    useEffect(() => {
        console.log("res")
        getProducts()
    }, [productID])

    return (
        <div className="main">
             <Navbar />  
      <Navbar2 />
            <div className="head">
                <h2
                    style={{
                        textAlign: "center"
                    }}>Product details</h2>
            </div>

            <div
                style={{
                    display: "flex",
                    width: "80%",
                    marginLeft: "100px"
                }}>
                <div className="moreItem"
                    style={{
                        border: "1px solid",
                        width: "200px"}}>
                    <img src={`data:image/;base64,${btoa(
                        String.fromCharCode(
                            ...new Uint8Array(Product?.image?.data?.data || "")
                        )
                    )}`}
                    />
                </div>
                <div className="More">
                    <h1>{Product?.Title}</h1>
                    <p>category:-{Product?.catagory}</p>
                    <p>description:- {Product?.discription}</p>
                    <p>Price:- ₹{Product?.Rate}</p>

                </div>
            </div>
        </div>
    );
}
export default Newproductchild;