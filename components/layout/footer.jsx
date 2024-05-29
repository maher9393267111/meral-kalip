import {
  FaTripadvisor,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok
} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const SocialButtons = () => {
  const socials = [


    {
      name: 'Whatsapp',
      icon: <FaWhatsapp />,
      link: 'https://wtspee.com/905388500388',
    },
    {
    name: 'Whatsapp2',
    icon: <FaWhatsapp />,
    link: 'https://wtspee.com/905387750388',
  },
    
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      link: 'https://www.facebook.com/profile.php?id=100067204745978&mibextid=ZbWKwL',
    },

    {
      name: 'email',
      icon: <MdEmail />,
      link: 'mailto:Meralkalip@gmail.com',
    },

    // {
    //   name: 'yotube',
    //   icon: <MdEmail />,
    //   link: 'mailto:Meralkalip@gmail.com',
    // },
    


    // {
    //   name: 'Instagram',
    //   icon: <FaInstagram />,
    //   link: 'https://www.instagram.com/nabhanyaser8?igsh=MXNtbDJ2cW1kMXc1cQ==',
    // },


    // {
    //   name: 'Tiktok',
    //   icon: <FaTiktok />,
    //   link: 'https://www.tiktok.com/@yasernbhan1?_t=8mEokZZgEz8&_r=1',
    // },
  ];

  return (
    <>
     <div dir='ltr' className="fixed top-[80%] z-10 right-0 translate-y-[-50%] flex flex-col items-end -gap-0.1">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-primary w-10 h-10 flex justify-center items-center text-xl hover:w-32 gap-2 transition-all duration-500 ease-in-out"
            onMouseEnter={(e) => {
              const childNode = e.target.childNodes[1];
              childNode && childNode.classList.remove('hidden');
            }}
            onMouseLeave={(e) => {
              const childNode = e.target.childNodes[1];
              childNode && childNode.classList.add('hidden');
            }}
          >
            { social?.name !== 'yotube' ? social.icon  : <img src="/yotube.svg" alt="" />}
            <span className="text-xs font-poly font-bold hidden">
              {social.name}
            </span>
          </a>
        ))}
      </div>
  
    </>
  );
};

export default SocialButtons;