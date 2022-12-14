import { testRoute } from "./testRoute";
import { signupRoute } from "./signupRoute";
import { loginRoute } from "./loginRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
import { verifyEmailRoute } from "./verifyEmailRoute";
import { forgotPasswordRoute } from "./forgotPasswordRoute";
import { resetPasswordRoute } from "./resetPasswordRoute";
import { getGoogleOAuthUrlRoute } from "./getGoogleOAuthUrlRoute";
import { googleOauthCallbackRoute } from "./googleOauthCallbackRoute";

export const routes = [
  testRoute,
  signupRoute,
  loginRoute,
  updateUserInfoRoute,
  verifyEmailRoute,
  forgotPasswordRoute,
  resetPasswordRoute,
  getGoogleOAuthUrlRoute,
  googleOauthCallbackRoute,
];
