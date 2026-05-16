import React from "react"

function Seasons() {

    const seasons = [

        {
            number: "01",
            title: "THE VANISHING",
            year: "2016",
            episodes: "8 Episodes",
            description: "Will Byers mysteriously disappears while Eleven escapes from Hawkins Lab."
        },

        {
            number: "02",
            title: "THE MIND FLAYER",
            year: "2017",
            episodes: "9 Episodes",
            description: "A darker force begins possessing Hawkins through terrifying visions."
        },

        {
            number: "03",
            title: "STARCOURT MALL",
            year: "2019",
            episodes: "8 Episodes",
            description: "The Upside Down returns beneath Hawkins while the town celebrates summer."
        },

        {
            number: "04",
            title: "VECNA RETURNS",
            year: "2022",
            episodes: "9 Episodes",
            description: "Vecna terrorizes Hawkins by targeting victims through fear and trauma."
        },

        {
            number: "05",
            title: "THE FINAL CHAPTER",
            year: "2025",
            episodes: "9 Episodes",
            description: "The final battle against the Upside Down begins as Hawkins faces total destruction."
        }

    ]

    return (

        <section id="seasons" className="min-h-screen bg-black px-5 md:px-12 py-24"
        >

            <div className="text-center">

                <p className="text-red-600 tracking-[8px] text-sm md:text-base">
                    NETFLIX SERIES
                </p>

                <h1 className="mt-4 text-4xl md:text-7xl text-white tracking-[6px] font-bold">
                    SEASONS
                </h1>

                <div className="w-32 h-[2px] bg-red-700 mx-auto mt-6"></div>

            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">

                {

                    seasons.map((season, index) => (

                        <div key={index} className="bg-[black] border border-red-900/30 rounded-3xl p-8 hover:border-red-600
                         hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]transition duration-500 " >

                            <h1 className="text-7xl text-red-700 font-bold">
                                {season.number}
                            </h1>

                            <h2 className="mt-4 text-2xl md:text-3xl text-white tracking-[4px] font-bold">
                                {season.title}
                            </h2>

                            <p className="mt-3 text-red-500 tracking-[3px]">
                                {season.year}
                            </p>

                            <p className="mt-2 text-gray-500 tracking-[2px]">
                                {season.episodes}
                            </p>

                            <p className="mt-6 text-gray-400 leading-8">
                                {season.description}
                            </p>

                        </div>

                    ))

                }

            </div>

        </section>

    )
}

export default Seasons