import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedAuth({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuth) navigate("/");
    },
    [isAuth, navigate]
  );

  if (isAuth) return children;
  else return null;
}

export default ProtectedAuth;
