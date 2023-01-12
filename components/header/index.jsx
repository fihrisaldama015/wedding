import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700">
      <header className="pt-7">
        <nav className="z-10 px-8 mx-auto max-w-screen-2xl lg:px-24">
          <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-amber-300 font-bold text-2xl">
                  Digi<span className="text-blue-400">Wedd</span>
                </h1>
              </div>
              <div>
                <button
                  className="block p-1 outline-none lg:hidden"
                  onClick={() => toggleMenu()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-white-1"
                    x-show="!showMenu"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8h16M4 16h16"
                    >
                      {" "}
                    </path>
                    <path
                      strokeLinecap="round"
                      className="hidden w-7 h-7"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className={`${isToggle ? "block" : "hidden"} w-full lg:block`}
              id="navigation"
            >
              <div className="flex flex-col items-baseline justify-between mt-6 lg:flex-row lg:items-center lg:mt-0">
                <div className="flex flex-col w-full ml-0 font-normal lg:flex-row text-white-1 lg:ml-44 lg:w-max">
                  <a
                    href="#"
                    className="py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0 hover:font-bold transition-all"
                  >
                    Home
                  </a>{" "}
                  <a
                    href="#Benefits"
                    className="py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0 hover:font-bold transition-all"
                  >
                    Benefits
                  </a>{" "}
                  <a
                    href="#PriceList"
                    className="py-3 pl-2 mx-2 cursor-pointer lg:mx-14 lg:pl-0 hover:font-bold transition-all"
                  >
                    Price List
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="grid grid-rows-1 lg:grid-cols-3 lg:gap-4 gap-12 px-12 lg:px-24 sm:px-20 py-28 mx-auto max-w-screen-2xl">
          <div className="lg:col-span-2 pr-16">
            <div className="text-4xl font-semibold text-slate-50 md:text-6xl">
              <p className="drop-shadow-xl tracking-tight">
                Buat Undangan Digitalmu dengan Cepat.
              </p>
            </div>
            <div className="mt-16 text-lg font-normal text-blue-300 md:text-xl">
              Jadikan Pernikahanmu Semakin Berkesan dengan Desain Undangan yang
              Kekinian dan Responsive di Semua Perangkat.
            </div>
            <div>
              <button className="mt-8 px-8 py-4 text-xl font-semibold rounded-2xl bg-white hover:bg-blue-900 text-blue-900 hover:text-white transition-all shadow-xl shadow-blue-600/75 hover:shadow-blue-800">
                Pesan Sekarang
              </button>
            </div>
          </div>
          <div className="h-min lg:col-span-1 bg-gradient-to-br from-blue-700 to-blue-600 p-8 rounded-2xl">
            <a href="https://www.vecteezy.com/free-vector/wedding">
              <Image
                src="/Beach Wedding.svg"
                width={512}
                height={512}
                className="w-auto h-auto rounded-xl"
                alt="wedding-img"
              />
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
