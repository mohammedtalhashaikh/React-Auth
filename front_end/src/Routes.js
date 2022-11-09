import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { PrivateRoute } from "./auth/PrivateRoutes";
import { PleaseVerifyEmailPage } from "./pages/PleaseVerifyEmailPage";
import { EmailVerificationLandingPage } from "./pages/EmailVerificationLandingPage";

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
        <Route path="/please-verify" element={<PleaseVerifyEmailPage />} />
        <Route
          path="/verify-email/:verificationString"
          element={<EmailVerificationLandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
