import React from "react";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl py-3 sm:py-5 lg:py-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Hakkımızda
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Merhaba, Ben Ali İhsan Özkaya, fatura asistanı projesinin
            geliştiricisiyim. Web alanında tutkulu biriyim. Fatura asistanı
            projesi, kullanıcıların fatura işlemlerini daha verimli ve hızlı bir
            şekilde yönetmelerine yardımcı olmak amacıyla tasarlandı. Bu
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
    </MainLayout>
  );
};

export default HomePage;