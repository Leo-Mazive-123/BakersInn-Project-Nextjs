import React from 'react';


const ContactPage: React.FC = () => {
  return (
    <main>
     <div>
        <img className='absolute align-text-bottom h-133 w-500' src="/contact-pic.png" />
        <h3 className=' relative text-white font-bold text-4xl top-120 ml-5'>Contact Us</h3> 

      </div>
        
        <section className='flex justify-center gap-50 py-10 bg-[#f7f3f3] ml-10 mr-10 mt-152 mb-20'>
          <div>
             <img className='py-1 w-100' src="/pic1.png" alt="" />
             <h3 className='font-bold text-3xl text-[#2F2160] mt-3'>Harare Bread Factory</h3>
             <p className='mt-3'>1 Shepperton Road, Graniteside, Harare <br /></p>

                <p className='mt-3'>+263 242 710334, +263 242 751481, <br />
                +263 242 751572, +263 242 758659 <br /></p>

                <p className='mt-3'>VOIP: 08677006178 <br />
                Econet Toll Free: 08080151, 08080152</p>

          </div>


          <div>
             <img className='py-1 w-100' src="/pic2.png" alt="" />
             <h3 className='font-bold text-3xl text-[#2F2160] mt-3'>Bulawayo Bread Factory</h3>
             <p className='mt-3'>22 A Bellevue Road, Belmont, Bulawayo <br /></p>

                <p className='mt-3'>
                  +263 9 78279, +263 9 68826, +263 9 68381, <br />
                  +263 9 68383, +263 9 69592, +263 9 76693 <br /></p>

                <p className='mt-3'>VOIP: 08677006179 <br />
                    Econet Toll Free: 08080151, 08080152</p>

          </div>
        </section>

            
            <div className="text-center mb-8">
  <div className="inline-block">
    <h2 className="font-bold text-3xl text-[#2F2160]">
      List Of Baker’s Inn Depots
    </h2>
    {/* underline matching heading width */}
    <div className="mt-1 h-[1px]  bg-[#2F2160] w-184 mx-auto"></div>
  </div>
</div>

<section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#2F2160] px-4 mb-20">
  
  {/* Depot Column */}
  <div className="px-6 py-4">
    <h4 className="mb-5 font-bold text-xl text-[#2F2160]">Depot</h4>
    <p className="text-gray-700 leading-relaxed">
      Chinhoyi <br /> Depot Bindura <br /> Murehwa Depot <br /> Mutare Depot
    </p>
    <p className="mt-10 text-gray-700 leading-relaxed">
      Hwange Depot <br /> Chiredzi Depot <br /> Masvingo Depot <br /> Gweru Depot <br /> Zvishavane Depot
    </p>
  </div>

  {/* Address Column */}
  <div className="px-6 py-4">
    <h4 className="mb-5 font-bold text-xl text-[#2F2160]">Address</h4>
    <p className="text-gray-700 leading-relaxed">
      94/95 Josiah Tongogara St, Industrial Site, Chinhoyi <br />
      461 Luton Road, Industrial Site, Bindura <br />
      Stand number 351 Murehwa Growth Point <br />
      5-7 Glasgow Road, Industrial Site, Mutare
    </p>
    <p className="mt-10 text-gray-700 leading-relaxed">
      29 Derby Drive, Hwange Industrial Site <br />
      329 Lion Drive, Chiredzi <br />
      1310 Mineral Road, Masvingo <br />
      1843 Main Street, Gweru <br />
      Shabanie Mine Club, Noelville, Zvishavane
    </p>
  </div>

  {/* Phone Number Column */}
  <div className="px-6 py-4">
    <h4 className="mb-5 font-bold text-xl text-[#2F2160]">Phone Number</h4>
    <p className="text-gray-700 leading-relaxed">
      0772 318 309 <br /> 066 2107317 <br /> 0652 122 514 <br /> 020 60715
    </p>
    <p className="mt-10 text-gray-700 leading-relaxed">
      0281 2820105 <br /> 0231 231 2709 <br /> 039 266 333 <br /> 054 2220 858 <br /> 0772 395567
    </p>
  </div>
</section>



        <section className='gap-50 py-10 bg-[#f7f3f3] mt-50 '>
          <div className='flex items-center justify-center'>
              <img className='py-1 w-280' src="/packing.png" alt="" />
          </div>

          <div className='flex justify-evenly  mt-10'>

            <div> 
              <h3 className='font-bold text-2xs text-[#2F2160]'>For job enquiries , email your CV to</h3>
              <p className='mt-2'>hr@bakersinnzim.com</p>
            </div>


            <div> 
              <h4 className='font-bold text-2xs text-[#2F2160]'>For job enquiries , email your CV to</h4>
              <p className='mt-2'>hr@bakersinnzim.com</p>
            </div>
          
          </div>
        
         

            
            
        </section>


        
     <section className="bg-white py-15 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-bold text-3xl text-[#2F2160]">
          Request A Callback
        </h3>
        <p className="text-gray-700 mb-10 mt-3">
          Complete the form below and we will respond within 24 hours
        </p>
      </div>

      <form className="max-w-3xl mx-auto space-y-6">
        {/* Row 1: Your Title & Your Name */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            
            <select className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2">
              <option>Your Title</option>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
              <option>Dr</option>
            </select>
          </div>
          <div className="w-full">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
            />
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
            />
          </div>
          <div className="w-full">
            
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
            />
          </div>
        </div>

        {/* Row 3: Area of Interest */}
        <div>
          
          <select className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Area of Interest
          </label>
            <option>Sales</option>
            <option>Support</option>
            <option>Billing</option>
            <option>Partnership</option>
          </select>
        </div>

        {/* Row 4: Nature of Enquiry */}
        <div>
          
          <select className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2">
            <option>Nature of Enquiry</option>
            <option>General</option>
            <option>Complaint</option>
            <option>Product Question</option>
          </select>
        </div>

        {/* Row 5: Contacted By Phone */}
        <div>
          
          <select className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2">
            <option>Do You Want To Be Contacted By Phone</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Row 6: Message */}
        <div>
          
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
          ></textarea>
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
            placeholder="How Do You Inted On Using the Product?"
            rows={5}
            className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
          ></textarea>
        </div>


        {/* Row 6: Message */}
        <div>
          
          <textarea
            placeholder="How will the community benefit from you as a result of our donation?"
            rows={5}
            className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
          ></textarea>
        </div>


        {/* Row 6: Message */}
        <div>
          
          <textarea
            placeholder="If there is any additional information that you would like to supply us with, which we have not asked you about, please let "
            rows={5}
            className="w-full border bg-[#f1eded] border-gray-300  px-4 py-2"
          ></textarea>
        </div>



        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#A98141] hover:bg-[#8b6b34] text-white font-semibold py-2 text-lg"
          >
            SUBMIT APPLICATION
          </button>
        </div>
      </form>
    </section>






















       
    </main>
  );
};

export default ContactPage;
