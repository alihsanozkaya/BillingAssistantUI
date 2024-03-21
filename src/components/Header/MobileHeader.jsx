import { Link, useNavigate } from "react-router-dom";
import { LoggedInHeader } from "./LoggedInHeader";
import { NotLoggedInHeader } from "./NotLoggedInHeader";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/AuthActions";
import { useState } from "react";

const MobileHeader = ({ onClose }) => {
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const LogoutHandler = () => {
      dispatch(logout());
      onClose();
    };
    const [showLanguageModal, setShowLanguageModal] = useState(false);

    const handleShowLanguageModal = () => {
      setShowLanguageModal(true);
    };
    const handleCloseLanguageModal = () => {
      setShowLanguageModal(false);
    };
  
    const { t } = useTranslation();
    return (
      <div className="lg:hidden">
        <Link
          to="/about"
          className="block text-sm font-semibold leading-6 p-2 rounded-lg hover:no-underline hover:bg-white me-3"
        >
          {t("header.about")}
        </Link>
        <Link
          to="/properties"
          className="block text-sm font-semibold leading-6 p-2 rounded-lg hover:no-underline hover:bg-white me-3"
        >
          {t("header.properties")}
        </Link>
        <Link
          to="/pricing"
          className="block text-sm font-semibold leading-6 p-2 rounded-lg hover:no-underline hover:bg-white me-3"
        >
          {t("header.pricing")}
        </Link>
        <div className="mt-4">
          {auth.entrance ? (
            <>
              <LoggedInHeader />
              <Link
                to="/my-profile"
                className="block text-sm font-semibold leading-6 text-gray-900 leading-6 p-2 rounded-lg hover:no-underline hover:bg-white me-3"
              >
              {t("header.myProfile")}
              </Link>
              <Link
                to="/my-invoices"
                className="block text-sm font-semibold leading-6 text-gray-900 leading-6 p-2 rounded-lg hover:no-underline hover:bg-white me-3"
              >
              {t("header.myInvoices")}
              </Link>
              <button
                onClick={LogoutHandler}
                className="block text-sm font-semibold leading-6 text-gray-900 leading-6 p-2 rounded-lg hover:no-underline hover:bg-white me-3"
              >
              {t("header.logout")}
              </button>
            </>
          ) : (
            <>
              <NotLoggedInHeader />
              <Link
                to="/login"
                className="block text-lg font-semibold leading-6 leading-6 p-2 rounded-lg hover:no-underline hover:bg-white me-3"
              >
              {t("global.login")}
              </Link>
              <Link
                to="/register"
                className="block text-lg font-semibold leading-6 p-2 rounded-lg hover:no-underline hover:bg-white me-3"
              >
              {t("global.register")}
              </Link>
            </>
          )}
        </div>
      </div>
    );
  };
  export default MobileHeader;
