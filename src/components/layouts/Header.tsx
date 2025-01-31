"use client"
import Link from 'next/link'
import clsx from 'clsx';
import Image from 'next/image'
import { usePathname } from 'next/navigation';

import { navLinks } from '@/app/data';
import { ButtonLink } from '../shared/ButtonLink';
import { HeaderProps } from '../../../types/base.types';

function Header({
  className,
  wallet,
  logOut,
}: HeaderProps
  ) {
  const pathname = usePathname();

  return (
    <header className={clsx('header  absolute inset-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 md:h-20 font-dmMono ~text-lg/xl',className)}>

      <div className='mx-auto max-w-6xl grid w-full grid-cols-[auto,auto] md:grid-cols-[1fr,auto,1fr] items-center'>

        <Link href="/">
           <Image src="/images/app-logo.png" alt="app_logo" width={130} height={130}/>
        </Link>

        <nav aria-label='Main'
         className='col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1'>
          <ul className='flex flex-wrap gap-5 items-center justify-center'>
            {navLinks.map(({ name, href }, index) => (
              <Link 
              href={href} 
              key={index}
              >
                <span 
                className={clsx(
                  'capitalize text-nowrap',
                  {
                    'bg-gray border-1-4 text-red-500': pathname===href
                  }
                  )}>{name}</span>
              </Link>
            ))}
          </ul>
        </nav>
        
        <div className='justify-self-end'>
          <div className='flex gap-5 items-center'>
            <h2>{wallet?.address.slice(0,10)}...</h2>

        <button onClick={logOut}>
           Logout
        </button>
          </div>

        </div>


      </div>

    </header>
  )
}

export default Header;
