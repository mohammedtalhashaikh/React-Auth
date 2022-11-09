import { useNavigate } from "react-router-dom";

export const EmailVerificationSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="content-container">
        <h1>success</h1>
        <p>Thanks for verifying email, Now you can use all the features!!</p>
        <button onClick={() => navigate("/")}>Go to Home Page</button>
      </div>
    </>
  );
};
