import Bounded from '@/components/shared/Bounded'
import { Heading } from '@/components/shared/Heading'

import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillFileUnknown } from "react-icons/ai";
import FormConvertor from './FormConvertor';

function ConvertorContent() {
  return (
    <Bounded>
      <Heading as='h1' className='max-w-2xl mb-2'>
          convert fiat to usd-usdc
        </Heading>

    <div className='flex justify-between items-center'>
      <div>
        <p className="font-dmMono">Lorem ipsum dolor sit amet consectetur</p>
      </div>

    <div className='flex text-3xl gap-10'>
      <AiFillThunderbolt/>
      <AiFillFileUnknown/>
    </div>

      </div>

      <div className='grid place-content-center mt-20'>
        <FormConvertor/>
      </div>

      </Bounded>
  )
}

export default ConvertorContent