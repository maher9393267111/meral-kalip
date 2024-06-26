//  import Image from "next/image";
 import { Image  } from "antd";

import Link from "next/link";
import { calculateDiscountedPrice } from "@/functions/firebase/getData";
import { useRouter } from "next/router";

export default function ProductCard({ title ,image ,id,imageAlt ,price ,isoffer ,discount ,titlear ,titletr ,type="products"  }) {
const router =useRouter()

const titlelng  = router.locale === 'ar' ? titlear : router.locale === 'en' ? title : titletr


  return (
    
    <div className=" !h-[400px] mb-4 md:!h-[420px]">
      <div className=" !w-full !h-full  ">
        <Image
          className="bg-grad first-letter:  object-cover   !w-full  !h-full"
          src={image}
          preview={true}
     
        />
      </div>
     
    </div>
  






    // <Link href={`/${type}/single?id=${id}`}>
    //   <div className="group !h-[288px]  md:!h-[325px] relative cursor-pointer rounded-lg transition-transform duration-700 hover:scale-105 hover:shadow-lg">
    //     <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 ">
    //       <Image
    //         className="bg-grad   !h-[288px]  md:!h-[325px]"
    //         src={image}
    //         alt={title}
    //         layout="responsive"
    //         width={600}
    //         height={600}
    //         objectFit="cover"
    //         objectPosition="center"
    //       />
    //     </div>
    //     <div className="absolute bottom-0 left-0 z-10 w-full rounded-lg bg-gradient-to-t from-neutral-700 p-4  hover:from-primary">
    //       <h3 className="font-body arabic text-center text-xl font-black uppercase text-white">
    //         {titlelng}
    //       </h3>

    //       <div className="flex items-center justify-between">

       



    //     </div>




    //     </div>
    //   </div>
    // </Link>



  );
}