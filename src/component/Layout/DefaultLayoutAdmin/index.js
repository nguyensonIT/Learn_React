import { useState } from "react";
import Header from "../Header";
import "./DefaultLayoutAdmin.css";
import { Navlink } from "./Navlink";

const DefaultLayoutAdmin = ({ children }) => {
    const [isShow, setIsShow] = useState(true);
    const style = {
        sidebar: {
            width25: "25%",
            width1: "3%",
            bgHide: "#fff",
            bgShow: "#000",
        },
        content: {
            width100: "94%",
            width68: "68%",
        },
        icon: {
            black: "#000",
            light: "#f8f9fa",
        },
    };
    const handleClose = () => {
        setIsShow(!isShow);
    };
    return (
        <div className="container-admin">
            <Header />
            <div className="">
                <div
                    className="sidebar-admin"
                    style={{
                        width: `${
                            isShow
                                ? style.sidebar.width25
                                : style.sidebar.width1
                        }`,
                        background: `${
                            isShow ? style.sidebar.bgShow : style.sidebar.bgHide
                        }`,
                    }}
                >
                    <span
                        className="close"
                        onClick={handleClose}
                        style={{
                            color: `${
                                isShow ? style.icon.light : style.icon.black
                            }`,
                        }}
                    >
                        {isShow ? (
                            <i className="fas fa-times"></i>
                        ) : (
                            <i className="fas fa-bars"></i>
                        )}
                    </span>
                    {isShow && <Navlink />}
                </div>
                <div
                    className="content-admin"
                    style={{
                        width: `${
                            isShow
                                ? style.content.width68
                                : style.content.width100
                        }`,
                    }}
                >
                    <div className="content-admin-content">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayoutAdmin;
