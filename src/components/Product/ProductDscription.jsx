import React from 'react'

export const ProductDscription = () => {
  return (
    <div className='mt-20'>
        <div className="flex gap-3 mb-4">
            <button className='hover:bg-white hover:text-black bg-black border-[#000] border text-white py-3 px-7 rounded-[4px] text-[13px] uppercase w-36px'> Description</button>
            <button className='  bg-black hover:bg-white hover:text-black border-[#000] border text-white py-3 px-7 rounded-[4px] text-[13px] uppercase w-36px'> Care Guide</button>
            <button className= 'bg-black hover:bg-white hover:text-black border-[#000] border text-white py-3 px-7 rounded-[4px] text-[13px] uppercase w-36px'> Size Guide</button>
        </div>
        <div className="flex flex-col pb-16">
           <p className='text-sm'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum quisquam, quos exercitationem ea qui aut maiores consequuntur, in nemo quam quasi molestiae pariatur eveniet. 
           Ipsa nesciunt dolores fugiat repellat.
           </p>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi eum voluptatum, quas, perferendis tempora odit ducimus voluptatem unde iure sed, veritatis omnis. Sed eos aperiam iste totam blanditiis voluptatem, odit explicabo dolorem eius accusantium ipsam illum magnam. Esse, autem!</p>
        </div>
    </div>
  )
}
