import { Navigate, Route, Routes } from "react-router-dom";
import { RenderError } from "../pages/404";
import { RenderDashboard } from "../pages/dashboard";
import { RenderLogin } from "../pages/login";
import { RenderHomePage } from "../pages/signup";

const RoutesMain = () => (
  <Routes>
    <Route index path="/login" element={<RenderLogin/>} />
    <Route path="/signup" element={<RenderHomePage />} />
    <Route path="/dashboard" element={<RenderDashboard/>} />
    <Route path="" element={<Navigate to={"/login"}/>}/>
    <Route path="*" element={<RenderError/>} />
  </Routes>
);

export default RoutesMain;
