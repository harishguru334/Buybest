import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Navbar2 from "./Navbar2"


function CartProduct() {

    let [CartProduct, setCartProduct] = useState()

    async function getCartItem() {
        const get = await axios.get("http://localhost:8000/getCarts").then((res) => {
            // console.log("Responce",res)
            setCartProduct(res.data.message)

        })
    }
    useEffect(() => {
        getCartItem()
    }, [CartProduct])

    return (
        <>
            <Navbar />
            <Navbar2 />

        </>
    )
}
export default CartProduct