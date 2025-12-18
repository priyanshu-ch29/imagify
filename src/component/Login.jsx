import React, { useEffect, useState } from "react";
import appLogo from "/logo.svg";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle } from "@/utils/toggleSlice";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { addUser } from "@/utils/userSlice";
import LoadingButton from "./LoadingButton";
import { BASE_URL } from "@/utils/constant";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const toggle = useSelector((store) => store.toggle.toggle);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { name, email, password } = formData;
    setLoading(true);
    try {
      if (!isSignUp) {
        const response = await axios.post(
          `${BASE_URL}/auth/login`,
          { email: email, password: password },
          {
            withCredentials: true,
          }
        );
        if (response?.data?.success) {
          toast({
            title: response?.data?.message,
          });
          navigate("/");
          dispatch(handleToggle());
          dispatch(addUser(response?.data?.user));
        }
      } else {
        const response = await axios.post(
          `${BASE_URL}/auth/register`,
          { name: name, email: email, password: password },
          {
            withCredentials: true,
          }
        );
        if (response?.data?.success) {
          toast({
            title: response?.data?.message,
            description: "Now Click on the login button",
          });
          setIsSignUp(false);
        }
      }
    } catch (error) {
      console.log(error);
      toast({ title: "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }

    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <>
      <div
        className={`absolute top-0 h-[100vh] w-full transition-all duration-100 ${toggle ? "block" : "hidden"
          } backdrop-blur-sm bg-black/30`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <form
            className="w-[25rem] max-md:w-[90vw] min-h-[40vh] rounded-lg shadow-lg px-5 py-5 backdrop-blur-sm bg-white/80"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <RxCross2
                onClick={() => dispatch(handleToggle())}
                className="absolute right-0 text-3xl cursor-pointer"
              />
              <img className="w-[100px] mx-auto" src={appLogo} alt="" />
              <div className="text-center my-5">
                <h1 className="text-black">Welcome to Imagify</h1>
                <p className="text-black">Download AI-Generated Images using Text</p>
              </div>
            </div>
            {isSignUp && (
              <div className="my-5">
                <label className="block font-semibold text-black">Name</label>
                <input
                  className="mt-2 w-full px-2 py-2 rounded-lg outline-none text-white"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            )}
            <div>
              <label className="block font-semibold text-black">Email</label>
              <input
                className="mt-2 w-full px-2 py-2 rounded-lg outline-none text-white"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="my-5">
              <label className="block font-semibold text-black">Password</label>
              <input
                className="mt-2 w-full px-2 py-2 rounded-lg outline-none text-white"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {!isSignUp && (
              <Link to={"/forgot-password"} target="__blank">
                <p className="text-right text-black mt-2 font-bold hover:underline">
                  Forgot Password?
                </p>
              </Link>
            )}
            {loading ? (
              <LoadingButton />
            ) : (
              <button className="bg-black mt-5 text-white rounded-full w-full py-2 px-2 cursor-pointer">
                {isSignUp ? "Register" : "Login"}
              </button>
            )}
            {isSignUp ? (
              <p className="mt-2 text-center text-black">
                Have an Account?{" "}
                <span
                  onClick={() => setIsSignUp(false)}
                  className="hover:underline cursor-pointer text-black"
                >
                  Login
                </span>
              </p>
            ) : (
              <p className="mt-2 text-center text-black">
                Not a Member?{" "}
                <span
                  onClick={() => setIsSignUp(true)}
                  className="hover:underline cursor-pointer text-black"
                >
                  Register
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
