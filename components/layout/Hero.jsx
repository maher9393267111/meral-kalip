import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactPlayer from 'react-player/lazy'

function Hero({data ,direction ,lang}) {
  return (
    <div >
      <main className="grid grid-cols-1 items-center gap-y-4 py-8 lg:grid-cols-2 lg:py-0">
        <div   className="md:text-center lg:text-left">
          <h1 dir={direction}  className="flex justify-center flex-col text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline shimmer ">Meral Kalip</span>{" "}
            {/* <span className="block text-primary xl:inline">
              Ay Karanlığından Gelen Güzellik
            </span> */}
          </h1>
          <div dir={direction} className="">

         
          <p  className="mt-3 arabic text-cente text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-[18px] lg:mx-0">
            {/* Ağacın kaliteye ve konfora dönüşüp evlerinize güler yüzle gelmesinin
            sebebi bizler olalım, siz isteyin biz yapalım keyfini sürmek size
            kalsın. */}

{lang === 'ar' ? data?.titlear  : lang === 'en' ? data?.title    : data?.titletr}



          </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
             
                <a href="https://wtspee.com/905388500388" target="_blank" className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-black arabic  md:py-4 md:px-10 md:text-lg">
            
                  
                  {lang === 'ar' ?   "وتس اب " : lang === 'en' ? "Whatsapp"    : "Whatsapp"}
                </a>
              
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link legacyBehavior href="/products">
                <a className="flex w-full items-center arabic gap-4 justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-black  md:py-4 md:px-10 md:text-lg">
                
                  {lang === 'ar' ? "منتجاتنا"  : lang === 'en' ? "Browse our products"    : "Mağaza"}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:mt-12 mx-auto flex justify-center">
          {/* <Image
          className="!h-[490px] object-cover"
            src={
             data?.image ? data?.image : "https://images.unsplash.com/photo-1619596658767-f3bbb82b0dee?w=640&q=80"
            }
            width={640}
            height={440}
            layout="responsive"
          /> */}

<iframe className="!w-full h-[400px]" autoplay src="https://drive.google.com/file/d/1--nrfOgm1J_pv9tkbb1bfYTQBghjVTro/preview" allow="autoplay"></iframe>


  {/* <video width={900} height={600} src={'/main.mp4'} autoPlay muted></video> */}


        </div>
      </main>



{/* --------Video--- */}

<div className="w-full video-container mt-12 ">

<ReactPlayer className='!w-full ' controls volume={0.4} url='/makine.mp4' />
 {/* <video className="w-full h-[600px]"  src={'/makine.mp4'} autoPlay muted></video> */}

</div>


    </div>
  );
}

export default Hero;
