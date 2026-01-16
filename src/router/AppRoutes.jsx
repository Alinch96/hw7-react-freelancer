import React from "react";
import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsList from "../pages/ProductsList";
import ProductPage from "../pages/ProductPage";
import PaymentPage from "../pages/PaymentPage";
import ContactsPage from "../pages/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage";
import ShopLayout from "../layouts/ShopLayout/ShopLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopLayout />}>
          <Route path="televisions" element={<ProductsList />} />
          <Route path="notebooks" element={<ProductsList />} />
          <Route path="smartphones" element={<ProductsList/>} />
          <Route path="monitors" element={<ProductsList/>} />
        </Route>
        <Route path="shop/:category/:id" element={<ProductPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
