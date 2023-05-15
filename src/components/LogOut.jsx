import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  localStorage.removeItem("Token");
  navigate("/");
};

export default LogOut;
