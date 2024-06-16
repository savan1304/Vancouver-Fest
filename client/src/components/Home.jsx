// export default function Home() {
//   return (
//     <div className="home">
//       <h1>Assignment 3</h1>
//     </div>
//   );
// }



import "../css/Home.css";

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const signUp = () => loginWithRedirect({ screen_hint: "signup" });

  return (
    <div className="home">
      <h1>Welcome</h1>
      <div>
        {!isAuthenticated ? (
          <button className="btn-primary" onClick={loginWithRedirect}>
            Login
          </button>
        ) : (
          <button className="btn-primary" onClick={() => navigate("/app")}>
            Enter App
          </button>
        )}
      </div>
      <div>
        <button className="btn-secondary" onClick={signUp}>
          Create Account
        </button>
      </div>
    </div>
  );
}
