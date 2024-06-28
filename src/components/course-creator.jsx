import React from "react";
import creatorImage from "../assets/images/joel_jota.png";

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
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-gray-100">
                <h3 className="font-bold text-lg text-black">
                  Who is Joel Jota?
                </h3>

                <p className="py-4 text-gray-500">
                  His life was built on pillars such as discipline, focus, and
                  extensive training. After his swimming career, Joel became a
                  high-performance coach, which marked the beginning of his
                  career as a mentor. He has trained over 1,000 athletes,
                  ranging from regional level to world champions. He served as
                  the general coordinator of{" "}
                  <a
                    class="link link-primary"
                    href="https://institutoneymarjr.org.br/"
                    target="_blank"
                  >
                    Instituto Neymar JR
                  </a>{" "}
                  for four years and is now an entrepreneur in the field of
                  human development.
                </p>
                <p className="py-4 text-gray-500">
                  As a professor, writer, speaker, entrepreneur, and business
                  mentor, he has helped dozens of companies generate millions of
                  brazilian real in revenue. Joel has a key phrase:{" "}
                  <a className="font-medium text-black">
                    he believes that SUCCESS CAN BE TRAINED
                  </a>
                  .
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-outline w-full border-[#010D7E] text-[#010D7E] hover:bg-[#010D7E] hover:text-white">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
            <button
              className="btn btn-outline border-[#010D7E] text-[#010D7E] hover:bg-[#010D7E] hover:text-white"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
