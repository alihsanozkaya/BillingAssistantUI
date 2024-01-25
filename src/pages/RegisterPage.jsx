import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register as _register, sendEmail } from "../redux/actions/AuthActions";
import { message } from "antd";
import { EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons';
import SuccessResult from "../components/Results/SuccessResult";

const RegisterPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userSignUp = (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, password, confirmPassword};
    dispatch(_register(user));
  };
const [userEmail, setUserEmail] = useState("")
useEffect(() => {
  setUserEmail(auth.user.email)
}, [auth.user.email])

  useEffect(() => {
    if (auth && auth.authenticate) {
      dispatch(sendEmail(email));
    }
  }, [auth, auth.authenticate, navigate,auth.user.email]);

  return (
    <MainLayout>
      {auth && auth.authenticate ? <SuccessResult userEmail={email}/> : (
        <main className="w-full  flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600 space-y-8">
          <div className="text-center">
            <div className="mt-5 space-y-2">
                <>
                  <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                    Üye ol
                  </h3>
                  <p className="">
                    Bir hesabınız varsa{" "}
                    <Link
                      to="/login"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Giriş yap{" "}
                    </Link>
                  </p>
                </>
            </div>
          </div>
          <form>
            <div>
              <label className="font-medium mt-3">Ad</label>
              <input
                type="name"
                required
                className="w-full h-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Adınızı giriniz"
              />
            </div>
            <div>
              <label className="font-medium mt-3">Soyad</label>
              <input
                type="name"
                required
                className="w-full h-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Soyadınızı giriniz"
              />
            </div>
            <div>
              <label className="font-medium mt-3">Email</label>
              <input
                type="email"
                required
                className="w-full h-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
              />
            </div>
            <div>
              <label className="font-medium mt-3">Şifre</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full h-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
                </button>
              </div>
            </div>
            <div>
              <label className="font-medium mt-3">Tekrardan Şifre</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="w-full h-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                >
                  {showConfirmPassword ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
                </button>
              </div>
            </div>
            <button
              className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              onClick={userSignUp}
            >
              Üye ol
            </button>
          </form>
        </div>
      </main>
      )}
    </MainLayout>
  );
};

export default RegisterPage;