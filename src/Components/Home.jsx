import Frontpage from "./Frontpage";
import Slide from "./Slide";
// import ProductLayout from "./Products/ProductLayout";
// import Products from "./Products/Products";
import Footer from "./Footer";
import NewProducts from "./NewProducts";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";



function Home() {
    return (
        <div>
            <Navbar />
            <Navbar2 />
            <div>
                <Slide />
                {/* <NewProducts /> */}
                <Frontpage />
                {/* <ProductLayout /> */}
                {/* <Products /> */}
                <Footer />
            </div>

        </div>
    )
}
export default Home;