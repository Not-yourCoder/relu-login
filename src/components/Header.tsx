import { header } from '../constants/header'


const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='text-4xl text-white font-bold underline hover:no-underline'>
                Arya
            </div>
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
        </div>
    )
}

export default Header