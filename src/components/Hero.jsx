import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import banner from "../assets/hero-banner.jpeg"
import logo from "../assets/logo-new.png"

function Hero() {
 
    const navigate = useNavigate()
    return (

        <section className="h-screen flex items-center justify-center text-center bg-fixed bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${banner})`
            }}
        >

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex flex-col items-center">

                <img src={logo} alt="logo" className="w-[280px] md:w-[450px] lg:w-[650px] object-contain drop-shadow-[0_0_30px_red] logo-flicker"
                />

            <div className = "mt-10 flex  md:flex-row gap-3 md:gap-5">
                <button onClick={()=>document.getElementById("characters").scrollIntoView({behavior: "smooth"})} className="px-3 py-2 text-[10px] md:text-[16px] md:px-5 md:py-2 lg:px-7 lg:py-3  bg-black/80 text-red-500 font-bold tracking-[4px] rounded-md hover:bg-red-500 hover:text-white transition duration-300 cursor-pointer">
                    ENTER HAWKINS
                </button>
                <button onClick = {()=>window.open("https://www.youtube.com/watch?v=b9EkMc79ZSU")} className="px-3 py-2 text-[10px] md:text-[16px] md:px-5  md:py-2 lg:px-7 lg:py-3  bg-black/80 text-white font-bold tracking-[4px] rounded-md hover:bg-red-500 transition duration-300 cursor-pointer">
                    WATCH TRAILER
                </button>

            </div>
            </div>

        </section>

    )
}

export default Hero