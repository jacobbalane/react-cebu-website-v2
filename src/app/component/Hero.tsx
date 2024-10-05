import React from "react";
import group_cutout from "../../assets/images/group-cutout.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex-col  flex justify-center items-center  relative bg-gray-100">
      <div className="px-[100px] mt-10">
        <div className=" ">
          <h1 className="text-6xl font-bold  text-center  text-black ">
            Meet and collab with other React developers in Cebu
          </h1>
        </div>
        <div className="mt-10  first-line:">
          <p className="text-xl text-center text-black">
            React Cebu is a community for developers by developers
          </p>
        </div>
        <div className="py-2 flex justify-center mt-10 space-x-3">
          <div>
            <input
              type="text"
              placeholder="Your Email Address "
              className="rounded-md  w-80 border p-3 border-black outline-none text-black bg-[#E8E8E8DE"
            />
          </div>
          <div>
            <button className="rounded-md bg-[#61DAFB] w-64 p-3 border-black border text-black">
              Join Newsletter <span>x</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Image src={group_cutout} alt="Description of image" className="" />
      </div>
    </section>
  );
};

export default Hero;
