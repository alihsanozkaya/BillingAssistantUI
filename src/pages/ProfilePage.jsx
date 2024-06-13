import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile as _updateProfile, getProfile, isUserLoggedIn, } from "../redux/actions/AuthActions";
import {  EditFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {

  const getUserProfile = useSelector((state) => state.getUserProfile)
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const [id, setId] = useState(0);
 
  const [disabled, setDisabled] = useState(true);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

     useEffect(() => {
     
      if (id != 0 ) {
        dispatch(getProfile(id))
      }
   
     }, [id,auth.update])
  
  useEffect(() => {
    setId(auth.user.id);
  }, [auth.user.id]);
  
  const toggleDisabled = () => {
    setDisabled(!disabled);
  };
  useEffect(() => {
    if (auth.update) {
      setDisabled(true)
    }
  }, [auth.update])
  useEffect(() => {
    setFirstname(getUserProfile.user?.data?.firstName)
    setLastname(getUserProfile.user?.data?.lastName)
    setEmail(getUserProfile.user?.data?.email)
  }, [getUserProfile])
  
  const updateProfile = (e) => {
    e.preventDefault();
    dispatch(_updateProfile({ id, firstname, lastname, email }));
   
  
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
                value={disabled ? getUserProfile.user?.data?.firstName : firstname}
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
                value={disabled ? getUserProfile.user?.data?.lastName : lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder={t("profilePage.placeholder2")}
                disabled={disabled}
                style={{ backgroundColor: disabled ? "transparent" : "white" }}
              />
            </div>
            <div className="px-4 mb-4">
              <label className="font-medium mt-3">{t("global.email")}</label>
              <input
                type="email"
                required
                className="w-full h-full px-3 py-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={disabled ? getUserProfile.user?.data?.email : email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                disabled={disabled}
                style={{ backgroundColor: disabled ? "transparent" : "white" }}
              />
            </div>
            <button
              className="w-full mt-1 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              onClick={updateProfile}
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
