import "./Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { FormCheckBoxHobby } from "./component/FormCheckBoxHobby/FormCheckBoxHobby";

const Login = () => {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRemaining, setPasswordRemaining] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [checkedSex, setCheckedSex] = useState("Male");
    const [checkHobby, setCheckHobby] = useState([]);

    const handleFullnameInput = (e) => {
        setFullname(e.target.value);
    };
    const handleUsernameInput = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };
    const handlePasswordRemainingInput = (e) => {
        setPasswordRemaining(e.target.value);
    };
    const handleDateBirthInput = (e) => {
        setDateBirth(e.target.value);
    };
    const handleAddressInput = (e) => {
        setAddress(e.target.value);
    };
    const handlePhoneInput = (e) => {
        setPhone(e.target.value);
    };
    const handleHobbySelect = (hobbyName, isChecked) => {
        if (isChecked) {
            setCheckHobby([...checkHobby, hobbyName]);
        } else {
            setCheckHobby(checkHobby.filter((id) => id !== hobbyName));
        }
    };

    const handleSignup = () => {
        console.log({
            fullname: fullname,
            username: username,
            password: password,
            passwordRemaining: passwordRemaining,
            dateBirth: dateBirth,
            address: address,
            phone: phone,
            checkHobby: [checkHobby],
        });
    };

    return (
        <div className="form-signup">
            <div className="form-signup-overley">
                <form className="container form-main">
                    <div className="card-header">
                        <h3 className="text-center">Đăng ký</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2" className="label-form">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Nhập họ và tên"
                            onChange={handleFullnameInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail4" className="label-form">
                            Tên tài khoản
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Nhập tên tài khoản"
                            onChange={handleUsernameInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword4" className="label-form">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Nhập mật khẩu"
                            onChange={handlePasswordInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword5" className="label-form">
                            Nhập lại mật khẩu
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword5"
                            placeholder="Nhập lại mật khẩu"
                            onChange={handlePasswordRemainingInput}
                        />
                    </div>
                    <div className="form-group form-check-sex-signup">
                        <label className="label-form">Giới tính: </label>
                        <input
                            className="form-check-input-sex"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            defaultChecked={checkedSex === "Male"}
                            onChange={() => setCheckedSex("Male")}
                        />
                        <label
                            className="label-sex-signup"
                            htmlFor="flexRadioDefault2"
                        >
                            Male
                        </label>
                        <input
                            className="form-check-input-sex"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked={checkedSex === "Female"}
                            onChange={() => setCheckedSex("Female")}
                        />
                        <label
                            className="label-sex-signup"
                            htmlFor="flexRadioDefault1"
                        >
                            Female
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDate6" className="label-form">
                            Ngày sinh
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="inputDate6"
                            placeholder="Nhập lại mật khẩu"
                            onChange={handleDateBirthInput}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress" className="label-form">
                            Địa chỉ
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="vd: Hải Dương,..."
                            onChange={handleAddressInput}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputCity" className="label-form">
                            Số điện thoại
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="inputCity"
                            placeholder="vd: +84 399999999"
                            onChange={handlePhoneInput}
                        />
                    </div>

                    <div className="form-group">
                        <label>Sở thích</label>
                        <FormCheckBoxHobby
                            handleHobbySelect={handleHobbySelect}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={handleSignup}
                    >
                        Đăng ký
                    </button>
                    <Link className="btn btn-primary btn-block" to="/">
                        Trở lại
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;