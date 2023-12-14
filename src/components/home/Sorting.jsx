import React from 'react'

const Sorting = () => {
  return (
    <div className=' bg-gray-100 my-5 p-5 flex  items-center justify-end'>
        <select className='bg-gray-200 py-3 px-5' >
            <option disabled value="">Seçiniz</option>
            <option  value="inc">Artan</option>
            <option  value="dic">Artan</option>
        </select>
    </div>
  )
}

export default Sorting