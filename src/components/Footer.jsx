
const redes = [
    { id: 1, imagen: "https://img.icons8.com/color/48/linkedin.png", nombre: "linkedin", url: "https://www.linkedin.com/services/page/7146943198a877803b/"},
    { id: 2, imagen: "https://img.icons8.com/color/48/whatsapp--v1.png", nombre: "whatsapp", url: "https://wa.me/2236689525"}
]

const Footer = () => {
    return (
        <>
        <footer className="bg-black pt-2">            
            <div className="sm:flex sm:flex-row sm:justify-around flex-col items-center text-white" >
                <div className="sm:mt-0 sm:gap-4 flex flex-col items-center text-center gap-10 mt-6">
                    <h5 className="font-bold">Contacto</h5>
                    {redes.map((red) => (
                    <div key={red.id} className='flex flex-col gap-1'>
                        <a href={red.url} target='_blank'> <img src={red.imagen} title={red.nombre} alt={red.nombre} /> </a>
                    </div>
                ))}
                </div>
                <div className="sm:gap-2 sm:my-4 flex flex-col items-center text-center gap-10 my-10">
                    <div className="flex flex-row justify-around items-center">
                        <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                        </svg>
                        <span>Mar del Plata, Provincia de Buenos Aires, Argentina</span>
                    </div>
                    <span>Codigo Postal 7600</span>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201170.11282813022!2d-57.76534568861183!3d-38.017181126379576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94d19d34209%3A0xdd9670804bfed126!2sMar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1741897386924!5m2!1ses-419!2sar" width="300" height="150" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
                <p className="text-center text-white">© Ezequiel Reyes</p>
        </footer>
        </>
    )
}

export default Footer;