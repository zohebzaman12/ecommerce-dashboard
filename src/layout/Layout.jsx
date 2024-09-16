import * as React from 'react';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { BsShop, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { FiBox } from 'react-icons/fi';
import { MdOutlineCampaign, MdOutlineAssessment, MdOutlineMenuBook, MdArrowForwardIos } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

const navItems = [
  { text: 'Home', icon: <AiOutlineHome size="24px" color='' />, link: '/' },
  { text: 'Stores', icon: <BsShop size="24px" color='' />, link: '/stores' },
  { text: 'Products', icon: <FiBox size="24px" color='' />, link: '/products' },
  { text: 'Catalogues', icon: <MdOutlineMenuBook size="24px" color='' />, link: '/catalogues' },
  { text: 'Promotions', icon: <MdOutlineCampaign size="24px" color='' />, link: '/promotions' },
  { text: 'Reports', icon: <MdOutlineAssessment size="24px" color='' />, link: '/reports' },
  { text: 'Docs', icon: <BsFillFileEarmarkTextFill size="24px" color='' />, link: '/docs' },
  { text: 'Settings', icon: <AiOutlineSetting size="24px" color='' />, link: '/settings' }
];

function Layout() {
  return (
    <div className='flex'>
      <div className='min-w-80 min-h-[982px] font-worksans p-6 flex flex-col justify-between border-r'>
        <div>
          <div className='border-b pb-4'>
            <img src='/logo.svg' alt='Company Logo'></img>
          </div>
          <div className='flex flex-col gap-2 pt-4'>
            {navItems.map((element) => (
              <Link to={element.link} className='flex items-center text-sm gap-2 hover:bg-customBlueLight p-2 rounded-md'>
                {element.icon}
                <span>{element.text}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-3 border-t pt-4'>
          <img className="rounded-full w-12 h-12 object-cover" src="/img1.webp" alt="Profile" />
          <div className='text-sm'>
            <p>Andy Samberg</p>
            <p className='text-customGrayMedium'>andy.samberg@gmail.com</p>
          </div>
          <MdArrowForwardIos size="15px" color='#1F8CD0'/>
        </div>
      </div>
      <div className='flex-grow p-6'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
