/* eslint-disable react/no-unescaped-entities */
const Home = ()=>{

return (<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tree information Technology</title>

  {/* Hero Section */}
  <section className="pl-36 bg-black py-12 ">
  <h1
  className="font-futuraMedium text-[52px] font-[500] leading-[65.58px] text-left"
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
    <div className="font-futuraLight mt-4 text-left text-[20px] font-400 leading-[24.38px] text-white">
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
  }}>
    </div>
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
  {/* line break */}
  <div className="h-[5px] w-[59px]  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
    style={{
             border: "1px solid",
              background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
             borderImageSlice: 1}}>
  </div>
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
 <section className="py-12 text-center px-3 bg-black">
 {/* line break */}
    <div className="h-[5px] w-[59px]  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
      style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}>
    </div>

    <div className="container mx-auto text-center">
      <h2 className="font-futuraMedium text-[56px] leading-[73.02px] font-bold mb-8">what we do</h2>
      <p className="text-[20px] mb-2 font-MontserratRegular font-[400] leading-[39.38px] tracking-wider text-center">
  Save hundreds of hours by just collaborating with us. 
  <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wide">
    Sounds bizarre?
  </span>
</p>

<p className="text-[20px] -mt-2 font-MontserratRegular font-[400] leading-[39.38px] tracking-wider text-center">
  In a world where technology has a say in everything we do, let's kickstart any <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">digital marketing project </span> 
  with utmost easiness. As a women-led team, we always keep looking for new challenges digitally (Because we are confident to get things done!).
</p>

<p className="text-[20px] -mt-2 font-MontserratRegular font-[400] leading-[39.38px] tracking-wider text-center">
  You give us problems,
  <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">
    we give you solutions
  </span>. 
  We are here to ensure your brand's consistency and will help you attract your <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">ideal prospects
  </span>.
</p>

{/* .............. Diamond session ..............*/}

<div className="flex justify-center items-center gap-8 mt-8">
  <div className="flex flex-row items-center">
    <div className="w-12 h-12">
      <img src="./image/diamond.png" alt="diamond logo" />
    </div>
    <p className="ml-2 font-futuraMedium font-[300] text-[20px] leading-[25.46px]  ">Inclusive</p>
  </div>
  <div className="flex flex-row items-center">
    <div className="w-12 h-12">
      <img src="./image/diamond.png" alt="diamond logo" />
    </div>
    <p className="ml-2 font-futuraMedium font-[300] text-[20px] leading-[25.46px] ">Dynamic</p>
  </div>
  <div className="flex flex-row items-center">
    <div className="w-12 h-12">
      <img src="./image/diamond.png" alt="diamond logo" />
    </div>
    <p className="ml-2 font-futuraMedium font-[300] text-[20px] leading-[25.46px] ">Tech Savvy</p>
  </div>
  <div className="flex flex-row items-center">
    <div className="w-12 h-12">
      <img src="./image/diamond.png" alt="diamond logo" />
    </div>
    <p className="ml-2 font-futuraMedium font-[300] text-[20px] leading-[25.46px] ">Curious</p>
  </div>
   <div className="flex flex-row items-center">
     <div className="w-12 h-12">
      <img src="./image/diamond.png" alt="diamond logo" />
     </div>
     <p className="ml-2 font-futuraMedium font-[300] text-[20px] leading-[25.46px] ">Creative</p>
    </div>
   </div>
   </div>
 </section>
 
{/*.......Get in Touch.........*/} 

<section className="flex items-center justify-center min-h-screen bg-black">
    <div className="text-white text-center p-10 rounded-2xl shadow-lg w-[1100px] h-[215px]" 
         style={{background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)"}}>

        <div className="flex justify-between items-center">

           {/* Image */}
       <div className="flex justify-start -mt-5">
        <img src="./image/getintouch.png" alt="get in touch image" className="w-[207px] h-[213px] "/>
        </div>
        <div>
    {/* Heading */}
    <h2 className="text-white font-futuraLight text-[40px] font-[500] leading-[50.52px] text-left -mt-11">
        To set new benchmarks and to bridge <br /> the digital divide
    </h2>

    {/* Email Input and Button */}
    <div className="flex items-center space-x-4 mt-3">
        {/* Email Input */}
        <div className="relative w-[353.62px] h-[43.1px]  max-w-md">
            <input
                type="email"
                placeholder="Enter your work email"
                className="px-6 py-3 rounded-[23.3px] font-MontserratRegular font-[400] text-[19.41px] leading-[23.67px] border-[0.78px]  text-white outline-none w-[353.62px] h-[43.1px]"
                style={{
                   background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)"
                }}
            />
        </div>

        {/* Get in Touch Button */}
        <button className="px-6 py-3 rounded-full bg-black border border-purple-500 text-white hover:bg-gradient-to-r from-purple-500 to-blue-500 transition">
            Get in touch
            <span className="ml-2 text-purple-500 hover:text-white transition">
                →
            </span>
          </button>
          </div>
         </div>
        </div>
    </div>
</section>

{/* Our creatives  */}
<section className="bg-black text-white py-16 px-8 lg:px-20">
  {/* line break */}
  <div className="h-[5px] w-[59px]  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto -mt-14"
      style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}>
   </div>
   <br/>

      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <h2 className="text-white text-4xl lg:text-5xl font-semibold mb-6">
            Our creatives <br /> <span className="text-purple-500">speak volumes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Left section */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Join with the right partner
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              Having clear digital marketing solutions can help your brand thrive in this digital era.
              We are committed to provide strategies that combine data and creativity to scale up your
              digital presence.
            </p>
            <p className="text-lg mb-6">
              We don’t give false <span className="text-purple-500">promises.</span><br />
              For the right solutions, <a href="#" className="text-blue-500 underline">let’s meet.</a>
            </p>

            {/* Quote */}
            <blockquote className="text-purple-400 italic text-lg mb-4">
              “Digital landscape provides ample opportunities for women to grow and excel. Our team of
              women own their space and it is where they find their empowerment by increasing their
              social and economic value.”
            </blockquote>

            <div className="flex items-center space-x-4">
              <img
                src="/path-to-image/shem-sebin.png" // Replace with actual image path
                alt="Shemi Sebin"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">Shemi Sebin</p>
                <p className="text-sm">CEO</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div>
            <img
              src="/path-to-image/women-working.jpg" // Replace with actual image path
              alt="Women Working"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Left Image Section */}
          <div>
            <img
              src="/path-to-image/women-discussion.jpg" // Replace with actual image path
              alt="Women Discussion"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right section */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Deliver exceptional results
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              We are a team that is focused on digital presence and visibility. We are growing each
              day with dedicated professionals from all walks of life. We understand what your brand
              needs and what should be done to catalyse your brand's growth. Great content and
              creation is what we boast upon.
            </p>

            <p className="text-lg mb-6">
              Contact us to have <span className="text-blue-500 underline">profitable results.</span>
            </p>

            {/* Quote */}
            <blockquote className="text-purple-400 italic text-lg mb-4">
              “The advancement of digital technologies has been instrumental in making women
              understand their power. We would like to align with the theme of International Women’s
              Day 2024: ‘Invest in women: Accelerate progress.’”
            </blockquote>

            <div className="flex items-center space-x-4">
              <img
                src="/path-to-image/jeewa-markram.png" // Replace with actual image path
                alt="Jeewa Markram"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">Jeewa Markram</p>
                <p className="text-sm">CEO</p>
              </div>
            </div>
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