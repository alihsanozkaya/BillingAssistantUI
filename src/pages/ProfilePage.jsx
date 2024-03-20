import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register as _register, sendEmail } from "../redux/actions/AuthActions";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  EditFilled,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const userSignUp = (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, password, confirmPassword };
    dispatch(_register(user));
  };

  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    setUserEmail(auth.user.email);
  }, [auth.user.email]);

  useEffect(() => {
    if (auth && auth.authenticate) {
      dispatch(sendEmail(email));
    }
  }, [auth, auth.authenticate, navigate, auth.user.email]);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <MainLayout>
      <main className="w-full  flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600 space-y-8 mt-4 shadow-lg bg-gray-100">
          <button
            className="shadow-md bg-gray-200 rounded-lg"
            onClick={toggleDisabled}
          >
            <EditFilled className="display-4 text-amber-500" />
          </button>
          <div className="text-center mt-3">
            <div className="m-2 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                {t("profilePage.myProfile")}
              </h3>
            </div>
          </div>
          <form>
            <div className="px-4">
              <label className="font-medium mt-3">
                {t("global.name")}
              </label>
              <input
                type="name"
                required
                className="w-full h-full px-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={disabled ? auth.user.firstName : firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder={t("profilePage.placeholder1")}
                disabled={disabled}
                style={{ backgroundColor: disabled ? "transparent" : "white" }}
              />
            </div>
            <div className="px-4">
              <label className="font-medium mt-3">{t("global.surname")}</label>
              <input
                type="name"
                required
                className="w-full h-full px-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={disabled ? auth.user.lastName : lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder={t("profilePage.placeholder2")}
                disabled={disabled}
                style={{ backgroundColor: disabled ? "transparent" : "white" }}
              />
            </div>
            <div className="px-4">
              <label className="font-medium mt-3">{t("global.email")}</label>
              <input
                type="email"
                required
                className="w-full h-full px-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={disabled ? auth.user.email : email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                disabled={disabled}
                style={{ backgroundColor: disabled ? "transparent" : "white" }}
              />
            </div>
            <div className="px-4">
              <label className="font-medium mt-3">{t("global.password")}</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full h-full px-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={disabled}
                  style={{
                    backgroundColor: disabled ? "transparent" : "white",
                  }}
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
            <div className="px-4">
              <label className="font-medium mt-3">{t("registerPage.confirmPassword")}</label>
              <div className="relative mb-4">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="w-full h-full px-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={disabled}
                />
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                >
                  {showConfirmPassword ? (
                    <EyeOutlined />
                  ) : (
                    <EyeInvisibleOutlined />
                  )}
                </button>
              </div>
            </div>
            <button
              className="w-full mt-1 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              onClick={userSignUp}
              hidden={disabled ? "hidden" : ""}
            >
              {t("global.update")}
            </button>
          </form>
        </div>
      </main>
    </MainLayout>
  );
};

export default ProfilePage;
