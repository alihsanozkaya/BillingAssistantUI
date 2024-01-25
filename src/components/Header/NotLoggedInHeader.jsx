import React from "react";
import { Link } from "react-router-dom";

export const NotLoggedInHeader = () => {
  return (
    <div className="hidden lg:flex lg:justify-end ">
      <Link
        to="/login"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 me-3"
      >
        Giriş
      </Link>
      <Link
        to="/register"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Üye ol
      </Link>
    </div>
  );
};