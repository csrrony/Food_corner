import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  username: z.string().min(2, "Username less than 2 chracter"),
  email: z.string().email("Email is not valid"),
  password: z.string().min(8)
})

const Register = () => {
  const [datas, setDatas] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    },
    resolver: zodResolver(schema)
  });

  const submit = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    setDatas([...datas, data])
    reset()
  }

  useEffect(() => {
    console.log(datas)
  }, [datas])

  return (
    <div className=' bg-[#73336F]'>
      <div className=' container flex flex-col gap-10 pt-20 lg:pt-0 lg:flex-row justify-between items-center h-auto lg:h-[500px]'>
        <div className=' text-center lg:text-left'>
          <p className=' uppercase text-[12px] font-semibold tracking-[3px] text-first'>Save the day</p>
          <h1 className=' text-white text-4xl font-semibold'>Join on Day Long Free Workshop for <br /> <span className=' font-bold'>Advance <span className=' font-semibold text-first'>Mastering </span> On Sales</span></h1>
          <p className=' text-[12px] text-white'>Limited Time Offer! Hurry Up</p>
        </div>
        <div className='flex justify-center items-end mx-auto lg:mx-0 w-[80%] lg:w-[35%]'>
          <form action="" onSubmit={handleSubmit(submit)} className='w-full bg-gradient-to-b from-white to-transparent flex flex-col justify-center items-center rounded-md p-6'>
            <h1 className=' font-bold text-2xl mt-4 mb-4'>Register Now</h1>

            <div className=' w-full'>
              <input
                {...register('username')}
                type="text" autoComplete='off' placeholder='Username' className=' rounded-sm w-full p-2 text-sm text-[#73336F] font-medium outline-none' />
              <p className=' text-red-500 font-semibold h-7'>{errors?.username?.message}</p>
            </div>

            <div className=' w-full'>
              <input
                {...register('email')}
                type="email" autoComplete='off' placeholder='Email' className=' rounded-sm w-full p-2 text-sm text-[#73336F] font-medium outline-none' />
              <p className=' text-red-500 font-semibold h-7'>{errors?.email?.message}</p>
            </div>


            <div className=' w-full'>
              <input
                {...register('password')}
                type="password" autoComplete='off' aut placeholder='Password' className=' rounded-sm w-full p-2 text-sm text-[#73336F] font-medium outline-none' />
              <p className=' text-red-500 font-semibold h-7'>{errors?.password?.message}</p>
            </div>


            <button disabled={isSubmitting} type="submit" className=' bg-first px-6 py-2 mb-3 mt-5 rounded-sm text-sm font-bold active:bg-second'>{isSubmitting ? "Loading..." : "Register Now"}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register