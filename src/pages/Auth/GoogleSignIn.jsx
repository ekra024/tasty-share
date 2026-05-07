import React from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const { socialLogin, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state || "/";

  const handleGoogleLogin = () => {
  
    socialLogin()
      .then((res) => {
        const curUser = res.user;

        toast.success("Sucessully Login");

        setUser(curUser);

        setTimeout(() => {
          navigate(path);
        }, 2500);
      })
      .catch(() => { 
        toast.error("Login Unsucessful");
      });
  };

  return (
    <div>
      <div className="w-4/5 border mx-auto border-gray-400"></div>
      <div className="w-2/3 mx-auto mt-4">
        <button
          className="w-full border p-2 rounded-2xl bg-[#FF4C29] text-white font-semibold hover:bg-[#E03E20]"
          onClick={handleGoogleLogin}
        >
          Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
