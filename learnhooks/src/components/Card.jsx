import React from 'react'

function Card() {
  return (
    <div className=' w-80 h-3/5  rounded-2xl opacity-1 bg-blue-300 flex  items-center py-2 px-2 gap-3 flex-col'>
        <div className='h-1/4 w-1/2 bg-blue-400 rounded-full flex justify-center py-2'>
            <img src="https://avatars.githubusercontent.com/u/95128635?v=4" 
            className='h-full rounded-full'
            alt="" />
        </div>
        <div className=' bg-blue-400 rounded-2xl p-2 indent-px'>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum suscipit atque aut assumenda sed omnis nulla? Ad omnis ipsum, deserunt illo earum pariatur eum? Fuga qui saepe laboriosam temporibus sunt?</p>
        </div>
        <div className='h-1/2 w-full bg-blue-400 rounded-2xl flex flex-row gap-2 p-2'>
            <div className='h-full w-full flex flex-col gap-2'>
                    <div className='bg-blue-300 w-full h-full rounded-xl px-2 flex justify-center items-center'>
                      <p className='text-sm'>Name : </p>
                    </div>
                    <div className='bg-blue-300 w-full h-full rounded-xl flex justify-center items-center'>
                      <p className='text-md'>Followers : 201</p>
                    </div>
            </div>
            <div className='h-full w-full flex flex-col gap-2'>
                    <div className='bg-blue-300 w-full h-full rounded-xl'></div>
                    <div className='bg-blue-300 w-full h-full rounded-xl'></div>
            </div>
        </div>
    </div>
  )
}

export default Card





