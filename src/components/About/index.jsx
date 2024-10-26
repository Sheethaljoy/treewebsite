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
          className="relative flex flex-col items-center justify-center text-center py-20 bg-cover bg-center bg-no-repeat -ml-32"
          style={{
            backgroundImage: 'url("./image/Aboutbg.png")',
            width: 1440, // Set width to 100% to make it responsive
            height: 756,   // You can adjust the height for responsiveness
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
     <section className="bg-black py-8 px-8 -mt-12 relative border-2 border-[#5200FF] rounded-[5px] ">
  <div className="absolute inset-0 border-[2px] rounded-[10px] border-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] opacity-80 pointer-events-none -z-10"></div>
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
</section>

 {/*last section */}
  
  <div className="relative text-white h-screen w-[1051] flex items-center justify-center">
      {/* Background effect */}
      <div className="absolute inset-0 flex justify-normal ml-44 items-center z-0">
      <div className="relative z-10">
  <img
    src="./image/lastsectionimg.png"
    alt="last session img"
    className="w-[385px] h-[352px] ml-5"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
    <h1 className="text-[40px] font-[700] leading-[52.16px] font-futuraMedium text-white ml-2">
      DISCUSS A PROJECT
    </h1>
    <p className=" font-futuraLightFont text-white text-[26px] leading-[33.62px]">
      We know how to mold your project
      <br />
      Let's put the words into action
    </p>
  </div>
</div>

      </div>

      {/* Content */}
      <div className="relative ml-80 z-10 flex justify-end">
  <a href="/howitworks">
    <button className="mt-6 ml-96 py-3 px-6 w-[290px] h-[65px] rounded-xl border-[3px] border-[#622bba] text-white font-futuraMedium text-[20px] font-[700] leading-[14px]">
     GET CONSULTATION
    </button>
  </a>
</div>
    </div>

    </>
  );
};

export default About;
