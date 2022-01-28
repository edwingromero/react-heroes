import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // navigate("marvel",{
    //   replace:true
    // });

    const action = {
      type: types.login
    }

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/marvel'

    navigate(lastPath,{
      replace:true
    });
  };

  return (
    <div className="container mt-4">
      <h1>LOGIN</h1>
      <button 
        onClick={handleLogin}
        className="btn btn-primary">Login</button>
    </div>
  );
};
