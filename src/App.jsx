import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage';
import Footer from './customer/pages/Footer';

function App() {
  return (
    <div className="">
      <Navigation className="z-50"/>
      <div>
        <HomePage className="-z-10"/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
