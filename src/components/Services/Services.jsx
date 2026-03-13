import Icon1 from "./images/icon1.png";
import Icon2 from "./images/icon2.png";
import Icon3 from "./images/icon3.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Boshlang’ich tushunchalar",
      desc: "Nazariy bilimlar 16 dars",
      icon: Icon1,
    },
    {
      id: 2,
      title: "O’rta",
      desc: "Nazariy va Amaliy bilimlar 23 dars",
      icon: Icon2,
    },
    {
      id: 3,
      title: "Yuqori",
      desc: "Amaliy bilimlar 16 dars",
      icon: Icon3,
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-5 text-center">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-bold mb-3">
          Service
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-12">
          Bu darsliklar sizning yuqori daraja olishingizga yordam beradi
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

          {services.map((service) => (
            <div
              key={service.id}
              className="relative w-full max-w-[340px] h-[400px] bg-white rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition duration-300"
            >

              <div className="flex-1 text-left">
                <h3 className="text-xl sm:text-2xl font-title font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-[#056AC7] text-base sm:text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain transform hover:translate-y-[-5px] transition-transform duration-300"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;