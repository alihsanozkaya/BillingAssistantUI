import React from "react";
import MainLayout from "../layouts/MainLayout";
import Fatura from "../images/askida-fatura.jpg";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl py-3 sm:py-3 lg:py-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Fatura Bilgi Sistemi'ne <br />
            Hoş Geldiniz!
          </h1>
          <p className="mt-2 text-lg font-semibold leading-8 text-gray-600">
            Artık faturalarınızı hiç olmadığı kadar etkili bir şekilde
            yönetebilirsiniz!
          </p>
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-center">
            <img
              src={Fatura}
              alt="Fatura Bilgi Sistemi"
              className="rounded-lg shadow-lg max-w-sm"
            />
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <p className="mt-2 text-lg font-semibold leading-8 text-gray-600">
                Hemen başlamak için giriş yapın veya kayıt olun. Haydi, finansal
                kontrolü ele alın ve kolaylığın keyfini çıkarın!
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;