import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../../redux/actions/users/userActions";


import "./navbar.css";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
    console.log(navigate);
  const logoutHandler = () => {
    dispatch(logoutAction())
    navigate('/logout')
  };

  return (
    <nav className="navbar">
      <span className="brand-navbar navbar-brand mb-0 h1">
        <img
          className="navbar-logo"
          src={require("../../assets/artifyLogo.png")}
          alt="Artify Logo"
        ></img>
        <span className="navbar-title">rtify Ads</span>
      </span>

      <p className="logout-nav">
        <Link  onClick={logoutHandler} to="/login" className="logout">
          Logout
        </Link>
      </p>
    </nav>
  );
}
