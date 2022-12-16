import {Link} from 'react-router-dom';

const TopBar = () => {
    const logo = require('../image/logo.png')

    return (
        <header className="flex justify-end items-center bg-slate-700/75 flex-wrap">
            <div className='grow sm:basis-1/4'>
                <div className='flex justify-center py-2'>
                <Link to="/" className='flex items-center'><img src={logo} className="w-12"/><span className='text-gray-200 text-xl font-bold pl-4 hover:hover:text-emerald-400'>NKRI Elites</span></Link>
                </div>
            </div>
            <div className='grow sm:basis-1/2'>
                <ul className="flex flex-wrap gap-4 float-right justify-center mx-5 sm:mx-10">
                    <li className='font-semibold text-sm sm:text-base text-center'><Link to="/" className='text-gray-200 hover:text-emerald-400 px-2 py-1 font-bold rounded-sm'>Beranda</Link></li>
                    <li className='font-semibold text-sm sm:text-base text-center'><Link to="/gallery" className='text-gray-200 hover:text-emerald-400 px-2 py-1 font-bold rounded-sm'>Our Gallery</Link></li>
                    <li className='font-semibold text-sm sm:text-base text-center'><Link to="/about" className='text-gray-200 hover:text-emerald-400 px-2 py-1 font-bold rounded-sm'>About Us</Link></li>
                    <li className='font-semibold text-sm sm:text-base text-center'><Link to="#" className='text-gray-200 hover:text-emerald-400 px-2 py-1 font-bold rounded-sm'>Contact Us</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default TopBar;