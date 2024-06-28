import React from "react";

export default function ModalShowMore() {
  return (
    <dialog id="about-creator" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-gray-100">
        <h3 className="font-bold text-lg text-black">Who is Joel Jota?</h3>

        <p className="py-4 text-gray-500">
          His life was built on pillars such as discipline, focus, and extensive
          training. After his swimming career, Joel became a high-performance
          coach, which marked the beginning of his career as a mentor. He has
          trained over 1,000 athletes, ranging from regional level to world
          champions. He served as the general coordinator of{" "}
          <a
            class="link link-primary"
            href="https://institutoneymarjr.org.br/"
            target="_blank"
          >
            Instituto Neymar JR
          </a>{" "}
          for four years and is now an entrepreneur in the field of human
          development.
        </p>
        <p className="py-4 text-gray-500">
          As a professor, writer, speaker, entrepreneur, and business mentor, he
          has helped dozens of companies generate millions of brazilian real in
          revenue. Joel has a key phrase:{" "}
          <a className="font-medium text-black">
            he believes that SUCCESS CAN BE TRAINED
          </a>
          .
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-outline w-full border-[#010D7E] text-[#010D7E] hover:bg-[#010D7E] hover:text-white">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
