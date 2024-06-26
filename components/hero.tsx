import Profil from "@/public/images/profil-rbg.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 flex flex-col sm:flex-row text-center  md:items-start sm:text-start  items-center">
          {/* Section header */}
          <div className="pb-12 md:pb-16 ">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="fade-right"
            >
              Hello 👋.<br></br>{" "}
              <span className="font-medium">I'm M Alif Anwar,</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Web Developer
              </span>
            </h1>
            <div className="max-w-3xl ">
              <p
                className="text-lg text-gray-600 mb-8"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                I'm a Computer Science student deeply passionate about software
                development. Eager to learn, collaborate, and unleash
                creativity, I aspire to contribute to dynamic teams, crafting
                innovative solutions that push boundaries and make an impact.
              </p>
              <div
                className="sm:max-w-none sm:flex "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="flex items-center sm:items-start w-full">
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="mailto:muhamadalifanwar@gmail.com"
                  >
                    Contact me
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Image
            src={Profil}
            alt="Profile Image"
            data-aos="fade-up"
            className="w-72 sm:w-80 md:w-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
