import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage';
import Footer from './customer/pages/Footer';
import Product from './customer/pages/Product';
import ProductDetails from './customer/pages/ProductDetails';
import Cart from './customer/pages/Cart';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        <Cart/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
