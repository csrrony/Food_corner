import React from 'react'
import { IoLogoTwitter, IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

  const catagories = ["All Products", "Shop", "About", "Policy", "FAQs"]

  const quickLinks = ["Summer Sessions", "Events", "Gallary", "Forums", "Privacy Policy", "Terms of Use"]

  const tweets = [
    {
      icon: <IoLogoTwitter />,
      name: "Aminur islam",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, maiores."
    },
    {
      icon: <IoLogoTwitter />,
      name: "Anisul islam",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, maiores."
    }
  ]

  const socialLinks = [
    { icon: <FaFacebookSquare /> },
    { icon: <FaTwitterSquare /> },
    { icon: <FaLinkedin /> },
    { icon: <FaInstagramSquare /> }
  ]


  return (
    <>
      <div className=' bg-gray-900 py-5 text-white'>
        <div className=' container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          <div className='border-b-2 lg:border-b-0 lg:border-r-2 border-first pb-4'>
            <h1 className='text-xl text-first font-bold my-5'>About E-Shop</h1>
            <p className=' mb-3 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad perspiciatis nihil laudantium nam quis voluptatibus error esse vel officia aliquam?</p>
            <div className=' font-medium'>
              <p className='flex items-center gap-2'><span><MdLocationPin /></span> Jessore, Bangladesh.</p>
              <p className='flex items-center gap-2'><span><FaPhoneAlt /></span>+8801779860229</p>
              <p className='flex items-center gap-2'><span><IoMdMail /></span>csrrony110@gmail.com</p>
            </div>
            <div className='flex gap-2 mt-3'>
              {
                socialLinks.map(({ icon }, i) => (
                  <Link to={""} key={i} className=' text-2xl hover:text-first'>{icon}</Link>
                ))
              }
            </div>
          </div>

          <div className='border-b-2 lg:border-b-0 lg:border-r-2 border-first pb-4'>
            <h1 className='text-xl text-first font-bold my-5'>Catagories</h1>
            {
              catagories.map((item, i) => (
                <div key={i}>
                  <Link className=' font-semibold hover:text-first'>{item}</Link>
                </div>
              ))
            }
          </div>

          <div className='border-b-2 lg:border-b-0 lg:border-r-2 border-first pb-4'>
            <h1 className='text-xl text-first font-bold my-5'>Quick Links</h1>
            {
              quickLinks.map((item, i) => (
                <div key={i}>
                  <Link className=' font-semibold hover:text-first'>{item}</Link><br />
                </div>

              ))
            }
          </div>

          <div className=' pb-4'>
            <h1 className='text-xl text-first font-bold my-5'>Recent Tweets</h1>
            {
              tweets.map(({ icon, name, desc }, i) => (
                <div className='flex gap-2' key={i}>
                  <p className=' pt-2 hover:text-first'>{icon}</p>
                  <div>
                    <h1 className=' font-bold hover:text-first cursor-pointer'>{name}</h1>
                    <p>{desc}</p>
                  </div>
                  <br />
                </div>
              ))
            }
          </div>
        </div>

      </div>
      <div className=' py-3 text-center text-gray-100 bg-gray-600 text-lg font-bold tracking-widest'>@All rights reserve by E-Shop</div>
    </>
  )
}

export default Footer