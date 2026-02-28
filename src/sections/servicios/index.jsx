function Servicios() {
    return (
        <section id="services" className="bg-[#F9F7F2] py-24 px-6 md:px-12">
            <div className="container mx-auto">
                
                <div className="text-center mb-16">
                    <span className="text-orange-800 font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
                        Lo que hacemos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#3D3635]">Nuestros Servicios</h2>
                    <div className="w-24 h-1 bg-orange-800 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="group bg-white p-8 border border-slate-200 hover:border-orange-800 transition-all duration-500 hover:-translate-y-2">
                        <div className="h-48 w-full mb-6 overflow-hidden">
                            <img src="img/mam.png" alt="Mobiliario" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#354130] mb-4">Mobiliario a medida</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Diseñamos y fabricamos piezas exclusivas. Tu hogar merece muebles que cuenten una historia y se adapten a cada milímetro de tu espacio.
                        </p>
                    </div>

                    <div className="group bg-white p-8 border border-slate-200 hover:border-orange-800 transition-all duration-500 hover:-translate-y-2">
                        <div className="h-48 w-full mb-6 overflow-hidden">
                            <img src="img/restauracion.png" alt="Restauración" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#354130] mb-4">Restauración de muebles</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Devolvemos la gloria a piezas antiguas. Aplicamos técnicas tradicionales para rescatar la esencia de tus muebles más queridos.
                        </p>
                    </div>

                    <div className="group bg-white p-8 border border-slate-200 hover:border-orange-800 transition-all duration-500 hover:-translate-y-2">
                        <div className="h-48 w-full mb-6 overflow-hidden">
                            <img src="img/diseno.png" alt="Diseño" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#354130] mb-4">Diseño de interiores</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Creamos armonía. Combinamos nuestra experiencia en madera con una visión estética para transformar habitaciones enteras.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Servicios;