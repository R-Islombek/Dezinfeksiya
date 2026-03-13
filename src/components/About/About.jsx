import Pandemiya from "./images/pandemiya.png";
import Check from "./images/check.png";

const About = () => {
    return (
        <>
            <section className="w-full py-20">
                <div
                    className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-10 rounded-3xl overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #33FFF3, #33A9FF)",
                    }}
                >
                    {/* Left Image */}
                    <div className="flex-1 flex justify-center lg:justify-start">
                        <img
                            src={Pandemiya}
                            alt="Pandemiya"
                            className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] object-contain"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 p-5 lg:p-10">
                        <img
                            src={Check}
                            alt="Check"
                            className="w-16 h-16 mb-2 object-contain"
                        />
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-title font-bold text-white leading-snug">
                            Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar talaygina
                        </h3>
                        <button className="mt-4 px-8 py-3 bg-[#3375FF] text-white font-semibold rounded-full hover:bg-blue-700 transition shadow-lg">
                            Bog'lanish
                        </button>
                    </div>
                </div>
            </section>
            <hr className="w-100% opacity-10" />
        </>
    );
};

export default About;