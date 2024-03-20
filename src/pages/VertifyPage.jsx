import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verification as _verification } from "../redux/actions/AuthActions";
import { useTranslation } from "react-i18next";
import { EmailIcon } from "../components/Icon/EmailIcon";

const VertifyPage = () => {
  const verification = useSelector((state) => state.verification);
  const [verified, setVerified] = useState(false);

  const { email } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setVerified(true);
  }, []);

  const userVerified = () => {
    dispatch(_verification({ email, verified }));
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex items-center justify-center flex-col mt-5">
      <section className="max-w-2xl mx-auto bg-white">
        <div className="h-[200px] bg-[#365CCE] w-full text-white flex items-center justify-center flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[1px] bg-white"></div>
            <EmailIcon />
            <div className="w-10 h-[1px] bg-white"></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-center text-sm sm:text-xl tracking-widest font-normal">
              {t("vertifyPage.thanksMessage")}
            </div>
            <div className="text-xl sm:text-3xl tracking-wider font-bold capitalize">
              {t("vertifyPage.vertifyMessage")}
            </div>
          </div>
        </div>
        <main className="mt-8 px-5 sm:px-10">
          <h2 className="text-gray-700 ">{t("global.hello") + " " + email}</h2>
          <div className="flex items-center mt-4 gap-x-4"></div>
          <p className="mt-4 leading-loose text-gray-600">
          {t("vertifyPage.description")}
          </p>
          <button
            className="px-6 py-2 mt-6 text-sm font-bold 
          tracking-wider text-white capitalize transition-colors
           duration-300 transform bg-orange-600 rounded-lg 
           hover:bg-orange-500 focus:outline-none focus:ring 
           focus:ring-orange-300 focus:ring-opacity-80"
            onClick={userVerified}
          >
            {t("vertifyPage.btn")}
          </button>
          <p className="text-center mt-8 text-gray-600">
            <br />
            {t("global.copyright")}
          </p>
        </main>
      </section>
    </div>
  );
};
export default VertifyPage;