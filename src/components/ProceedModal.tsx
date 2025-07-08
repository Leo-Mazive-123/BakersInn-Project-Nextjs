// components/ProceedModal.tsx
'use client';
import React from 'react';

interface ProceedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProceedModal: React.FC<ProceedModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-h-screen overflow-y-auto w-full max-w-4xl rounded-lg p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 text-3xl hover:text-red-500">
          &times;
        </button>

        {/* Form Content */}
        <section className="bg-white py-15 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-3xl text-[#2F2160]">
              Request Product Donations
            </h3>
          </div>

          <form className="max-w-3xl mx-auto mt-4 space-y-6">
            {/* Row 6: Message */}
            <div>
              <textarea
                placeholder="How Do You Intend On Using the Product?"
                rows={5}
                className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
              ></textarea>
            </div>

            <div>
              <textarea
                placeholder="How will the community benefit from you as a result of our donation?"
                rows={5}
                className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
              ></textarea>
            </div>

            <div>
              <textarea
                placeholder="If there is any additional information that you would like to supply us with, which we have not asked you about, please let"
                rows={5}
                className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#A98141] hover:bg-[#8b6b34] text-white font-semibold py-2 text-lg"
              >
                PROCEED TO NEXT STEP
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ProceedModal;

