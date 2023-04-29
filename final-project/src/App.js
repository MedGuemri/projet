import './App.css';
import Firstpage from './components/Firstpage';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';
import {BrowserRouter as Router} from "react-router-dom"
import {Route , Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router >

        <Header />
        <Routes>
          <Route path="/" element={<Firstpage />  }  />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/product/:productId" exact element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
