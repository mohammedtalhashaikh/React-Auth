import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { PrivateRoute } from "./auth/PrivateRoutes";

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserInfoPage />
            </PrivateRoute>
          }
          exact
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};
