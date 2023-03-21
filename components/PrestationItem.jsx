import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { AiFillEye } from "react-icons/ai";

const PrestationItem = ({ name, backgroundImg, family, url }) => {
  return (
    <Link href={url}>
      <div className="cursor-pointer relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {name}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{family}</p>
          <p className="text-center flex justify-center py-3 rounded-lg bg-white text-gray-700 font-bold text-xl cursor-pointer">
            {/* <AiFillEye /> */}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PrestationItem;
