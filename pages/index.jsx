


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
 import Image from "next/image";
import { Image as antdImage } from "antd";


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
  const [contactinfo, setContactInfo] = useState([]);
  // const [loacding, setLoading] = useState(true);
  //subcategory"



  const geAbout = async () => {
    setPageLoading(true);

   const data = await getDocumentsOrder(
     "aboutsection",
     orderBy("timeStamp", "asc")
   );

   console.log(data, "fetch productIIUW!@__@#(@)#(s ====>>>>");
   setContactInfo(data[0]);

     setPageLoading(false);
 };




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
    geAbout();
  }, []);

  return (
    <Layout dir={router.locale === "ar" ? "rtl" : "ltr"}>
      
      <NextSeo
        title="mirimolds  | miri plastik  | miri plastik kalip , miri mold plastik
        miriKalip  | miri kalip  | plastic miri kalip   |   Miri ÇELİK Kalıp|  شركة ميرال لصناعة القوالب البلاستيكية |MiriMold | mold | miri mold |  قوالب صب البلاستيك وقوالب تشكيل الحديد | قوالب تشكيل الحديد  | قوالب صب البلاستيك  | قوالب صب  
        
        |  لصناعة قوالب البلاستيك والمنتجات البلاستيكية في تركيا
        | 
        تصنيع كافة القوالب البلاستيكية الحقن +النفخ  + قوالب حقن المعادن 
        | 
        المنتجات البلاستيكية
        | 
        تصنيع قوالب البلاستيك
        
        " 
       
        canonical="https://www.mirimolds.com"
        openGraph={{
          url: "https://www.mirimolds.com",
          title: " قوالب صب البلاستيك",
      
        }}




     description=   "نحن شركة رائدة في مجال تصنيع قوالب حقن البلاستيك وتشكيل الصاج التركية عالية الجودة. اتصل بنا  لجميع احتياجاتك من قوالب البلاستيك. mirikalip mirimolds" 
      />


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

            <div className="grid grid-cols-1 gap-y-10 gap-x-6  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {makines?.map((product, index) => {
                return <ProductCard type={"makine"} {...product} key={product?.id} />;
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
              {kalips?.map((product, index) => {
                return <ProductCard type={"makine"} {...product} key={product?.id} />;
              })}
            </div>
          </div>




<div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 py-8 md:grid-cols-2 md:py-16">
            <section className="grid gap-4 arabic">
              <div className="mr-10">
                <h1
                  dir={router?.locale === "ar" && "rtl"}
                  className="text-4xl  font-bold tracking-tight shimmer sm:text-5xl md:text-6xl"
                >
                  {t("navbar.about")}
                </h1>

                <div
                  className="mt-6 text-xl"
                  dir={router?.locale === "ar" && "rtl"}
                >
                  {router?.locale === "ar"
                    ? contactinfo?.titlear
                    : router.locale === "en"
                    ? contactinfo?.title
                    : contactinfo?.titletr}
                </div>
              </div>

              {/* <article dir={router?.locale === 'ar' && 'rtl'} className="grid gap-2">
              <p className="arabic text-[17px] sm:text-xl">





              </p>
          

            </article> */}
            </section>
            <section className="shadow_image_left rounded-md relative order-first h-[355px] md:min-h-[355px] md:order-none md:h-full">
              <Image
                className="absolute rounded-md"
                src={contactinfo?.image}
                alt="Hakkımızda"
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </section>
          </div>
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

