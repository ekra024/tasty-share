import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import GoogleSignIn from './GoogleSignIn';
const SignIn = () => {

 const {signInUser, setError, setUser, error} = useAuth() 

 const navigate = useNavigate();
 const location = useLocation();
 const path = location.state || "/";


 const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        const curUser = res.user;

        toast.success("Sucessully Login", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUser(curUser);
        setTimeout(() => {
          navigate(path);
        }, 2500);
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Email or Password invalid", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };


  return (
    <div className="m-0 pt-2">
      <div className="md:w-1/2 w-11/12  mx-auto bg-[#FFF8F0] text-[#2B2B2B] py-10 shadow-[rgba(255,76,41,0.25)] shadow-md">
        <h1 className="text-center text-3xl font-semibold text-[#FF4C29]">
          LogIn Now!!!
        </h1>
        <form onSubmit={handleSignIn} className="py-5">
         
          <div className="w-2/3 mx-auto my-2">
            <input
              className="w-full border-2 p-2 rounded-2xl bg-[#FFF2E9] border-[#FFE5D0] focus:border-[#FF4C29]"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          
          <div className="w-2/3 mx-auto my-2">
            <input
              className="w-full border-2 p-2 rounded-2xl bg-[#FFF2E9] border-[#FFE5D0] focus:border-[#FF4C29] "
              type="current-password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
          <div className='w-2/3 mx-auto my-5'>
            <Link>Forgetting Your Password? </Link>
          </div>
          <div className="w-2/3 mx-auto my-5">
            <button>
             Don't Registered Yet
              <Link state={path} className="text-[#06D6A0] hover:text-[#04B184] font-bold ml-2" to="/signUp">
                Register
              </Link>
            </button>
          </div>
          <div className="w-2/3 mx-auto">
            <button
              className="w-full border p-2 rounded-2xl bg-[#FF4C29] text-white font-semibold hover:bg-[#E03E20]"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        {
          error ? <div className="text-red-600">{error}</div>:""
        }

        <GoogleSignIn />
      </div>
    </div>

  );
};

export default SignIn;