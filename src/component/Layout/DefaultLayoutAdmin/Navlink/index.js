import "./Navlink.css";
import { NavLink } from "react-router-dom";
export const Navlink = () => {
    return (
        <div className="navlink">
            <NavLink
                className={`${({ isActive }) =>
                    isActive ? "active-style " : "none"} navlink-link`}
                to="/dashboard"
            >
                <i className="icon fas fa-tachometer-alt"></i>
                Dashboard
            </NavLink>
            <NavLink
                className={`${({ isActive }) =>
                    isActive ? "active-style " : "none"} navlink-link`}
                to="/stories"
            >
                <i className="icon fas fa-wallet"></i>
                Stories
            </NavLink>
            <NavLink
                className={`${({ isActive }) =>
                    isActive ? "active-style " : "none"} navlink-link`}
                to="/users"
            >
                <i className="icon fas fa-users"></i>
                User
            </NavLink>
            <NavLink
                className={`${({ isActive }) =>
                    isActive ? "active-style " : "none"} navlink-link`}
                to="/comments"
            >
                <i className="icon fas fa-comment-alt"></i>
                Comments
            </NavLink>
            <NavLink
                className={`${({ isActive }) =>
                    isActive ? "active-style " : "none"} navlink-link`}
                to="/notifications"
            >
                <i className="icon fas fa-bell"></i>
                Notifications
            </NavLink>
        </div>
    );
};
