import { useCart } from "react-use-cart";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function Cart() {

    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
        useCart();

    if (isEmpty) return <p>Your cart is empty</p>;

    return (
        <>
        <Navbar />
        <Navbar2 />
            <h1 style={{textAlign:"center"}}> Totel Cart Item = ({totalUniqueItems})</h1>

            <ul className="Cart">
                {items.map((item) => (
                    <li className="Cart-items" key={item.id} style={{ listStyleType: "none" }}>
                        <li className="imgs"><img src={item.images} alt="" /></li>
                        <li className="title">{item?.title} &mdash;</li>
                        <li className="BOX">
                           <li> <button className="no"
                                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
                            >
                                -
                            </button></li>
                          <li>  {item.quantity}</li>
                            <li><button className="no1"
                                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
                            >
                                +
                            </button></li>
                        </li>
                        <li className="Price">Price = ${item.price}</li>
                        <button className="no2" onClick={() => removeItem(item.id)}>Remove</button>
                        <li className=" Amount">Totel Amount =</li>
                        <li className="Totel">{item.quantity * item.price}</li>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Cart;