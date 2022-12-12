import {Link} from 'react-router-dom';
import { useRef, useState, createContext } from "react";

const SideBarContext = createContext({});

const SideBar = () => {

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <section className="relative">
            <div className="fixed top-1/2 right-10">
                <ul>
                    <li onClick={() => scrollToSection(section1)} className='my-2 rounded-lg bg-gray-700 hover:border-2 border-emerald-400 p-1 text-sm text-slate-200'><button>Section 1</button></li>
                    <li onClick={() => scrollToSection(section2)} className='my-2 rounded-lg bg-gray-700 hover:border-2 border-emerald-400 p-1 text-sm text-slate-200'>Section 2</li>
                    <li onClick={() => scrollToSection(section3)} className='my-2 rounded-lg bg-gray-700 hover:border-2 border-emerald-400 p-1 text-sm text-slate-200'>Section 3</li>
                </ul>
            </div>
        </section>
    )
}

export default SideBar;