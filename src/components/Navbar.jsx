import Logo from '../assets/logo.png';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    /* 
    TODO: Add hover effects and responsiveness 
    */
    <nav className='flex justify-between items-center text-white border border-[#197686] px-4 py-3 rounded-[24px]'>
      <div>
        <img src={Logo} alt='logo' />
      </div>
      <ul className='flex gap-4 text-lg'>
        <li className='flex items-center justify-center p-2.5 gap-2.5'>
          <a href='#'>Events</a>
        </li>
        <li className='flex items-center justify-center p-2.5 gap-2.5'>
          <a href='#'>My Tickets</a>
        </li>
        <li className='flex items-center justify-center p-2.5 gap-2.5'>
          <a href='#'>About Project</a>
        </li>
      </ul>
      <button className='bg-white flex gap-2 items-center justify-center text-black px-6 py-3 rounded-xl text-base font-JejuMyeongjo'>
        MY TICKETS
        <ArrowRight size={16} />
      </button>
    </nav>
  );
};

export default Navbar;
