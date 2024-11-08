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
      <div className=" bg-black text-white mr-72 mt-20">
        {/* Main Section */}
        <main className="flex flex-col items-center text-center py-16 -mt-20">
          <div className="w-[678px] h-[110px]">
          <h1 className="text-[50px] font-[500] leading-[63.15px] text-left font-futuraMedium mb-8 whitespace-nowrap">
  Amplify your market reach,{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-800 whitespace-nowrap">
    let's <br/>grow digitally
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
 <div className="relative text-white h-screen w-full flex items-center justify-center -mt-28 ">
  {/* Background effect */}
  <div className="absolute inset-0 flex justify-center md:justify-center lg:justify-start items-center z-0 max-w-[85%] mx-auto">
    <div className="relative z-10">
      <img
        src=".\image\last 3.gif"
        alt="last session img"
        className="w-[400px] md:w-[500px] h-[250px] md:h-[300px]"
        style={{
          border: 'none',
          boxShadow: 'none',
          mixBlendMode: 'color-burn',
          maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 80%)',
          WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 80%)',
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 lg:px-4">
        <h1 className="text-[26px] md:text-[36px] lg:text-[40px] font-[700] leading-tight md:leading-[48px] lg:leading-[52.16px] font-futuraBold">
          DISCUSS A PROJECT
        </h1>
        <p className="font-futuraLightFont text-[16px] md:text-[22px] lg:text-[26px] leading-snug md:leading-[30px] lg:leading-[33.62px]">
          We know how to mold your project
          <br />
          Let's put the words into action
        </p>
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="absolute bottom-48 lg:bottom-auto lg:right-40 z-10 flex justify-center lg:justify-end px-2 lg:px-0">
    <a href="/howitworks">
      <button className="py-3 px-5 w-[200px] md:w-[250px] lg:w-[290px] h-[45px] md:h-[55px] lg:h-[65px] rounded-xl border-[3px] border-[#622bba] text-white font-futuraBold text-[16px] md:text-[18px] lg:text-[20px] font-[700] leading-[14px]">
        GET CONSULTATION
      </button>
    </a>
  </div>
</div>
</>
  );
};

export default HowItWorks;


