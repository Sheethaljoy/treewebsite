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
          className="relative flex flex-col items-center justify-center text-center py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("./image/Aboutbg.png")',
            width: '100%', // Set width to 100% to make it responsive
            height: 756,   // You can adjust the height for responsiveness
            top: 0,
          }}
        >
          {/* Transparent Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-15"></div>

          {/* Content (Positioned above the overlay) */}<div className="relative z-10 h-500 flex flex-col justify-start items-center -mt-40">
  <h1 className="text-[50px] font-[500] leading-[63.15px] font-futuraMedium text-white mt-">
    Hello there! <br />
    <span
      className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent"
      style={{
        backgroundImage:
          'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
      }}
    >
      Leading digitally, for a better future
    </span>
  </h1>
  <p className="mt-4 max-w-2xl mx-auto text-white font-[300] font-futuraLight text-center text-[24px] leading-[30.55px]">
    We are a women-led team of millennials and Gen Z who excel at strategic thinking.
    Give your vision, we will turn it into reality. Let the world notice your brand
    with goosebumps!
  </p>
</div>
<div className="relative">
  <div className="fixed right-5 bottom-12 w-[72px] h-[72px] top-[520px]">
  <a href="https://wa.me/9074429360">
    <img
      src="image/whatsapplogo.png"
      alt="whatsapplogo"
      className="w-16"
    />
    </a>
  </div>
</div>
</section>
</div>


     {/* About Section */}
<section className="bg-black py-8 px-8 -mt-12">
  <div className="bg-black py-8 px-8">
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="flex space-x-8">
          {/* Image with Border */}
          <img
            src=".\image\aboutimage.png" // Replace with actual image path
            alt="Team"
            className="w-[405px] h-[363px] rounded-[10px] border border-white"
          />
          <div className="flex-1 text-left">
            
            <h2 className="text-left font-futuraMedium font-[500] text-[40px] leading-[50.52px] mb-4 whitespace-nowrap">
                Achieve success with{' '}
            <span className="text-left text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7]">
               grit & grace
            </span>
            </h2>
          
            <p className=" font-futuraLight text-[24px] font-[300] leading-[30.55px] mb-4">
              We have a knack for understanding your audience as we excel at strategic thinking. Our team crafts innovative strategies through our data-driven approach. Let’s connect with the audience on a deeper level and engage with them authentically for long.
            </p>
            <p className="font-futuraMedium font-[500] text-[26px] leading-[32.84px] text-left">
              Craft creatives that align with your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Discuss a Project Section */}
      <div className="relative flex justify-between items-center bg-black text-white py-10 px-8">
      {/* Circular background pattern */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* You can replace this with an SVG or a custom image */}
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-20 absolute -top-16 -left-20 animate-spin-slow"></div>
      </div>

      {/* Left section: Heading and text */}
      <div className="relative z-10">
      <h1
  className="w-[412px] h-[37px] absolute top-[141px] opacity-75 text-left text-[40px] font-bold leading-[52.16px] mb-0 font-futuraMedium"
>
  DISCUSS A PROJECT
</h1>

<p
  className="w-[304px] h-[60px] absolute top-[190px] left-[54px] opacity-75 text-center text-[26px] font-thin leading-[33.62px] mb-0 font-futuraMedium"
>
  We know how to mold your project <br />
  Let’s put the words into action
</p>


      </div>

      {/* Right section: Button */}
      <div className="relative z-10">
        <button className="px-8 py-4 text-lg font-bold text-white rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500">
          GET CONSULTATION
        </button>
      </div>
    </div>
    </>
  );
};

export default About;
