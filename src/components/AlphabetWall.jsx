import GlitchText from "../components/GlitchText"

function AlphabetWall() {

    const activeLetters = ["H", "E", "L", "P", "M"]

    return (

        <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-5 py-24 overflow-hidden">

            <GlitchText text="THE LIGHTS KNOW" />

            <p className="mt-10 tracking-[10px] text-red-900 text-xs md:text-sm text-center">

                HAWKINS, INDIANA — 1983 — PRESENT

            </p>

            <div className="mt-16 grid grid-cols-7 gap-2 md:gap-4">

                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter, index) => {

                    const order = activeLetters.indexOf(letter)

                    return (

                        <div

                            key={index}

                            style={{
                                animationDelay: order >= 0 ? `${order * 1}s` : "0s"
                            }}

                            className={`w-10 h-10 md:w-16 md:h-16 border border-red-900/30 flex items-center justify-center text-lg md:text-2xl font-bold transition duration-300 ${activeLetters.includes(letter) ? "letter-active bg-red-950 text-red-500 shadow-[0_0_20px_red]" : "text-red-900"}`}

                        >

                            {letter}

                        </div>

                    )

                })}

            </div>

        </section>

    )
}

export default AlphabetWall