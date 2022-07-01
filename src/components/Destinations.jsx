import React from 'react';
import Lombok from '../assets/lombok.jpg';
import PulauRedang from '../assets/pulau-redang.jpg';
import PulauCinta from '../assets/pulau-cinta.jpg';
import RajaAmpat from '../assets/raja-ampat.jpg';
import PulauTidung from '../assets/pulau-tidung.jpg';

const Destinations = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1>Pilihan terbaik tahun ini</h1>
            <p className='py-4'>On the Caribbean's Best Drevel</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={PulauTidung} alt="" />
                <img className='w-full h-full object-cover' src={Lombok} alt="" />
                <img className='w-full h-full object-cover' src={PulauRedang} alt="" />
                <img className='w-full h-full object-cover' src={PulauCinta} alt="" />
                <img className='w-full h-full object-cover' src={RajaAmpat} alt="" />
            </div>
        </div>
    )
}

export default Destinations;