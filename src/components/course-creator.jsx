import React from "react";
import creatorImage from "../assets/images/joel_jota.png";
import ModalShowMore from "./modal-show-more";

export default function CourseCreator() {
  return (
    <div className="container mx-auto mt-4 grid gap-6 lg:grid-cols-2 xl:grid-cols-5 mb-10 p-4 lg:p-0">
      <div className="flex flex-col items-center xl:col-span-2 bg-base-200 p-8 rounded-md self-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="font-semibold text-[#444444]">Meet the </span>
          <span className="font-extrabold text-[#010D7E]">Instructor</span>
        </h1>
      </div>

      <div className="mockup-window bg-white border xl:col-span-3">
        <div className="flex flex-col lg:flex-row items-center justify-between p-4 border-b">
          <img
            src={creatorImage}
            alt="Joel Jota"
            className="w-full lg:w-1/3 h-auto rounded-md shadow-lg mb-4 lg:mb-0 lg:mr-4"
          />
          <div className="bg-base-200 flex flex-col items-center px-4 py-8">
            <h1
              className="text-5xl font-extrabold text-gray-900"
              style={{ fontSize: "clamp(2.5rem,6vw,4rem)" }}
            >
              Joel Jota
            </h1>
            <p className="my-8 text-center text-gray-500">
              From a young age, Joel Jota grew up in an environment of high
              performance and meritocracy. For nearly two decades, he was a
              professional swimmer and a multiple-time national champion. He
              became one of the best swimmers in the world.
            </p>

            <ModalShowMore />

            <button
              className="btn btn-outline border-[#010D7E] text-[#010D7E] hover:bg-[#010D7E] hover:text-white"
              onClick={() =>
                document.getElementById("about-creator").showModal()
              }
            >
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
