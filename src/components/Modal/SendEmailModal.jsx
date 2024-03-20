import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendEmail } from "../../redux/actions/AuthActions";
import { useTranslation } from "react-i18next";

const SendEmailModal = ({ userEmail }) => {
  const dispatch = useDispatch();

  const veritfySendMail = () => {
    dispatch(sendEmail(userEmail));
  }
  const { t } = useTranslation();
  return (
    <Result
      status="success"
      title={t("sendEmailModal.title")}
      subTitle={t("sendEmailModal.subTitle")}
      extra={[
        <button className="btn btn-primary" onClick={veritfySendMail}>
          {t("sendEmailModal.extra.btn")}
        </button>,
        <Link to="/" className="btn btn-secondary">
          {t("sendEmailModal.extra.link")}
        </Link>,
      ]}
    />
  );
};

export default SendEmailModal;