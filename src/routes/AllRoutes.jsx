import { Navigate, Route, Routes } from "react-router-dom";
import {
  CartPage,
  DashboardPage,
  HomePage,
  Login,
  PagenotFound,
  ProductDetail,
  ProductsList,
  Register,
} from "../pages";
import ProtectedRouter from "./ProtectedRouter";
import OrderPage from "../pages/Order/OrderPage";
import PageNotFound from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRouter>
              <DashboardPage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRouter>
              <CartPage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/order-summary"
          element={
            <ProtectedRouter>
              <OrderPage />
            </ProtectedRouter>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
