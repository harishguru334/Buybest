import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav>
                <div className='nav1'>
                    <div className="icons">
                        <ul >
                            <li>
                                <Link><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li> <Link><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link><i className="fa-brands fa-pinterest-p"></i></Link></li>
                            <li><Link><i className="fa-solid fa-bell"></i></Link></li>
                            <li><Link><i className="fa-brands fa-youtube"></i></Link></li>
                        </ul>
                    </div>
                    <div className="contition">
                        <p>Free shipping for standard order over $100
                        </p>
                    </div>
                    <div className="email">
                        <p>fashe@example.com </p>
                        <p className="u">U... <span>▼</span> </p>
                    </div>
                </div>

            </nav>


        </>
    );
}

export default Navbar;