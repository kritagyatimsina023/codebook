import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/index.jsx";
import { CartProvider, FilterProvider } from "./context";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <Toaster closeButton={false} autoClose={3000} position="top-center" />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </StrictMode>
);
