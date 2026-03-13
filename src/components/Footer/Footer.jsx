import React from 'react'
import Logo from "./images/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-5">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div className="flex justify-center md:justify-start">
            <img src={Logo} alt="Logo" className="h-6 w-auto" />
          </div>
          
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-[#3DA0FC] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <p className="text-gray-700 text-base">
              Toshkent Shahar Yunusobod tumadi Amir Temur shox ko'cha 100A uy
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-[#3DA0FC] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <p className="text-gray-700 text-base font-medium">
               +998901234567
            </p>
          </div>
        </div>
        
        <hr className="border-t border-gray-300 my-6" />
  
        <div className="flex justify-center gap-4">
          <button className="bg-[#3DA0FC] hover:bg-[#121c89] text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
            Facebook
          </button>
          <button className="bg-[#3DA0FC] hover:bg-[#121c89] text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
            Instagram
          </button>
          <button className="bg-[#3DA0FC] hover:bg-[#121c89] text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
            Telegram
          </button>
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-8">
            14:03:2026 Islombek Raximjanov
        </p>
      </div>
    </footer>
  )
}

export default Footer