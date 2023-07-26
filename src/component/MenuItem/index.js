import { useState } from "react";
import { PopupLogout } from "../Popup";

export const MenuItem = ({ handleLogout }) => {
    const [isFormLogout, setIsFormLogout] = useState(false);
    const handleShowForm = () => {
        isFormLogout
            ? (document.body.style.overflow = "auto")
            : (document.body.style.overflow = "hidden");
        setIsFormLogout(!isFormLogout);
    };
    return (
        <div className="menu-item">
            <div className="nav-menu" id="settings">
                Hồ sơ
            </div>
            <div className="nav-menu" id="menu2">
                Ngôn ngữ
            </div>
            <div className="nav-menu" onClick={handleShowForm}>
                Đăng xuất
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
