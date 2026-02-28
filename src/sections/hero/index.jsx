function Hero() {
    return (
        <section id="hero" className="relative w-full h-screen flex flex-col md:flex-row bg-[#F9F7F2] overflow-hidden border-b-[20px] border-[#354130]">
            
            <div className="flex flex-col w-full md:w-1/2 h-full items-center md:items-start justify-center p-8 lg:p-24 bg-white relative z-5">
                
                <div className="absolute top-1/2 left-0 -translate-y-1/2 h-1/3 border-y border-r border-orange-200 w-2 hidden lg:block" />

                <span className="text-orange-800 font-semibold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">
                    Mano de obra premium
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-slate-900 leading-[1.1] mb-6 md:mb-8">
                    El Buen <br /> 
                    <span className="italic font-light">Corte.</span>
                </h1>

                <p className="text-base md:text-lg text-slate-600 max-w-sm mb-8 md:mb-12 leading-relaxed font-light">
                    Transformamos la madera en piezas con alma. Precisión artesanal para espacios que cuentan una historia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full md:w-auto">
                    <a href="#services" className="bg-slate-900 text-white px-8 lg:px-10 py-4 text-xs lg:text-sm uppercase tracking-widest hover:bg-orange-900 transition-all duration-300 shadow-xl cursor-pointer text-center">
                        Ver Portafolio
                    </a>
                    
                    <a href="#contact" className="border-b-2 border-slate-900 py-4 text-xs lg:text-sm uppercase tracking-widest hover:text-orange-800 hover:border-orange-800 transition-all cursor-pointer text-center">
                        Contactar
                    </a>
                </div>
            </div>

            <div className="w-full md:w-1/2 h-full relative group">
                <div className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
            </div>
            
        </section>
    );
}

export default Hero;