import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserInfoPage />} exact />
      </Routes>
    </BrowserRouter>
  );
};
