import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import GoogleSignIn from "./GoogleSignIn";

const SignUp = () => {
  const { user, error, setError, createUser, setUser, profile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state || "/";

  function validatePassword(password) {
    const minLength = /.{6,}/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (!minLength.test(password)) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    if (!upperCase.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!lowerCase.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return false;
    }
    return true;
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!validatePassword(password)) {
      return;
    }

    createUser(email, password).then(() => {
      profile(name, photo)
        .then( () => {
          setUser(user);
          setError(null);
          toast.success("Sucessully Login", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          setTimeout(() => {
            navigate(path);
          }, 2500);
        })
        .catch(() => {
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
    });
  };

  return (
    <div className="m-0 pt-2">
      <div className="md:w-1/2 w-11/12  mx-auto bg-[#FFF8F0] text-[#2B2B2B] py-10 shadow-[rgba(255,76,41,0.25)] shadow-md">
        <h1 className="text-center text-3xl font-semibold text-[#FF4C29]">
          Register Now!!!
        </h1>
        <form onSubmit={handleSignUp} className="py-5">
          <div className="w-2/3 mx-auto">
            <input
              className="w-full border-2 p-2 rounded-2xl bg-[#FFF2E9] border-[#FFE5D0] focus:border-[#FF4C29] "
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="w-2/3 mx-auto my-2">
            <input
              className="w-full border-2 p-2 rounded-2xl bg-[#FFF2E9] border-[#FFE5D0] focus:border-[#FF4C29]"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="w-2/3 mx-auto">
            <input
              className="w-full border-2 p-2 rounded-2xl bg-[#FFF2E9] border-[#FFE5D0] focus:border-[#FF4C29] "
              type="url"
              name="photo"
              placeholder="Enter Your Photo URL"
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
          <div className="w-2/3 mx-auto my-5">
            <button>
              Are You Already Registred
              <Link
                className="text-[#06D6A0] hover:text-[#04B184] font-bold ml-2"
                to="/signIn"
              >
                LogIn
              </Link>
            </button>
          </div>
          <div className="w-2/3 mx-auto">
            <button
              className="w-full border p-2 rounded-2xl bg-[#FF4C29] text-white font-semibold hover:bg-[#E03E20]"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className="w-8/12 mx-auto">
          {error ? <div className="text-red-600">{error}</div> : ""}
        </div>

        <GoogleSignIn />
      </div>
    </div>
  );
};

export default SignUp;
