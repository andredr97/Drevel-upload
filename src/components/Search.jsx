import React from 'react';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

const Search = () => {
    return (
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p className='py-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero doloribus error deserunt eaque exercitationem nisi officia, soluta fugit nesciunt. Maxime quis ullam excepturi. Odit, nobis quod! Eligendi ad aut optio hic explicabo, numquam molestiae blanditiis rem id culpa dolor dignissimos, animi natus, sunt unde ipsa nam facilis fuga excepturi.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <RiCustomerService2Fill size={50} />
                        </button>
                        <div>
                            <h3 className='py-2'>CUSTOMER SERVICE</h3>
                            <p className='p-1'>Customer service aktif 24 jam</p>
                        </div>
                    </div> 
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <MdOutlineTravelExplore size={50} />
                        </button>
                        <div>
                            <h3 className='py-2'>AUTOMATED BOOKING</h3>
                            <p className='p-1'>Terhubung langsung dengan pihak hotel</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div>
                <div className='border text-center py-2'>
                    <p>GET AN ADDITIONAL 10% OFF</p>
                    <p className='py-2'>12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 py-2 mx-4 rounded-md'>BOOK NOW AND SAVE</p>
                </div>
                <form action="" className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="">Destination</label>
                        <select name="" id="" className='border rounded-md p-2'>
                            <option value="">Lombok</option>
                            <option value="">Pulau Cinta</option>
                            <option value="">Pulau Redang</option>
                            <option value="">Pulau Tidung</option>
                            <option value="">Raja Ampat</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-4'>
                        <label htmlFor="">Check-In</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="">Check-Out</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>
                    <button className='w-full my-4'>Booking NOW</button>
                </form>
            </div>
        </div>
    )
}

export default Search;