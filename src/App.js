import "./App.css";
import Login from "./component/Login";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { saveAccount, saveToken } from "./redux/actions";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Main from "./component/Layout/Main";
import DefaultLayoutAdmin from "./component/Layout/DefaultLayoutAdmin";
import Signup from "./component/Signup";

function App() {
    const token = useSelector((state) => state.token);

    // const urlAPINhat = "";
    // const urlAPI = "http://localhost:8000/profile";

    const urlAPI = "";
    const urlAPINhat = "http://192.168.1.161:8000/profile";

    const dispatch = useDispatch();

    const fetchData = async (token) => {
        try {
            const res = await axios.get(urlAPI || urlAPINhat, {
                headers: {
                    token: token,
                },
            });
            dispatch(saveAccount(res.data));
        } catch (err) {
            dispatch(dispatch(saveToken(localStorage.removeItem("token"))));
            console.log(err);
        }
    };

    if (token) {
        fetchData(token);
        return (
            <Router>
                <Routes>
                    <Route
                        exact={true}
                        path="/*"
                        element={
                            <DefaultLayoutAdmin>
                                <Main />
                            </DefaultLayoutAdmin>
                        }
                    />
                </Routes>
            </Router>
        );
    }

    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Login />} />
                {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/*" element={<Signup />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
