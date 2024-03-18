import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verification as _verification } from "../redux/actions/AuthActions";

const VertifyPage = () => {
  const verification = useSelector((state) => state.verification);
  const [verified, setVerified] = useState(false);

  const { email } = useParams();

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
              ÜYE OLDUĞUNUZ İÇİN TEŞEKKÜRLER!
            </div>
            <div className="text-xl sm:text-3xl tracking-wider font-bold capitalize">
              Email adresinizi doğrulayınız
            </div>
          </div>
        </div>
        <main className="mt-8 px-5 sm:px-10">
          <h2 className="text-gray-700 ">{"Merhaba " + email}</h2>
          <div className="flex items-center mt-4 gap-x-4"></div>
          <p className="mt-4 leading-loose text-gray-600">
            Aşağıdaki linke tıklayıp üye olduğunuz
            <span className="font-bold"> E-mail </span>adresinizi
            doğrulayabilirsiniz.
          </p>
          <button
            className="px-6 py-2 mt-6 text-sm font-bold 
          tracking-wider text-white capitalize transition-colors
           duration-300 transform bg-orange-600 rounded-lg 
           hover:bg-orange-500 focus:outline-none focus:ring 
           focus:ring-orange-300 focus:ring-opacity-80"
            onClick={userVerified}
          >
            E-mail doğrula
          </button>
          <p className="mt-8 text-gray-600">
            Teşekkür ederiz, <br />
            Fatura asistanı
          </p>
        </main>
      </section>
    </div>
  );
};
export default VertifyPage;
const EmailIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
    </svg>
  );
};