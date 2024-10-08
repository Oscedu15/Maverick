import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import { projects } from "../Data/Data";
import Image from "next/image";

//Animation 
import {motion} from "framer-motion";
import { smoothIn } from "@/animate";

export default function cars() {
  return (
    <>
      <Head>
        <title>Maverick | Cars</title>
      </Head>
      <Wrapper>
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
        <div className="flex flex-col pt-40 items-center text-center">
          <motion.div variants={smoothIn('up', 0.5)}
          initial='hidden' animate='show' exit="hidden" transition={{duration: 1, ease: 'easeInOut'}}>
            <div className="uppercase tracking-widest text-sm text-WhiteGray">
              -Exclusive Cars
            </div>
            <div className="font-semibold text-3xl mt-8 text-Black">
              Luxury Limousine For Maximun Satisfaction. Enjoy.
            </div>
            <p className="text-Black text-sm mt-8 leading-7 max-w-3xl">
              What We Provide Is The Luxury Transport And Comfortable Experience
              For You. We Care About Your Comfort And Safety. Get 15% Off Your
              Rental! Choose Your Model
            </p>
          </motion.div>
          <motion.div variants={smoothIn('right', 0.5)}
          initial='hidden' animate='show' exit="hidden" transition={{duration: 1, ease: 'easeInOut'}} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
            {projects?.map((project, index) => (
              <div key={index} className="bg-Blur p-10">
                <div className="w-full relative group">
                  <Image src={project.img} alt="card" width={500} height={500} />
                </div>

                <div className="text-Black mt-8 text-start">{project.name}</div>
                <div className="mt-2">
                  <Image src="/star.png" alt="Rating" width={80} height={5}  />
                </div>
                <div className="text-Black mt-6 text-start">{project.des}</div>
                <div className="text-star">
                  $ <span className="text-[64px]">180</span> / Per Day
                </div>
                <div className="flex mt-5 flex-wrap gap-2 ">
                  <span className="border-[#bfa37c] border w-full py-4 px-8 text-Black tracking-widest text-sm">{project.detail}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
}
