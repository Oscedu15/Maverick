import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import Image from "next/image";

//CountUp
import { CountUpItems } from "@/Data/Data";
import MyCountUp from "@/components/CountUp";
import { useInView } from "react-intersection-observer";

//Animation
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <>
      <Head>
        <title>Maverick | About</title>
      </Head>
      <Wrapper>
        <div className="flex flex-col gap-12 items-center justify-center min-h-screen mb-12 lg:flex-row lg:mb-0 pt-28 lg:pt-0">
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
          <motion.div variants={smoothIn('right', 0.5)}
          initial='hidden' animate='show' exit='hidden' transition={{duration: 1, ease: 'easeInOut'}}
           className="w-auto h-auto lg:w-[450px] lg:h-[350px]">
            <Image
              src={"/about.jpg"}
              alt={"about Image"}
              width={500}
              height={400}
            />
          </motion.div>

          <motion.div variants={smoothIn('left', 0.5)}
          initial='hidden' animate='show' exit='hidden' transition={{duration: 1, ease: 'easeInOut'}} className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div
              className="uppercase font-medium text-sm text-WhiteGray
                "
            >
              -Finest Trans
            </div>
            <div className="font-semibold text-3xl mt-8">
              We Value Our Clients And Want Them To Have A Nice Experience
            </div>
            <p className="text-Black text-sm mt-8 leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At vero
              sunt itaque repellat corporis minima assumenda eaque deleniti
              totam eligendi ipsa sequi quo maxime explicabo aliquid asperiores,
              repellendus fugiat necessitatibus reprehenderit quaerat tempore!
              Ab doloremque, quibusdam ex itaque corrupti sapiente?
            </p>
            <button className="flex-none rounded-full bg-Red px-6 mt-4 py-2.5 text-sm font-normal hover:bg-black transition-all duration-300 text-white">
              Read More
            </button>

            {/* Count Up */}
            <div
              ref={ref}
              className="flex justify-center mt-12 gap-12 flex-wrap"
            >
              {CountUpItems?.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-Red text-3xl flex">
                    {inView && (
                      <MyCountUp start={0} end={item.number} duration={3} />
                    )}
                    +
                  </div>
                  <div className="text-Black mt-2 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
}
