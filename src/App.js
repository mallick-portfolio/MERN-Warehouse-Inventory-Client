import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header/Header";
import Home from "./components/pages/Home/Home";
import Register from "./components/Register/Register.jsx";
import Login from "./components/pages/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound.jsx";
import ProtectedRoute from "./components/shared/Protected/ProtectedRoute.jsx";
import ProductDetails from "./components/shared/ProductDetails/ProductDetails.jsx";
import Footer from "./components/pages/Footer/Footer.jsx";
import Inventory from "./components/pages/Inventory/Inventory.jsx";
import AddProduct from "./components/pages/AddProduct/AddProduct.jsx";
import Blogs from "./components/pages/Blogs/Blogs.jsx";
import AllProducts from "./components/pages/AllProducts/AllProducts.jsx";
import useProducts from "./hooks/useProducts.js";
import Loading from "./components/shared/Loading/Loading.jsx";
function App() {
  // eslint-disable-next-line no-unused-vars
  const [prodcuts, setProducts, loading] = useProducts();
  return (
    <div className="overflow-hidden">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route
              path="/manage-inventory"
              element={
                <ProtectedRoute>
                  <Inventory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/inventory/:id"
              element={
                <ProtectedRoute>
                  <ProductDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-items"
              element={
                <ProtectedRoute>
                  <AllProducts />
                </ProtectedRoute>
              }
            />

            {/* 404 page route/ Page not found route */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
