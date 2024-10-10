const HowItWorks = ()=>{

  return (<>
     <div className="min-h-screen bg-black text-white font-futura">
       

      {/* Main Section */}
      <main className="flex flex-col items-center text-center py-16 -mt-20">
  <div className="w-[678px] h-[110px] gap-0 opacity-75">
    <h1 className="text-[50px] font-[500] leading-[63.15px] text-left font-futuraMedium mb-4">
      Amplify your market reach,{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        let's grow digitally
      </span>
    </h1>
  </div>
    <p className="font-futuraMedium text-[20px] font-light leading-[25.46px] text-left opacity-75 mb-4 max-w-2xl">
      Thanks for your interest in working with us. Please complete the details below and we'll get back to you
      within one business day.
    </p>

        {/* Contact Form */}
        <form className="w-full max-w-lg text-left">
          <p className="mb-2">Required</p>
          <div className="mb-6">
            <label className="block mb-2">Name*</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Phone No*</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Email*</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Message*</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-full">
            SUBMIT
          </button>
        </form>

        {/* Discuss a Project Section */}
        <div className="flex flex-col items-center mt-20">
          <div className="relative w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-center flex items-center justify-center text-xl font-bold">
            <div className="absolute inset-0 flex items-center justify-center text-white z-10">
              DISCUSS A PROJECT
            </div>
            <div className="absolute inset-0 bg-transparent border-2 border-dashed border-white rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 opacity-75">We know how to mold your project, let's put the words into action!</p>
        </div>

        {/* Get Consultation Button */}
        <div className="mt-8">
          <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
            GET CONSULTATION
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-10 bg-black text-center">
        <ul className="flex justify-center space-x-8 mb-4">
          <li className="hover:text-purple-300">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-purple-300">
            <a href="#">About</a>
          </li>
          <li className="hover:text-purple-300">
            <a href="#">How It Works</a>
          </li>
          <li className="hover:text-purple-300">
            <a href="#">Services</a>
          </li>
          <li className="hover:text-purple-300">
            <a href="#">Contact</a>
          </li>
        </ul>
        <p className="opacity-75">
          Copyright © 2022 DOML. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-purple-300"> <i className="fab fa-facebook"></i> </a>
          <a href="#" className="hover:text-purple-300"> <i className="fab fa-linkedin"></i> </a>
          <a href="#" className="hover:text-purple-300"> <i className="fab fa-instagram"></i> </a>
        </div>
      </footer>
    </div>
  
  </>
  )
  
  }
  
  export default HowItWorks;