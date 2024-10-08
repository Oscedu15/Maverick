import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import { services } from "@/Data/Data";

//Animations
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

export default function Services() {
  return (
    <>
      <Head>
        <title>Maverick | Services</title>
      </Head>
      <Wrapper className="flex flex-col pt-24 justify-center">
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
        <div className="h-full">
          <div className="text-center my-8 md:px-8">
            <motion.div
              variants={smoothIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="uppercase font-medium text-sm text-WhiteGray">
                - Services
              </div>
              <div className="font-semibold text-3xl mt-8">
                Our Satisfied Clients All Around The Globe
              </div>
              <p className="text-Black text-sm lg:text-base mt-8 leading-7 max-w-3xl mx-auto">
                I offer a full range of web development services, from website
                design and development to API integration and performance
                optimization. Specialize in creating high-quality, responsive
                web applications deliver an exceptional user experience.
              </p>
            </motion.div>
            <motion.div
              variants={smoothIn("down", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="grid gap-4 text-Black mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {services?.map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-lg border-2 hover:border-red-500 text-center transition-all duration-300"
                >
                  <div className="flex justify-center text-Red text-5xl mb-4">
                    {service.icon}
                  </div>
                  <div className="flex justify-center mb-4 text-2xl font-medium">
                    {service.title}
                  </div>
                  <div className="flex justify-center text-Black text-sm">
                    {service.description}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
