import React from "react";
export default function ModalCourseContent({ pdfUrl, onClose }) {
  return (
    <dialog id="course-content" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white shadow-lg rounded-lg p-6">
        <h3 className="font-bold text-xl text-gray-800">Course Content</h3>
        <div className="py-4">
          <p>
            This indicates that access to the course has been granted. Here the
            content or download options will be shown, etc.
          </p>
        </div>
        <div className="modal-action flex justify-between">
          <button
            className="btn btn-outline border-[#010D7E] text-[#010D7E] hover:bg-[#010D7E] hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
