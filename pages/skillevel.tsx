import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import Image from "next/image";
import Skills from "@/components/Skills";
import { skills } from "@/Data/Data";

//Animations
import {motion} from 'framer-motion';
import { smoothIn } from "@/animate";

export default function skilllevel() {
  return (
    <>
    <Head>
      <title>Maverick | Skills</title>
    </Head>
    <Wrapper className="text-center pt-24 flex flex-col justify-center">
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
      <div className="w-full h-full">
        <motion.div variants={smoothIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}} className="text-WhiteGray font-medium uppercase text-sm text-center">
          - Only the best
        </motion.div>
        <motion.p variants={smoothIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}} className="font-semibold text-Black text-3xl mt-4 lg:mb-16 mb-8">
          Our Satisfied Clients All Around The Globe
        </motion.p>

        <div className="flex h-full flex-col justify-center text-center ">
          <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 lg:pt-0 pt-12">
            <motion.div variants={smoothIn('right', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}}>

            <Image src={'/skills.jpg'} alt="Skills" width={400} height={500} />
            </motion.div>
            <motion.div variants={smoothIn('left', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}} className="lg:ml-8 lg:max-w-md w-full">
              <Skills skills={skills}/>
            </motion.div>
          </div>
        </div>
      </div>
    </Wrapper>
    </>
  )
}
