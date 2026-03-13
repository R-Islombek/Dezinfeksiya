import HeroImg from "./images/hero.png";
import back from "./images/back.png";
import aquas from "./images/aqua.png";
import laqua from "./images/laqua.png";
import Person from "./images/Person.png";

const Hero = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto my-auto mx-auto px-5 flex flex-col items-center lg:flex-row items-center justify-between gap-14">

        <div className="max-w-[560px] space-y-7">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Dizenfeksiya <span className="text-blue-600">xizmati</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
            kompaniyamiz mijozlarimizga sifatli xizmat ko‘rsatib kelmoqda.
            Mijozlarimiz bizdan mamnun.
          </p>

          <div className="flex items-center gap-5 pt-4">
            <img src={HeroImg} alt="" className="w-12 h-12 object-contain" />
            <img src={back} alt="" className="w-12 h-12 object-contain" />
            <img src={laqua} alt="" className="w-12 h-12 object-contain" />
            <img src={aquas} alt="" className="w-12 h-12 object-contain" />
          </div>


          <button className="mt-4 px-10 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-xl">
            Bog'lanish
          </button>

        </div>

        <div className="relative flex justify-center w-full lg:w-auto">

          <img
            src={Person}
            alt="person"
            className="
              w-[360px]
              sm:w-[450px]
              md:w-[520px]
              lg:w-[600px]
              xl:w-[680px]
              object-contain
              drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]
            "
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;