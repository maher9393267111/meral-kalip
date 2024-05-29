/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  i18n,
    images: {
      domains: [
        "localhost",
        "ik.imagekit.io",
        "mir-s3-cdn-cf.behance.net",
        "firebasestorage.googleapis.com",
        "dr-nahas.vercel.app",
        "marketplace.canva.com",
        "www.hoponhopoffistanbul.com",
        "images.unsplash.com",
        "res.cloudinary.com"
      ],
    },


    webpack: (config, { isServer }) => {
      if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
         // fixes proxy-agent dependencies
         net: false,
         dns: false,
         tls: false,
         assert: false,
       
         child_process :false ,
         worker_threads : false ,
         // fixes next-i18next dependencies
         path: false,
         fs: false,
         // fixes mapbox dependencies
         events: false,
         // fixes sentry dependencies
         async_hooks: false,
        //  topLevelAwait: true,
        //  layers: true,
        };
      }
  
      return config;
    },



    // webpack: (config, { isServer }) => {
    //   if (!isServer) {
    //     config.resolve.fallback.fs = false
    //     config.resolve.fallback.tls = false
    //     config.resolve.fallback.net = false
    //     config.resolve.fallback.child_process = false
    //     config.resolve.fallback.worker_threads = false
    //   }
  
    //   return config
    // },      
  




 
  };
  
  module.exports = nextConfig;