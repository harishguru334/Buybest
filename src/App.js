import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Navbar2 from './Components/Navbar2';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Frontpage from './Components/Frontpage';
import More from './Components/More';
import Slide from './Components/Slide';
import Home from './Components/Home';
import { CartProvider } from 'react-use-cart';
import Cart from './Components/Cart';
import IphoneDetails from './Components/IphoneDetails';
import Products from './Components/Products/Products';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import NewProductschild from './Components/props/Newproductchild';
import Admin from './Components/Admin';
import Dashboard from './Components/Dashboard';
import Flash_Sales from './Components/Flash_Sales';
import Customers from './Components/Customers';
import Analytics from './Components/Analytics';
import Notifications from './Components/Notifications';
import Settings from './Components/Settings';
import AddProducts from './Components/AdminProducts';
import ProductInfo from './Components/CreateProduct';
import EditProducts from './Components/EditProducts';
import CartProduct from './Components/CartProduct';



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Shope' element={<Products />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/LogIn' element={<LogIn />} />
            <Route path='/Frontpage' element={<Frontpage />} />
            <Route path='/More' element={<More />} />
            <Route path='/Slide' element={<Slide />} />
            <Route path='/Cart' element={<CartProduct />} />
            <Route path='/More2' element={<IphoneDetails />} />
            <Route path='/More3' element={<NewProductschild />} />
            <Route path='Blog' element={<Blog />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/CreatePoduct' element={<ProductInfo />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/AddProducts' element={<AddProducts />} />
            <Route path='/Flash_Sales' element={<Flash_Sales />} />
            <Route path='/Customers' element={<Customers />} />
            <Route path='/Analytics' element={<Analytics />} />
            <Route path='/Notifications' element={<Notifications />} />
            <Route path='/Settings' element={<Settings />} />
            <Route path='/edit' element={<EditProducts />} />





          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
