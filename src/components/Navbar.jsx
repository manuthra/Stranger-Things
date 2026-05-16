import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'




function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (

    <nav className="fixed w-full z-50 flex items-center justify-between px-10 py-5 bg-black/90 backdrop-blur-md border-b border-red-900/30">

      <h1 className="text-4xl text-red-600 font-bold tracking-[10px]">

        ST

      </h1>

      <div className="hidden md:flex gap-8 text-sm tracking-[4px]">

        <Link to="/" className="text-gray-300 hover:text-red-600 transition duration-300">
          HOME
        </Link>

        <Link to="/characters" className="text-gray-300 hover:text-red-600 transition duration-300">
          CHARACTERS
        </Link>

        <Link to="/seasons" className="text-gray-300 hover:text-red-600 transition duration-300">
          SEASONS
        </Link>

        <Link to="/upsidedown" className="text-gray-300 hover:text-red-600 transition duration-300">
          UPSIDE DOWN
        </Link>

      </div>

      <button

        onClick={() => setIsOpen(!isOpen)}

        className="md:hidden text-white text-3xl"

      >

        ☰

      </button>

      {isOpen && (

        <div className="absolute top-full left-0 w-full bg-black border-b border-red-900/30 flex flex-col items-center gap-8 py-10 md:hidden text-sm tracking-[4px]">

          <Link to="/" className="text-gray-300 hover:text-red-600">
            HOME
          </Link>

          <Link to="/characters" className="text-gray-300 hover:text-red-600">
            CHARACTERS
          </Link>

          <Link to="/seasons" className="text-gray-300 hover:text-red-600">
            SEASONS
          </Link>

          <Link to="/upsidedown" className="text-gray-300 hover:text-red-600">
            UPSIDE DOWN
          </Link>

        </div>

      )}

    </nav>

  )
}

export default Navbar
