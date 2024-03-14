import React, { Fragment } from "react";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/AuthActions";
import { Button } from "antd";
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
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 p-2 bg-slate-300 rounded-lg hover:no-underline hover:bg-white">
          Hesabım
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
            <div className="p-4 bg-slate-300">
            <div class="flex flex-1 justify-between items-center">
                <button
                  className="text-sm font-semibold leading-10 p-2 mt-2 bg-slate-300 rounded-lg hover:no-underline hover:bg-white"
                  onClick={() => navigate("/my-profile", { replace: true })}
                >
                  Profilim
                </button>
              </div>
              <div class="flex flex-1 justify-between items-center">
                <button
                  className="text-sm font-semibold leading-10 p-2 mt-2 bg-slate-300 rounded-lg hover:no-underline hover:bg-white"
                  onClick={() => navigate("/upload", { replace: true })}
                >
                  Faturalarım
                </button>
              </div>
              <div class="flex flex-1 justify-between items-center">
                <button
                  onClick={LogoutHandler}
                  className="text-sm font-semibold leading-10 p-2 mt-2 bg-slate-300 rounded-lg hover:no-underline hover:bg-white"
                >
                  Çıkış yap
                </button>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Popover.Group>
  );
};