import Image from 'next/image'
import React from 'react'

import { GrLocationPin } from "react-icons/gr";
import { CgMailOpen } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsGenderAmbiguous } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";


function ProfileContent() {
    return (
      <div className="mx-10 mb-20">
        <div className="h-[30vh] rounded-t-md bg-softBlend"></div>
  
        <div className="flex gap-20 -mt-20 z-50 relative h-auto ">
          <div className="flex-[40%] border border-black bg-brand-gray ">
            <div className='flex justify-center items-center ~py-5/6'>
                <Image src="/images/v4.jpg" alt="default_profile" className=' rounded-2xl w-[70%] object-cover h-[30vh] ' width={350} height={100}/>
            </div>

            <h3 className='text-center text-5xl text-zinc-800 font-bowlby'>Felicia Osei</h3>
             <div className='grid place-content-center text-zinc-800 space-y-3 mt-2 mb-5 font-dmMono uppercase'>
            <div className='flex gap-5 items-center'>
             <GrLocationPin className='text-2xl'/>
                  <h1>Prestia Hunivali</h1>
                </div>

             <div className='flex gap-5 items-center'>
                 <CgMailOpen className='text-2xl'/>
                <h1>feliaciafegs@gmail.com</h1>
                </div>

                 <div className='flex gap-5 items-center'>
                     <BsTelephone className='text-2xl'/>
                    <h1>+2332486235500</h1>
                    </div>
            </div>
          </div>


          <div className="flex-[60%] border border-black bg-brand-gray text-zinc-800 ">
            <div className='p-5'>
            <h3 className='font-bowlby text-3xl'>Account details</h3>

            <div className='text-2xl font-dmMono mt-5 space-y-5'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 items-center'>
                            <MdOutlinePersonOutline/>
                            <h3>FirstName</h3>
                        </div>
                        <h3>Felecia</h3>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-5 items-center'>
                            <MdPersonAddAlt/>
                            <h3>LastName</h3>
                        </div>
                        <h3>Asaglo</h3>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-5 items-center'>
                            <SlCalender/>
                            <h3>Date Of Birth</h3>
                        </div>
                        <h3>21 st June 2003</h3>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-5 items-center'>
                            <MdOutlinePersonOutline/>
                            <h3>Active</h3>
                        </div>
                        <h3>Recent, checked In</h3>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-5 items-center'>
                            <BsGenderAmbiguous/>
                            <h3>Gender</h3>
                        </div>
                        <h3>Female</h3>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-5 items-center'>
                            <IoPersonOutline/>
                            <h3>City</h3>
                        </div>
                        <h3>Accra</h3>
                    </div>

            </div>

          </div>

        </div>
        </div>

        <div className='mt-10 border border-black bg-brand-gray h-auto rounded-2xl text-zinc-800 p-5'>
            <div className='flex items-center justify-between mx-10'>
                <h3 className='text-2xl font-bowlby'>Personal Information</h3>
                <div className='flex gap-3 items-center border border-blue-600 rounded-md px-8 py-3 font-dmMono'>
                    <CiEdit/>
                    <h1>Edit</h1>
                </div>
            </div>

            <div className='max-w-2xl mt-2  font-dmMono'>
                 <div className='flex justify-between'>
                    <h1>FirstName</h1>
                    <h1>LastName</h1>
                 </div>

                 <div className='flex justify-between mb-2'>
                    <h1>Felecia</h1>
                    <h1>Azaglo</h1>
                 </div>

                 <div className='flex justify-between'>
                    <h1>Email Address</h1>
                    <h1>Phone</h1>
                 </div>
                 <div className='flex justify-between'>
                    <h1>felecia@gmail.com</h1>
                    <h1>(+233-02486000243)</h1>
                 </div>
            </div>
        </div>

        <div className='mt-10 border border-black bg-brand-gray h-auto rounded-2xl text-zinc-800 p-5'>
            <div className='flex items-center justify-between mx-10'>
                <h3 className='text-2xl font-bowlby'>Address</h3>
                <div className='flex gap-3 items-center border border-blue-600 rounded-md px-8 py-3 font-dmMono'>
                    <CiEdit/>
                    <h1>Edit</h1>
                </div>
            </div>

            <div className='max-w-2xl mt-2 font-dmMono'>
                 <div className='flex justify-between'>
                    <h1>Country</h1>
                    <h1>City</h1>
                 </div>

                 <div className='flex justify-between mb-2'>
                    <h1>Ghana</h1>
                    <h1>Accra</h1>
                 </div>

                 <div className='flex justify-between'>
                    <h1>Postal Code</h1>
                    <h1>TAX ID</h1>
                 </div>
                 <div className='flex justify-between'>
                    <h1>ERT 62574</h1>
                    <h1>As56417869</h1>
                 </div>
            </div>
        </div>
      </div>
    );
  }
  
export default ProfileContent