import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from "axios";
import { useQueryParams } from "../util/useQueryParams";

export const LoginPage = () => {
  const [, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [googleOautUrl, setGoogleOauthUrl] = useState("");

  const { token: oauthToken } = useQueryParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (oauthToken) {
      setToken(oauthToken);
      navigate("/");
    }
  }, [oauthToken, setToken, navigate]);

  useEffect(() => {
    const loadOauthUrl = async () => {
      try {
        const response = await axios.get("/auth/google/url");
        const url = response.data.url;
        setGoogleOauthUrl(url);
      } catch (e) {
        console.log(e);
      }
    };
    loadOauthUrl();
  }, []);

  const onLoginClick = async () => {
    try {
      const response = await axios.post("/api/login", {
        email: emailValue,
        password: passwordValue,
      });

      const { token } = response.data;
      setToken(token);
      navigate("/");
    } catch (e) {
      setErrorMessage(e.message);
    }
  };
  return (
    <div className="content-container">
      <h1>Log In</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        type="text"
        placeholder="someone@gmail.com"
      />
      <input
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type="password"
        placeholder="password"
      />
      <hr />
      <button disabled={!emailValue || !passwordValue} onClick={onLoginClick}>
        Log In
      </button>
      <button onClick={() => navigate("/forgot-password")}>
        Forgot your password ?
      </button>
      <button onClick={() => navigate("/signup")}>
        Don't have an account ? Sign up
      </button>
      <button
        onClick={() => {
          window.location.href = googleOautUrl;
        }}
        disabled={!googleOautUrl}
      >
        Log In with Google
      </button>
    </div>
  );
};
