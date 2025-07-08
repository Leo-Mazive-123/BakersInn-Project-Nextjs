import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-h-screen overflow-y-auto w-full max-w-4xl rounded-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-3xl hover:text-red-500"
          aria-label="Close modal"
        >
          &times;
        </button>
<section className="bg-white py-15 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h3 className="font-bold text-3xl text-[#2F2160]">
          Book A Factory Tour
        </h3>
      
      </div>

      <form className="max-w-3xl mx-auto space-y-6">
        {/* Row 1: Your Title & Your Name */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            
            <input
              type="text"
              placeholder="Name of Organization"
              className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
            />
          </div>
          
          <div className="w-full">
            
            <input
              type="text"
              placeholder="Name of Contact Person"
              className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
            />
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            
            <input
              type="tel"
              placeholder="Organization Address"
              className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
            />
          </div>
          <div className="w-full">
            
            <input
              type="email"
              placeholder="Organization's Resident Town"
              className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
            />
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            
            <input
              type="tel"
              placeholder="Contact Person's Telephone"
              className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
            />
          </div>
          <div className="w-full">
            
            <input
              type="email"
              placeholder="Contact Person's E-mail"
              className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
            />
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            
            <input
              type="tel"
              placeholder="Date of visit"
              className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
            />
          </div>
          <div className="w-full">
            
            <select className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2">
              <option>Number of Participants</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>5</option>
            </select>
          </div>
        </div>

        {/* Row 3: Area of Interest */}
        <div>
          
          <select className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
            Age Range of Participants
          </label>
            <option>Age Range of Participants</option>
            <option>20 and Below</option>
            <option>20-30</option>
            <option>30-40</option>
            <option>40 and Above</option>
          </select>
        </div>


        <div className='flex justify-center gap-7  text-gray-700 '>
          <div className='flex gap-3'>
            Plant Visit
            <p className='font-bold'> Terms & Conditions</p>
          </div>
          
          <div className='flex gap-3'>
            Plant Visit 
            <p className='font-bold'> Safety Regulations</p>
          </div>
         
        </div>

        <div>
          <p className=' text-gray-700'>Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct.</p>
          <p className='mt-3  text-gray-700'>Have Read The Safety Regulations</p>
        </div>

        
        


        
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#A98141] hover:bg-[#8b6b34] text-white font-semibold py-2 text-lg"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </section>




      </div>
    </div>
  );
};

export default Modal;



 