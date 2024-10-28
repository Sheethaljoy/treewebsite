import axios from "axios";
import { useState } from "react";
import Success from "../ExternalComponents/Success";

const formdataFormat={
  heading: "tree page enquiry",
  name: "",
  email: "",
  phone: "",
  message: "",
}
const HowItWorks = () => {
  const [formData, setFormData] = useState({
    heading: "tree page enquiry",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const sendMail = async (Data) => {
    try {
      const response = await axios.post(
        "https://r3cnfgcsbkn2gsvotjss2ocp4a0gwtuj.lambda-url.eu-north-1.on.aws/email/send",
        Data
      );
      if (response.status === 200) {
        <Success/>

        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      alert("error occured");
      console.error("Failed to submit ", error);
    }
  };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      sendMail(formData);
      setFormData(formdataFormat)
    };
  return (
    <>
      <div className=" bg-black text-white mr-52">
        {/* Main Section */}
        <main className="flex flex-col items-center text-center py-16 -mt-20">
          <div className="w-[678px] h-[110px]">
            <h1 className="text-[50px] font-[500] leading-[63.15px] text-left font-futuraMedium mb-8">
              Amplify your market reach,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                let's grow digitally
              </span>
            </h1>
          </div>
          <p className="font-futuraLight text-[20px] font-[300] leading-[25.46px] text-left mt-4 mb-4 max-w-2xl">
            Thanks for your interest in working with us. Please complete the
            details below and we'll get back to you within one business day.
          </p>
          {/* WhatsApp Floating Icon */}
          <div className="fixed right-5 bottom-12 w-[72px] sm:w-[72px] h-[72px] sm:h-[72px]">
                <a href="https://wa.me/9074429360">
                  <img
                    src="image/whatsapplogo.png"
                    alt="whatsapplogo"
                    className="w-[55px] h-[55px] -mt-14"
                  />
                </a>
              </div>

          {/* Contact Form */}
          <form className="w-full max-w-2xl text-left ml-0">
            <p className="mb-9 text-left text-[20px] font-[500] font-futuraLight leading-[25.26px] font-futura text-zinc-500 ">
              Required
            </p>

            <div className="mb-6">
              <label className="block mb-2 font-futuraLight items-center font-[500] text-[20px] leading-[25.26px] text-left">
                Name
                <span className="font-futuraLight text-[20px] font-[500] leading-[25.26px] text-left bg-gradient-to-br from-[#6675F7] to-[#57007B] bg-clip-text text-transparent">
                  *
                </span>
              </label>
              <input
                className="w-full h-[25.26px] px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-purple-500 text-left font-futuraLight text-[20px] font-medium leading-[25.26px]"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="items-center font-futuraLight text-[20px] leading-[25.26px] text-left">
                Phone No
                <span className="font-futuraLight text-[20px] font-medium leading-[25.26px] bg-gradient-to-br from-[#6675F7] to-[#57007B] bg-clip-text text-transparent">
                  *
                </span>
              </label>

              <input
                className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-purple-500"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-futuraLight items-center font-[500] text-[20px] leading-[25.26px] text-left ">
                Email
                <span className="font-futuraLight text-[20px] font-medium leading-[25.26px] text-left bg-gradient-to-br from-[#6675F7] to-[#57007B] bg-clip-text text-transparent">
                  *
                </span>
              </label>
              <input
                className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-purple-500"
                type="email"
                required
                name="email"
            value={formData.email}
            onChange={handleInputChange}

              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-futuraLight items-center gap-[10px] font-[500] text-[20px] leading-[25.26px] text-left">
                Message
                <span className="font-futuraLight text-[20px] font-medium leading-[25.26px] text-left bg-gradient-to-br from-[#6675F7] to-[#57007B] bg-clip-text text-transparent">
                  *
                </span>
              </label>
              <input   
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-purple-500" />
            </div>
            <button onClick ={handleSubmit}className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-[14px] px-[25px] rounded-[10px] text-center text-[20px] font-[700] text[20px] leading-[14px] font-futuraLight">
              SUBMIT
            </button>
          </form>
        </main>
      </div>

{/*last section */}
<div className="relative text-white h-screen w-full flex items-center justify-center">
  {/* Background effect */}
  <div className="absolute inset-0 flex justify-center md:justify-start items-center z-0 md:-ml-10">
    <div className="relative z-10">
      <img
        src=".\image\last 3.gif"
        alt="last session img"
        className="ml-0 md:ml-5 w-[418px] h-[372px] md:w-auto"
        style={{
          border: 'none', // Remove border if any
          boxShadow: 'none',
          mixBlendMode: 'color-burn', // Adjust blending
          maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 80%)',
          WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 80%)',
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0">
        <h1 className="text-[28px] md:text-[40px] font-[700] leading-tight md:leading-[52.16px] font-futuraBold text-white">
          DISCUSS A PROJECT
        </h1>
        <p className="font-futuraLightFont text-white text-[18px] md:text-[26px] leading-snug md:leading-[33.62px]">
          We know how to mold your project
          <br />
          Let's put the words into action
        </p>
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="relative mt-10 md:mt-0 md:ml-80 z-10 flex justify-center md:justify-end px-4 md:px-0 sm:mt-96">
    <a href="/howitworks">
      <button className="mt-6 md:ml-96 py-3 px-6 w-[240px] md:w-[290px] h-[50px] md:h-[65px] rounded-xl border-[3px] border-[#622bba] text-white font-futuraBold text-[16px] md:text-[20px] font-[700] leading-[14px]">
        GET CONSULTATION
      </button>
    </a>
  </div>
</div>

    </>
  );
};

export default HowItWorks;


