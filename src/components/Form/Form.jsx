import Person from "./images/person.png"

const Form = () => {
  return (
    <div className="py-16 px-5" style={{
      background: 'linear-gradient(135deg, rgba(61, 160, 252, 0.1) 0%, rgba(2, 227, 214, 0.2) 100%)'
    }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12">
          
          {/* Left side - Form */}
          <div className="lg:w-1/2 w-full">
            <form className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                Ma'lumotingizni qoldiring
              </h1>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ismingizni kiriting" 
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#3DA0FC] focus:ring-2 focus:ring-[#3DA0FC]/20 outline-none transition text-gray-700 placeholder-gray-400"
                />
                
                <input 
                  type="number" 
                  placeholder="+998 (__) ___-__-__" 
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#3DA0FC] focus:ring-2 focus:ring-[#3DA0FC]/20 outline-none transition text-gray-700 placeholder-gray-400"
                />
                
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="w-5 h-5 rounded border-gray-300 text-[#3DA0FC] focus:ring-[#3DA0FC]"
                  />
                  <label htmlFor="privacy" className="text-gray-600 text-sm">
                    Maxfiylik siyosatiga roziman
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#3DA0FC] to-[#02E3D6] text-white font-semibold py-4 px-6 rounded-xl hover:opacity-90 transform hover:scale-[1.02] transition duration-300 shadow-lg"
                >
                  Yozilish
                </button>
              </div>
            </form>
            
            <p className="text-gray-600 text-center lg:text-left mt-8 italic">
              "Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar talaygina"
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="relative">
        
              <div className="absolute inset-0 bg-gradient-to-r from-[#3DA0FC]/20 to-[#02E3D6]/20 rounded-full blur-3xl -z-10"></div>
              <img 
                src={Person} 
                alt="Person" 
                className="max-w-full h-auto rounded-2xl  transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form