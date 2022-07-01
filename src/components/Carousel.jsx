import React, {useState} from 'react';
import { BsArrowLeftSquareFill,BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
        url: 'https://images.unsplash.com/photo-1614506660531-c28e4d8e4795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1611043714658-af3e56bc5299?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'
    }
];

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;
    // console.log (length);

    const prevSlide = () => {
        setSlide(slide === length -1 ? 0 : slide +1);
    };
    const nextSlide = () => {
        setSlide(slide === 0 ? length -1 : slide -1);
    };


    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
            <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
            <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' />
            {sliderData.map((items, index) => (
                <div className={index === slide ? 'opacity-100 w-full' : 'opacity-0'}>
                    {index === slide && (
                    <img className='w-full rounded-md' src={items.url} alt="/" />
                    )}
                </div>
            ))}
        </div>
    )
}

export default Carousel;