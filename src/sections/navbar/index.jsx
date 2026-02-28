import { useState, useEffect } from 'react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <nav className={`
            fixed w-full z-50 transition-all duration-500 ease-in-out
            ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
            bg-[#F9F7F2] p-2 border-t-[20px] border-[#354130]
        `}>
            <div className="container mx-auto flex flex-col items-center justify-between">
                <a href="#hero" className="block w-fit">
                    <img src="img/titulo.png" alt="Ir al inicio" className="w-60 hover:opacity-80 transition-opacity" />
                </a>
                <div className="border-b-2 border-[#47361d] w-full max-w-[800px] pt-2"></div>
                <div className="flex pt-2">
                    <a href="#services" className="text-black hover:text-[#B78953] mx-4 transition-colors">Servicios</a>
                    <a href="#about" className="text-black mx-4 hover:text-[#B78953] transition-colors">Nosotros</a>
                    <a href="#contact" className="text-black hover:text-[#B78953] mx-4 transition-colors">Contacto</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;