import "./Users.css";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Popup } from "../../../components/Popup";
import { FormUpdate } from "./components/Update";

import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Avatar } from "./components/Avartar";
import { Pagination } from "../../../Pagination";

function Users() {
    const [searchParams, setSearchParams] = useSearchParams();

    const token = useSelector((state) => state.token);
    const [users, setUsers] = useState([]);
    const [infoUserDelete, setInfoUserDelete] = useState({});
    const [infoUserEdit, setInfoUserEdit] = useState({});
    const [search, setSearch] = useState("");
    const [checkedSex, setCheckedSex] = useState("All");
    const [totalPage, setTotalPage] = useState(1);
    const [param, setParam] = useState(
        searchParams.get("page")
            ? {
                  page: parseInt(searchParams.get("page")),
                  limit: 6,
              }
            : {
                  gender: searchParams.get("gender"),
                  key: searchParams.get("key"),
              }
    );

    const [isShowPopup, setIsShowPopup] = useState(false);
    const [isShowFormUpdate, setIsShowFormUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const urlAPI = "http://localhost:8000/users";
    const urlNhat = "";

    // const urlAPI = "";
    // const urlNhat = "http://192.168.1.161:8000/users";

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            setIsShowPopup(!isShowPopup);
            await axios.delete(`${urlAPI || urlNhat}/${infoUserDelete._id}`, {
                headers: {
                    token: token,
                },
            });
            loadDataUser();
            toast.success(`Xóa thành công người dùng ${infoUserDelete.name}`);
        } catch (err) {
            toast.error("Có lỗi xảy ra vui lòng thử lại!");
            setIsShowPopup(!isShowPopup);
            console.log(err);
        } finally {
            setIsLoading(false);
        }
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

    const loadDataUser = async (param) => {
        try {
            const res = await axios.get(urlAPI || urlNhat, {
                headers: {
                    token: token,
                },
                params: param,
            });

            setTotalPage(res.data.totalPages);
            return setUsers(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };
    const handleSearch = () => {
        const paramRemaining = {
            gender: checkedSex,
            key: search,
        };
        setParam(paramRemaining);
        setSearchParams(paramRemaining);
    };

    useEffect(() => {
        loadDataUser(param);
    }, [param]);
    return (
        <div className="container">
            {isLoading && (
                <div className="loading-delete">
                    <div className="loading-delete-content">
                        <ReactLoading
                            type={"spin"}
                            height={"50px"}
                            width={"50px"}
                        />
                    </div>
                </div>
            )}
            <ToastContainer />
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
                    loadDataUser={loadDataUser}
                />
            )}

            <div className="header-user">
                <h1>Users</h1>
                <div className="header-search">
                    <div className="header-search-inp">
                        <input
                            type="text"
                            placeholder="Tìm kiếm"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className="header-search-btn"
                            onClick={handleSearch}
                        >
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
                            defaultChecked={checkedSex === "All"}
                            onChange={() => setCheckedSex("All")}
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
                            <th></th>
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
                        {users.length > 0 ? (
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {
                                                <Avatar
                                                    name={user}
                                                    urlImg={user}
                                                />
                                            }
                                        </td>
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
                                                onClick={() =>
                                                    handleShowForm(user)
                                                }
                                                className="fas fa-trash user-icon"
                                            ></i>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={10} className="loading-info">
                                    Loading...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Pagination
                total={totalPage}
                setSearchParams={setSearchParams}
                setParam={setParam}
            />
        </div>
    );
}

export default Users;
