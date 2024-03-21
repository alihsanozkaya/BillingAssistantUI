import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {  ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/AuthActions";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const LoggedInHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // çıkış yapma işlemi
  const LogoutHandler = () => {
    dispatch(logout());
  };
  const auth = useSelector((state) => state.auth);
  const { t } = useTranslation();
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 p-2 rounded-lg hover:no-underline hover:bg-white">
        {t("header.myAccount")}
          <ChevronDownIcon
            className="h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute -left-2 mt-2 w-auto overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
            <div
              className="p-4"
              style={{
                background:
                  "linear-gradient(to right, rgba(249, 215, 28, 0.3), rgba(107, 45, 159, 0.4))",
              }}
            >
              <div className="flex flex-1 justify-between items-center">
                <Link
                  to="/my-profile"
                  className="text-sm font-semibold leading-7 p-2 mt-2 rounded-lg hover:no-underline hover:bg-white"
                >
                {t("header.myProfile")}
                </Link>
              </div>
              <div className="flex flex-1 justify-between items-center">
                <Link
                  to="/my-invoices"
                  className="text-sm font-semibold leading-7 p-2 mt-2 rounded-lg hover:no-underline hover:bg-white"
                >
                {t("header.myInvoices")}
                </Link>
              </div>
              <div className="flex flex-1 justify-between items-center">
                <button
                  onClick={LogoutHandler}
                  className="text-sm font-semibold leading-7 p-2 mt-2 rounded-lg hover:no-underline hover:bg-white"
                >
                {t("header.logout")}
                </button>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Popover.Group>
  );
};