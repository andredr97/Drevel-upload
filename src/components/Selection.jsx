import React from 'react';
import Lombok from '../assets/lombok.jpg';
import PulauRedang from '../assets/pulau-redang.jpg';
import PulauCinta from '../assets/pulau-cinta.jpg';
import RajaAmpat from '../assets/raja-ampat.jpg';
import PulauTidung from '../assets/pulau-tidung.jpg';
import Meldives from '../assets/meldives.jpg';
import SelectCards from './SelectCards' ;

const Selection = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

            <SelectCards bg={Lombok} text='Pulau Lombok' />
            <SelectCards bg={PulauRedang} text='Pulau Redang' />
            <SelectCards bg={PulauCinta} text='Pulau Cinta' />
            <SelectCards bg={RajaAmpat} text='Raja Ampat' />
            <SelectCards bg={PulauTidung} text='Pulau Tidung' />
            <SelectCards bg={Meldives} text='Meldives' />
           
        </div>
    )
}

export default Selection;