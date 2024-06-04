import { useState } from 'react';
import { header } from '../constants/header'
import useWindowWidth from '../hooks/useWindowWidth'
import { PiHamburgerDuotone } from "react-icons/pi";
import SideBar from './mobile/SideBar';


const Header = () => {
    const [openNav, setOpenNav] = useState<boolean>(false)
    const windowWidth = useWindowWidth()


    return (
        <div className='flex justify-between items-center'>
            <div className='text-4xl text-white font-bold underline hover:no-underline'>
                Arya
            </div>
            {windowWidth < 880 ? <PiHamburgerDuotone className='text-white text-4xl cursor-pointer' onClick={() => { setOpenNav(true); console.log(openNav); }} /> : (
                <>
                    <div className='text-white text-md font-semibold'>
                        <ul className='flex items-center align-middle gap-8 capitalize'>
                            {header.map((item, index) => (
                                <li key={index} className='hover:border-b-2 cursor-pointer'>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='text-white font-extralight items-center'>
                        <div>Request Demo</div>
                    </div>
                </>
            )}
            <SideBar open={openNav} setOpenNav={setOpenNav} />
        </div>
    )
}

export default Header