'use client';
import React, { useState } from 'react';
import ProceedModal from '../components/ProceedModal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [showProceedModal, setShowProceedModal] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white max-h-screen overflow-y-auto w-full max-w-4xl rounded-lg p-6 relative">
          <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 text-3xl hover:text-red-500">
            &times;
          </button>

          {/* Form Content */}
          <section className="bg-white py-15 px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="font-bold text-3xl text-[#2F2160]">
                Request Product Donations
              </h3>
              <div>
                <p className="text-gray-700 py-4">
                  You can apply for product donations by completing this form, we will contact you should your application be successful. Please bear in mind that we will need at least 3 weeks’ notice to the date of your event
                </p>
              </div>
            </div>

            <form className="max-w-3xl mx-auto space-y-6">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Name of Organization"
                    className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Name of Contact Person"
                    className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <input
                    type="tel"
                    placeholder="Contact Person Position"
                    className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Organization Address"
                    className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <input
                    type="tel"
                    placeholder="Contact Person's Telephone"
                    className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Contact Person's E-mail"
                    className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <input
                    type="tel"
                    placeholder="Date of Event"
                    className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
                  />
                </div>
                <div className="w-full">
                  <select className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2">
                    <option>Intended Use of Donation</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              {/* Row 5 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <select className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2">
                    <option>Number of Attendants</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="w-full">
                  <select className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2">
                    <option>What Products Are Specifically Looking For?</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              {/* Proceed Button */}
              <div>
                <button
                  type="button"
                  className="w-full bg-[#A98141] hover:bg-[#8b6b34] text-white font-semibold py-2 text-lg"
                  onClick={() => setShowProceedModal(true)}
                >
                  PROCEED TO NEXT STEP
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

      {/* Nested Modal */}
      {showProceedModal && (
        <ProceedModal isOpen={showProceedModal} onClose={() => setShowProceedModal(false)} />
      )}
    </>
  );
};

export default Modal;












// import React from 'react';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const DonationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-lg p-6 max-w-3xl w-full"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h2 className="text-2xl font-bold mb-4 text-[#2F2160]">Request a Donation</h2>

//         <form className="space-y-6">
//           {/* Add your donation form inputs here */}
//           <input
//             type="text"
//             placeholder="Event Name"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <input
//             type="date"
//             placeholder="Event Date"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//           />
//           <textarea
//             placeholder="Describe your event and how we can help"
//             className="w-full border bg-[#f1eded] border-gray-300 px-4 py-2"
//             rows={4}
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#A98141] hover:bg-[#8b6b34] text-white font-semibold py-2 text-lg rounded"
//           >
//             SUBMIT
//           </button>
//         </form>

//         <button
//           onClick={onClose}
//           className="mt-4 text-gray-500 hover:text-gray-700 font-semibold"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DonationModal;



