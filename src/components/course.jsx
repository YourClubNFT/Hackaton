import React from "react";
import courseImage from "../assets/images/course_image.png";
import { getContract } from "viem";
import wagmiAbi from "./abi.json";
import { celoAlfajores } from "viem/chains";
import { account, publicClient, walletClient } from "./config";

export default function Course() {
  const handleButtonClick = async () => {
    try {
      if (!walletClient) {
        throw new Error("Wallet client is not initialized.");
      }
      const clientChainId = await walletClient.getChainId();

      if (clientChainId !== celoAlfajores.id) {
        await walletClient.switchChain({ id: celoAlfajores.id });
        alert("Switched to Alfajores");
      }

      if (!publicClient) {
        throw new Error("Public client is not initialized.");
      }

      console.log("Simulating contract...");
      const { request } = await publicClient.simulateContract({
        account,
        address: "0x66bbc9D1E831A4783C6B5e1B107C4Ce8CA05F7fc",
        abi: wagmiAbi,
        functionName: "mint",
      });

      await walletClient.writeContract(request);
    } catch (error) {
      console.error("Error during contract interaction:", error);
      alert("Error during contract interaction: " + error.message);
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
            Mint (Buy Course)
          </button>
          <p className="mt-4 text-sm text-gray-500">
            You need to be in Celo Minipay to mint the course.
          </p>
        </div>
      </div>
    </section>
  );
}
