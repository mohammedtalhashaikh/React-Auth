import { getGoogleOauthUrl } from "../util/getGoogleOAuthUrl";

export const getGoogleOAuthUrlRoute = {
  path: "/auth/google/url",
  method: "get",
  handler: (req, res) => {
    const url = getGoogleOauthUrl();
    res.status(200).json({ url });
  },
};
