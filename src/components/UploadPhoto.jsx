import React, { useState, useEffect } from "react";
import { Upload, message } from "antd";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import ImgCrop from "antd-img-crop";
import { useDispatch, useSelector } from "react-redux";
import { CreateInvoice } from "../redux/actions/InvoiceActions";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";
import { CREATE_INVOICE_RESET } from "../redux/constants/InvoiceConstants";
import { AddProductFromOCR } from "../redux/actions/ProductActions";

const UploadPhoto = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imageLength, setImageLength] = useState(0);
  const [userId, setUserId] = useState(0);
  const [imageUrlOCR, setimageUrlOCR] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [cloudinaryLoading, setCloudinaryLoading] = useState(false);
  const invoice = useSelector((state) => state.invoice);
  const auth = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  let selectedFile = null;
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      selectedFile = file;
      setFile(selectedFile);
      await uploadImageAndSetUrl(file);
      console.log(selectedFile);
    }
  };

  const handleCreateInvoice = async () => {
    dispatch(CreateInvoice({ userId, imageUrl }));
  };
  useEffect(() => {
    if (invoice.isAdded) {
      const invoiceId = localStorage.getItem("invoiceId");
      dispatch(AddProductFromOCR(file, invoiceId));
      dispatch({ type: CREATE_INVOICE_RESET });
      navigate("/my-invoices", { replace: true });
      window.scrollTo(0, 0);
      window.location.reload();
    }
  }, [invoice.isAdded]);

  useEffect(() => {
    if (invoice.isAdded) {
      dispatch({ type: CREATE_INVOICE_RESET });
      navigate("/my-invoices", { replace: true });
      window.scrollTo(0, 0);
      window.location.reload();
    }
  }, [invoice.isAdded]);

  useEffect(() => {
    setUserId(auth.user.id);
  }, [auth, auth.user.id]);

  const uploadImageAndSetUrl = async (file) => {
    try {
      setCloudinaryLoading(true);
      const uri = await resizeImage(file);

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "https://localhost:7032/api/Cloudinaries/AddImage",
        formData
      );

      setImageUrl(response.data.url);
      setImageLength(1);
      message.success(`${file.name} ${t("uploadInvoicePage.uploadSuccess")}`);
    } catch (error) {
      message.error(`${file.name} ${t("uploadInvoicePage.uploadError")}`);
      console.error("Sunucu hatası:", error.response.data);
    } finally {
      setCloudinaryLoading(false);
    }
  };
  const resizeImage = (file) => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  };
  return (
    <div className="App">
      <div className="flex justify-center items-center mt-5">
        <label
          htmlFor="dropzone-file"
          className="bg-light flex items-center justify-center w-50 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {imageUrl ? (
                <span className="font-semibold text-lg">
                  {t("uploadInvoicePage.uploaded")}
                </span>
              ) : (
                <div>
                  <span className="font-semibold">
                  {t("uploadInvoicePage.upload")}
                </span>
                <p className="text-xxs text-gray-500 dark:text-gray-400">
              {t("uploadInvoicePage.format")}
            </p>
                </div>
              )}
            </p>
          </div>
          <input
            className="absolute hidden opacity-0 pointer-events-none"
            id="dropzone-file"
            type="file"
            accept=".jpg, .jpeg"
            onChange={handleFileChange}
            required
          />
        </label>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        {loading && <div>Yükleniyor...</div>}
        {imageUrlOCR && (
          <div>
            <img
              src={imageUrlOCR}
              alt="Uploaded"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}
      </div>
      <button
        className="btn btn-primary mt-3"
        onClick={handleCreateInvoice}
        disabled={cloudinaryLoading || !file ? "disabled" : ""}
      >
        {t("uploadInvoicePage.btn")}
      </button>
    </div>
  );
};
export default UploadPhoto;
