import React from 'react'

const Map = () => {
    return (
        <div className=' bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800'>
            <div className=' relative flex flex-col justify-center items-center container w-auto h-auto'>

                <div className=' relative lg:absolute top-16 mx-auto text-center w-[43%]'>
                    <h1 className=' text-4xl text-first font-bold'>More Than 60000 Customers</h1>
                    <p className=' text-gray-300'>Buy products on your any device with our app & enjoy your time what you want. just download & install & start to shopping</p>
                </div>
                <div className='lg:mt-10 relative'>
                    <img src="world.webp" alt="" className=' bg-cover' />

                    <div className=' absolute left-[38%] top-[33%]'>

                        <span class="relative flex h-3 w-3 cursor-pointer group">
                            <h1 className=' absolute w-auto h-auto -top-5 bg-white rounded-lg px-4 pt-1 pb-[6px] hidden group-hover:block text-sky-500 uppercase font-bold text-sm'>Finland</h1>
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                    </div>

                    <div className=' absolute left-[22%] top-[47%]'>
                        <span class="relative flex h-3 w-3 cursor-pointer group">
                            <h1 className=' absolute w-auto h-auto -top-5 bg-white rounded-lg px-4 pt-1 pb-[6px] hidden group-hover:block text-rose-500 uppercase font-bold text-sm'>Germany</h1>
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                        </span>
                    </div>

                    <div className=' absolute left-[30%] top-[66%]'>
                        <span class="relative flex h-3 w-3 cursor-pointer group">
                            <h1 className=' absolute w-auto h-auto -top-5 bg-white rounded-lg px-4 pt-1 pb-[6px] hidden group-hover:block text-green-500 uppercase font-bold text-sm'>USA</h1>
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                    </div>

                    <div className=' absolute left-[54%] top-[55%]'>
                        <span class="relative flex h-3 w-3 cursor-pointer group">
                            <h1 className=' absolute w-auto h-auto -top-5 bg-white rounded-lg px-4 pt-1 pb-[6px] hidden group-hover:block text-indigo-500 uppercase font-bold text-sm'>Canada</h1>
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                        </span>
                    </div>

                    <div className=' absolute left-[86%] top-[72%]'>
                        <span class="relative flex h-3 w-3 cursor-pointer group">
                            <h1 className=' absolute w-auto h-auto -top-5 bg-white rounded-lg px-4 pt-1 pb-[6px] hidden group-hover:block text-fuchsia-500 uppercase font-bold text-sm'>Philipine</h1>
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-fuchsia-500"></span>
                        </span>
                    </div>

                    <div className=' absolute left-[68%] top-[40%]'>
                        <span class="relative flex h-3 w-3 cursor-pointer group">
                            <h1 className=' absolute w-auto h-auto -top-5 bg-white rounded-lg px-4 pt-1 pb-[6px] hidden group-hover:block text-amber-500 uppercase font-bold text-sm'>Russia</h1>
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Map