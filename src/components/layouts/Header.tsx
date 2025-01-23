import Link from 'next/link'

import { navLinks } from '@/app/data';
import clsx from 'clsx';

function Header({className}:{className?:string}) {
  return (
    <header className={clsx('header absolute inset-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 md:h-20 font-dmMono ~text-lg/xl',className)}>

      <div className='mx-auto max-w-6xl grid w-full grid-cols-[auto,auto] md:grid-cols-[1fr,auto,1fr]'>

        <Link href="/">
          Logo
        </Link>

        <nav aria-label='Main'
         className='col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1'>
          <ul className='flex flex-wrap gap-5 items-center justify-center'>
            {navLinks.map(({ name, href }, index) => (
              <Link href={href} key={index}>
                <span className='capitalize text-nowrap'>{name}</span>
              </Link>
            ))}
          </ul>
        </nav>

        <div className='justify-self-end'>
          <button>connect wallet</button>
        </div>

      </div>

    </header>
  )
}

export default Header;
