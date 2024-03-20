import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { Login, getUserVerificationStatus } from "../redux/actions/AuthActions";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  
  const {t} = useTranslation()
  const userLogin = async (e) => {
    e.preventDefault();
    const verificationStatus = await dispatch(getUserVerificationStatus(email));
    if (
      verificationStatus &&
      verificationStatus.userVerificationStatus === true
    ) {
      // Eğer kullanıcı doğrulamışsa giriş yap
      dispatch(Login({ email, password }));
    } else {
      // Kullanıcı doğrulanmamışsa, hata mesajı göster
      message.error("Hesabınız doğrulanmamış. Giriş yapılamaz.");
    }
  };
  useEffect(() => {
    if (token) {
      dispatch(getUserVerificationStatus(email));
      message.success("Başarıyla giriş yapıldı!");
      navigate("/", { replace: true });
    }
  }, [token, navigate, dispatch, email]);

  return (
    <MainLayout>
      <main className="w-full flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600 space-y-8 mt-4 shadow-lg bg-gray-100">
          <div className="text-center">
            <div className="mt-3 space-y-2">
              <>
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                {t('global.login')}
                </h3>
                <p className="">
                {t('loginPage.description')} {" "}
                  <Link
                    to="/register"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                  {t('global.register')}
                  </Link>
                </p>
              </>
            </div>
          </div>
          <form>
            <div className="px-4">
              <label className="font-medium mt-1">{t('global.email')}</label>
              <input
                type="email"
                required
                className="w-full h-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
              />
            </div>
            <div className="px-4">
              <label className="font-medium mt-3">{t('global.password')}</label>
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
                  {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </button>
              </div>
            </div>
            <button
              className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              onClick={userLogin}
            >
              {t('global.login')}
            </button>
          </form>
        </div>
      </main>
    </MainLayout>
  );
};

export default LoginPage;