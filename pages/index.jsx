


import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/layout";
import BannerSlider from "@/components/Main/BannerSlider";
import CategoryCard from "@/components/Main/CategoryCard";
import ProductSlider from "@/components/Main/productsSlider";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Hero from "@/components/layout/Hero";
import ProductCard from "@/components/Main/productCard";
import { useAuth } from "@/functions/context";
import { getMaxAge } from "next/dist/server/image-optimizer";
// import Service from "@/components/Main/Services";
// import SectionOne from "@/components/Main/SectionOne";
// import Travels from "@/components/Main/Travels";
// import AbourSection from "@/components/Main/AboutUsSection";

export default function Index({}) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const direction = router.locale === "ar" && "rtl";
  const lang = router.locale;
  const { pageLoading, setPageLoading } = useAuth();

  const newproductstitle =
    router.locale === "ar"
      ? "الماكينات"
      : router.locale === "en"
      ? "Machines"
      : "Makineler";
  const kalipTitle =
    router.locale === "ar"
      ? "القوالب"
      : router.locale === "en"
      ? "Kalipler"
      : "Kalipler";

  console.log("Lodale", router.locale, router);
  //  const aboutus = t("aboutus", { returnObjects: true });
  //  console.log("links", aboutus);

  const [cats, setCats] = useState([]);
  const [products, setProducts] = useState([]);
  const [makines, setMakines] = useState([]);
  const [kalips, setKalips] = useState([]);
  const [offers, setOffers] = useState([]);
  const [news, setNews] = useState([]);
  const [sliders, setSliders] = useState([]);

  const [homesection, setHomeSection] = useState({});

  // const [loacding, setLoading] = useState(true);
  //subcategory"



  useEffect(() => {
    const getProducts = async () => {
      setPageLoading(true);

      const data = await getDocumentsOrder(
        "products",
        orderBy("timeStamp", "asc"),
        null
      );

      console.log(data, "fetch PRODUCCCCCCCCCCCC====>>>>");
      setProducts(data);
      setPageLoading(false);
    };

    const getInfo = async () => {
      // setLoading(true);

      const data = await getDocumentsOrder(
        "homesection",
        orderBy("timeStamp", "asc")
      );

      console.log(data, "fetch productIIUW!@__@#(@)#(s ====>>>>");
      setHomeSection(data[0]);

      //  setLoading(false);
    };
   

    const getKalips = async () => {
      setPageLoading(true);
      let productsdata = [];

      productsdata = await getDocumentsOrder(
        "makines",
        orderBy("timeStamp", "desc"),

        where("category", "==", "kalip")
      );

      setKalips(productsdata);

      setPageLoading(false);
    };

    const getMAkines = async () => {
      let productsdata = [];

      productsdata = await getDocumentsOrder(
        "makines",
        orderBy("timeStamp", "desc"),

        where("category", "==", "Eccentric")
      );

      setMakines(productsdata);
    };

    
    getKalips();
    getMAkines();
    getInfo();

    getProducts();
  }, []);

  return (
    <Layout dir={router.locale === "ar" ? "rtl" : "ltr"}>
      <NextSeo title="Nabhan | Nabhan Furniture | Nabhan Mobilya" />

      <div className="scroll-smooth mb-16  ">
        {/* {sliders && sliders?.length > 0 && <BannerSlider data={sliders} />}

        {cats && cats?.length > 0 && (
          <div className=" mx-4 mt-12 md:mx-8">
            <CategoryCard title={t("sectionstitle")} data={cats} />
          </div>
        )} */}

        <div dir="ltr">
          <Hero lang={lang} data={homesection} direction={direction} />
        </div>

        <div>

{/* -------MAKINES--- */}

<div className="py-16 sm:py-28">
            <div>
              <h1 className="shimmer  arabic flex justify-center flex-col text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center mb-12">
                {newproductstitle}
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {makines?.map((product, index) => {
                return <ProductCard {...product} key={product?.id} />;
              })}
            </div>
          </div>




{/* -------Kalipler--- */}

<div className="py-16 sm:py-28">
            <div>
              <h1 className="shimmer  arabic flex justify-center flex-col text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center mb-12">
                {kalipTitle}
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {makines?.map((product, index) => {
                return <ProductCard {...product} key={product?.id} />;
              })}
            </div>
          </div>







          {/* -----ALL PRODUCTS CONTAINER------ */}


          {/* <div className="py-16 sm:py-28">
            <div>
              <h1 className="shimmer  arabic flex justify-center flex-col text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center mb-12">
                {newproductstitle}
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {products?.map((product, index) => {
                return <ProductCard {...product} key={product?.id} />;
              })}
            </div>
          </div>
 */}





        </div>


      </div>
    </Layout>
  );
}

// serverside

export const getStaticProps = async ({ locale }) => {
  //const allProducts = await api.getAllProducts();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // allProducts,
    },
  };
};

