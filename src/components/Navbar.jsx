import Logo from '../assets/logo.png';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    /* 
    TODO: Add hover effects and responsiveness 
    */
    <nav className='relative flex justify-between items-center text-white border border-[#0e464f] px-4 py-2 rounded-xl bg-[#041e22]'>
      <div className='flex items-center'>
        <img src={Logo} alt='logo' className='h-10 w-auto' />
      </div>
      <ul className='hidden md:flex gap-4 text-base'>
        <li className='flex items-center justify-center p-2.5 gap-2.5 font-medium hover:text-gray-300 transition-colors font-[JejuMyeongjo]'>
          <a href='#'>Events</a>
        </li>
        <li className='flex items-center justify-center p-2.5 gap-2.5 font-medium hover:text-gray-300 transition-colors font-[JejuMyeongjo]'>
          <a href='#'>My Tickets</a>
        </li>
        <li className='flex items-center justify-center p-2.5 gap-2.5 font-medium hover:text-gray-300 transition-colors font-[JejuMyeongjo]'>
          <a href='#'>About Project</a>
        </li>
      </ul>
      <button className='bg-white flex gap-1 items-center justify-center text-black px-4 py-2 rounded-xl text-sm font-[JejuMyeongjo]'>
        MY TICKETS
        <ArrowRight size={16} />
      </button>
    </nav>
  );
};

export default Navbar;
