const Pricing = () => {
  return (
    <section
      className="h-full w-full border-box xl:px-36 lg:px-30 md:px-14 sm:px-8 px-8 pt-20 pb-28 transition-all duration-500 linear bg-blue-100"
      id="PriceList"
    >
      <div className="content-3-7 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full mb-9">
            <h1 className="mb-5 text-2xl font-medium text-blue-800">
              Our Price List
            </h1>
            <h2 className="sm:text-4xl text-3xl tracking-wider font-extrabold title-font mb-3 text-medium-black">
              Undangan Menjadi Lebih Modern & Unik
            </h2>
            <p className="lg:w-2/3 mx-auto tracking-wide text-base text-blue-900/75">
              Tersedia Pilihan paket yang sesuai untuk Hari Spesial Anda anda
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="sm:p-4 px-0 py-4 lg:w-1/3 mx-auto card">
              <div className="h-full py-8 px-11 rounded-2xl bg-white card-outline flex flex-col relative overflow-hidden">
                <h2 className="text-lg tracking-wide mb-3 font-medium text-blue-800">
                  Standar
                </h2>
                <h2 className="text-4xl tracking-wide flex items-center mb-3 font-semibold text-slate-700">
                  <span>Rp.50.000</span>
                </h2>
                <p className="font-normal text-base tracking-wide mb-10 text-slate-700">
                  Paket yang pas bagi
                  <br />
                  mempelai
                </p>
                <div className="price-list-3-7">
                  <p className="flex tracking-wide items-center text-sm mb-7 check-3-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                        alt=""
                      />{" "}
                    </span>
                    Chat Support
                  </p>
                  <p className="flex tracking-wide items-center text-sm mb-7 check-3-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                        alt=""
                      />{" "}
                    </span>
                    Semua Fitur Undangan
                  </p>
                  <p className="flex tracking-wide items-center text-sm mb-7 check-3-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                        alt=""
                      />{" "}
                    </span>
                    Sebar Undangan max. 1000
                  </p>
                  <p className="flex tracking-wide items-center text-sm mb-7 check-3-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                        alt=""
                      />{" "}
                    </span>
                    30 Template Biasa
                  </p>
                </div>
                <button className="ring-1 ring-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-medium rounded-lg flex justify-center items-center tracking-wide py-4 w-full focus:outline-none">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            <div className="sm:p-4 px-0 py-4 lg:w-1/3 mx-auto card">
              <div className="h-full py-8 px-11 rounded-2xl card-outline flex flex-col relative overflow-hidden bg-blue-900">
                <h2 className="text-lg tracking-wide mb-3 font-medium text-transparent bg-clip-text bg-gradient-to-t from-amber-500 to-amber-100">
                  Premium
                </h2>
                <h2 className="text-4xl tracking-wide flex items-center mb-3 font-semibold text-white">
                  <span>Rp.75.000</span>
                </h2>
                <p className="font-normal text-base text-blue-100 tracking-wide mb-10">
                  Paket yang paling pas
                  <br />
                  bagi mempelai
                </p>
                <div className="text-white">
                  <p className="flex tracking-wide items-center text-sm mb-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                        alt=""
                      />{" "}
                    </span>
                    Chat Support
                  </p>
                  <p className="flex tracking-wide items-center text-sm mb-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                        alt=""
                      />{" "}
                    </span>
                    Semua Fitur Undangan
                  </p>
                  <p className="flex tracking-wide items-center text-sm mb-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                        alt=""
                      />{" "}
                    </span>
                    Sebar Undangan Tanpa Batas
                  </p>
                  <p className="flex tracking-wide items-center text-sm mb-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png"
                        alt=""
                      />{" "}
                    </span>
                    +Premium Template
                  </p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 transition-all text-white font-medium rounded-lg flex justify-center items-center tracking-wide py-4 w-full focus:outline-none">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            {/* <div className="sm:p-4 px-0 py-4 lg:w-1/3 mx-auto card">
              <div className="h-full py-8 px-11 rounded-2xl bg-white card-outline flex flex-col relative overflow-hidden">
                <h2 className="text-xl tracking-wide mb-3 font-medium price-title">
                  Steady
                </h2>
                <h2 className="text-4xl tracking-wide flex items-center mb-3 font-medium text-medium-black">
                  <span>$49</span>
                  <span className="text-base ml-2.5 font-normal price-month">
                    /Month
                  </span>
                </h2>
                <p className="font-normal text-base tracking-wide mb-10 text-medium-white">
                  Suitable for those of you
                  <br />
                  who want to grow
                </p>
                <div className="price-list-3-7">
                  <p className="flex tracking-wide items-center text-sm mb-7 check-3-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                        alt=""
                      />{" "}
                    </span>
                    Chat Support
                  </p>
                  <p className="flex tracking-wide items-center text-sm mb-7 check-3-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                        alt=""
                      />{" "}
                    </span>
                    Optimize Projects
                  </p>
                  <p className="flex tracking-wide items-center text-sm mb-7 check-3-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png"
                        alt=""
                      />{" "}
                    </span>
                    300+ Unique Project
                  </p>
                  <p className="flex tracking-wide items-center text-sm mb-7 no-check-3-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                        alt=""
                      />{" "}
                    </span>
                    Own Analytics Platform
                  </p>
                  <p className="flex tracking-wide items-center text-sm mb-7 no-check-3-7">
                    <span className="w-4 h-4 mr-3 inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png"
                        alt=""
                      />{" "}
                    </span>
                    Unlimited User
                  </p>
                </div>
                <button className="btn-outline font-medium rounded-lg flex justify-center items-center tracking-wide py-4 w-full focus:outline-none">
                  Choose Plan
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
