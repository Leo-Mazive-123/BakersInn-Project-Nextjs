import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <main className='bg-white'>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[540px]">
        <img
          className="w-full h-full object-cover"
          src="/contact-pic.png"
          alt="Contact"
        />
        <h3 className="absolute bottom-4 left-4 text-white text-3xl sm:text-4xl font-bold drop-shadow-lg">
          Contact Us
        </h3>
      </div>

      {/* Factory Contacts */}
      <section className="flex flex-col md:flex-row justify-center gap-12 px-6 py-12 bg-[#f7f3f3]">
        <div className="max-w-md">
          <img className="w-full mb-4" src="/pic1.png" alt="Harare Factory" />
          <h3 className="font-bold text-2xl text-[#2F2160] mb-2">Harare Bread Factory</h3>
          <p>1 Shepperton Road, Graniteside, Harare</p>
          <p className="mt-2">
            +263 242 710334, 751481, 751572, 758659
            <br />
            VOIP: 08677006178
            <br />
            Econet Toll Free: 08080151, 08080152
          </p>
        </div>

        <div className="max-w-md">
          <img className="w-full mb-4" src="/pic2.png" alt="Bulawayo Factory" />
          <h3 className="font-bold text-2xl text-[#2F2160] mb-2">Bulawayo Bread Factory</h3>
          <p>22 A Bellevue Road, Belmont, Bulawayo</p>
          <p className="mt-2">
            +263 9 78279, 68826, 68381, 68383, 69592, 76693
            <br />
            VOIP: 08677006179
            <br />
            Econet Toll Free: 08080151, 08080152
          </p>
        </div>
      </section>

      {/* Depots */}
      <section className="px-4 sm:px-8 md:px-16 py-12">
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl text-[#2F2160]">List Of Baker’s Inn Depots</h2>
          <div className="mt-1 h-[2px] bg-[#2F2160] w-40 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-[#2F2160]">
          {/* Depot */}
          <div className="p-6 w-full md:w-1/3">
            <h4 className="font-bold text-xl text-[#2F2160] mb-4">Depot</h4>
            <p className="text-gray-700 space-y-3">
              Chinhoyi <br /> Bindura <br /> Murehwa <br /> Mutare <br />
              Hwange <br /> Chiredzi <br /> Masvingo <br /> Gweru <br /> Zvishavane
            </p>
          </div>

          {/* Address */}
          <div className="p-6 w-full md:w-1/3">
            <h4 className="font-bold text-xl text-[#2F2160] mb-4">Address</h4>
            <p className="text-gray-700 space-y-3">
              94/95 Josiah Tongogara St, Chinhoyi <br />
              461 Luton Road, Bindura <br />
              Stand 351, Murehwa GP <br />
              5-7 Glasgow Road, Mutare <br />
              29 Derby Drive, Hwange <br />
              329 Lion Drive, Chiredzi <br />
              1310 Mineral Rd, Masvingo <br />
              1843 Main St, Gweru <br />
              Shabanie Mine Club, Zvishavane
            </p>
          </div>

          {/* Phone */}
          <div className="p-6 w-full md:w-1/3">
            <h4 className="font-bold text-xl text-[#2F2160] mb-4">Phone Number</h4>
            <p className="text-gray-700 space-y-3">
              0772 318 309 <br /> 066 2107317 <br /> 0652 122 514 <br /> 020 60715 <br />
              0281 2820105 <br /> 0231 231 2709 <br /> 039 266 333 <br />
              054 2220 858 <br /> 0772 395567
            </p>
          </div>
        </div>
      </section>

      {/* Job Enquiries */}
      <section className="bg-[#f7f3f3] px-4 py-12">
        <div className="flex justify-center">
          <img className="w-full max-w-4xl" src="/packing.png" alt="Packing" />
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-evenly items-start gap-6 text-center md:text-left">
          <div>
            <h4 className="font-bold text-sm text-[#2F2160]">For job enquiries, email your CV to</h4>
            <p className="mt-2">hr@bakersinnzim.com</p>
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#2F2160]">For general inquiries, contact</h4>
            <p className="mt-2">info@bakersinnzim.com</p>
          </div>
        </div>
      </section>

      {/* Callback Form */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="font-bold text-3xl text-[#2F2160]">Request A Callback</h3>
          <p className="text-gray-700 mt-3">Complete the form below and we will respond within 24 hours</p>
        </div>

        <form className="max-w-3xl mx-auto space-y-6">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-6">
            <select className="w-full bg-[#f1eded] border border-gray-300 px-4 py-2 rounded">
              <option>Your Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
              <option>Dr</option>
            </select>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#f1eded] border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full bg-[#f1eded] border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full bg-[#f1eded] border border-gray-300 px-4 py-2 rounded"
            />
          </div>

          {/* Row 3–5 */}
          <select className="w-full bg-[#f1eded] border border-gray-300 px-4 py-2 rounded">
            <option>Select Area of Interest</option>
            <option>Sales</option>
            <option>Support</option>
            <option>Billing</option>
            <option>Partnership</option>
          </select>

          <select className="w-full bg-[#f1eded] border border-gray-300 px-4 py-2 rounded">
            <option>Nature of Enquiry</option>
            <option>General</option>
            <option>Complaint</option>
            <option>Product Question</option>
          </select>

          <select className="w-full bg-[#f1eded] border border-gray-300 px-4 py-2 rounded">
            <option>Do You Want To Be Contacted By Phone</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          {/* Message */}
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full bg-[#f1eded] border border-gray-300 px-4 py-2 rounded"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#A98141] hover:bg-[#8b6b34] text-white font-semibold py-3 text-lg rounded"
          >
            SUBMIT
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
