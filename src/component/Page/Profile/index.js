import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import { saveToken } from "../../../redux/actions";

export const Profile = () => {
    const info = useSelector((state) => state.account.name);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(saveToken(localStorage.removeItem("token")));
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myTabNav"
                aria-controls="myTabNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="myTabNav">
                <ul className="nav nav-tabs mr-auto" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                        >
                            Profile
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            id="messages-tab"
                            data-toggle="tab"
                            href="#messages"
                            role="tab"
                            aria-controls="messages"
                            aria-selected="false"
                        >
                            Messages
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            id="settings-tab"
                            data-toggle="tab"
                            href="#settings"
                            role="tab"
                            aria-controls="settings"
                            aria-selected="false"
                        >
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-nav ml-auto">
                <a
                    className="nav-link nav-profile-link"
                    id="settings-tab"
                    data-toggle="tab"
                    href="#settings"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                >
                    <span className="mr-2">{info || ""}</span>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                        alt="Profile Image"
                        className="img-thumbnail rounded-circle profile-image"
                    />
                </a>
            </div>
            <div className="block-logout">
                <p className="block-logout-btn" onClick={handleLogout}>
                    Đăng xuất
                </p>
            </div>
        </nav>
    );
};
