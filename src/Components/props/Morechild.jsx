import Navbar from "../Navbar";
import Navbar2 from "../Navbar2";

function MoreChild(props) {
   
console.log("Data",props)
    return (
        <>
   <div>
        <Navbar />
        <Navbar2 />
     <div className="detail">
        <h1 className="head">Product Details</h1>
    </div>
            <div className="box ">
                <div className="boX2">
                    <img src={props?.data?.images} alt="" />
                </div>
                <div className="More">
                    
                    <h1>{props?.data?.title}</h1>
                    <p>Price :- $ {props?.data?.price}</p>
                    <ul className="Reting">
                        <li className="start">Rating :-</li>
                        <li><i class="fa-solid fa-star"></i></li>                        
                        <li><i class="fa-solid fa-star"></i></li>                        
                        <li><i class="fa-solid fa-star"></i></li>                        
                        <li><i class="fa-solid fa-star"></i></li>                        
                        <li><i class="fa-solid fa-star-half-stroke"></i></li>                        
                    </ul>
                    <p className="description">description :- {props?.data?.description}</p>
                    <button className="butnn">Add To Cart</button>

                </div>
            </div>
   </div>
        </>
    )
}

export default MoreChild;