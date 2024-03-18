import React from "react";
import MainLayout from "../layouts/MainLayout";

const PropertiesPage = () => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl py-3 sm:py-4 lg:py-6">
        <div className="text-center mx-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            PDF Formatındaki Faturaların Otomatik Tanıma (OCR) ile Veritabanına
            Kaydedilmesi
          </h1>
          <div className="text-left sm:pl-4">
            <p className="text-lg leading-8 text-gray-600 mb-4">
              Günümüzde birçok işletme, faturaları elle girmek ve işlemek için
              zaman ve kaynak harcamaktadır. Ancak, teknolojinin gelişmesiyle
              birlikte, PDF formatındaki faturaların otomatik tanıma
              sistemleriyle işlenmesi mümkün hale gelmiştir. Optik Karakter
              Tanıma (OCR) teknolojisi, PDF formatındaki faturaları dijital
              metin formatına dönüştürerek veritabanına kaydetmeye olanak tanır.
              İşte bu süreç genellikle şu adımları içerir:
            </p>
            <ul className="list-disc leading-6 list-inside mb-4">
              <li>
                PDF'nin Alınması: Fatura PDF formatında taranır veya dijital
                olarak elde edilir.
              </li>
              <li>
                OCR İşlemi: Alınan PDF, OCR yazılımı veya hizmeti kullanılarak
                metin formatına dönüştürülür. OCR, PDF dosyasındaki metinleri
                tanıyarak dijital metin verisini oluşturur.
              </li>
              <li>
                Veri Doğrulama ve Düzenleme: Elde edilen metin verisi,
                doğrulanır ve gerektiğinde düzenlenir. Bu aşamada, OCR'in hatalı
                tanıdığı karakterler düzeltilir ve eksik veya yanlış bilgiler
                eklenir veya değiştirilir.
              </li>
              <li>
                Veritabanına Kaydetme: Doğrulanmış ve düzenlenmiş metin verisi,
                bir veritabanı yönetim sistemine kaydedilir. Fatura ile ilgili
                bilgiler (fatura numarası, tarih, tutar vb.) uygun veritabanı
                tablolarına aktarılır.
              </li>
            </ul>
            <p className="text-lg leading-8 text-gray-600 mb-4">
              PDF formatındaki faturaların OCR ile veritabanına kaydedilmesi,
              işletmeler için zaman ve kaynak tasarrufu sağlar. Ayrıca, bu süreç
              sayesinde veri doğruluğu artar ve insan hataları en aza indirilir.
              Bu da işletmelerin daha verimli ve etkin bir şekilde çalışmasını
              sağlar.
            </p>
            <p className="text-lg leading-8 text-gray-600">
              Sonuç olarak, PDF formatındaki faturaların otomatik tanıma
              sistemiyle işlenmesi, işletmelerin iş süreçlerini
              otomatikleştirmesine ve modernize etmesine yardımcı olur, böylece
              daha hızlı ve verimli bir şekilde faaliyet gösterirler.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PropertiesPage;