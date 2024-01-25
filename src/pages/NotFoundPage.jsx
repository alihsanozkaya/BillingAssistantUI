import React from "react";
import MainLayout from "../layouts/MainLayout";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="d-flex justify-center">
            <img
              width={"300px"}
              src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1684868724~exp=1684869324~hmac=f76cd3716dd94d47e68bc95c6e9f72f4f384932432dfa311f41a2501b8ae8dad"
            />
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Sayfa bulunamadı
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
          Üzgünüz, aradığınız sayfayı bulamadık.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Anasayfaya dön
            </a>
            <a href="/" className="text-sm font-semibold text-gray-900">
              Destek al <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default NotFoundPage;