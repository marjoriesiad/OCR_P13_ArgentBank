import "./nav.css";
import Logo from "../../assets/argentBankLogo.png";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice.js";

const Nav = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {user ? (
          user.userProfile ? (
            <div className="login-block">
              <div className="login-user">
                <i className="fa fa-user-circle"></i>
                {user.userProfile.firstName}
              </div>
              <div className="login-logout">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <button
                  onClick={() => {
                    dispatch(logout());
                    <Navigate to="/" replace />;
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            </div>
          )
        ) : (
          <div>
            <Link to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
