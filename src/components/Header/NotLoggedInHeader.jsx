import React from "react";
import { Link } from "react-router-dom";

export const NotLoggedInHeader = () => {
  return (
    <div className="hidden lg:flex lg:justify-end ">
      <Link
        to="/login"
        className="-mx-3 text-lg font-semibold leading-6 p-2 bg-slate-300 rounded-lg hover:no-underline hover:bg-white me-3"
      >
        Giriş
      </Link>
      <Link
        to="/register"
        className="-mx-3 text-lg font-semibold leading-6 p-2 bg-slate-300 rounded-lg hover:no-underline hover:bg-white"
      >
        Üye ol
      </Link>
    </div>
  );
};