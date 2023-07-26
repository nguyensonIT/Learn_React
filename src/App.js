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
import { Profile } from "./component/Page/Profile";

function App() {
    const token = useSelector((state) => state.token);

    const dispatch = useDispatch();

    const fetchData = async (token) => {
        try {
            const res = await axios.get("http://localhost:8000/profile", {
                params: {
                    token: token,
                },
            });
            dispatch(saveAccount({ name: res.data.user.name }));
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
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/*" element={<Navigate to="/profile" />} />
                </Routes>
            </Router>
        );
    }

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
