import React, {useState, useEffect} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-scroll';
const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('white');
    const [textColor, setTextColor] = useState('black');
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    const handleNav= () => {
        setNav(!nav);
    }

    useEffect(() => {
        const changeBackground = () => {
            if(window.scrollY >= 80) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('black');
            }  
        }
        window.addEventListener('scroll', changeBackground);
    }, [])


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-{1240px} m-auto flex justify-between items-center p-4 ml-12 text-black'>
            
            
            <Link href='/'>
                <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>NOGASoft</h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4 hover:text-blue-500'>
                    <Link to="Hero" spy={true} smooth={true} duration={300}>Inicio</Link>
                    </li>  
                <li className='p-4 hover:text-blue-500'>
                    <Link to="Team" spy={true} smooth={true} duration={300}>Nosotros</Link>
                </li>
                <li className='p-4 hover:text-blue-500'>
                    <Link to="Contact" spy={true} smooth={true} duration={300}>Contacto</Link>
                </li>
                
            </ul>
            
            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10 ease-in duration-300'>
            {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
              
                <ul className='text-white'>
                    <li className='p-4 text-4xl hover:text-blue-500'>
                    <Link to="Hero" spy={true} smooth={true} duration={300}>Inicio</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-blue-500'>
                    <Link to="Team" spy={true} smooth={true} duration={300}>Nosotros</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-blue-500'>
                    <Link to="Contact" spy={true} smooth={true} duration={300}>Contacto</Link>
                    </li>
                </ul>
                </div>


        </div>
    </div>
  )
}

export default Navbar;