import React from "react";
import group_cutout from "../../assets/images/group-cutout.png";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaReact } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="min-h-screen flex-col flex justify-center items-center relative bg-gray-100">
      {/* React Icon as Background */}
      <div className="absolute inset-0 flex justify-center items-center z-0 -mt-[8rem]">
        <FaReact className="text-[50rem] text-gray-500 opacity-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-10">
        <div className="md:px-[100px] lg:px-[120px] xl:px-[130px]">
          <h1 className="text-6xl font-bold text-center text-black  ">
            Meet and collab with other React developers in Cebu
          </h1>
        </div>
        <div className="mt-10">
          <p className="text-xl text-center text-black">
            React Cebu is a community for developers by developers
          </p>
        </div>
        <div className="py-2 flex justify-center mt-10 space-x-3">
          <div>
            <input
              type="text"
              placeholder="Your Email Address "
              className="rounded-md w-80 border p-3 border-black outline-none text-black bg-[#E8E8E8DE]"
            />
          </div>
          <div>
            <button className="rounded-md bg-[#61DAFB] w-64 p-3 border-black border text-black flex items-center justify-center gap-3">
              Join Newsletter
              <span>
                <MdArrowOutward className="h-6 w-6 text-black" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="mt-[50px] relative z-10">
        <Image src={group_cutout} alt="Description of image" className="" />
      </div>
    </section>
  );
};

export default Hero;
