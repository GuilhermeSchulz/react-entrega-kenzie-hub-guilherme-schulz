import { Navigate, Route, Routes } from "react-router-dom";
import { RenderDashboard } from "../pages/dashboard";
import { RenderLogin } from "../pages/login";
import { RenderHomePage } from "../pages/signup";

const RoutesMain = ({user, setUser}) => (
    <Routes>
        <Route path="/login" element={<RenderLogin setUser={setUser}/>}/>
        <Route path="/signup" element={<RenderHomePage/>}/>
        <Route path="/dashboard" element={<RenderDashboard user={user}/>}/>
        <Route path="*" element={<Navigate to="/login"/>}/>
    </Routes>

)

export default RoutesMain