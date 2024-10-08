import Wrapper from "@/components/Wrapper";
import { contacts } from "@/Data/Data";
import Head from "next/head";
import React from "react";

//Animation
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Maverick | Contact</title>
      </Head>
      <Wrapper className="flex flex-col justify-center items-center lg:flex-row pt-28 lg:pt-18">
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
        <motion.div
          variants={smoothIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="md:px-6 py-6 text-center lg:text-left"
        >
          <div className="text-WhiteGray font-medium uppercase text-sm mb-4">
            -Firest Transport
          </div>
          <div className="md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold">
            Ride To Destination With Maximun Comfort
          </div>
          <p className="leading-8 text-Black mb-8 text-sm lg:text-2xl max-w-xl mt-10">
            We Care About Your Comfort And Safety Do You Require A Car? Get In
            Touch With Us
          </p>
          <div>
            {contacts?.map((contact, index) => (
              <div key={index} className="mt-6">
                <div className="text-xl font-medium mb-2">{contact.text}</div>
                <div className="text-sm">{contact.text}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="border-[#bfa37c] border w-full lg:w-max py-4 px-8 tracking-widest text-sm">
              + More Details
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={smoothIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="lg:w-1/2 sm:w-[30rem] px-6 text-center py-6"
        >
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold mb-10">
            Leave a Comment
          </div>
          <form action="">
            <div className="flex items-center border-b border-Black py-2 mb-8">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div className="flex items-center border-b border-Black py-2 mb-8">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Phone"
              />
            </div>
            <div className="flex items-center border-b border-Black py-2 mb-8">
              <input
                type="email"
                className="appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center border-b border-Black py-2 mb-8">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="mt-10 px-8 py-4 bg-Red rounded-full text-white uppercase text-sm cursor-pointer
                hover:bg-Black transition-all duration-300"
            >
              {" "}
              Send Message
            </button>
          </form>
        </motion.div>
      </Wrapper>
    </>
  );
}
