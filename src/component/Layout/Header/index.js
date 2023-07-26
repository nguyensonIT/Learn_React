import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { saveToken } from "../../../redux/actions";
import { useState } from "react";
import { MenuItem } from "../../MenuItem";

const Header = () => {
    const info = useSelector((state) => state.account.name);
    const [isMenuItem, setIsMenuItem] = useState(false);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(saveToken(localStorage.removeItem("token")));
    };

    const handleClick = () => {
        setIsMenuItem(!isMenuItem);
    };

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-sm-4" id="myTabNav">
                    <img
                        src="https://metawayedu.vn/wp-content/themes/gutenify-base/images/images/logo-edu.png"
                        alt="Profile Image"
                        className="img-fluid"
                    />
                </div>
                <div className="navbar-nav ml-auto info">
                    <a
                        className="nav-link nav-profile-link"
                        id="settings-tab"
                        data-toggle="tab"
                        href="#settings"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                        onClick={handleClick}
                    >
                        <span className="mr-2">{info || ""}</span>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                            alt="Profile Image"
                            className="img-thumbnail rounded-circle profile-image"
                        />
                    </a>
                    {isMenuItem && <MenuItem handleLogout={handleLogout} />}
                </div>
            </nav>
        </div>
    );
};

export default Header;
