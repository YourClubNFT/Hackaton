import React, { useState, useEffect } from "react";
import courseImage from "../assets/images/course_image.png";
import contractAbi from "../../artifacts/contracts/Nft.sol/TheCompetenciesOfTheFuture.json";
import { celoAlfajores } from "viem/chains";
import { account, publicClient, walletClient } from "./config";
import { BallTriangle } from "react-loader-spinner";
import ModalChangePrice from "./modal-change-price";
import ModalCourseContent from "./modal-course-content";
import toast, { Toaster } from "react-hot-toast";
import { parseEther } from "viem";

export default function Course() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [showCourseContent, setShowCourseContent] = useState(false);

  useEffect(() => {
    checkAccess();
  }, []);

  const wagmiAbi = contractAbi.abi;
  const contractAddress = "0x21737A8498E1855754De4938A7750814152DC1c0";

  const checkAccess = async () => {
    setCheckingAccess(true);
    try {
      if (!publicClient) {
        throw new Error("Public client is not initialized.");
      }

      const balance = await publicClient.readContract({
        account,
        address: contractAddress,
        abi: wagmiAbi,
        functionName: "balanceOf",
        args: [account],
      });

      setHasAccess(balance > 0);
      // setHasAccess(true); // testing purposes

      const owner = await publicClient.readContract({
        account,
        address: contractAddress,
        abi: wagmiAbi,
        functionName: "owner",
      });

      setIsOwner(owner.toLowerCase() === account.toLowerCase());
      // setIsOwner(true); // testing purposes
    } catch (error) {
      console.error("Error checking access:", error);
    } finally {
      setCheckingAccess(false);
    }
  };

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      if (hasAccess) {
        toast.success("You already have access to this course.", {
          duration: 2000,
          style: {
            border: "1px solid #010D7E",
            padding: "16px",
            color: "#010D7E",
            background: "#f3f4f6",
          },
          position: "top-right",
          className: "text-sm",
        });

        return;
      }
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
        address: contractAddress,
        abi: wagmiAbi,
        functionName: "mint",
        value: parseEther("1")
      });

      await walletClient.writeContract(request);
    } catch (error) {
      console.error("Error during contract interaction:", error);
      alert("Error during contract interaction: " + error.message);
    } finally {
      setLoading(false);
      checkAccess();
    }
  };

  const handleAccessCourse = () => {
    if (hasAccess) {
      setShowCourseContent(true);
      document.getElementById("course-content").showModal();
    } else {
      toast.error("You need to buy this course first.", {
        duration: 2000,
        style: {
          border: "1px solid #010D7E",
          padding: "16px",
          color: "#010D7E",
          background: "#f3f4f6",
        },
        iconTheme: {
          primary: "#FF0000",
          secondary: "#FFFAEE",
        },
        position: "top-right",
        icon: "⚠️",
        className: "text-sm",
      });
    }
  };

  const savePrice = (newPrice) => {
    return new Promise((resolve, reject) => {
      //TODO: Lógica para salvar o preço no contrato
      setTimeout(() => {
        if (newPrice) {
          resolve("Price saved successfully.");
        } else {
          reject("Failed to save price.");
        }
      }, 2000);
    });
  };

  const handleSaveNewPrice = (newPrice) => {
    toast
      .promise(savePrice(newPrice), {
        loading: "Saving...",
        success: <b>Price saved!</b>,
        error: <b>Could not save.</b>,
      })
      .then(() => {
        document.getElementById("change-price").close();
      });
  };

  return (
    <section className="p-6 bg-gray-100 text-gray-800">
      <Toaster />
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

          <div className="flex flex-row items-center justify-between mb-4">
            {checkingAccess ? (
              <button
                className="btn btn-outline w-[45%] border-[#010D7E] text-[#010D7E] disabled:text-gray-400  disabled:opacity-50"
                disabled
              >
                <BallTriangle
                  height="24"
                  width="24"
                  color="#9ca3af"
                  ariaLabel="loading"
                />
              </button>
            ) : isOwner ? (
              <button
                className="btn btn-outline w-[45%] border-[#010D7E] text-[#010D7E] hover:bg-[#010D7E] hover:text-white"
                onClick={() =>
                  document.getElementById("change-price").showModal()
                }
              >
                Change Price
              </button>
            ) : (
              <button
                className={`btn w-[45%] border-[#010D7E] ${
                  hasAccess
                    ? "bg-gray-500 text-gray-400 cursor-not-allowed"
                    : "btn-outline text-[#010D7E] hover:bg-[#010D7E] hover:text-white"
                }`}
                onClick={handleButtonClick}
                disabled={loading}
              >
                {loading ? (
                  <BallTriangle
                    height="24"
                    width="24"
                    color="#9ca3af"
                    ariaLabel="loading"
                  />
                ) : (
                  "Mint (Buy Course)"
                )}
              </button>
            )}
            <button
              className={`btn w-[45%]  ${
                hasAccess
                  ? "btn-outline text-[#010D7E] border-[#010D7E] hover:bg-[#010D7E] hover:text-white"
                  : "bg-gray-500 text-gray-400 border-gray-500 cursor-not-allowed"
              }`}
              onClick={handleAccessCourse}
            >
              Access Course
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            You need to be in Celo Minipay to mint the course.
          </p>
        </div>
      </div>
      <ModalChangePrice onSave={handleSaveNewPrice} />
      {showCourseContent && (
        <ModalCourseContent
          pdfUrl="URL_DO_SEU_PDF" // Substitua pela URL real do seu PDF
          onClose={() => {
            setShowCourseContent(false);
            document.getElementById("course-content").close();
          }}
        />
      )}
    </section>
  );
}
