import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  localStorage.clear();
  navigate("/");
};

export default LogOut;
