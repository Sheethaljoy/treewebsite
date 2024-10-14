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
    <div className="relative">
  <div className="fixed right-5 bottom-12 w-[72px] h-[72px] top-[520px]">
    <img
      src="image/whatsapplogo.png"
      alt="whatsapplogo"
      className="w-16"
    />
  </div>
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
<section className="flex items-center justify-center min-h-screen bg-black -mt-8">
    <div className="text-white text-center p-10 rounded-2xl shadow-lg w-[1100px] h-[215px]" 
         style={{background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)"}}>

        <div className="flex justify-between items-center">
           {/* Image */}
       <div className="flex justify-start -mt-5">
        <img src="./image/getintouch.png" alt="get in touch image" className="w-[207px] h-[213px] -mt-4"/>
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
                className="px-6 py-3 rounded-[23.3px] font-MontserratRegular font-[400] text-[19.41px] leading-[23.67px] border-[0.78px] text-white outline-none w-[353.62px] h-[43.1px] border-purple-500"
                style={{
                   background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
                   WebkitTextFillColor:"white"
                }}
            />
        </div>

        {/* Get in Touch Button */}
        <button className="px-6 py-3 w-[212.33px] h-[43.97px] rounded-full font-MontserratRegular text-[19.41px] font-[400] leading-[23.67px] bg-black border border-purple-500 text-white hover:bg-gradient-to-r from-purple-500 to-blue-500 transition">
            Get in touch
            <span className="ml-5 text-blue-700 hover:text-white transition w-10">
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
          <h2 className="text-white text-[35px] font-MontserratRegular leading-[55px] mb-6">
           <span className="font-[400]">Our creatives</span><br/><span className="font-[700]">speak volumes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Left section */}
          <div>
            <h3 className="text-[28px] font-[600] leading-[38.09px] font-MontserratRegular mb-4">
              Join with the right partner
            </h3>
            <p className="text-18px font-[400] font-MontserratRegular mb-6 leading-[30px]">
              Having clear digital marketing solutions can help your brand thrive in this digital era.
              We are committed to provide strategies that combine data and creativity to scale up your
              digital presence.
            </p>
            <p className="text-[18px] font-[400] font-MontserratRegular leading-[30px] mb-6">
              We don’t give false <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">promises.</span><br />
              For the right solutions, <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">let’s meet.</span>
            </p>

            {/* Quote */}
            <div className="flex items-start">
            <div className="h-[87px] w-[6px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 mr-4"></div>
            <blockquote className=" -mt-3 text-[16px] font-MontserratRegular font-[300] italic leading-[30px] mb-4">
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">
              “Digital landscape provides ample opportunities for women to grow and excel. Our team of
              women own their space and it is where they find their empowerment by increasing their
              social and economic value.”</span>
            </blockquote>
            </div>
            
            <div className="flex items-center space-x-4">
              <img
                src="./image/ShemiSebin.png"
                alt="Shemi Sebin"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-MontserratRegular font-[400] text-[16px] leading-[19.36px]">SHEMI SEBIN</p>
                <p className="text-[13px] font-[400] font-MontserratRegular leading-[15.73px]">CEO</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div>
            <img
              src="./image/ourcreativeimg1.png"
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
              src="./image/ourcreativeimg2.png"
              alt="Women Discussion"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right section */}
          <div>
            <h3 className="text-[28px] font-MontserratRegular font-[600] leading-[38.09px] text-right mb-4">
              Deliver exceptional results
            </h3>
            <p className="text-[18px] font-MontserratRegular font-[400] mb-6 leading-[30px] text-right">
              We are a team that is focused on digital presence and visibility. We are growing each
              day with dedicated professionals from all walks of life. We understand what your brand
              needs and what should be done to catalyse your brand's growth. Great content and
              creation is what we boast upon.
            </p>
            
            <p className="text-[18px] font-[400] leading-[30px] font-MontserratRegular text-right mb-6">
              Contact us to have <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">profitable results.</span>
            </p>

            {/* Quote */}
            <div className="flex items-start">
            <div className="h-[87px] w-[6px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 mr-4"></div>
            <blockquote className=" -mt-3 text-[16px] font-MontserratRegular font-[300] leading-[30px] text-right italic">
                <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wider">
                 “The advancement of digital technologies has been instrumental in making women understand their
                 power. We would like to align with the theme of International Women’s Day 2024: ‘Invest in women: 
                 Accelerate progress.’”
                 </span>
              </blockquote>
             </div>
           
            <div className="flex items-center space-x-4 ml-56 mt-2">
              <img
                src="./image/ShenaShaji.png"
                alt="Shena Shaji "
                className="w-12 h-12 rounded-full"
              />
              <div>
              <p className="font-MontserratRegular font-[400] text-[16px] leading-[19.36px] ">SHENA SHAJI</p>
              <p className="text-[13px] font-[400] font-MontserratRegular leading-[15.73px]">INTERNATIONAL CLIENT MANAGER</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>

  {/* Development Process Section */}
 <section className="flex items-center justify-center min-h-screen bg-black -mt-8">  
  <div className="bg-black text-white py-16 mt-24">
    {/* line break */}
    <div className="h-[5px] w-[69px]  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
      style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}>
    </div>
    <br/>
      <div className="text-center mb-12">
        <h2 className=" font-MontserratRegular font-[400] text-[35px] leading-[55px] ">How development <br/>
        <span className="font-[700] font-MontserratRegular text-[35px] leading-[55px] "> through Tree works</span></h2>
      </div>
      
      <div className="flex justify-center flex-wrap gap-10 mx-auto max-w-7xl">
  {/* Row 1 */}

  {/* div 1 */}
  <div className="w-full sm:w-1/2 lg:w-1/3 inline-block">
    <div
      className="w-[299px] h-[159px] border-[1px] p-6 rounded-[9px]"
      style={{
        background: 'linear-gradient(121.9deg, #1C1C1C 0%, #050505 96.81%)',
      }}
    >
      <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
          #1{' '}
        </span>
        The Ideation
      </h3>
      <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
      We  create the images after having a sequence of thoughts delivered by our creative minds.
      </p>
    </div>
  </div>

  {/* div 3 */}
  <div className="w-full sm:w-1/2 lg:w-1/3 inline-block ">
    <div
      className="w-[299px] h-[159px] border-[1px] p-6 rounded-[9px]"
      style={{
        background: 'linear-gradient(121.9deg, #1C1C1C 0%, #050505 96.81%)',
      }}
    >
      <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
          #3{' '}
        </span>
        The Development
      </h3>
      <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
      Our professional team of content creators and designers make wonders through their imagination and creativity. 
      </p>
    </div>
  </div>

  {/* div 5 */}
  <div className="w-full sm:w-1/2 lg:w-1/3 inline-block">
    <div
      className="w-[299px] h-[159px] border-[1px] p-6 rounded-[9px]"
      style={{
        background: 'linear-gradient(121.9deg, #1C1C1C 0%, #050505 96.81%)',
      }}
    >
      <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
          #5{' '}
        </span>
        Strategies and Tools
      </h3>
      <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
      We don’t go after age old marketing formulae to leverage your brand’s potential. We work hard, find multiple strategies to elevate your brand.
      </p>
    </div>
  </div>
</div>
<br/>
  {/* Timeline Line */}
  <div className="h-[1px] w-[1100px]  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
      style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}>
     {/* Trophy Icon */}
     <div className="text-end ">
        <span role="img" aria-label="trophy" className="text-5xl">🏆</span>
      </div>
   </div>

      <div className="flex justify-center flex-wrap gap-10 mt-10 mx-auto max-w-7xl">
        {/* Row 2 */}

         {/*div 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
        <div
      className="w-[299px] h-[159px] border-[1px] p-6 rounded-[9px]"
      style={{
        background: 'linear-gradient(121.9deg, #1C1C1C 0%, #050505 96.81%)',
      }}>
      <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
         #2{' '}
         </span>Collective Planning</h3>
            <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
            We plan the structure of each work by prioritising the goals of your organisation by having a thorough discussion among our team.
            </p>
          </div>
        </div>

       {/*div 4 */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
        <div
      className="w-[299px] h-[159px] border-[1px] p-6 rounded-[9px]"
      style={{
        background: 'linear-gradient(121.9deg, #1C1C1C 0%, #050505 96.81%)',
      }} >
      <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
          #4{' '}
          </span>
           Market Research</h3>
            <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
            It’s important to have a plan, but it is inevitable to study the current market scenario.
            </p>
          </div>
        </div>

        {/*div 6 */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
        <div
      className="w-[299px] h-[159px] border-[1px] p-6 rounded-[9px]"
      style={{
        background: 'linear-gradient(121.9deg, #1C1C1C 0%, #050505 96.81%)',
      }} >
      <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
          #6 {' '}
          </span>
          Digital Marketing</h3>
            <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
            To have a steady, permanent growth for your brand we do everything and anything as we know how to mold your brand digitally.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*last session */}
<section>
<div className="relative flex items-center justify-center h-screen bg-black">
      {/* Background swirl effect */}
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden flex justify-center items-center">
        <div className="relative">
          <div className="w-[400px] h-[400px] rounded-full border border-purple-500 absolute animate-spin-slow" />
          <div className="w-[350px] h-[350px] rounded-full border border-blue-400 absolute animate-spin-slow" />
          <div className="w-[300px] h-[300px] rounded-full border border-cyan-400 absolute animate-spin-slow" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-6xl font-bold">
          DISCUSS A PROJECT
        </h1>
        <p className="text-white text-lg mt-4">
          We know how to mold your project <br />
          Let’s put the words into action
        </p>
        <button className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg shadow-lg">
          GET CONSULTATION
        </button>
      </div>
    </div>

</section>

</>
)
}

export default Home;