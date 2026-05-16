import CharacterCard from "../components/CharacterCard"

import eleven from "../assets/characters/eleven.jpg"
import max from "../assets/characters/max.jpg"
import dustin from "../assets/characters/dustin.jpg"
import mike from "../assets/characters/mike.jpg"
import will from "../assets/characters/will.jpg"
import nancy from "../assets/characters/nancy.jpg"
import vecna from "../assets/characters/vecna.jpg"
import lucas from "../assets/characters/lucas.jpg"
import robin from "../assets/characters/robin.jpg"
import hopper from "../assets/characters/hopper.jpg"
import jonathan from "../assets/characters/jonathan.jpg"
import joyce from "../assets/characters/joyce.jpg"


function Characters() {

    const characters = [

        {
            name: "ELEVEN",
            image: eleven,
            description: "A mysterious girl with terrifying psychic powers tied to the Upside Down."
        },

        {
            name: "MAX",
            image: max,
            description: "Fearless, rebellious and one of the bravest survivors in Hawkins."
        },

        {
            name: "DUSTIN",
            image: dustin,
            description: "Smart, funny and always ready to uncover the secrets beneath Hawkins."
        },

        {
            name: "MIKE",
            image: mike,
            description: "Loyal, emotional and determined to protect his friends at all costs."
        },

        {
            name: "LUCAS",
            image: lucas,
            description: "Practical, brave and always prepared when danger approaches Hawkins."
        },

       {
            name: "WILL",
            image: will,
            description: "Quiet, sensitive and forever marked by his harrowing experience in the Upside Down."
       },
        
       {
            name: "NANCY",
            image: nancy,
            description: "Fearless investigative journalist determined to expose the truth."
       },

      

        

        {
            name: "ROBIN",
            image: robin,
            description: "Sharp-witted, sarcastic and brilliant at decoding hidden mysteries."
        },

        

        {
            name: "JONATHAN",
            image: jonathan,
            description: "Quiet, creative and always willing to risk himself for family and friends."
        },

        {
            name: "JIM HOPPER",
            image: hopper,
            description: "Gruff, determined and fiercely protective of Hawkins and its residents."
        },

        {
            name: "JOYCE",
            image: joyce,
            description: "Relentless, resourceful and a mother who will stop at nothing to save her son."
        },
         {
            name: "VECNA",
            image: vecna,
            description: "The terrifying ruler of the Upside Down feeding on fear and trauma."
       }

        

        

    ]
    return (

        <section id="characters" className="min-h-screen bg-black px-5 md:px-12 py-24">

            <div className="text-center">

                <p className="text-red-600 tracking-[8px] text-sm md:text-base">
                    HAWKINS CREW
                </p>

                <h1 className="mt-4 text-4xl md:text-7xl text-white tracking-[6px] font-bold">
                    MAIN CHARACTERS
                </h1>

                <div className="w-32 h-[2px] bg-red-700 mx-auto mt-6"></div>

            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {
                    characters.map((item, index) => (

                        <CharacterCard
                            key={index}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                        />

                    ))
                }

            </div>

        </section>

    )
}

export default Characters