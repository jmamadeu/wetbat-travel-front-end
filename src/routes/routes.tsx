import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home";
import { QuotePage } from "../pages/quote/quote";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quotes/:quoteId" element={<QuotePage />} />
    </Routes>
  );
};
