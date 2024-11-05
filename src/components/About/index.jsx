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
          className="relative flex flex-col items-center justify-center text-center py-20 bg-cover bg-center bg-no-repeat -ml-32  -z-10"
          style={{
            backgroundImage: 'url("./image/Aboutbg.png")',
            width: 1440, 
            height: 756, 
          }}
        >
  {/* Content (Positioned above the overlay) */}
  <div className="relative z-10 h-500 flex flex-col justify-start items-center -mt-40">
  <h1 className="text-[50px] font-[500] leading-[63.15px] font-futuraLight text-white ">
    Hello there! <br />
    <span
      className="bg-clip-text text-transparent"
      style={{
      backgroundImage: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
  }}>
  Leading digitally, for a better future
</span>

  </h1>
  <p className="mt-4 max-w-2xl mx-auto text-white font-[300] font-futuraLight text-center text-[24px] leading-[30.55px]">
    We are a women-led team of millennials and Gen Z who excel at strategic thinking.
    Give your vision, we will turn it into reality. Let the world notice your brand
    with goosebumps!
  </p>
</div>

  {/* WhatsApp Floating Icon */}
  <div className="fixed right-5 bottom-12 w-[72px] sm:w-[72px] h-[72px] sm:h-[72px]">
    <a href="https://wa.me/9074429360">
      <img src="image/whatsapplogo.png" alt="whatsapplogo" className="w-[55px] h-[55px] -mt-14" />
    </a>
  </div>

</section>
</div>
{/* About Section */}
<section
  className="bg-black py-4 px-6 -mt-8 border-2 rounded-[10px] max-w-3xl mx-auto"
  style={{
    borderImageSource: 'linear-gradient(225deg, #6675F7 0%, #57007B 100%)',
    borderImageSlice: 1,
  }}
>
  <div className="py-6 px-6">
    <div className="flex flex-col items-start">
      <div className="w-full max-w-3xl">
        <div className="flex flex-col md:flex-row justify-start md:space-x-4">
          {/* Image with Border */}
          <div className="relative md:absolute md:left-0 md:ml-32 -mt-3 mb-4 md:mb-0">
            <img
              src="./image/aboutimage.png" // Replace with actual image path
              alt="Team"
              className="w-[200px] h-[180px] md:w-[250px] md:h-[230px] rounded-[8px]"
            />
          </div>
          <div className="flex-1 text-left mt-4 md:mt-0">
            <h2 className="font-futuraMedium font-[500] text-[40px] md:text-[32px] leading-[50.52px] md:leading-[40px] mb-2 md:mb-4 md:ml-24">
              Achieve success with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7]">
                grit & grace
              </span>
            </h2>
            <p className="font-futuraLight text-[24px] md:text-[20px] font-[300] leading-[30.55px] md:leading-[28px] mb-2 md:mb-4 md:ml-24">
              We have a knack for understanding your audience as we excel at
              strategic thinking. Our team crafts innovative strategies through
              our data-driven approach. Let’s connect with the audience on a
              deeper level and engage with them authentically for long.
            </p>
            <p className="font-futuraMedium font-[300] text-[24px] md:text-[22px] leading-[30.55px] md:leading-[30px] md:ml-24   ">
              Craft creatives that align with your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


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

export default About;
