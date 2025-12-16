import { toast } from "@/hooks/use-toast";
import { BASE_URL } from "@/utils/constant";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Reset = () => {
  const [newPassword, setnewPassword] = useState("");
  const navigate = useNavigate();
  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/reset-password`,
        {
          newPassword: newPassword,
        },
        {
          withCredentials: true,
        }
      );
      if (response?.data?.success) {
        toast({ title: response?.data?.message });
        navigate("/");
      }
    } catch (error) {
      toast({ title: error?.response?.data?.message });
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="p-5">
          <input
            value={newPassword}
            onChange={(e) => setnewPassword(e.currentTarget.value)}
            placeholder="new password"
            className="block w-full my-3 py-2 px-2 rounded-md bg-gray-100 outline-none"
            type="text"
          />
          <button
            onClick={handleResetPassword}
            className="w-full my-5 bg-black text-white py-2 rounded-md font-bold"
          >
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Reset;
