const Home = ()=>{

return (<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tree information Technology</title>

  {/* Hero Section */}
  <section className="pl-36 bg-black py-12 ">
  <h1
  className="font-futuraMedium text-[52px] font-500 leading-[65.58px] text-left"
  style={{
    background: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}>
  A Women-led Creative Team
</h1>
<div className="font-futuraMedium mt-4 text-left text-[40px] font-500 leading-[50.52px] text-white">
  <p>Seamless fusion of Technology &</p>
  <p className="justify-end">Creativity</p>
</div>
    <br/>
    <div className="font-MontserratRegular mt-4 text-left text-[20px] font-400 leading-[24.38px] text-white">
  <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah</p>
  <p className="justify-end"> Blah Blah Blah ..But We Make Wonders !.......</p>
</div>
<br/>
<div
  className="h-[0.5 px] w-[615px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
  style={{
    border: "1px solid",
    borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
    borderImageSlice: 1
  }}
></div>

   <br/>
    <div className="flex items-center justify-start">
      <div className="relative ">
        <div className="rounded-full bg-gradient-to-r from-purple-600 to-white p-1">
          <button className="rounded-full bg-black text-white py-2 px-6 font-MontserratRegular text-[19px] font-400 leading-[23.16px]">
            Get Started
            <img src="./image/right-arrow.png" alt="right arrow image" className="h-7 inline-block px-2"/>
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-end px-10">
    <img
      src="image\whatsapplogo.png"
      alt="whatsapplogo Image"
      className=" mt-12 w-12 justify-end m-0"
    />
    </div>
  </section>
  {/* Ticker Section */}
  <div className=" py-4 text-center text-xl font-bold w-auto h-11 "
  style={{
    background: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) ',
  }}>
    <marquee className=" text-white  font-futuraMedium text-[28px] font-500 leading-[23.16px]"> 
      <p className="inline">Blah Blah Blah Blah Blah</p> 
      <img src=".\image\Ellipse 3.png" alt="ellipse image" className="h-5 inline"/> 
       <p className="inline">We Make Wonders</p><p className="inline font-bold"> . </p><p className="inline">Blah Blah Blah Blah Blah</p>  <img src=".\image\Ellipse 3.png" alt="ellipse image" className="h-5 inline"/>  <p className="inline">We Make Wonders</p><p className="inline font-bold"> . </p></marquee>
  </div>
  {/* Services Section */}
<section className="py-12 text-center px-3 bg-black">
<div className="h-[5px] w-[59px]  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
style={{
  border: "1px solid",
  borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
  borderImageSlice: 1
}}></div>
<br/>
  <h2 className="font-bold text-white font-futuraMedium text-[56px] font-700 leading-[73.03px]">Services</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
    {/* Card 1 */}
    <div className="bg-black text-white p-6 rounded-lg shadow-lg border border-purple-500 transition-transform transform hover:scale-110 hover:border-gradient-to-r from-purple-400 to-blue-400">
      <div className="flex justify-center mb-4">
        <img src=".\image\card1.png" alt="Web App Development Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[20px] font-bold leading-[20px] text-center font-inter">Website &amp; Web App</h3>
      <h3 className="text-[20px] font-bold leading-[20px] text-center font-inter">Development</h3>
      <p className="mt-4 font-normal text-center text-[16px] leading-[16px] font-inter">Top-notch Web Designs to make your<br/>Brand unique</p>
    </div>

    {/* Card 2 */}
    <div className="bg-black text-white p-6 rounded-lg shadow-lg border border-purple-500 transition-transform transform hover:scale-110 hover:border-gradient-to-r from-purple-400 to-blue-400">
      <div className="flex justify-center mb-4">
        <img src=".\image\card2.png" alt="Digital Marketing Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[20px] font-bold leading-[20px] text-center font-inter">Digital Marketing &amp; Marketing</h3>
      <h3 className="text-[20px] font-bold leading-[20px] text-center font-inter">Research Service</h3>
      <p className="mt-4 text-center text-[16px] leading-[16px] font-inter font-normal">Strengthen Customer Relationship</p>
    </div>

    {/* Card 3 */}
    <div className="bg-black text-white p-6 rounded-lg shadow-lg border border-purple-500 transition-transform transform hover:scale-110 hover:border-gradient-to-r from-purple-400 to-blue-400">
      <div className="flex justify-center mb-4">
        <img src=".\image\card3.png" alt="Graphic Designing Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[20px] font-bold leading-[20px] text-center font-inter">Creative Graphic</h3>
      <h3 className="text-[20px] font-bold leading-[20px] text-center font-inter">Designing</h3>
      <p className="mt-4 text-center text-[16px] leading-[16px] font-inter font-normal">Showcase your Brand's personality</p>
    </div>
   
  {/* Card 4 */}
  <div className=" bg-black text-white p-6 rounded-lg shadow-lg border border-purple-500 transition-transform transform hover:scale-110 hover:border-gradient-to-r from-purple-400 to-blue-400">
    <div className="flex justify-center mb-4">
      <img src="./image/card4.png" alt="Video Ads Icon" className="w-14 h-14" />
    </div>
    <h3 className="text-[20px] font-bold leading-[20px] text-center font-inter">Motion Graphics &amp; Video</h3>
    <h3 className="text-[20px] font-bold leading-[20px] text-center font-inter">Ads</h3>
    <p className="mt-4 text-center text-[16px] leading-[16px] font-inter font-normal">Grab attention instantly</p>
  </div>

  {/* Card 5 */}
  <div className=" bg-black text-white p-6 rounded-lg shadow-lg border border-purple-500 transition-transform transform hover:scale-110 hover:border-gradient-to-r from-purple-400 to-blue-400">
    <div className="flex justify-center mb-4">
      <img src="./image/card5.png" alt="iOS and Android Development Icon" className="w-14 h-14" />
    </div>
    <h3 className="text-[20px] font-bold leading-[20px] text-center font-inter">iOS and Android</h3>
    <h3 className="text-[20px] font-bold leading-[20px] text-center font-inter">Development</h3>
    <p className="mt-4 text-center text-[16px] leading-[16px] font-inter font-normal">Reach a large global market</p>
  </div>
  </div>
</section>

  {/* What We Do. */}
<br/>
<div className="h-[5px] w-[59px]  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
     style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}></div>
<br/>
<section className="bg-black text-white py-16 w-[909px] h-[400px] mx-auto flex items-center justify-center mt-0">
   <div className="container mx-auto text-center">
        <h2 className="font-futuraMedium text-[56px] leading-[73.02px] font-bold mb-8">what we do</h2>
        <p className="text-[20px] mb-4 font-MontserratRegular leading-[39.38px] font-thin tracking-wide">
           Save hundreds of hours by just collaborating with us. 
           <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wide">
           Sounds bizarre?
         </span>
         </p>
         <p className="text-[20px] mb-4 font-MontserratRegular leading-[39.38px] font-thin tracking-wide">
          In a world where technology has a say in everything we do, let's kickstart any
           <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wide">digital marketing project</span> 
           with utmost easiness. As a women-led team, we always keep looking for new challenges digitally (Because we are confident to get things done!).
        </p>
        <p className="text-lg mb-4">
         You give us problems,
         <span className="text-purple-500">we give you solutions</span>.
         We are here to ensure your brand's consistency and will help you attract your <span className="text-purple-400">ideal prospects</span>.
        </p>

        <div className="flex justify-center items-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img src="./image/diamond.png" alt="diamond logo"/>
            </div>
            <p className="mt-2">Inclusive</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 ">
            <img src="./image/diamond.png" alt="diamond logo"/>
            </div>
            <p className="mt-2">Dynamic</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 ">
            <img src="./image/diamond.png" alt="diamond logo"/>
            </div>
            <p className="mt-2">Tech Savvy</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 ">
            <img src="./image/diamond.png" alt="diamond logo"/>
            </div>
            <p className="mt-2">Curious</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
            <img src="./image/diamond.png" alt="diamond logo "/>
            </div>
            <p className="mt-2">Creative</p>
          </div>
        </div>
      </div>
    </section>

  {/* Development Process Section */}
  <section className="py-12 px-3">
    <h2 className="text-center text-4xl font-bold text-purple-500">
      How Development Through Tree Works
    </h2>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold">The Ideation</h3>
        <p className="mt-4">
          Innovative concept creation to solve business challenges.
        </p>
      </div>
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold">The Development</h3>
        <p className="mt-4">
          Design and develop creative solutions with the right tools.
        </p>
      </div>
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold">Strategies and Tools</h3>
        <p className="mt-4">Using proven methods to grow your brand.</p>
      </div>
    </div>
  </section>
  {/* Call to Action Section */}
  <section className="bg-purple-800 py-12 text-center">
    <h2 className="text-3xl font-bold">Set New Benchmarks</h2>
    <p className="mt-4">Enter your email to bridge the digital divide.</p>
    <div className="mt-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 text-black rounded-lg"
      />
      <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg">
        Get in Touch
      </button>
    </div>
  </section>
</>
)

}

export default Home;