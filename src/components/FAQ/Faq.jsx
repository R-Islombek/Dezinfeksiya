import { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Kursdan nima topaman",
      answer:
        "Bu bir nonli kayıpday kayıp darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi",
    },
    {
      id: 2,
      question: "Kurs kimlar uchun mos?",
      answer:
        "Kurs boshlang'ich va o'rta darajadagi foydalanuvchilar uchun mo'ljallangan. Hech qanday oldingi tajriba talab qilinmaydi.",
    },
    {
      id: 3,
      question: "Darslar qanday formatda o'tiladi?",
      answer:
        "Darslar zoom platformasida jonli ravishda o'tiladi va yozib olinadi. Agar darsga qatnasha olmasangiz, yozuvni keyinroq ko'rishingiz mumkin.",
    },
    {
      id: 4,
      question: "Kurs narxi qancha?",
      answer:
        "Kurs narxi 500,000 so'm. To'lovni klik yoki paynet orqali amalga oshirishingiz mumkin.",
    },
  ];

  const [openId, setOpenId] = useState(null);
  const toggleFaq = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-5 max-w-6xl">
        
        <div className="flex flex-col lg:flex-row lg:gap-16">
          
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              FAQ
            </h4>
          </div>

          <div className="lg:w-2/3">
            <div className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.id} className="py-3">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4 text-left flex justify-between items-center group"
                  >
                    <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <span className={`text-2xl ml-4 flex-shrink-0 text-gray-500 transition-all duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>
                      {openId === faq.id ? "−" : "+"}
                    </span>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;