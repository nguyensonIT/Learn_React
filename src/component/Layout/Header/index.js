import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { saveToken } from "../../../redux/actions";
import { useState } from "react";
import { PopupLogout } from "../../Popup";

const Header = () => {
    const [isFormLogout, setIsFormLogout] = useState(false);
    const info = useSelector((state) => state.account);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(saveToken(localStorage.removeItem("token")));
        document.body.style.overflow = "auto";
    };
    const handleShowForm = (e) => {
        e.preventDefault();
        setIsFormLogout(!isFormLogout);
        isFormLogout
            ? (document.body.style.overflow = "auto")
            : (document.body.style.overflow = "hidden");
    };

    return (
        <div className="header">
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand" id="myTabNav">
                    <img
                        src="https://metawayedu.vn/wp-content/themes/gutenify-base/images/images/logo-edu.png"
                        alt="Profile Image"
                        className="img-fluid logo-img"
                    />
                </div>
                <div className="navbar-nav ml-auto info">
                    <div className="dropdown">
                        <div
                            className=""
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <div
                                className="nav-link nav-profile-link dropdown-toggle header-info"
                                id="settings-tab"
                                data-toggle="tab"
                                role="tab"
                                aria-controls="settings"
                                aria-selected="false"
                            >
                                <span className="mr-2">{info.name || ""}</span>
                                <img
                                    src={info.avatar}
                                    alt="Profile Image"
                                    className="img-thumbnail rounded-circle profile-image"
                                />
                            </div>
                        </div>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <a className="dropdown-item" href="#">
                                Hồ sơ
                            </a>
                            <a className="dropdown-item" href="#">
                                Ngôn ngữ
                            </a>
                            <span
                                className="dropdown-item"
                                onClick={(e) => handleShowForm(e)}
                            >
                                Đăng xuất
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {isFormLogout && (
                <PopupLogout
                    handleLogout={handleLogout}
                    handleShowForm={handleShowForm}
                />
            )}
        </div>
    );
};

export default Header;
