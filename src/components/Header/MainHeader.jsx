import React, { Fragment, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/AuthActions";
import { LoggedInHeader } from "./LoggedInHeader";
import { NotLoggedInHeader } from "./NotLoggedInHeader";
import logo from "../../images/bill-icon-logo-vector.jpg";
import LanguageModal from "../Modal/LanguageModal";
import { useTranslation } from "react-i18next";
import MobileHeader from "./MobileHeader";

const MainHeader = () => {
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);
  const auth = useSelector((state) => state.auth);

  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const handleShowLanguageModal = () => {
    setShowLanguageModal(true);
  };
  const handleCloseLanguageModal = () => {
    setShowLanguageModal(false);
  };

  const { t } = useTranslation();
  return (
    <header
      style={{
        background:
          "linear-gradient(to right, rgba(249, 215, 28, 0.4), rgba(107, 45, 159, 0.5))",
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src={logo} alt="" />
          </Link>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/about"
            className="text-sm font-semibold leading-7 p-2 rounded-lg hover:no-underline hover:bg-white"
          >
            {t("header.about")}
          </Link>
          <Link
            to="/properties"
            className="text-sm font-semibold leading-7 p-2 rounded-lg hover:no-underline hover:bg-white"
          >
            {t("header.properties")}
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-semibold leading-7 p-2 rounded-lg hover:no-underline hover:bg-white"
          >
            {t("header.pricing")}
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {auth.entrance ? <LoggedInHeader /> : <NotLoggedInHeader />}
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="leading-7 p-2 rounded-lg hover:no-underline"
        >
          <i className="fa-solid fa-globe" onClick={handleShowLanguageModal}></i>
          <LanguageModal
            showLanguageModal={showLanguageModal}
            handleCloseLanguageModal={handleCloseLanguageModal}
          />
        </div>
        <div className="flex lg:hidden">
          <span
            type="button"
            className="inline-flex items-center justify-center rounded-md ps-3 text-gray-700"
            onClick={() => setMobileHeaderOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 me-4" aria-hidden="true" />
          </span>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileHeaderOpen}
        onClose={() => setMobileHeaderOpen(false)}
      >
        <div className="fixed inset-0 z-10"/>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style={{
        background:
          "linear-gradient(to right, rgb(249, 235, 163), rgb(183, 153, 205)",
      }}>
          <div className="justify-between">
            <span
              type="button"
              className="rounded-lg text-gray-700"
              onClick={() => setMobileHeaderOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 mb-3" aria-hidden="true" />
            </span>
          </div>
          <MobileHeader onClose={() => setMobileHeaderOpen(false)} />
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default MainHeader;