import { useState } from "react";
import { useForm } from "react-hook-form";
import "./FormUpdate.css";
import { FormCheckBoxHobby } from "../../../../../Signup/component/FormCheckBoxHobby/FormCheckBoxHobby";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "react-loading";

import axios from "axios";
import { useSelector } from "react-redux";
export const FormUpdate = ({
    infoUserEdit,
    setIsShowFormUpdate,
    loadDataUser,
}) => {
    const token = useSelector((state) => state.token);
    const [checkedSex, setCheckedSex] = useState(infoUserEdit.sex);
    const [hobbies, setHobbies] = useState(infoUserEdit.hobby);

    const [isLoading, setIsLoading] = useState(false);

    const urlAPI = "http://localhost:8000/users";

    const urlNhat = "http://192.168.1.161:8000/users";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleSignup = async (data) => {
        try {
            setIsLoading(true);
            await axios.put(
                `${urlAPI || urlNhat}/${infoUserEdit._id}`,
                {
                    name: data.name,
                    username: data.username,
                    password: data.password,
                    birthDay: data.dateOfBirth,
                    address: data.address,
                    email: data.email,
                    phoneNumber: data.phone,
                    sex: data.checkedSex,
                    hobby: data.hobbies,
                },
                {
                    headers: {
                        token: token,
                    },
                },
                loadDataUser(),
                toast.success("Cập nhật thành công người dùng!"),
                handleCencel()
            );
        } catch (err) {
            toast.err("Cập nhật người dùng thất bại, vui lòng thử lại!");
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };
    const handleCencel = () => {
        setIsShowFormUpdate(false);
        document.querySelector("body").style.overflow = "auto";
    };
    const onSubmit = (data) => {
        data.checkedSex = checkedSex;
        data.hobbies = hobbies;
        handleSignup(data);
    };

    const validateDateOfBirth = (value) => {
        const date = new Date(value);
        const currentYear = parseInt(new Date().getFullYear());

        if (
            parseInt(date.getFullYear()) <= currentYear &&
            parseInt(date.getFullYear()) >= 1945
        ) {
            return true;
        }
    };

    const handleHobbySelect = (hobbyName, isChecked) => {
        isChecked
            ? setHobbies([...hobbies, hobbyName])
            : setHobbies(hobbies.filter((hobby) => hobby !== hobbyName));
    };
    return (
        <div className="form-update">
            <div className="form-signup-overley">
                <ToastContainer theme="light" />
                {isLoading && (
                    <div className="overlay-loading">
                        <Loading type={"spin"} className="loadding-custome" />
                    </div>
                )}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="container form-main"
                >
                    <div className="card-header">
                        <h3 className="text-center">
                            Cập nhật người dùng {infoUserEdit.name}
                        </h3>
                    </div>
                    <div className="form-group ">
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
                            defaultValue={infoUserEdit.name}
                            {...register("name", {
                                minLength: {
                                    value: 5,
                                    message: "Tối thiểu 5 ký tự",
                                },
                                maxLength: {
                                    value: 25,
                                    message: "Tối đa 25 ký tự",
                                },
                            })}
                        />
                    </div>
                    <div className="form-group ">
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
                            defaultValue={infoUserEdit.username}
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
                            })}
                        />
                    </div>
                    <div className="form-group ">
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
                            defaultValue={infoUserEdit.password}
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
                            })}
                        />
                    </div>

                    <div className="form-group  form-check-sex-signup">
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

                    <div className="form-group ">
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
                            defaultValue={infoUserEdit.birthDay}
                            {...register("dateOfBirth", {
                                validate: validateDateOfBirth,
                            })}
                        />
                    </div>

                    <div className="form-group ">
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
                            defaultValue={infoUserEdit.email}
                            {...register("email", {
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Email sai định dạng",
                                },
                            })}
                        />
                    </div>

                    <div className="form-group ">
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
                            defaultValue={infoUserEdit.address}
                            {...register("address", {
                                minLength: {
                                    value: 5,
                                    message: "Tối thiểu 5 ký tự",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Tối đa 100 ký tự",
                                },
                            })}
                        />
                    </div>

                    <div className="form-group ">
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
                            defaultValue={infoUserEdit.phoneNumber}
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
                            })}
                        />
                    </div>

                    <div className="form-group ">
                        <label className="label-form">Sở thích:</label>
                        <FormCheckBoxHobby
                            handleHobbySelect={handleHobbySelect}
                            hobbiesCheck={hobbies}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">
                        Cập nhật
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={handleCencel}
                    >
                        Huỷ
                    </button>
                </form>
            </div>
        </div>
    );
};
