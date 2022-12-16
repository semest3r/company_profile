import React, { useRef } from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';
import SideBar from "../components/SideBar";


const HomePage = () => {

    const bg_img = require('../image/bg_ship2.png')

    return (
        <div className="container min-w-full " >
            <TopBar />
            <section id="section1" className="h-screen w-full flex justify-center items-center bg-center shadow-xl shadow-gray-800" style={{backgroundImage: `url(${bg_img})`}} >
                <div className="">
                    <h1 className="text-6xl sm:text-8xl text-gray-100 font-mono text-center bg-gray-700/10">NUSANTARA ELITES</h1>
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
            <section id="section2" className="section2 bg-slate-200 border-t-8 border-collapse">
                <div className="flex justify-center pt-5">
                    <div className="w-[70%] bg-gray-600">
                    <h1 className="w-full text-center text-gray-200 mt-10 p-5 font-mono font-semibold text-4xl">The Founding Fathers of NKRI Elites</h1>
                        <div className="mt-12 text-center border-b-4">
                            <ul className="">
                                <li className="inline-block px-5">
                                <img src={require('../image/default.jpg')} className="w-52 h-52 rounded-full"/>
                                <span className="block font-mono font-semibold p-2">Vid Vladimir</span>
                                <span className="block font-mono text-gray-800  ">President Corp</span>
                                </li>
                                <li className="inline-block px-5">
                                <img src={require('../image/default.jpg')} className="w-52 h-52 rounded-full"/>
                                <span className="block font-mono font-semibold p-2">Rodgan</span>
                                <span className="block font-mono text-gray-800  ">Vice President</span>
                                </li>
                                <li className="inline-block px-5">
                                <img src={require('../image/default.jpg')} className="w-52 h-52 rounded-full"/>
                                <span className="block font-mono font-semibold p-2">Dr Lupus Rex</span>
                                <span className="block font-mono text-gray-800  ">Jendral</span>
                                </li>
                            </ul>
                            <div className="border-b-4 border-emerald-400 mt-10 w-1/2 mx-auto"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section3" className="section2 bg-slate-200 border-t-8 border-collapse w-full">
                <div className="flex justify-center items-center flex-wrap">
                    <h1 className="w-full text-center font-mono font-semibold text-4xl p-5">NKRI Elite Gallery</h1>
                    <div className="">
                        <ul>
                            <li className="inline-block">
                            <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                            </li>
                            <li className="inline-block">
                            <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                            </li>
                            <li className="inline-block">
                            <img src={require('../image/default.jpg')} className="w-60 h-60"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center p-5">
                <Link className="font-semibold m-4 hover:text-emerald-400">More In Our Gallery</Link>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage;