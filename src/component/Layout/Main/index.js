import { Route, Routes, Navigate } from "react-router-dom";
import { Profile } from "../../Page/Admin/Profile";
const Main = () => {
    return (
        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<Navigate to="/profile" />} />
        </Routes>
    );
};
export default Main;
