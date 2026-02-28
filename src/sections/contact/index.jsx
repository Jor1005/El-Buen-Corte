function Contact() {
    return (
        <section id="contact" className="bg-[#F9F7F2] py-12 md:py-24 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-sm border border-slate-200">
                    
                    <div className="w-full md:w-5/12 bg-[#354130] p-8 md:p-20 text-[#F9F7F2] flex flex-col justify-between">
                        <div>
                            <span className="text-orange-800 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Contacto Directo</span>
                            <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6 md:mb-8 leading-tight text-white">
                                ¿Tienes un <br className="hidden md:block" /> proyecto?
                            </h2>
                            <p className="opacity-70 font-light mb-8 md:mb-12 text-sm md:text-base">
                                Para una atención inmediata y personalizada, el maestro encargado te atenderá directamente vía WhatsApp o llamada. Preferimos el trato directo.
                            </p>
                        </div>

                        <a 
    href="https://wa.me/51987654321" 
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col lg:flex-row items-center text-center lg:text-left gap-4 lg:gap-6 bg-orange-800 p-6 md:p-8 rounded-sm hover:bg-[#F9F7F2] hover:text-[#354130] transition-all duration-500 shadow-xl"
>
    <div className="bg-[#F9F7F2]/20 group-hover:bg-[#354130]/10 p-4 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    </div>
    <div>
        <span className="block text-[10px] uppercase tracking-widest opacity-80 group-hover:opacity-100 mb-1">Contactar por WhatsApp</span>
        <span className="text-xl md:text-2xl font-bold font-serif">+51 987 654 321</span>
    </div>
</a>
                    </div>

                    <div className="w-full md:w-7/12 bg-white flex flex-col relative">
                        <div className="h-64 md:h-full w-full">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.14441551606!2d-77.0101677!3d-12.0001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzAwLjAiUyA3N8KwMDAnMDAuMCJX!5e0!3m2!1ses!2spe!4v1645555555555" 
                                className="w-full h-full grayscale opacity-80 md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-1000"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        
                        <div className="relative md:absolute md:top-8 md:left-8 bg-[#354130] p-6 md:p-8 text-[#F9F7F2] shadow-2xl w-full md:max-w-xs border-l-4 border-orange-800">
                            <h3 className="text-orange-800 font-bold uppercase text-[10px] tracking-[0.2em] mb-2 md:mb-3">Taller Central</h3>
                            <p className="text-lg md:text-xl font-serif leading-snug">Av. 13 de Enero 2328, San Juan de Lurigancho</p>
                            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-[#F9F7F2]/10 flex md:block justify-between items-center gap-4">
                                <p className="text-[10px] md:text-xs opacity-60">Lun - Vie: 08:00 — 18:00</p>
                                <p className="text-[10px] md:text-xs opacity-60">Sáb: 08:00 — 13:00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;