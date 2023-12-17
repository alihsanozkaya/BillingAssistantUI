import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register as _register } from "../redux/actions/AuthActions";
import { message } from "antd";
const RegisterPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userSignUp = (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, password };

    dispatch(_register(user));
  };

  useEffect(() => {
    if (auth && auth.authenticate) {
      message.success("Başarıyla hesabınız oluşturuldu ! ");
      navigate("/", { replace: true });
    }
  }, [auth, auth.authenticate, navigate]);

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
                    İf you have a account{" "}
                    <a
                      href="javascript:void(0)"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in{" "}
                    </a>
                  </p>
                </>
              </a>
            </div>
          </div>
          <form>
            <div>
              <label className="font-medium">FirstName</label>
              <input
                type="name"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium">LastName</label>
              <input
                type="name"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              onClick={userSignUp}
            >
              Sign in
            </button>
          </form>
        </div>
      </main>
    </MainLayout>
  );
};

export default RegisterPage;