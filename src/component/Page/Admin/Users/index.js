import "./Users.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Popup } from "../../../components/Popup";
import { FormUpdate } from "./components/Update";
function Users() {
    const token = useSelector((state) => state.token);
    const [users, setUsers] = useState([]);
    const [isShowPopup, setIsShowPopup] = useState(false);
    const [isShowFormUpdate, setIsShowFormUpdate] = useState(false);
    const [infoUserDelete, setInfoUserDelete] = useState({});
    const [infoUserEdit, setInfoUserEdit] = useState({});

    const [checkedSex, setCheckedSex] = useState("all");

    const handleDelete = async () => {
        await axios
            .delete(`http://localhost:8000/users/${infoUserDelete._id}`)
            .then((res) => {
                console.log(res);
                setIsShowPopup(!isShowPopup);
            })
            .catch((err) => {
                console.log(err);
                setIsShowPopup(!isShowPopup);
            });
    };
    const handleEdit = (info) => {
        setIsShowFormUpdate(!isShowFormUpdate);
        document.querySelector("body").style.overflow = "hidden";
        setInfoUserEdit(info);
    };
    const handleShowForm = (info) => {
        setIsShowPopup(!isShowPopup);
        setInfoUserDelete(info);
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/users", {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                return setUsers(res.data);
            });
    }, [token]);
    return (
        <div className="container">
            {/* Popup  */}
            {isShowPopup && (
                <Popup
                    handleSubmit={handleDelete}
                    handleShowForm={handleShowForm}
                    title="Xóa người dùng"
                    content={`Bạn có chắc muốn xóa người dùng ${infoUserDelete.name} này?`}
                    btnSubmitText="Delete"
                />
            )}
            {isShowFormUpdate && (
                <FormUpdate
                    infoUserEdit={infoUserEdit}
                    setIsShowFormUpdate={setIsShowFormUpdate}
                />
            )}

            <div className="header-user">
                <h1>Users</h1>
                <div className="header-search">
                    <div className="header-search-inp">
                        <input type="text" placeholder="Tìm kiếm" />
                        <button className="header-search-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="form-check-sex">
                        <input
                            className="form-check-input-sex"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            defaultChecked={checkedSex === "Male"}
                            onChange={() => setCheckedSex("Male")}
                        />
                        <label
                            className="label-sex"
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
                            className="label-sex"
                            htmlFor="flexRadioDefault1"
                        >
                            Female
                        </label>
                        <input
                            className="form-check-input-sex"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            defaultChecked={checkedSex === "all"}
                            onChange={() => setCheckedSex("all")}
                        />
                        <label
                            className="label-sex"
                            htmlFor="flexRadioDefault3"
                        >
                            All
                        </label>
                    </div>
                </div>
            </div>
            <div className="content">
                <table className="table">
                    <thead>
                        <tr className="">
                            <th>Username</th>
                            <th>Họ & tên</th>
                            <th>Giới tính</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Địa chỉ</th>
                            <th>Vai trò</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.sex}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <i
                                            onClick={() => handleEdit(user)}
                                            className="fas fa-user-edit user-icon"
                                        ></i>
                                    </td>
                                    <td>
                                        <i
                                            onClick={() => handleShowForm(user)}
                                            className="fas fa-trash user-icon"
                                        ></i>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
