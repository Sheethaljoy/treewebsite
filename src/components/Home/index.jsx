/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Timeline from "../ExternalComponents/TimeLine";

const Home = ()=>{
  const formdataFormat ={
    email: "",
  }
  const [formData, setFormData] = useState({
    heading: "some one visited tree , they want to get in touch",
    email: "",
  });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

  const sendMail = async (Data) => {
    try {
      const response = await axios.post("https://r3cnfgcsbkn2gsvotjss2ocp4a0gwtuj.lambda-url.eu-north-1.on.aws/email/send", Data);
      if (response.status === 200) {
        alert("notified!");
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
     alert("error occured")
      console.error("Failed to submit ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendMail(formData);
    setFormData(formdataFormat)
  };

  useEffect(() => {
    if (window.location.hash === '#service') {
      const element = document.getElementById('service');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
return (<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tree information Technology</title>

 {/* Hero Section */}
 <section className="px-4 sm:px-8 md:px-12 lg:pl-36 bg-black py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Left Side Content */}
  <div className="text-center lg:text-left flex flex-col justify-center lg:w-[1100px]">
  <h1
    className="font-futuraMedium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-[500] leading-tight lg:leading-[65.58px] mb-2 whitespace-normal lg:whitespace-nowrap"
    style={{
      background: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    A Women-led Creative Team
  </h1>
  {/* Grid Layout for Mobile and Larger Views */}
  <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-center">
    <div className="font-futuraMedium text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-[400] leading-tight lg:leading-[50.52px] text-white lg:w-[80%] xl:w-[85%] 2xl:w-[90%]">
      <p className="whitespace-nowrap">Seamless fusion of Technology &</p>
      <p className="whitespace-nowrap">Creativity</p>
    </div>
  </div>
  
<br />
    <div className="font-futuraLight font-[300] text-[30px] sm:text-[30px] md:text-[30px]  leading-[36.9px] lg:leading-[36.9px] text-white">
      <p>Helming Future Tech . . . . . . . . </p>
      </div>
 
    {/* Image for Mobile View */}
    <div className="flex justify-center lg:hidden mt-4">
      <img 
        src="./image/homepagegif.png" 
        alt="right side image" 
        className="w-[200px] sm:w-[300px] md:w-[350px] max-w-full h-auto"
      />
    </div>

    {/* Horizontal Line */}
    <div
      className="h-[0.5px] w-full lg:w-[615px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mt-4 lg:mt-6"
      style={{
        border: "1px solid",
        borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
        borderImageSlice: 1,
      }}
    ></div>
<br/>
    {/* Button */}
    <a href="/howitworks">
  <button className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 w-[200px] sm:w-[219px] h-[40px] sm:h-[45.82px] rounded-full font-montserratLight text-[16px] sm:text-[19px] font-[400] leading-[23.16px] bg-black border border-purple-500 text-white transition mt-4 lg:mt-4">
    Get Started
    <img src="./image/right-arrow.png" alt="right arrow image" className="h-[18.64px] ml-8 sm:ml-8" />
  </button>
</a>
  </div>
 {/* WhatsApp Floating Icon */}
 <div className="fixed right-5 bottom-12 w-[72px] sm:w-[72px] h-[72px] sm:h-[72px] -mr-5 ">
    <a href="https://wa.me/9074429360">
      <img src="image/whatsapplogo.png" alt="whatsapplogo" className="w-[55px] h-[55px] -mt-14 " />
    </a>
  </div>
  {/* Right Side Image for Desktop View */}
  <div className="hidden lg:flex justify-center lg:justify-end">
  <img 
    src="./image/homepagegif.png" 
    alt="right side image" 
    className="w-[200px] sm:w-[300px] md:w-[300px] lg:w-[300px] max-w-full h-[300px] -mt-4 lg:-mt-4 ml-12"
  />
</div>
</section>

{/* Ticker Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-10">
  <div className="flex items-center justify-center col-span-full">
    <img
      src=".\image\ticketsection.gif" 
      alt="Animated GIF description"
      className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-full "
    />
  </div>
</div>


{/* Services Section */}
<section id="service" className="py-12 text-center px-3 -mt-10">
  {/* Line break */}
  <div
    className="h-[5px] w-[59px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
    style={{
      border: "1px solid",
      borderImageSource:
        "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
      borderImageSlice: 1,
    }}
  ></div>
  <h2 className="font-bold text-white font-futuraBold text-[36px] lg:text-[56px] font-700 leading-[46px] lg:leading-[73.03px] mt-4">Services</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
    {/* Card 1 */}
    <div
      className=" w-full max-w-[317px] h-[195px] p-6 text-white rounded-[9px] shadow-lg border transition-transform transform hover:scale-110 mx-auto"
      style={{
        borderImage:
          "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1",
      }}
    >
      <div className="flex justify-center mb-4">
        <img src="./image/card1.png" alt="Web App Development Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">
        Website &amp; Web App
      </h3>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">
        Development
      </h3>
      <p className="mt-4 font-[400] text-center text-[14px] leading-[16px] font-montserratLight">
        Top-notch Web Designs to make your<br />Brand unique
      </p>
    </div>

    {/* Card 2 */}
    <div
      className="w-full max-w-[317px] h-[195px] p-6 text-white rounded-[9px] shadow-lg border transition-transform transform hover:scale-110 mx-auto"
      style={{
        borderImage:
          "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1",
      }}
    >
      <div className="flex justify-center mb-4">
        <img src="./image/card2.png" alt="Digital Marketing Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">
        Digital Marketing &amp; Marketing
      </h3>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">
        Research Service
      </h3>
      <p className="mt-4 font-[400] text-center text-[14px] leading-[16px] font-montserratLight">
        Strengthen Customer Relationship
      </p>
    </div>

    {/* Card 3 */}
    <div
      className="w-full max-w-[317px] h-[195px] p-6 text-white rounded-[9px] shadow-lg border transition-transform transform hover:scale-110 mx-auto"
      style={{
        borderImage:
          "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1",
      }}
    >
      <div className="flex justify-center mb-4">
        <img src="./image/card3.png" alt="Graphic Designing Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">
        Creative Graphic
      </h3>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">
        Designing
      </h3>
      <p className="mt-4 font-[400] text-center text-[14px] leading-[16px] font-montserratLight">
        Showcase your Brand's personality
      </p>
    </div>

    {/* Card 4 */}
    <div
      className="w-full max-w-[317px] h-[195px] p-6 text-white rounded-[9px] shadow-lg border transition-transform transform hover:scale-110 mx-auto"
      style={{
        borderImage:
          "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1",
      }}
    >
      <div className="flex justify-center mb-4">
        <img src="./image/card4.png" alt="Video Ads Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">
        Motion Graphics &amp; Video
      </h3>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">
        Ads
      </h3>
      <p className="mt-4 font-[400] text-center text-[14px] leading-[16px] font-montserratLight">
        Grab attention instantly
      </p>
    </div>

    {/* Card 5 */}
    <div
      className="w-full max-w-[317px] h-[195px] p-6 text-white rounded-[9px] shadow-lg border transition-transform transform hover:scale-110 mx-auto"
      style={{
        borderImage:
          "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1",
      }}
    >
      <div className="flex justify-center mb-4">
        <img src="./image/card5.png" alt="iOS and Android Development Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">
        iOS and Android
      </h3>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">
        Development
      </h3>
      <p className="mt-4 font-[400] text-center text-[14px] leading-[16px] font-montserratLight">
        Reach a large global market
      </p>
    </div>
  </div>
</section>
 

  {/* What We Do. */}
  <section className="py-12 text-center px-3 bg-black w-full max-w-[909px] h-auto justify-center gap-12 md:gap-20 lg:gap-60 mx-auto">
  {/* line break */}
  <div className="h-[5px] w-[59px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
       style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}>
  </div>
  <div className="container mx-auto text-center">
    <h2 className="font-futuraBold text-[56px] leading-[73.02px] font-[700] mb-8">what we do</h2>
    <p className="text-[20px] mb-2 font-MontserratRegular font-[400] leading-[39.38px] tracking-wider text-center">
      Save hundreds of hours by just collaborating with us. 
      <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wide">
        Sounds bizarre?
      </span>
    </p>
    <p className="text-[20px] -mt-2 font-MontserratRegular font-[400] leading-[39.38px] tracking-wider text-center">
      In a world where technology has a say in everything we do, let's kickstart any 
      <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">digital marketing project </span> 
      with utmost easiness. As a women-led team, we always keep looking for new challenges digitally (Because we are confident to get things done!).
    </p>
    <p className="text-[20px] -mt-2 font-MontserratRegular font-[400] leading-[39.38px] tracking-wider text-center">
      You give us problems,
      <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">
        we give you solutions
      </span>. 
      We are here to ensure your brand's consistency and will help you attract your 
      <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">ideal prospects</span>.
    </p>

    {/* .............. Diamond session .............. */}
    <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 mt-8 flex-wrap">
      {["Inclusive", "Dynamic", "Tech Savvy", "Curious", "Creative"].map((text) => (
        <div key={text} className="flex flex-row items-center group hover:scale-105 transition-transform duration-300">
          <div className="w-8 h-8">
            <img src="./image/diamond.png" alt="diamond logo" className="transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p className="ml-4 font-futuraLight font-[300] text-[20px] leading-[25.46px] group-hover:text-white transition-colors duration-300">
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

 
{/*.......Get in Touch.........*/}
<section className="flex items-center justify-center min-h-screen bg-black -mt-10">
  <div
    className="text-white text-center p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg w-full max-w-[350px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1100px] h-auto"
    style={{
      background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
    }}
  >
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Image */}
      <div className="flex justify-center md:justify-start mb-4 md:mb-0">
        <img
          src="./image/getintouch.png"
          alt="get in touch image"
          className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[207px] lg:h-[213px]"
        />
      </div>

      <div className="flex flex-col items-center md:items-start">
        {/* Heading */}
        <h2
          className="text-white font-futuraLight text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-[500] leading-tight md:leading-[40px] lg:leading-[50.52px] text-center md:text-left"
        >
          To set new benchmarks and to bridge <br className="hidden md:block" /> the digital divide
        </h2>

        {/* Email Input and Button */}
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mt-4">
          {/* Email Input */}
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[353.62px] h-[43.1px] max-w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your work email"
              className="px-6 py-3 rounded-full font-montserratLight text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[23px] border-[0.78px] text-white outline-none w-full h-full border-purple-500"
              style={{
                background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
                WebkitTextFillColor: "white",
              }}
              required
            />
          </div>

          {/* Get in Touch Button */}
          <button
            className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[212px] h-[43px] rounded-full font-montserratLight text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[23px] bg-black border border-purple-500 text-white flex items-center justify-center space-x-2"
            type="submit"
          >
            <span>Get in touch</span>
            <img src="./image/right-arrow.png" alt="right arrow" className="h-5 sm:h-6 lg:h-7 inline-block" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Our Creatives */}
<section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24 -mt-10">
  {/* Line Break */}
  <div className="h-[5px] w-[59px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto -mt-14"
    style={{
      border: "1px solid",
      borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
      borderImageSlice: 1
    }}
  />
  <div className="max-w-screen-xl mx-auto">
    <div className="text-center">
      <h2 className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-MontserratRegular leading-[30px] sm:leading-[40px] md:leading-[45px] lg:leading-[55px] mb-4 sm:mb-6">
        <span className="font-[400]">Our creatives</span><br /><span className="font-[700]">speak volumes</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-12">
      {/* Left Section */}
      <div>
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-[600] leading-[28px] sm:leading-[35px] md:leading-[38px] font-MontserratRegular mb-4">
          Join with the right partner
        </h3>
        <p className="text-[16px] sm:text-[18px] font-[400] font-MontserratRegular mb-4 sm:mb-6 leading-[25px] sm:leading-[30px]">
          Having clear digital marketing solutions can help your brand thrive in this digital era.
          We are committed to providing strategies that combine data and creativity to scale up your
          digital presence.
        </p>
        <p className="text-[16px] sm:text-[18px] font-[400] font-MontserratRegular leading-[25px] sm:leading-[30px] mb-4 sm:mb-6">
          We don’t give false <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">promises.</span><br />
          For the right solutions, <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">let’s meet.</span>
        </p>

        {/* Quote */}
        <div className="flex items-start">
          <div className="h-[87px] w-[6px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 mr-4"></div>
          <blockquote className=" -mt-3 text-[14px] sm:text-[16px] font-MontserratRegular font-[300] italic leading-[25px] sm:leading-[30px] mb-4">
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">
              “Digital landscape provides ample opportunities for women to grow and excel. Our team of
              women own their space and it is where they find their empowerment by increasing their
              social and economic value.”
            </span>
          </blockquote>
        </div>

        {/* Author */}
        <div className="flex items-center space-x-4">
          <img src="./image/ShemiSebin.png" alt="Shemi Sebin" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" />
          <div>
            <p className="font-MontserratRegular font-[400] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px]">SHEMI SEBIN</p>
            <p className="text-[12px] sm:text-[13px] font-[400] font-MontserratRegular leading-[14px] sm:leading-[16px]">CEO</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div>
        <img src="./image/ourcreativeimg1.png" alt="Women Working" className="rounded-lg shadow-lg w-full" />
      </div>
    </div>

    {/* Bottom Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-12">
      {/* Left Image Section */}
      <div className="order-last lg:order-none">
        <img src="./image/ourcreativeimg2.png" alt="Women Discussion" className="rounded-lg shadow-lg w-full" />
      </div>

      {/* Right Section */}
      <div>
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-[600] leading-[28px] sm:leading-[35px] md:leading-[38px] font-MontserratRegular text-right mb-4">
          Deliver exceptional results
        </h3>
        <p className="text-[16px] sm:text-[18px] font-[400] font-MontserratRegular mb-4 sm:mb-6 leading-[25px] sm:leading-[30px] text-right">
          We are a team that is focused on digital presence and visibility. We are growing each
          day with dedicated professionals from all walks of life. We understand what your brand
          needs and what should be done to catalyze your brand's growth. Great content and
          creation is what we boast upon.
        </p>

        <p className="text-[16px] sm:text-[18px] font-[400] leading-[25px] sm:leading-[30px] font-MontserratRegular text-right mb-4 sm:mb-6">
          Contact us to have <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">profitable results.</span>
        </p>

        {/* Quote */}
        <div className="flex items-start justify-end">
          <div className="h-[87px] w-[6px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 mr-4"></div>
          <blockquote className=" -mt-3 text-[14px] sm:text-[16px] font-MontserratRegular font-[300] italic leading-[25px] sm:leading-[30px] text-right">
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">
              “The advancement of digital technologies has been instrumental in making women understand their
              power. We would like to align with the theme of International Women’s Day 2024: ‘Invest in women: 
              Accelerate progress.’”
            </span>
          </blockquote>
        </div>

        {/* Author */}
        <div className="flex items-center space-x-4 justify-end mt-2">
          <img src="./image/ShenaShaji.png" alt="Shena Shaji" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" />
          <div>
            <p className="font-MontserratRegular font-[400] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px]">SHENA SHAJI</p>
            <p className="text-[12px] sm:text-[13px] font-[400] font-MontserratRegular leading-[14px] sm:leading-[16px]">INTERNATIONAL CLIENT MANAGER</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  {/* Development Process Section */}
 <section className="flex items-center justify-center min-h-screen bg-black -mt-10">  
  <div className="bg-black text-white py-16 mt-24">
    {/* line break */}
    <div className="h-[5px] w-[69px]  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
      style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}>
    </div>
      <div className="text-center mb-12">
        <h2 className=" font-MontserratRegular font-[400] text-[35px] leading-[55px] ">How development <br/>
        <span className="font-[700] font-MontserratRegular text-[35px] leading-[55px] "> through Tree works</span></h2>
      </div>
      <Timeline/>
    </div>
  </section>

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
)
}

export default Home;