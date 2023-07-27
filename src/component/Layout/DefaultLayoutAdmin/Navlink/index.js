import "./Navlink.css";
export const Navlink = () => {
    return (
        <div className="navlink">
            <a className="navlink-link" href="#">
                <i className="icon fas fa-tachometer-alt"></i>
                Dashboard
            </a>
            <a className="navlink-link" href="#">
                <i className="icon fas fa-wallet"></i>
                Stories
            </a>
            <a className="navlink-link" href="#">
                <i className="icon fas fa-users"></i>
                User
            </a>
            <a className="navlink-link" href="#">
                <i className="icon fas fa-comment-alt"></i>
                Comments
            </a>
            <a className="navlink-link" href="#">
                <i className="icon fas fa-bell"></i>
                Notifications
            </a>
        </div>
    );
};
