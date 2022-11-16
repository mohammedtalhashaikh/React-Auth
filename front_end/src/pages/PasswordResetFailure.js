import { useNavigate } from "react-router-dom";

export const PasswordResetFailure = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="content-container">
        <h1>Uh oh...</h1>
        <p>Something went wrong while tring to rest your password</p>
        <button onClick={() => navigate("/login")}>back to Login</button>
      </div>
    </>
  );
};
