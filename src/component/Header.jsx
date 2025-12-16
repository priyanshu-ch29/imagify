import React from "react";
import appLogo from "/logo.svg";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle } from "@/utils/toggleSlice";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { logoutUser } from "@/utils/userSlice";
import { BASE_URL } from "@/utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleLogout = async () => {
    const response = await axios.post(
      `${BASE_URL}/auth/logout`,
      {},
      { withCredentials: true }
    );
    if (response?.data?.success) {
      toast({ title: response?.data?.message });
      navigate("/");
      dispatch(logoutUser());
    }
  };
  return (
    <>
      <nav className="flex items-center justify-around min-h-[8vh] max-lg:h-[10vh]">
        <Link to={"/"}>
          <img src={appLogo} alt="" className="logo w-[100px]" />
        </Link>
        <ul className="flex items-center space-x-6">
          <Link to={"/pricing"}>
            <li className="capitalize">pricing</li>
          </Link>
          {!user && (
            <button
              onClick={() => dispatch(handleToggle())}
              className=" w-[8rem] rounded-full px-2 py-2 text-white bg-black "
            >
              Login
            </button>
          )}
          {user && (
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      className="w-[100px]"
                      alt="Tailwind CSS Navbar component"
                      src={user && user.profile}
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <Link to={"/profile"}>
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                  </Link>
                  <li>
                    <a className="justify-between">
                      Credits
                      <span className="badge">{user && user.credits}</span>
                    </a>
                  </li>
                  <li>
                    <a className="justify-between">
                      Plan
                      <span className="badge">{user && user.plans}</span>
                    </a>
                  </li>
                  <li onClick={handleLogout}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
