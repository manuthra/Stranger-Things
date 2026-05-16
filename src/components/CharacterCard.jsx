import { motion } from "framer-motion"

function CharacterCard({ name, image, description }) {

    return (

        <motion.div whileHover={{ scale: 1.03 }} className="relative overflow-hidden rounded-3xl group cursor-pointer border border-red-900/40 hover:shadow-[0_0_30px_red] transition duration-500">

            <img src={image} alt={name} className="w-full h-[450px] md:h-[550px] object-cover transition duration-700 group-hover:scale-110" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 p-6 md:p-8">

                <h1 className="text-3xl md:text-4xl text-red-600 tracking-[5px] font-bold drop-shadow-[0_0_10px_red]">
                    {name}
                </h1>

                <p className="mt-4 text-gray-300 text-sm md:text-base leading-7 max-w-[300px]">
                    {description}
                </p>

            </div>

        </motion.div>

    )
}

export default CharacterCard