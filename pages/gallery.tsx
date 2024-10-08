import Wrapper from '@/components/Wrapper'
import Head from "next/head";
import { gallery } from '@/Data/Data';
import Image from 'next/image';

//Animation
import {motion} from 'framer-motion';
import { smoothIn } from '@/animate';

export default function Gallery() {
  return (
    <>
    <Head>
      <title>Maverick | Gallery</title>
    </Head>
    <Wrapper className='flex pt-40 flex-col justify-center text-center'>
      <div>
            {/* Gradients Background  */}
            <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem]
        w-[31.25rem] lg:w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
        xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <motion.div variants={smoothIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden' className="uppercase font-semibold text-sm text-WhiteGray">
          -All Collection
        </motion.div>
        <motion.div variants={smoothIn('left', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}} className='container grid lg:grid-cols-2 gap-8 py-8'>
          {
            gallery?.map((galery, index) => (
              <div key={index} className='relative overflow-hidden rounded-xl group'>
                <div>
                  <Image src={galery.image} width={480} height={380} alt='Gallery'
                  className='w-full transition-transform duration-300 transform hover:scale-125 hover:rotate-2'/>
                </div>
                <div className="absolute bottom-5 uppercase bg-Black/60 text-[1rem] tracking-widest text-WhiteGray
                text-left overflow-hidden ml-0 w-max">
                  <div className="px-3 my-2">
                    {galery.name}
                  </div>
                </div>

              </div>
            ))
          }
        </motion.div>
      </div>
    </Wrapper>
    </>
  )
}
