import React , {useState} from 'react'
import MainLayout from '../layouts/MainLayout'
import PaymentResult from '../components/Results/PaymentResult'
import { useSelector , useDispatch } from 'react-redux'
import { PaySubscription } from '../redux/actions/PaymentActions'
import { useTranslation } from "react-i18next";

const PaymentPage = () => {
    const paySubscription = useSelector((state) => state.paySubscription)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(250)
    const handlePaySubscription = () => {
       dispatch(PaySubscription(amount))
      }
  const { t } = useTranslation();

  return (
   <MainLayout>
     <div className="container mx-auto">
        <div class="grid sm:px-10 lg:grid-cols-1 lg:px-20 xl:px-32">
        {paySubscription.isPayed ? <PaymentResult /> : (
          <>
<div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-5">
            <p class="text-xl font-medium">{t("paymentPage.header")}</p>
            <p class="text-gray-400">
            {t("paymentPage.description")}
            </p>
            <div class="">
              <label
                for="card-holder"
                class="mt-4 mb-2 block text-sm font-medium"
              >
              {t("paymentPage.cardName")}
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t("paymentPage.placeholder")}
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  ></svg>
                </div>
              </div>
              <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">
              {t("paymentPage.cardDetails")}
              </label>
              <div class="flex">
                <div class="relative w-7/12 flex-shrink-0">
                  <input
                    type="text"
                    id="card-no"
                    name="card-no"
                    class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  />
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      class="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    ></svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="credit-expiry"
                  class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="MM/YY"
                />
                <input
                  type="text"
                  name="credit-cvc"
                  class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="CVC"
                />
              </div>
              </div>
            <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handlePaySubscription}>
            {t("paymentPage.btn")}
            </button>
          </div>
          
          <div class="px-4 pt-8">
            <p class="mt-8 text-lg font-medium">{t("paymentPage.selection")}</p>
            <form class="mt-5 grid gap-6">
              <div class="relative">
                <input
                  class="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  for="radio_1"
                >
                  <img
                    class="w-14 object-contain"
                    src="https://www.ayicgiyim.com/image/catalog/demo/blog/mastercard-nedir-nerde-kullan%C4%B1l%C4%B1r-master-card.png"
                    alt=""
                  />
                  <div class="ml-5">
                    <span class="mt-2 font-semibold">Mastercard</span>
                  </div>
                </label>
              </div>
              <div class="relative">
                <input
                  class="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  checked
                />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  for="radio_2"
                >
                  <img
                    class="w-14 object-contain"
                    src="https://www.ayicgiyim.com/image/cache/catalog/demo/blog/visa-credit-cart-visa-kredi-kart%C4%B1-600x315w.png.webp"
                    alt=""
                  />
                  <div class="ml-5">
                    <span class="mt-2 font-semibold">Visa</span>
                  </div>
                </label>
              </div>
            </form>
          </div></>
        )}
        </div>
      </div>
   </MainLayout>
  )
}

export default PaymentPage