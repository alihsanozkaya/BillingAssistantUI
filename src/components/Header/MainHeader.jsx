import React, { Fragment, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/AuthActions";
import { LoggedInHeader } from "./LoggedInHeader";
import { NotLoggedInHeader } from "./NotLoggedInHeader";

const MobileMenu = ({ onClose }) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <div className="lg:hidden">
      <Link
        to="/properties"
        className="block text-sm font-semibold leading-6 text-gray-900 py-2"
      >
        Özellikler
      </Link>
      <Link
        to="/"
        className="block text-sm font-semibold leading-6 text-gray-900 py-2"
      >
        Ücretlendirme
      </Link>
      <div className="mt-4">
        {auth.entrance ? (
          <>
            <LoggedInHeader />
            <button
              onClick={() => navigate("/my-profile", { replace: true })}
              className="block text-sm font-semibold leading-6 text-gray-900 py-2"
            >
              Profilim
            </button>
            <button
              onClick={() => navigate("/upload", { replace: true })}
              className="block text-sm font-semibold leading-6 text-gray-900 py-2"
            >
              Fatura Yükle
            </button>
            <button
              onClick={LogoutHandler}
              className="block text-sm font-semibold leading-6 text-gray-900 py-2"
            >
              Çıkış Yap
            </button>
          </>
        ) : (
          <>
            <NotLoggedInHeader />
            <Link
              to="/login"
              className="block text-sm font-semibold leading-6 text-gray-900 py-2"
            >
              Giriş Yap
            </Link>
            <Link
              to="/register"
              className="block text-sm font-semibold leading-6 text-gray-900 py-2"
            >
              Kayıt Ol
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const auth = useSelector((state) => state.auth);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/properties"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Özellikler
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Ücretlendirme
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {auth.entrance ? <LoggedInHeader /> : <NotLoggedInHeader />}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default MainHeader;