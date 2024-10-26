/* eslint-disable react/no-unescaped-entities */
const Home = ()=>{

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
    <div className="font-futuraLight text-[14px] sm:text-[16px] md:text-[18px] font-extralight leading-tight lg:leading-[25.46px] text-white">
      <p>Mould and strengthen your business with digital marketing.</p>
      <p>We deliver content, products and services to enable success.</p>
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
      <button className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 w-[160px] sm:w-[219px] h-[40px] sm:h-[45.82px] rounded-full font-montserratLight text-[16px] sm:text-[19px] font-[400] leading-[23.16px] bg-black border border-purple-500 text-white transition mt-2 lg:mt-4">
        Get Started
        <img src="./image/right-arrow.png" alt="right arrow image" className="h-[18.64px] ml-2 sm:ml-4" />
      </button>
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

  {/* WhatsApp Floating Icon */}
  <div className="fixed right-5 bottom-12 w-[72px] sm:w-[72px] h-[72px] sm:h-[72px]">
    <a href="https://wa.me/9074429360">
      <img src="image/whatsapplogo.png" alt="whatsapplogo" className="w-[55px] h-[55px] -mt-14" />
    </a>
  </div>

{/* Ticker Section */}
<div className="py-2 text-center text-lg font-bold w-full bg-gradient-to-r from-cyan-400 to-purple-600">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <marquee className="text-white font-futuraMedium text-[14px] sm:text-[18px] lg:text-[20px] font-500 leading-[20px] col-span-full">
      <div className="flex items-center justify-center">
        <p className="inline">Blah Blah Blah Blah Blah</p>
        <img src="./image/Ellipse 3.png" alt="ellipse image" className="h-2 sm:h-3 lg:h-4 inline mx-1" />
        <p className="inline">We Make Wonders</p>
        <p className="inline font-bold"> . </p>
        <p className="inline">Blah Blah Blah Blah Blah</p>
        <img src="./image/Ellipse 3.png" alt="ellipse image" className="h-2 sm:h-3 lg:h-4 inline mx-1" />
        <p className="inline">We Make Wonders</p>
        <p className="inline font-bold"> . </p>
      </div>
    </marquee>
  </div>
</div>

  {/* Services Section */}
<section id="service" className="py-12 text-center px-3 bg-black">
  {/* line break */}
  <div className="h-[5px] w-[59px]  bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto"
      style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
              borderImageSlice: 1
           }}>
    </div>
  <br/>
  <h2 className="font-bold text-white font-futuraMedium text-[56px] font-700 leading-[73.03px]">Services</h2> 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
    {/* Card 1 */}
    <div className="ml-[90px] w-[317px] h-[195px] p-6 text-white rounded-[9px] shadow-lg border-[1px] transition-transform transform hover:scale-110"
  style={{
    borderImage: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1",
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
    <div className=" ml-[50px] w-[317px] h-[195px] p-6  text-white rounded-[9px] shadow-lg border-[1px] transition-transform transform hover:scale-110 "
    style={{
      borderImage: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1",
      }}>
      <div className="flex justify-center mb-4">
        <img src=".\image\card2.png" alt="Digital Marketing Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular whitespace-nowrap  text-ellipsis">
  Digital Marketing &amp; Marketing
</h3>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">Research Service</h3>
      <p className="mt-4 font-[400] text-center text-[14px] leading-[16px] font-montserratLight">Strengthen Customer Relationship</p>
    </div>

    {/* Card 3 */}
    <div className="ml-[10px] w-[317px] h-[195px] p-6  text-white rounded-[9px] shadow-lg border-[1px]  transition-transform transform hover:scale-110 "
    style={{
      borderImage: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1",
      }}>
      <div className="flex justify-center mb-4">
        <img src=".\image\card3.png" alt="Graphic Designing Icon" className="w-14 h-14" />
      </div>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">Creative Graphic</h3>
      <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">Designing</h3>
      <p  className="mt-4 font-[400] text-center text-[14px] leading-[16px] font-montserratLight">Showcase your Brand's personality</p>
    </div>
   
  {/* Card 4 */}
  <div className="ml-[250px] w-[317px] h-[195px] p-6  text-white rounded-[9px] shadow-lg border-[1px]  transition-transform transform hover:scale-110 "
   style={{
    borderImage: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1",
    }}>
    <div className="flex justify-center mb-4">
      <img src="./image/card4.png" alt="Video Ads Icon" className="w-14 h-14" />
    </div>
    <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">Motion Graphics &amp; Video</h3>
    <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">Ads</h3>
    <p className="mt-4 font-[400] text-center text-[14px] leading-[16px] font-montserratLight">Grab attention instantly</p>
  </div>

  {/* Card 5 */}
  <div className="ml-[220px] w-[317px] h-[195px] p-6  text-white rounded-[9px] shadow-lg border-[1px] transition-transform transform hover:scale-110"
   style={{
    borderImage: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1",
    }}>
    <div className="flex justify-center mb-4">
      <img src="./image/card5.png" alt="iOS and Android Development Icon" className="w-14 h-14" />
    </div>
    <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">iOS and Android</h3>
    <h3 className="text-[20px] font-[600] leading-[20px] text-center font-MontserratRegular">Development</h3>
    <p className="mt-4 font-[400] text-center text-[14px] leading-[16px] font-montserratLight">Reach a large global market</p>
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
  Save hundreds of hours by just collaborating with us. <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent tracking-wide">
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
  {["Inclusive", "Dynamic", "Tech Savvy", "Curious", "Creative"].map((text) => (
    <div className="flex flex-row items-center group hover:scale-105 transition-transform duration-300">
      <div className="w-12 h-12">
        <img src="./image/diamond.png" alt="diamond logo" className="transition-transform duration-300 group-hover:scale-110" />
      </div>
      <p className="ml-2 font-futuraLight font-[300] text-[20px] leading-[25.46px] group-hover:text-white transition-colors duration-300">
        {text}
      </p>
    </div>
  ))}
</div>

   </div>
 </section>
 
{/*.......Get in Touch.........*/} 
<section className="flex items-center justify-center min-h-screen bg-black -mt-8 ">
    <div className="text-white text-center p-6 md:p-10 rounded-2xl shadow-lg 
        w-full md:w-[1100px] h-auto md:h-[215px]" 
        style={{
            background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)"
        }}>

        <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Image */}
            <div className="flex justify-center md:justify-start mb-4 md:mb-0 -mt-5">
                <img src="./image/getintouch.png" alt="get in touch image" 
                     className="w-[150px] md:w-[207px] h-[150px] md:h-[213px] -mt-4" />
            </div>

            <div>
                {/* Heading */}
                <h2 className="text-white font-futuraLight text-[28px] md:text-[40px] font-[500] 
                    leading-[34px] md:leading-[50.52px] text-center md:text-left -mt-6 md:-mt-11">
                    To set new benchmarks and to bridge <br /> the digital divide
                </h2>

                {/* Email Input and Button */}
                <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mt-3">
                    {/* Email Input */}
                    <div className="relative w-[280px] md:w-[353.62px] h-[43.1px] max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            className="px-6 py-3 rounded-[23.3px] font-montserratLight font-[400] 
                               text-[19px] leading-[23px] border-[0.78px] text-white outline-none 
                               w-full h-full border-purple-500"
                            style={{
                                background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
                                WebkitTextFillColor:"white"
                            }}
                        />
                    </div>

                    {/* Get in Touch Button */}
                    <button className="w-[180px] md:w-[212px] h-[43px] rounded-full font-montserratLight 
                        text-[18px] font-[400] leading-[23px] bg-black border border-purple-500 text-white">
                        Get in touch
                        <img src="./image/right-arrow.png" alt="right arrow image" 
                             className="h-6 md:h-7 inline-block px-2 ml-2 md:ml-4" />
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

 {/* Row 1 */}
      <div className="flex justify-start w-full flex-wrap lg:flex-nowrap">
  {/* div 1 */}
  <div className="w-full sm:w-1/2 lg:w-1/3 inline-block -ml-10">
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
        We create the images after having a sequence of thoughts delivered by our creative minds.
      </p>
    </div>
  </div>
  <br/>
  
            
  {/* div 2 */}
  <div className="w-full sm:w-1/2 lg:w-1/3 inline-block">
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

  {/* div 3 */}
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
        We don’t go after age-old marketing formulae to leverage your brand’s potential. We work hard, find multiple strategies to elevate your brand.
      </p>
    </div>
  </div>
</div>

<br/>
<br/>

  {/* Timeline Line */}
  <div
  className="h-[1px] w-[1100px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto flex justify-end items-center"
  style={{
    border: "1px solid",
    borderImageSource: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
    borderImageSlice: 1,
    marginLeft:-100,
  }}
>
  {/* Trophy Icon */}
  <div style={{ marginRight: '-70px' }}> {/* Adjust the gap here */}
    <img src="./image/trophyimg.png" alt="Trophy" className="w-[72px] h-[72px]" />
  </div>
</div>
  <br/>   
  <br/>

 {/* Row 2 */}
   <div className="flex justify-end w-full flex-wrap lg:flex-nowrap gap-4">
       
    {/*div 4 */}
      <div  className="w-full sm:w-1/2 lg:w-1/3 inline-block ml-4">
        <div className="w-[299px] h-[159px] border-[1px] p-6 rounded-[9px]"
             style={{
                    background: 'linear-gradient(121.9deg, #1C1C1C 0%, #050505 96.81%)',
                    }}>
           <h3 className= "text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
           <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
            #2{' '}
           </span>Collective Planning</h3>
           <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
            We plan the structure of each work by prioritising the goals of your organisation by having a thorough discussion among our team.
           </p>
         </div>
       </div>

       {/*div 5 */}
    <div className="w-full sm:w-1/2 lg:w-1/3 inline-block">
    <div className="w-[299px] h-[159px] border-[1px] p-6 rounded-[9px]"
         style={{
        background: 'linear-gradient(121.9deg, #1C1C1C 0%, #050505 96.81%)',
        }}>
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
      <div className="w-full sm:w-1/2 lg:w-1/3 inline-block">
       <div className="w-[299px] h-[159px] border-[1px] p-6 rounded-[9px]"
           style={{
             background: 'linear-gradient(121.9deg, #1C1C1C 0%, #050505 96.81%)',
              }}>
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

  {/*last section */}
  <div className="relative text-white h-screen w-[1051] flex items-center justify-center">
      {/* Background effect */}
      <div className="absolute inset-0 flex justify-start -ml-10 items-center z-0">
      <div className="relative z-10">
  <img
    src=".\image\last1.gif"
    alt="last session img"
    className="ml-5"/>
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
)
}

export default Home;