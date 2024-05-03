import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { GrLocation } from "react-icons/gr";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TbMailOpened } from "react-icons/tb";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, "Name must be 2 chracter"),
  email: z.string().email("Email is not valid"),
  mobile: z.string().min(10),
  subject: z.string().min(2),
  messages: z.string()

})

const Contact = () => {
  const [datas, setDatas] = useState([]);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      subject: '',
      messages: ''
    },
    resolver: zodResolver(schema)
  });

  const Submit = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    setDatas([...datas, data])
    reset()
  }

  useEffect(() => {
    console.log(datas)
  }, [datas])



  const contactList = [
    {
      icon: <GrLocation size={25} />,
      heading: "Office Address",
      desc: "5687+345, M K Rd, Jashore",
      color: "text-green-500"
    },
    {
      icon: <LiaPhoneVolumeSolid size={25} />,
      heading: "Phone number",
      desc: "+8801779860229",
      color: "text-sky-500"
    },
    {
      icon: <TbMailOpened size={25} />,
      heading: "Send email",
      desc: "csrrony110@gmail.com",
      color: "text-orange-500"
    },
  ]

  return (
    <div className='container mb-20'>
      <div className='flex flex-col justify-center items-center text-center gap-2 py-6'>
        <p className=' uppercase text-second font-bold tracking-widest'>Get in touch with us</p>
        <h1 className=' capitalize font-bold text-3xl text-gray-700'>We're always eager to hear from you!</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-center my-4">
        <div className='w-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.2587229346709!2d89.2128520466276!3d23.16510570852977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff105e105beb6d%3A0x8a57bead711ed155!2sJess%20Tower!5e0!3m2!1sen!2sbd!4v1712994830554!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' w-full h-[400px] rounded'></iframe>
        </div>
        <div className='w-[430px] lg:w-[500px] space-y-4'>
          {
            contactList.map(({ icon, heading, desc, color }) => (
              <div className=' flex items-center gap-2 py-5 px-2 rounded border border-gray-200 shadow'>
                <div className={color}>
                  {icon}
                </div>
                <div>
                  <h1 className=' text-lg text-gray-500 font-bold'>{heading}</h1>
                  <p className=' text-gray-400 text-sm'>{desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center gap-2 py-6'>
        <p className=' uppercase text-second font-bold tracking-widest'>contact us</p>
        <h1 className=' capitalize font-bold text-3xl text-gray-700'>Fill-up the form for contacting us and so that we can get to know your needs well.</h1>
      </div>
      <div className='flex justify-center items-center w-[60%] mx-auto mt-6'>
        <form action="" onSubmit={handleSubmit(Submit)} className=' w-full flex gap-x-7 flex-wrap justify-center items-center'>
          <div className='min-w-[300px] w-[48%]'>
            <input type="text" {...register("name")} autoComplete='off' className='w-full px-3 py-2 rounded text-gray-500 outline-none font-bold placeholder:font-semibold border border-gray-200 shadow-md bg-transparent' placeholder='Your Name*' />
            <p className=' text-red-500 font-semibold h-7'>{errors?.name?.message}</p>
          </div>
          <div className='min-w-[300px] w-[48%]'>
            <input type="text" {...register("email")} autoComplete='off' className='w-full px-3 py-2 rounded text-gray-500 outline-none font-bold placeholder:font-semibold border border-gray-200 shadow-md bg-transparent' placeholder='Your Email*' />
            <p className=' text-red-500 font-semibold h-7'>{errors?.email?.message}</p>
          </div>
          <div className='min-w-[300px] w-[48%]'>
            <input type="number" {...register("mobile")} autoComplete='off' className='w-full px-3 py-2 rounded text-gray-500 outline-none font-bold placeholder:font-semibold border border-gray-200 shadow-md bg-transparent' placeholder='Mobile Number*' />
            <p className=' text-red-500 font-semibold h-7'>{errors?.mobile?.message}</p>
          </div>
          <div className=' min-w-[300px] w-[48%]'>
            <input type="text" {...register("subject")} autoComplete='off' className='w-full px-3 py-2 rounded text-gray-500 outline-none font-bold placeholder:font-semibold border border-gray-200 shadow-md bg-transparent' placeholder='Your Subject*' />
            <p className=' text-red-500 font-semibold h-7'>{errors?.subject?.message}</p>
          </div>
          <div className='min-w-[300px] w-full'>
            <textarea name="" id="" {...register("messages")} autoComplete='off' className=' w-full px-3 py-2 rounded text-gray-500 outline-none font-bold min-h-44 overflow-y-auto no-scrollbar placeholder:font-semibold border border-gray-200 shadow-md bg-transparent' placeholder='Your Message'></textarea>
          </div>
          <button className='px-4 py-2 bg-second text-sm font-bold tracking-wider text-gray-700 rounded border-none text-center w-[140px] mt-10' disabled={isSubmitting} type='submit'>{isSubmitting ? "Sending..." : "Send message"}</button>
        </form>
      </div>
    </div>
  )
}

export default Contact