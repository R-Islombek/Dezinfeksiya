import Miya from "./images/miya.png";
import Table from "./images/table.png";
import Hand from "./images/hand.png";

const Prefer = () => {
  const features = [
    {
      id: 1,
      img: Miya,
      title: "Tezda xizmat ko’rsatish",
      desc: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz mijozlarimiz bizdan mamnun.",
    },
    {
      id: 2,
      img: Table,
      title: "Yetuk mutaxassislarimiz",
      desc: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz mijozlarimiz bizdan mamnun.",
    },
    {
      id: 3,
      img: Hand,
      title: "Sizga maqul vaqtda",
      desc: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz mijozlarimiz bizdan mamnun.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-20">
      <div className="container mx-auto px-5 text-center lg:text-left">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-semibold mb-3">
          Avfzalliklarimiz
        </h2>
        <hr className="border-grey-600 bg-amber-100 opacity-70 w-100% mx-auto lg:mx-0 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center lg:text-left"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto lg:mx-0 mb-4 sm:mb-5"
              />

              <h3 className="text-lg sm:text-xl lg:text-2xl font-title font-semibold mb-2 sm:mb-3">
                {feature.title}
              </h3>

             
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Prefer;