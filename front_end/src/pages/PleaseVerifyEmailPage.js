import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PleaseVerifyEmailPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <>
      <div className="content-container">
        <h1>Thanks for signing up!!</h1>
        <p>
          verification email has been sent to the registered email address
          please verify to access full features.
        </p>
      </div>
    </>
  );
};
