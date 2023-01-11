import MainLayout from "./components/MainLayout";
import Login from "./pages/login";
import './style/global.scss';
import './style/custom.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProductsTemplate from "./pages/products-template";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}
          />
          <Route path="/admin" element={<MainLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductsTemplate />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
