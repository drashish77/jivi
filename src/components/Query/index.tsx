import React from 'react'
// import styles from './styles.module.css'
import clsx from 'clsx'
import Image from 'next/image'
import Form from './Form'
import { Toaster } from 'react-hot-toast'

const Query = () => {
  return (
    <section
      className='relative mt-28 md:mt-0 md:pb-[10rem] lg:pb-[35rem] 2xl:pb-[28rem]'
      id='contact-form'
    >
      <div>
        <Toaster position='top-right' />
      </div>
      <div className='absolute top-0 z-20 hidden w-screen lg:block'>
        <img
          src='/images/contacts/query-bg.svg'
          alt=''
          className=' block w-full object-contain'
        />
      </div>
      <div className='relative h-[26.5vh] w-full md:h-[50vh] 2xl:h-[50vh]'>
        <div className=' lg:hidden'>
          <Image
            src='/images/contacts/query-bg-m.svg'
            fill
            alt='new Image'
            className='z-10 block object-contain'
          />
          <Image
            src='/images/contacts/query-couple-m.svg'
            width={150}
            height={150}
            alt=''
            className='absolute -bottom-10 right-5 z-20 my-10 block object-contain md:-bottom-5  2xl:my-14'
          />
          <div className='absolute left-5 top-12 z-20 sm:top-20 md:top-20 '>
            <h3 className='text-2xl font-semibold leading-[1.5] text-white/60  md:text-[40px] '>
              <div className=''>Have a query? Share</div>
              <div className=''>with us</div>
            </h3>
          </div>
        </div>
        <div className='absolute z-0 w-full md:top-96 md:h-[15rem] 2xl:bottom-80 2xl:h-[10rem]'>
          <Image
            src='/images/dotted-bg.svg'
            alt=''
            fill
            className=' object-cover opacity-10'
          />
        </div>
        <div className='absolute z-0 w-full md:top-[45rem] md:h-[15rem] 2xl:bottom-80 2xl:h-[10rem]'>
          <Image
            src='/images/dotted-bg.svg'
            alt=''
            fill
            className=' object-cover opacity-10'
          />
        </div>
      </div>

      <div className='mb-32 mt-5 block lg:hidden'>
        <div className='card-hover z-20 mx-5 rounded-3xl bg-white  p-4 md:mx-0 2xl:right-32 2xl:top-24'>
          <h3 className='my-5 text-2xl font-bold text-[#020066]'>Contact Us</h3>
          <Form />
        </div>
      </div>
      {/* text-[calc(1rem+2.5vw)] */}
      <div className='2xl:top-30 absolute left-0 right-0 top-10 z-20 hidden md:container sm:top-20 md:top-16 lg:block'>
        <div className='flex flex-col justify-between pl-5 md:flex-row  md:pl-0 '>
          <div className=''>
            <h3 className='text-2xl font-semibold leading-[1.5] tracking-[0.5px] text-white/60  md:text-[40px] 2xl:text-[3vw] '>
              <div className=''>Have a query? Share</div>
              <div className=''>with us</div>
            </h3>
            <Image
              src='/images/contacts/query-section.svg'
              width={350}
              height={350}
              alt='new Image'
              className='z-20 my-10 hidden object-contain md:block 2xl:my-14'
            />

            <div className={clsx('hidden lg:block')}>
              <p className=' w-[55%] text-left text-xl leading-[32px] tracking-[0.5px] text-[#020066] 2xl:w-[45%]'>
                We are here to cater all your needs, if you have any questions,
                here’s some help ready for you.{' '}
              </p>
            </div>
          </div>
          <div className='card-hover z-20 rounded-3xl  bg-white p-8  2xl:right-32 2xl:top-24'>
            <h3 className='my-5 text-2xl font-bold text-[#020066]'>
              Contact Us
            </h3>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Query
