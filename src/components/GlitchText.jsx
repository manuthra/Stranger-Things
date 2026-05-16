function GlitchText({ text }) {

    return (

        <h1 className="glitch text-4xl md:text-8xl font-bold leading-none md:leading-tight tracking-[4px] md:tracking-[8px] text-center px-4"
            data-text={text}>
            {text}
        </h1>

    )

}

export default GlitchText