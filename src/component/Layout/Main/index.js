import { Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "../../Page/Admin/Dashboard";
import Stories from "../../Page/Admin/Stories";
import Users from "../../Page/Admin/Users";
import Comments from "../../Page/Admin/Comments";
import Notification from "../../Page/Admin/Notification";
const Main = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Navigate to="/dashboard" />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/users" element={<Users />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/notifications" element={<Notification />} />
        </Routes>
    );
};
export default Main;
