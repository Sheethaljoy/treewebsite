const Home = ()=>{

return (<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Creative Team</title>

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
  <div className="bg-purple-800 py-4 text-center text-xl font-bold ">
    <marquee>We Make Wonders - Blah Blah Blah Blah Blah</marquee>
  </div>
  {/* Services Section */}
  <section className="py-12 text-center px-3">
    <h2 className="text-4xl font-bold text-purple-500">Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-semibold">
          Website &amp; Web App Development
        </h3>
        <p className="mt-4">Build innovative digital solutions.</p>
      </div>
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-semibold">
          Digital Marketing &amp; Research
        </h3>
        <p className="mt-4">Strengthen customer relationships.</p>
      </div>
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-semibold">Creative Graphic Designing</h3>
        <p className="mt-4">Enhance brand creativity.</p>
      </div>
    </div>
  </section>
  {/* What We Do Section */}
  <section className="py-12">
    <h2 className="text-center text-4xl font-bold text-purple-500">
      What We Do
    </h2>
    <p className="text-center mt-4 text-xl max-w-2xl mx-auto">
      We give you solutions to attract your ideal prospects.
    </p>
    <div className="flex justify-center mt-8 space-x-8">
      <span className="px-4 py-2 bg-purple-600 rounded-full">Inclusive</span>
      <span className="px-4 py-2 bg-purple-600 rounded-full">Dynamic</span>
      <span className="px-4 py-2 bg-purple-600 rounded-full">Tech Savvy</span>
    </div>
  </section>
  {/* Testimonial Section */}
  <section className="py-12 bg-gray-800">
    <h2 className="text-center text-4xl font-bold text-purple-500">
      Our Creatives Speak Volumes
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-6xl mx-auto">
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <p className="italic">
          {"Digital solutions are essential for any brand..."}
        </p>
        <h4 className="mt-4 font-semibold">Person Name - CEO</h4>
      </div>
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <p className="italic">
          {"The strategies they implemented helped us grow..."}
        </p>
        <h4 className="mt-4 font-semibold">Person Name - CEO</h4>
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