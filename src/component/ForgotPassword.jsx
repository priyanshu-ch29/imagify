import React, { useState } from "react";
import appLogo from "/logo.svg";
import { Link, useNavigate } from "react-router";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import LoadingButton from "./LoadingButton";
import { BASE_URL } from "@/utils/constant";

const ForgotPassword = () => {
  const [userEmail, setuserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const sendOTPFunction = async () => {
    if (!userEmail) {
      toast({ title: "please enter the valid email" });
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/send-otp`,
        {
          email: userEmail,
        },
        { withCredentials: true }
      );

      if (response?.data?.success) {
        toast({ title: response?.data?.message });
        navigate("/verify-otp");
      }

      if (!response?.data?.success) {
        toast({ title: response?.data?.message });
      }
    } catch (error) {
      toast({ title: error?.response?.data?.message });
    } finally {
      setLoading(false);
    }
    setuserEmail("");
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="p-5">
          <img className="w-[100px] mx-auto" src={appLogo} alt="" />
          <h1 className="text-2xl font-bold my-3">Forgot Password</h1>
          <p className="w-[80%]">
            Enter your email address we send you to link for reset the password
          </p>
          <input
            value={userEmail}
            onChange={(e) => setuserEmail(e.currentTarget.value)}
            className="block w-full my-3 py-2 px-2 rounded-md bg-gray-100 outline-none"
            type="text"
          />
          {loading ? (
            <LoadingButton />
          ) : (
            <button
              onClick={sendOTPFunction}
              className="w-full bg-black text-white py-2 rounded-md font-bold"
            >
              Send Otp
            </button>
          )}
          <Link to={"/"}>
            <p className="text-center mt-4 hover:underline cursor-pointer font-poppins font-bold">
              Back to login
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
