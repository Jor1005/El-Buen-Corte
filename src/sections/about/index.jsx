function About() {
    return (
        <section id="about" className="min-h-screen flex items-center bg-[#F9F7F2] py-24 px-6 md:px-12">
            
            <div className="container mx-auto grid grid-cols-1 md:flex md:flex-row-reverse gap-12 items-center">
                
        
                
                <div className="w-full md:w-1/2 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-[#3D3635] mb-8 leading-tight">
                        Tradición en <br />
                        <span className="italic text-orange-900/80">cada detalle.</span>
                    </h2>
                    <p className="text-[#3D3635]/80 text-lg leading-relaxed mb-6">
                        Nuestro equipo de artesanos utiliza técnicas tradicionales combinadas con tecnología moderna, garantizando que cada pieza sea no solo un mueble, sino un legado duradero.
                    </p>
                    
                
                </div>

                <div className="md:col-span-5 lg:col-span-6 relative w-full md:w-1/2">
                    <div className="relative z-10 w-full aspect-[4/5] md:aspect-square overflow-hidden shadow-2xl">
                        <img 
                            src="img/local.png" 
                            alt="Taller El Buen Corte" 
                            className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700" 
                        />
                    </div>
                
                    
                </div>

            </div>
        </section>
    );
}

export default About;