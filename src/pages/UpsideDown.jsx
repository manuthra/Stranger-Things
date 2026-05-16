import upsideBg from "../assets/upside-down.jpg"
import { useNavigate } from "react-router-dom"
import GlitchText from "../components/GlitchText"

function UpsideDown() {
    const navigate = useNavigate()

    return (

        <section id="upsidedown" className="min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center px-5 md:px-12 py-24" style={{ backgroundImage: `url(${upsideBg})` }}>



            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

            <div className="snow"></div>



            <div className="relative z-10 text-center max-w-4xl px-4">


                <p className="text-red-600 tracking-[8px] text-sm md:text-base">
                    ENTER THE DARKNESS
                </p>

                <GlitchText text="THE UPSIDE DOWN IS REAL" />

                <p className="mt-10 text-gray-300 text-sm md:text-lg leading-8 md:leading-10 max-w-3xl mx-auto">
                    A terrifying parallel dimension hidden beneath Hawkins. Filled with darkness, monsters and twisted memories, the Upside Down grows stronger every time fear spreads across the town.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">

                    <button onClick={()=>navigate("/dimension")} className="px-4 py-2 md:px-8 md:py-3 text-xs md:text-sm tracking-[4px] bg-red-700/20 border border-red-700 text-red-500 hover:bg-red-700 hover:text-white hover:shadow-[0_0_30px_red] transition duration-500">
                        EXPLORE DIMENSION
                    </button>

                    <button onClick={()=>{window.location.href = "/dimension#creatures"}}  className="px-4 py-2 md:px-8 md:py-3 text-xs md:text-sm tracking-[4px] bg-black/30 border border-white/20 text-white hover:border-red-600 hover:text-red-500 transition duration-500">
                        DISCOVER CREATURES
                    </button>

                </div>

            </div>

        </section>

    )
}

export default UpsideDown