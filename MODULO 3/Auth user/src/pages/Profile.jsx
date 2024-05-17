import { Outlet } from "react-router-dom";
import { NavProfile } from "../components";
import "./Profile.css";

export const Profile = () => {
  return (
    <>
      <NavProfile />
      <Outlet />
    </>
  );
};
