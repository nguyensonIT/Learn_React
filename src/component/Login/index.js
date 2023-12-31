import "./login.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { saveToken, saveAccount } from "../../redux/actions";
import { Link } from "react-router-dom";

import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("Metaway2023@");
    const [err, setErr] = useState("");
    const dispatch = useDispatch();

    const urlAPILogin = "http://localhost:8000/login";
    const urlAPIProfile = "http://localhost:8000/profile";
    const urlAPILoginNhat = "";
    const urlAPIProfileNhat = "";

    // const urlAPILogin = "";
    // const urlAPIProfile = "";
    // const urlAPILoginNhat = "http://192.168.1.161:8000/login";
    // const urlAPIProfileNhat = "http://192.168.1.161:8000/profile";

    const handleUsernameInput = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(urlAPILogin || urlAPILoginNhat, {
                username: username,
                password: password,
            });
            localStorage.setItem("token", response.data.token);
            const res = await axios.get(urlAPIProfile || urlAPIProfileNhat, {
                headers: {
                    token: response.data.token,
                },
            });
            dispatch(saveToken(response.data.token));
            dispatch(saveAccount(res.data));
        } catch (error) {
            setErr(error?.response?.data.error);
            console.log(error?.response?.data);
        }
        // axios
        //     .post("http://localhost:8000/login", {
        //         username: username,
        //         password: password,
        //     })
        //     .then(function (response) {
        //         localStorage.setItem("token", response.data.token);
        //         axios
        //             .get("http://localhost:8000/profile", {
        //                 params: {
        //                     token: response.data.token,
        //                 },
        //             })
        //             .then((res) => {
        //                 dispatch(saveToken(response.data.token));
        //                 dispatch(saveAccount(res.data.user));
        //             })
        //             .catch(function (error) {
        //                 console.log(error);
        //             });

        //         setErr("");
        //     })
        //     .catch(function (error) {
        //         setErr(error?.response?.data.error);
        //         console.log(error?.response?.data);
        //     });
    };
    return (
        <div className="background">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">Đăng nhập</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="username">
                                            Tên đăng nhập:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Nhập tên đăng nhập"
                                            onChange={handleUsernameInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">
                                            Mật khẩu:
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Nhập mật khẩu"
                                            onChange={handlePasswordInput}
                                        />
                                        <label
                                            htmlFor="err"
                                            style={{ color: "red" }}
                                        >
                                            {err}
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        onClick={handleLogin}
                                    >
                                        Đăng nhập
                                    </button>
                                    <Link
                                        className="btn btn-primary btn-block"
                                        to="/signup"
                                    >
                                        Đăng ký
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
