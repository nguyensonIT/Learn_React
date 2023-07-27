import "./Navlink.css";
import { NavLink } from "react-router-dom";
export const Navlink = () => {
    return (
        <div className="navlink">
            <NavLink
                exact
                className="navlink-link"
                activeClassName="selected"
                to="/dashboard"
            >
                <i className="icon fas fa-tachometer-alt"></i>
                Dashboard
            </NavLink>
            <NavLink
                className="navlink-link"
                activeClassName="selected"
                to="/stories"
            >
                <i className="icon fas fa-wallet"></i>
                Stories
            </NavLink>
            <NavLink
                className="navlink-link"
                activeClassName="selected"
                to="/users"
            >
                <i className="icon fas fa-users"></i>
                User
            </NavLink>
            <NavLink
                className="navlink-link"
                activeClassName="selected"
                to="/comments"
            >
                <i className="icon fas fa-comment-alt"></i>
                Comments
            </NavLink>
            <NavLink
                className="navlink-link"
                activeClassName="selected"
                to="/notifications"
            >
                <i className="icon fas fa-bell"></i>
                Notifications
            </NavLink>
        </div>
    );
};
