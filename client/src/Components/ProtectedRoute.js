import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HideLoading, ShowLoading } from "../redux/loaderSlice";
import { GetCurrentUser } from "../apiCalls/users";
import { SetUser } from "../redux/userSlice";
import { message } from "antd";

export default function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function getPresentUser() {
    try {
      dispatch(ShowLoading());
      const response = await GetCurrentUser();
      dispatch(HideLoading());
      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        dispatch(SetUser(null));
        message.error(response.message);
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (err) {
      dispatch(HideLoading());
      dispatch(SetUser(null));
      message.error(err.message);
      localStorage.removeItem("/login");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getPresentUser();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    user && (
      <div className="layout p-1">
        <div className="header bg-primary flex justify-between p-2">
          <div>
            <h1
              className="text-2xl text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Book My Show {user.isAdmin ? "(Admin)" : ""}
            </h1>
          </div>

          <div className="bg-white gap-1 p-1 flex">
            <i className="ri-shield-user-line text-primary mt-1"></i>
            <h1
              className="text-sm underline"
              onClick={() => {
                if (user.isAdmin) {
                  navigate("/admin");
                } else {
                  navigate("/profile");
                }
              }}
            >
              {user.name}
            </h1>

            <i
              className="ri-logout-box-r-line mt-1 cursor-pointer"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            ></i>
          </div>
        </div>

        <div className="content mt-1 p-1">{children}</div>
      </div>
    )
  );
}
