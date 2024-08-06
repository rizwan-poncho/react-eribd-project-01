import React from 'react'
import aboutUsBanner from '../assets/about-us-banner-photo.png'
import aboutUsMember from '../assets/about-us-member.jpg'

const AboutUs = () => {
  return (
    <>
    <div className='mb-16' style={{ position: 'relative', textAlign: 'center'}}>
      <img className='w-full' src={aboutUsBanner} alt="About Us Banner" />
      <h1 className='text-2xl font-bold text-green-600 sm:text-3xl md:text-5xl lg:text-5xl' style={{
        position: 'absolute',
        top: '50%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        margin: 0,
      }}>
        ABOUT BPCCI
      </h1>
    </div>
    <div className="grid items-center justify-center mb-10">
      <img className="mb-5 rounded-xl" src={aboutUsMember} alt="" />
      <h3 className='text-sm text-center'>The president of BPCCI Mr. Akber Hakim and its vice president Mr. Shams Mahmud call on the Hon. Commerce Minister of the People’s Republic of Bangladesh Mr. Tipu Munshi, MP.</h3>
    </div>
    </>
  )
}

export default AboutUs

