import Navbar from "../components/Navbar"
import dimensionBg from "../assets/dimension.jpg"
import demo from "../assets/demo.png"
import vecna from "../assets/vecna.png"
import mindflayer from "../assets/mind flayer.png"
import { useEffect } from "react"
import GlitchText from "../components/GlitchText"
import AlphabetWall from "../components/AlphabetWall"



function Dimension() {
    useEffect(() => {

        if (window.location.hash === "#creatures") {

            setTimeout(() => {

                document.getElementById("creatures")?.scrollIntoView({ behavior: "smooth" })
            }, 200)

        }
    }, [])
    return (

        <div className="bg-black text-white overflow-hidden">

            <Navbar />

            <section className="min-h-screen bg-cover bg-fixed bg-center relative flex items-center justify-center px-5 md:px-12"
                style={{ backgroundImage: `url(${dimensionBg})` }}
            >

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative  z-10 text-center max-w-5xl">

                    <p className="text-red-600 tracking-[8px] text-sm md:text-base">
                        UNKNOWN REALM
                    </p>
                    <div className="max-w-[300px] md:max-w-full mx-auto">

                        <GlitchText text="THE DIMENSION" />

                    </div>

                    <p className="mt-10 text-gray-300 text-sm md:text-lg leading-8 md:leading-10">
                        A dark parallel world corrupted by fear, monsters and supernatural energy. Every corner hides terrifying secrets waiting to consume Hawkins forever.
                    </p>

                </div>

            </section>

            <section className="bg-black text-white px-5 md:px-16 py-24">

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <img src="https://i.pinimg.com/1200x/4f/63/30/4f63305df248ced3b50e9508d6585a94.jpg"
                        className="rounded-xl border border-red-900 shadow-[0_0_40px_rgba(255,0,0,0.3)]" />

                    <div>

                        <p className="text-red-600 tracking-[6px] text-sm">
                            DARK ORIGIN
                        </p>

                        <h2 className="mt-5 text-4xl md:text-6xl font-bold">
                            THE UPSIDE DOWN
                        </h2>

                        <p className="mt-8 text-gray-400 leading-9">
                            Hidden beneath Hawkins lies a terrifying parallel dimension consumed by darkness. Toxic air, floating spores and horrifying creatures turn every second into a nightmare.
                        </p>

                    </div>

                </div>

            </section>

            <section id="creatures" className="bg-[black] text-white px-5 md:px-16 py-24">

                <div className="text-center">

                    <p className="text-red-600 tracking-[6px] text-sm">
                        CREATURES
                    </p>

                    <h2 className="mt-5 text-4xl md:text-6xl font-bold">
                        MONSTERS INSIDE
                    </h2>

                </div>

                <div className="mt-24 flex flex-col gap-32">

                    <div className="grid md:grid-cols-2 gap-14 items-center">

                        <img src={demo}
                            className="w-full max-w-[420px] mx-auto drop-shadow-[0_0_40px_red]" />

                        <div>

                            <p className="text-red-600 tracking-[6px] text-sm">
                                PREDATOR
                            </p>

                            <h3 className="mt-4 text-4xl md:text-6xl font-bold">
                                DEMOGORGON
                            </h3>

                            <p className="mt-8 text-gray-400 leading-9">
                                The Demogorgon is one of the deadliest creatures from the Upside Down. It hunts humans through darkness using portals between dimensions. Extremely violent and terrifying, it became the first major threat faced by Hawkins.
                            </p>

                            <div className="mt-8 flex gap-5 flex-wrap">

                                <div className="bg-[#111] border border-red-900/40 px-5 py-4 rounded-xl">

                                    <h4 className="text-red-600 text-2xl font-bold">
                                        S1
                                    </h4>

                                    <p className="text-gray-400 text-sm mt-2">
                                        First Appearance
                                    </p>

                                </div>

                                <div className="bg-[#111] border border-red-900/40 px-5 py-4 rounded-xl">

                                    <h4 className="text-red-600 text-2xl font-bold">
                                        DANGER
                                    </h4>

                                    <p className="text-gray-400 text-sm mt-2">
                                        Extremely Aggressive
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-14 items-center">

                        <div className="order-2 md:order-1">

                            <p className="text-red-600 tracking-[6px] text-sm">
                                RULER
                            </p>

                            <h3 className="mt-4 text-4xl md:text-6xl font-bold">
                                VECNA
                            </h3>

                            <p className="mt-8 text-gray-400 leading-9">
                                Vecna is the mastermind behind the horrors of the Upside Down. Once human, he transformed into a supernatural entity capable of entering minds and manipulating fear. His psychic powers make him the most terrifying enemy in the series.
                            </p>

                            <div className="mt-8 flex gap-5 flex-wrap">

                                <div className="bg-[#111] border border-red-900/40 px-5 py-4 rounded-xl">

                                    <h4 className="text-red-600 text-2xl font-bold">
                                        S4
                                    </h4>

                                    <p className="text-gray-400 text-sm mt-2">
                                        Main Villain
                                    </p>

                                </div>

                                <div className="bg-[#111] border border-red-900/40 px-5 py-4 rounded-xl">

                                    <h4 className="text-red-600 text-2xl font-bold">
                                        POWER
                                    </h4>

                                    <p className="text-gray-400 text-sm mt-2">
                                        Mind Control
                                    </p>

                                </div>

                            </div>

                        </div>

                        <img
                            src={vecna}
                            className="order-1 md:order-2 w-full max-w-[420px] mx-auto drop-shadow-[0_0_40px_red]"
                        />

                    </div>

                    <div className="grid md:grid-cols-2 gap-14 items-center">

                        <img src={mindflayer}
                            className="w-full max-w-[420px] mx-auto drop-shadow-[0_0_40px_red]"
                        />

                        <div>

                            <p className="text-red-600 tracking-[6px] text-sm">
                                SHADOW ENTITY
                            </p>

                            <h3 className="mt-4 text-4xl md:text-6xl font-bold">
                                MIND FLAYER
                            </h3>

                            <p className="mt-8 text-gray-400 leading-9">
                                The Mind Flayer is a gigantic shadow creature controlling the Upside Down hive mind. It spreads corruption and possesses humans to expand its power into Hawkins. Its terrifying presence symbolizes the darkness consuming both worlds.
                            </p>

                            <div className="mt-8 flex gap-5 flex-wrap">

                                <div className="bg-[#111] border border-red-900/40 px-5 py-4 rounded-xl">

                                    <h4 className="text-red-600 text-2xl font-bold">
                                        S2
                                    </h4>

                                    <p className="text-gray-400 text-sm mt-2">
                                        First Major Threat
                                    </p>

                                </div>

                                <div className="bg-[#111] border border-red-900/40 px-5 py-4 rounded-xl">

                                    <h4 className="text-red-600 text-2xl font-bold">
                                        CONTROL
                                    </h4>

                                    <p className="text-gray-400 text-sm mt-2">
                                        Hive Mind Entity
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <AlphabetWall />

        </div>



    )
}


export default Dimension