import React from "react";
import courseImage from "../assets/images/course_image.png";
import { getContract } from 'viem';
import  wagmiAbi  from './abi.json';
import { celoAlfajores } from "viem/chains";

import { account, publicClient, walletClient } from './config'

export default function Course() {
  const handleButtonClick = async () => {
    const clientChainId = await walletClient.getChainId();
    try {
      if (clientChainId !== celoAlfajores.id) {
        await walletClient.switchChain({ id: celoAlfajores.id })
      }
      const { request } = await publicClient.simulateContract({
        account,
        address: '0x5A0f3260012D870a7e7424e17abf93B3D4227C24',
        abi: wagmiAbi,
        functionName: 'mint',
        value: 10000000000000,
      })
      console.log(request)
      await walletClient.writeContract(request)
    } catch (error) {
      console.error("Error getting address:", error);
    }
  };

  return (
    <section className="p-6 bg-gray-100 text-gray-800">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <img
          src={courseImage}
          alt="Course Image"
          className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500"
        />
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-white">
          <span className="block mb-2 text-[#010D7E] font-bold">Course</span>
          <h1
            className="font-extrabold text-gray-900"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            The Future of Entrepreneurship
          </h1>
          <p className="my-8 text-gray-500">
            Explore emerging trends and innovative strategies that will shape
            entrepreneurship in the future, empowering you with essential
            insights to excel in the ever-evolving business world.
          </p>

          <button
            className="btn btn-outline w-full border-[#010D7E] text-[#010D7E] hover:bg-[#010D7E] hover:text-white"
            onClick={handleButtonClick}
          >
            Mint
          </button>
        </div>
      </div>
    </section>
  );
}
