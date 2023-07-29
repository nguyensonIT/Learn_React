import "./Users.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Users() {
    const token = useSelector((state) => state.token);
    const [users, setUsers] = useState([]);

    const [checkedSex, setCheckedSex] = useState("all");

    useEffect(() => {
        axios
            .get("http://localhost:8000/users", {
                headers: {
                    token: token,
                },
            })
            .then((res) => setUsers(res.data));
    }, [token]);
    return (
        <div className="container">
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
