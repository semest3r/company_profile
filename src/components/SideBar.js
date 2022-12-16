import {Link} from 'react-router-dom';
import { useRef, useState, createContext } from "react";

const SideBarContext = createContext({});

const SideBar = () => {

    return (
        <section className="relative">
            <div className="fixed top-1/2 right-10">
                <ul>
                    <li className='my-2 rounded-lg bg-gray-700 hover:border-2 border-emerald-400 p-1 text-sm text-slate-200'><a href='#section1'>Section 1</a></li>
                    <li className='my-2 rounded-lg bg-gray-700 hover:border-2 border-emerald-400 p-1 text-sm text-slate-200'><a href='#section2'>Section 2</a></li>
                    <li className='my-2 rounded-lg bg-gray-700 hover:border-2 border-emerald-400 p-1 text-sm text-slate-200'><a href='#section3'>Section 3</a></li>
                </ul>
            </div>
        </section>
    )
}

export default SideBar;