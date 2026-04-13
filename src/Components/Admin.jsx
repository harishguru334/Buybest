import { Link } from "react-router-dom";

function Admin() {

    return (
        <>

            <div className="sidebar">
                <ul>
                    <li><Link to="/CreatePoduct">CreatePoduct</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/AddProducts">Products</Link></li>
                    <li><Link to="/flash_sale">Flash Sales</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                    <li><Link to="/analytics">Analytics</Link></li>
                </ul>
            </div>
            ;


        </>
    )
}
export default Admin;