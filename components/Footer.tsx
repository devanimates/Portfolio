import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import FooterGrid from "@/components/FotterGrid"; // Corrected import name

const Footer = () => {
  const handleLinkClick = (link) => {
    if (link.startsWith('mailto:')) {
      window.location.href = link; // Opens mailto links directly
    } else {
      window.open(link, '_blank'); // Opens other links in a new tab
    }
  };

  return (
    <footer className="w-full pt-20 pb-10 bg-black-800 text-white-200" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        
        {/* Centered FooterGrid component */}
        <div className="flex justify-center items-center w-full mb-10 lg:col-span-2 "> {/* Added mb-10 for bottom margin */}
          <FooterGrid /> {/* Corrected component name to FooterGrid */}
        </div>

      </div>
      
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Touqeer Umer
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link.startsWith('http') ? info.link : `http://${info.link}`}
              onClick={() => handleLinkClick(info.link)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="Social Icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
