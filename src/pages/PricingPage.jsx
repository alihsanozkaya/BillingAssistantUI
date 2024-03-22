import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function PricingPage() {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="container">
        <div className="text-center mt-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t("pricingPage.header")}  
          </h1>
          <div className="mx-auto mt-5 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-gray-50">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {t("pricingPage.type1")} {t("pricingPage.membership")}
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {t("standartFeatures.description")}
              </p>
              <div className="mt-10 flex items-center gap-x-4 ">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  {t("pricingPage.included")}
                </h4>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-success"
                      aria-hidden="true"
                    />
                    {t("standartFeatures.feature1")}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-success"
                      aria-hidden="true"
                    />
                    {t("standartFeatures.feature2")}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-success"
                      aria-hidden="true"
                    />
                    {t("standartFeatures.feature3")}
                  </li>
                  <li className="flex gap-x-3">
                    <XMarkIcon
                      className="h-6 w-5 flex-none text-danger"
                      aria-hidden="true"
                    />
                    {t("standartFeatures.feature4")}
                  </li>
              </ul>
            </div>
            <div className="-mt-2 lg:mt-0 lg:w-full lg:max-w-md shadow-lg flex flex-col items-center justify-center">
              <div className="rounded-2xl bg-gray-50 py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs p-2">
                  <p className="mt-6">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {t("pricingPage.free")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-gray-50">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {t("pricingPage.type2")} {t("pricingPage.membership")}
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {t("premiumFeatures.description")}
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                {t("pricingPage.included")}
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-success"
                      aria-hidden="true"
                    />
                    {t("premiumFeatures.feature1")}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-success"
                      aria-hidden="true"
                    />
                    {t("premiumFeatures.feature2")}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-success"
                      aria-hidden="true"
                    />
                    {t("premiumFeatures.feature3")}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-success"
                      aria-hidden="true"
                    />
                    {t("premiumFeatures.feature4")}
                  </li>
              </ul>
            </div>
            <div className="-mt-2 p- lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 shadow-lg">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs p-2">
                  <p className="text-base font-semibold text-gray-600">
                  {t("pricingPage.description1")}
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      250
                    </span>
                    <span className="text-3xl font-semibold leading-6 tracking-wide text-gray-600">
                      ₺
                    </span>
                  </p>
                  <Link
                    to="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:no-underline"
                  >
                  {t("pricingPage.btn")}
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                  {t("pricingPage.description2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}