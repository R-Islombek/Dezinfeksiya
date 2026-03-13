import Back from "./images/back.png";

const Contact = () => {
  return (
    <section className="w-full relative py-24 overflow-hidden">

      <div
        className="container mx-auto relative rounded-[40px]  overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Back})`,
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-end p-10 lg:p-20 gap-8">

          <div className="w-full lg:w-[450px] flex-1 text-center lg:text-left space-y-6">
            <h3 className=" w-[590px] text-2xl sm:text-4xl lg:text-5xl font-title font-bold text-white leading-snug">
              Klapa va zararli hashorot endi yo’q deb hisoblang !!!
            </h3>
            <p className="w-[400px] text-white text-base sm:text-lg lg:text-xl leading-relaxed">
              Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz mijozlarimiz bizdan mamnun
            </p>
            <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg">
              Bog'lanish
            </button>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Contact;