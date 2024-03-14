import React from "react";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="App">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-5 sm:py-5 lg:py-5">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hakkımızda
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Merhaba, Ben Ali İhsan Özkaya, fatura asistanı projesinin
              geliştiricisiyim. Web alanında tutkulu biriyim. Fatura asistanı
              projesi, kullanıcıların fatura işlemlerini daha verimli ve hızlı
              bir şekilde yönetmelerine yardımcı olmak amacıyla tasarlandı. Bu
              platform, kullanıcıların fatura belgelerini yükleyerek otomatik
              olarak tanımlamalarını ve fatura detaylarına erişmelerini sağlar.
              Ayrıca, kullanıcılara faturalarını takip etmeleri ve düzenlemeleri
              için gerekli araçları sunar. Projeyi oluştururken, kullanıcı
              deneyimi ve veri güvenliği konularına büyük önem verdik.
              Kullanıcıların kolayca gezinebilmeleri ve işlemlerini güvenli bir
              şekilde gerçekleştirebilmeleri için arayüz tasarımına özen
              gösterdik. Ayrıca, kullanıcıların kişisel ve hassas bilgilerinin
              korunmasını sağlamak için güçlü güvenlik önlemleri uyguladık. Bu
              projeyi geliştirirken, kullanıcıların geri bildirimlerini dikkate
              alarak sürekli olarak iyileştirmeler yapıyoruz. Kullanıcıların
              ihtiyaçlarına daha iyi yanıt verebilmek ve platformu daha işlevsel
              hale getirebilmek için sürekli olarak yeni özellikler ekliyoruz ve
              mevcut özellikleri geliştiriyoruz. Eğer herhangi bir geri
              bildiriminiz, sorununuz veya projemiz hakkında bir öneriniz varsa,
              lütfen bize ulaşmaktan çekinmeyin. Kullanıcıların ihtiyaçlarını
              anlamak ve platformumuzu geliştirmek için sizin geri bildiriminize
              her zaman ihtiyacımız var.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
