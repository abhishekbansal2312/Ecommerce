import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, SignIn, SignUp, About, Profile, Header } from "./imports";
import PrivateRoute from "./components/PrivateRoute";
import ProductList from "./pages/ProductList";
import ProductForm from "./pages/ProductForm";
import Footer from "./components/Footer";
import Contact from "./pages/contact";
import Cart from "./pages/Cart";
import ProductListing from "./pages/ProductListing";
import { useSelector } from "react-redux";
import AccessDenied from "./pages/AccessDenied";
import ProductPage from "./pages/ProductPage";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-gray-50">
      <BrowserRouter className="">
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductPage />} />

            <Route path="/products" element={<ProductList />} />
            <Route
              path="/product-form"
              element={
                currentUser && currentUser.isAdmin ? (
                  <ProductForm />
                ) : (
                  <AccessDenied />
                )
              }
            />

            <Route path="/cart" element={<Cart />} />

            <Route
              path="/product-listing"
              element={
                currentUser && currentUser.isAdmin ? (
                  <ProductListing />
                ) : (
                  <AccessDenied />
                )
              }
            />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
