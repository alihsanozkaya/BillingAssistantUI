import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { Login, register as _register } from "../redux/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const userLogin = (e) => {
    e.preventDefault();
    dispatch(Login({ email, password }));
  };
  useEffect(() => {
    if (auth.authenticate) {
      message.success("Başarıyla giriş yapıldı!");
      navigate("/", { replace: true });
    }
  }, [auth.authenticate, navigate]);

  return (
    <MainLayout>
      <main className="w-full  flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600 space-y-8">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <a>
                <>
                  <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                    Create your account now
                  </h3>
                  <p className="">
                    Bir hesabınız yoksa{" "}
                    <a
                      href="/register"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Üye ol{" "}
                    </a>
                  </p>
                </>
              </a>
            </div>
          </div>
          <form>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              onClick={userLogin}
            >
              Sign in
            </button>
          </form>
        </div>
      </main>
    </MainLayout>
  );
};

export default LoginPage;
