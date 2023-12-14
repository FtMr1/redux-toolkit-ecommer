import React from 'react'
import Slider from 'react-slick'
const SliderCount = () => {
   
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
  return (
    <div>
        <Slider {...settings}>
          <div className='!flex items-center bg-slate-100 '>
            <div className='w-1/2'>
                <div className='text-5xl'>Macbook</div>
                <div className='btn text-lg mt-2 '>Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13" QHD Taşınabilir Bilgisayar Uzay Grisi MGN63TU/A</div>
                <div className=' rounded-full cursor-pointer text-3xl w-[200px] h-14 flex items-center justify-center bg-gray-400 mt-9'>İncele</div>
            </div>
            <img src="https://productimages.hepsiburada.net/s/49/500/10983949860914.jpg" className='w-1/2' alt="" />
           

          </div>
          <div className='!flex items-center  bg-slate-100'>
          <div className='w-1/2'>
                <div className='text-5xl'>Huawei</div>
                <div className='btn text-lg mt-2 '>Huawei MateBook D15 Intel Core i7 1195G7 16GB 512GB SSD Windows 11 Home 15.6" FHD Taşınabilir Bilgisayar</div>
                <div className=' rounded-full cursor-pointer text-3xl w-[200px] h-14 flex items-center justify-center bg-gray-400 mt-9'>İncele</div>
            </div>
          <img src="https://productimages.hepsiburada.net/s/446/1500/110000480404298.jpg" className='w-1/2' alt="" />
            
          </div>
         
         
        </Slider>
    </div>
  )
}

export default SliderCount