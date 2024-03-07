import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

export default function Navbar() {
    let [toggle, setToggle] = useState('false');
    return (
        <header>
            <nav className={'w-full flex py-6 justify-between items-center navbar'}>
                <img 
                    src={logo} 
                    alt="logo"
                    width={124}
                    height={32} 
                />
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {navLinks.map(link => 
                        <li 
                            key={link.id} 
                            className="font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white"
                        >
                            <a href={link.id}>
                                {link.title}
                            </a>
                        </li>
                    )}
                </ul>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img 
                        src={toggle ? close : menu} 
                        alt="nav dropbox"
                        width={25}
                        height={25} 
                        className="object-contain"
                        onClick={() => setToggle(!toggle)}
                    />
                </div>
                {toggle && 
                    <div className="flex p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
                        <ul className="list-none flex flex-col justify-end items-center flex-1">
                            {navLinks.map(link =>
                            <li 
                                key= {link.id}              className="font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white"
                            >
                                <a href={link.id}>{link.title}</a>
                            </li>
                            )}
                        </ul>
                    </div>
                }                
            </nav>
        </header>
    )
}
