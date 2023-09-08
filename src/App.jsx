import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage';
import Footer from './customer/pages/Footer';
import Product from './customer/pages/Product';
import ProductDetails from './customer/pages/ProductDetails';
import Cart from './customer/pages/Cart';
import CheckOut from './customer/pages/CheckOut';
import Order from './customer/pages/Order';
import OrderDetails from './customer/pages/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './AllRoutes/CustomerRoutes';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
