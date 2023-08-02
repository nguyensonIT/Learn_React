import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

const Loading = ({ type, color, className }) => (
    <ReactLoading
        className={className}
        type={type}
        color={color}
        height={"50px"}
        width={"50px"}
    />
);

export default Loading;
