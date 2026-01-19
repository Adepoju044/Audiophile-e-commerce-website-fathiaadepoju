import { Link } from "react-router-dom";

function Footer() {
  const socialIcons = [
    {
      src: "/src/public/assets/shared/desktop/icon-facebook.svg",
      alt: "Facebook",
      href: "https://www.facebook.com",
    },
    {
      src: "/src/public/assets/shared/desktop/icon-twitter.svg",
      alt: "Twitter",
      href: "https://www.twitter.com",
    },
    {
      src: "/src/public/assets/shared/desktop/icon-instagram.svg",
      alt: "Instagram",
      href: "https://www.instagram.com",
    },
  ];

  return (
    <footer className="bg-black text-white mt-32">
      <div className="px-6 md:px-20 lg:px-40 py-15">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-8 pb-8">
          <h2 className="text-white font-extrabold text-2xl">audiophile</h2>

          <nav className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm tracking-widest">
            <Link
              to="/"
              className="hover:text-orange-500 transition-colors duration-300 font-semibold"
            >
              HOME
            </Link>
            <Link
              to="/headphones"
              className="hover:text-orange-500 transition-colors duration-300 font-semibold"
            >
              HEADPHONES
            </Link>
            <Link
              to="/speakers"
              className="hover:text-orange-500 transition-colors duration-300 font-semibold"
            >
              SPEAKERS
            </Link>
            <Link
              to="/earphones"
              className="hover:text-orange-500 transition-colors duration-300 font-semibold"
            >
              EARPHONES
            </Link>
          </nav>
        </div>

        <div className="py-8">
          <p className="text-gray-400 text-base leading-7 lg:w-[56%]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
        </div>

        <div className="flex flex-row justify-between md:items-center pt-3">
          <p className="text-gray-500 text-sm">
            Copyright 2025. All Rights Reserved
          </p>

          <div className="flex gap-6 md:mt-0">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={icon.alt}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="filter invert brightness-0 group-hover:hue-rotate-90 transition-all duration-300 cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
