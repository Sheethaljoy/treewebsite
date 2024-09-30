const About = ()=>{

  return (<>
  
  <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us</title>
       
       {/* Hero Section */}
       <section
  className="relative flex flex-col items-center justify-center text-center py-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url("./image/Aboutbg.png")',
    width: 1343,
    height: 756,
    top: 0,
  }}
>
  {/* Transparent Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-75"></div>

  {/* Content (Positioned above the overlay) */}
  <div className="relative z-10">
    <h1 className="text-5xl font-bold text-white">
      Hello there! <br />
      <span className="text-purple-400">Leading digitally, for a better future</span>
    </h1>
    <p className="mt-4 max-w-xl mx-auto text-white">
      We are a women-led team of millennials and Gen Z who excel at strategic thinking.
      Give your vision, we will turn it into reality. Let the world notice your brand
      with goosebumps!
    </p>
  </div>
</section>


      {/* About Section */}
      <section className="bg-black py-16 px-8">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <div className="flex space-x-8">
              <img
                src="team_photo_url" // Replace with actual image URL
                alt="Team"
                className="w-1/3 rounded-lg"
              />
              <div className="flex-1 text-left">
                <h2 className="text-3xl font-bold mb-4">
                  Achieve success with <span className="text-blue-400">grit & grace</span>
                </h2>
                <p className="mb-4">
                  We have a knack for understanding your audience as we excel at strategic thinking. Our team crafts innovative strategies through our data-driven approach. Let’s connect with the audience on a deeper level and engage with them authentically for long.
                </p>
                <p className="font-semibold text-lg">
                  Craft creatives that align with your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discuss a Project Section */}
      <section className="bg-black text-center py-16 px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">
            DISCUSS A PROJECT
          </h2>
          <p className="mt-4">
            We know how to mold your project. Let’s put the words into action!
          </p>
          <button className="mt-8 bg-purple-500 hover:bg-purple-700 text-white py-2 px-6 rounded">
            Get Consultation
          </button>
        </div>
      </section>
      </div>
      </>
);
  }
  
  export default About;