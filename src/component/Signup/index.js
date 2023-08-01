import "./Signup.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import axios from "axios";
import { useState } from "react";
import { FormCheckBoxHobby } from "./component/FormCheckBoxHobby/FormCheckBoxHobby";

const Signup = () => {
    const [checkedSex, setCheckedSex] = useState("Male");
    const [hobbies, setHobbies] = useState([]);
    const [hobbiesErr, setHobbiesErr] = useState([]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.checkedSex = checkedSex;
        data.hobbies = hobbies;
        if (hobbies.length > 0) {
            handleSignup(data);
            setHobbiesErr("");
        } else {
            setHobbiesErr("Vui lòng chọn ít nhất 1 sở thích");
        }
    };

    const validateDateOfBirth = (value) => {
        const date = new Date(value);
        const currentYear = parseInt(new Date().getFullYear());

        if (
            parseInt(date.getFullYear()) <= currentYear &&
            parseInt(date.getFullYear()) >= 1945
        ) {
            return true;
        } else {
            return "Năm sinh không hợp lệ!";
        }
    };

    const handleHobbySelect = (hobbyName, isChecked) => {
        isChecked
            ? setHobbies([...hobbies, hobbyName])
            : setHobbies(hobbies.filter((hobby) => hobby !== hobbyName));
    };

    const password = watch("password");

    const handleSignup = async (data) => {
        try {
            await axios.post("http://localhost:8000/sign-up", {
                name: data.name,
                username: data.username,
                password: data.password,
                birthDay: data.dateOfBirth,
                address: data.address,
                email: data.email,
                phoneNumber: data.phone,
                sex: data.checkedSex,
                hobby: data.hobbies,
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="form-signup">
            <div className="form-signup-overley">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="container form-main"
                >
                    <div className="card-header">
                        <h3 className="text-center">Đăng ký</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2" className="label-form">
                            Họ và tên:
                        </label>
                        <label className="label-form-err">
                            {errors.name?.message}
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Nhập họ và tên"
                            {...register("name", {
                                minLength: {
                                    value: 5,
                                    message: "Tối thiểu 5 ký tự",
                                },
                                maxLength: {
                                    value: 25,
                                    message: "Tối đa 25 ký tự",
                                },
                                required: "Vui lòng nhập họ tên",
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail4" className="label-form">
                            Tên tài khoản:
                        </label>
                        <label className="label-form-err">
                            {errors.username?.message}
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Nhập tên tài khoản"
                            {...register("username", {
                                minLength: {
                                    value: 5,
                                    message: "Tối thiểu 5 ký tự",
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Tối đa 15 ký tự",
                                },
                                pattern: {
                                    value: /^\S*$/,
                                    message: "Không có khoảng trắng",
                                },
                                required: "Vui lòng nhập username",
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword4" className="label-form">
                            Mật khẩu:
                        </label>
                        <label className="label-form-err">
                            {errors.password?.message}
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Nhập mật khẩu"
                            {...register("password", {
                                minLength: {
                                    value: 8,
                                    message: "Tối thiểu 8 ký tự",
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                    message:
                                        "Ít nhất 1 ký tự in hoa, 1 ký tự thường, 1 số và 1 ký tự đặc biệt",
                                },
                                required: "Vui lòng nhập password",
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword5" className="label-form">
                            Nhập lại mật khẩu:
                        </label>
                        <label className="label-form-err">
                            {errors.confirmPassword?.message}
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword5"
                            placeholder="Nhập lại mật khẩu"
                            {...register("confirmPassword", {
                                validate: (value) =>
                                    value === password ||
                                    "Password không trùng khớp.",
                                required: "Password không được để trống",
                            })}
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
                            Nam
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
                            Nữ
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDate6" className="label-form">
                            Ngày sinh:
                        </label>
                        <label className="label-form-err">
                            {errors.dateOfBirth?.message}
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="inputDate6"
                            placeholder="Nhập lại mật khẩu"
                            {...register("dateOfBirth", {
                                validate: validateDateOfBirth,
                                required: "Vui lòng nhập ngày sinh",
                            })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputEmail" className="label-form">
                            Email:
                        </label>
                        <label className="label-form-err">
                            {errors.email?.message}
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Nhập Email"
                            {...register("email", {
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Email sai định dạng",
                                },
                                required: "Vui lòng nhập Email",
                            })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress" className="label-form">
                            Địa chỉ:
                        </label>
                        <label className="label-form-err">
                            {errors.address?.message}
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="vd: Hải Dương,..."
                            {...register("address", {
                                minLength: {
                                    value: 5,
                                    message: "Tối thiểu 5 ký tự",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Tối đa 100 ký tự",
                                },
                                required: "Vui lòng nhập địa chỉ",
                            })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputCity" className="label-form">
                            Số điện thoại:
                        </label>
                        <label className="label-form-err">
                            {errors.phone?.message}
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="inputCity"
                            placeholder="vd: 0399999999"
                            {...register("phone", {
                                pattern: {
                                    value: /^[0-9+]*$/,
                                    message: "Số điện thoại sai định dạng",
                                },
                                minLength: {
                                    value: 10,
                                    message: "Số điện thoại tối thiểu 10 số",
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Số điện thoại tối đa 15 số",
                                },
                                required: "Vui lòng nhập số điện thoại",
                            })}
                        />
                    </div>

                    <div className="form-group">
                        <label className="label-form">Sở thích:</label>
                        <label className="label-form-err">{hobbiesErr}</label>
                        <FormCheckBoxHobby
                            handleHobbySelect={handleHobbySelect}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        // onClick={handleSignup}
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

export default Signup;
