import React, { useRef } from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';
import SideBar from "../components/SideBar";


const HomePage = () => {

    const bg_img = require('../image/bg_ship2.png')
    const section1 = useRef(null)
    const section2 = useRef(null)
    const section3 = useRef(null)

    return (
        <div className="container min-w-full " >
            <TopBar />
            <section ref={section1} className="h-screen w-full flex justify-center items-center bg-center shadow-xl shadow-gray-800" style={{backgroundImage: `url(${bg_img})`}} >
                <div className="">
                    <h1 className="text-6xl sm:text-8xl text-gray-200 font-mono text-center bg-gray-700/10">NUSANTARA ELITES</h1>
                    <h1 className="text-xl text-slate-300 font-mono text-center border-b-2 border-emerald-400">A Legend will start his journey from here</h1>
                    <ul className="flex gap-2 justify-center mt-5">
                        <li className="p-2">
                            <Link to="#" className=" text-gray-200 hover:text-gray-800 hover:bg-emerald-200 border-2 border-[#272324] px-4 p-2 font-bold rounded-sm">Profile</Link>
                        </li>
                        <li className="p-2">
                            <Link to="#" className="text-gray-200 hover:text-gray-800  bg-[#272324] hover:bg-emerald-200 border-2 border-emerald-400  px-4 py-2 font-bold rounded-sm ">Test 2</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <SideBar />
            <section ref={section2} className="section2 bg-slate-200 border-t-8 border-gray-700/75 border-collapse">
                <div className="flex flex-wrap justify-center items-center">
                    <h1 className="basis-full text-center font-mono font-semibold text-4xl p-5">NKRI Elite Gallery</h1>
                    <div className="flex flex-wrap gap-4">
                    <div className='w-60 h-60'>
                        <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    </div>
                    <div className='w-60 h-60'>
                        <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    </div>
                    <div className='w-60 h-60'>
                        <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                    </div>
                    </div>
                    <Link className="basis-full text-center font-semibold m-4 hover:text-emerald-400"><span>More In Our Gallery</span></Link>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage;