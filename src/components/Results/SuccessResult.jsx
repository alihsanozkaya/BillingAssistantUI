import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendEmail } from "../../redux/actions/AuthActions";

const SuccessResult = ({ userEmail }) => {
  const dispatch = useDispatch();

  const veritfySendMail = () => {
    dispatch(sendEmail(userEmail));
  }

  return (
    <Result
      status="success"
      title="Başarıyla üye oldunuz."
      subTitle="Aktif olarak kullanabilmeniz için email doğrulamanızı yapmanız gerekiyor."
      extra={[
        <button className="btn btn-primary" onClick={veritfySendMail}>
          Doğrulama emaili gelmediyse tıklayınız
        </button>,
        <Link to="/" className="btn btn-secondary">
          Anasayfaya geri dönmek için
        </Link>,
      ]}
    />
  );
};

export default SuccessResult;