import { header } from '../../constants/header'
import { IoIosClose } from "react-icons/io";


const SideBar = ({ open, setOpenNav }: { open: boolean, setOpenNav: (isOpen: boolean) => void }) => {
    return (
        <div className={`fixed border-l-2 top-0 right-0 h-full w-72 bg-[#121418] z-50 transition-transform duration-300 transform ${open ? 'translate-x-0' : 'translate-x-full'} ease-in-out`}>
            <div className='p-4'>
                <div className='text-white text-5xl mb-4'>
                    <IoIosClose className='cursor-pointer float-right' onClick={() => setOpenNav(false)} />
                </div>
                <ul className='mt-10'>
                    {header.map((item, index) => (
                        <li key={index} className='text-white text-4xl font-thin mb-4'>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar