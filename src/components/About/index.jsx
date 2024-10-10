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
  <p className="mt-4 max-w-2xl mx-auto text-white font-[100] font-futuraLight text-center text-[24px] leading-[30.55px]">
    We are a women-led team of millennials and Gen Z who excel at strategic thinking.
    Give your vision, we will turn it into reality. Let the world notice your brand
    with goosebumps!
  </p>
</div>
        </section>
  {/* Content (Positioned above the overlay) */}
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
            className="w-[405px] h-[363px] rounded-tl-[10px] rounded-tr-none rounded-br-none rounded-bl-none opacity-75 border border-white"
          />
          <div className="flex-1 text-left">
            <h2 className="w-[500px] h-[50.52px] gap-90 opacity-75 text-left font-futura text-[30px] font-medium leading-[50.52px] mb-4">
              Achieve success with{' '}
              <span className="font-futura text-[30px] font-medium leading-[50.52px] text-left text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7]">
                grit & grace
              </span>
            </h2>
            <p className="w-[529px] h-[173px] gap-100 opacity-75 font-futuraLight text-[24px] font-[300] leading-[30.55px] mb-4">
              We have a knack for understanding your audience as we excel at strategic thinking. Our team crafts innovative strategies through our data-driven approach. Let’s connect with the audience on a deeper level and engage with them authentically for long.
            </p>
            <p className="w-[575px] h-[26px] gap-0 opacity-75  font-futuraMedium font-[500] text-[26px] leading-[32.84px] text-left">
              Craft creatives that align with your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        
      {/* Discuss a Project Section */}
      <div className="bg-black text-center py-16 px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="w-[412px] h-[37px] gap-0 opacity-75 text-4xl font-bold">
            DISCUSS A PROJECT
          </h2>
          <p className="mt-4">
            We know how to mold your project. Let’s put the words into action!
          </p>
          <button className="mt-8 bg-purple-500 hover:bg-purple-700 text-white py-2 px-6 rounded">
            Get Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
