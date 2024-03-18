import React from "react";
import PhotoUpload from "../components/PhotoUpload";
import MainLayout from "../layouts/MainLayout";

const UploadPage = () => {
  return (
    <MainLayout>
      <div className="App">
        <h2>Fatura Yükleme Sayfası</h2>
        <PhotoUpload />
      </div>
    </MainLayout>
  );
};

export default UploadPage;