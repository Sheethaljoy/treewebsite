import React from 'react';

const About = () => {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us</title>
  
  {/* Hero Section */}
  <section
  className="relative flex flex-col items-center justify-center text-center py-5 sm:py-10 md:py-20 overflow-hidden"
  style={{ width: "100%", maxWidth: 1440, height: "100%", maxHeight: 756 }}
>
  <img
    src="./image/Aboutbg.png"
    alt="Background"
    className="absolute top-0 left-0 w-full h-full object-cover -z-20"
  />
  
  {/* Content */}
  <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 mt-[-10px] sm:mt-16">
  <h1 className="text-[50px] sm:text-[50px] md:text-[50px] font-500 leading-[63.15px] text-white font-futuraLight">
    Hello there!
    <br />
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
      }}
    >
      Leading digitally, for a better future
    </span>
  </h1>
  <p className="mt-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-white text-[24px] font-futuraLight sm:text-[24px] md:text-[24px] font-300 leading-[30.55px]">
    We are a women-led team of millennials and Gen Z who excel at strategic thinking.
    Give your vision, we will turn it into reality. Let the world notice your brand
    with goosebumps!
  </p>
</div>

  {/* WhatsApp Floating Icon */}
  <div className="fixed right-5 bottom-12 w-[40px] sm:w-[50px] md:w-[60px] lg:w-[72px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[72px]">
    <a href="https://wa.me/9074429360">
      <img src="image/whatsapplogo.png" alt="whatsapplogo" className="w-full h-full" />
    </a>
  </div>
</section>


{/* About Section */}
<section className="px-4 sm:px-8 md:px-12 lg:pl-36 py-8 sm:py-12 flex justify-center">
  <div
    className="relative py-6 px-6 border-2 rounded-xl max-w-[884px] w-full mx-auto"
    style={{
      borderImageSource: 'linear-gradient(225deg, #6675F7 0%, #57007B 100%)',
      borderImageSlice: 1,
    }}
  >
    <div className="flex flex-col md:flex-row items-center md:items-start">
      {/* Image with Border */}
      <div className="relative lg:absolute lg:-ml-36 top-4 md:top-12 md:left-8 mb-4 md:mb-0">
        <img
          src="./image/aboutimage.png"
          alt="Team"
          className="w-[250px] -mt-6 sm:w-[300px] h-[220px] sm:h-[265px] rounded-tl-[10px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px]"
        />
      </div>

      <div className="flex-1 mt-4 md:mt-0 md:ml-52 text-center md:text-left">
        <h2 className="font-futuraMedium font-[500] text-[40px] sm:text-[40px] md:text-[40px] lg:text-[40]px] leading-[50.52px] sm:leading-[50.52px] md:leading-[50.52px]  lg:leading-[50.52px] mb-2 sm:mb-3 md:mb-4">
          Achieve success with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5200FF] to-[#00F0FF]">
            grit & grace
          </span>
        </h2>
        <p className="text-white font-futuraLight text-[16px] sm:text-[18px] md:text-[24px] lg:text-[24px] font-[300] leading-[24px] sm:leading-[28px] md:leading-[30.55px] lg:leading-[30.55px] mb-2 sm:mb-3 md:mb-4">
          We have a knack for understanding your audience as we excel at
          strategic thinking. Our team crafts innovative strategies through our
          data-driven approach. Let’s connect with the audience on a deeper
          level and engage with them authentically for long.
        </p>
        <p className="font-futuraMedium text-[26px] sm:text-[26px] md:text-[26px] lg:text-[26px] leading-[32.84px] sm:leading-[28px] md:leading-[32.84px] lg:leading-[32.84px] font-[500]">
          Craft creatives that align with your goals.
        </p>
      </div>
    </div>
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
   
</div>
    </>
  );
};

export default About;
