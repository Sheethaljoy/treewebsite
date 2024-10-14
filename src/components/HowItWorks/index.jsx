const HowItWorks = ()=>{

  return (<>
     <div className="min-h-screen bg-black text-white font-futura">
       

      {/* Main Section */}
      <main className="flex flex-col items-center text-center py-16 -mt-20">
      <div className="w-[678px] h-[110px] gap-0 opacity-75">
  <h1 className="text-[45px] w-[500] leading-[63.15px] text-left font-futuraMedium mb-8">
    Amplify your market reach,{' '} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
      let's grow digitally
    </span>
  </h1>
</div>
<p className="font-futuraLight text-[20px] w-[300] leading-[25.46px] text-left opacity-75 mt-4 mb-4 max-w-2xl">
  Thanks for your interest in working with us. Please complete the details below and we'll get back to you
  within one business day.
</p>


        {/* Contact Form */}
        <form className="w-full max-w-2xl text-left ml-0">
        <p className="w-[800px] h-[20px] mb-9 opacity-75 text-left text-[20px] font-futuraLight leading-[25.26px] font-futura">
  Required
</p>

  <div className="mb-6">
    <label className="block mb-2 font-futuraLight w-[500px] h-[25.26px] opacity-75 items-center gap-[10px]  text-[20px] leading-[25.26px] text-left">
      Name
      <span className="font-futuraLight text-[20px] font-medium leading-[25.26px] text-left bg-gradient-to-br from-[#6675F7] to-[#57007B] bg-clip-text text-transparent">
        *
      </span>
    </label>
    <input
      className="w-full h-[25.26px] opacity-75 px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-purple-500 text-left font-futuraLight text-[20px] font-medium leading-[25.26px]"
      type="text"
    />
  </div>
  <div className="mb-6">
  <label className="w-[500px] h-[25.26px] opacity-75 items-center gap-[10px] font-futuraLight text-[20px] leading-[25.26px] text-left">
  Phone No<span className="font-futuraLight text-[20px] font-medium leading-[25.26px] bg-gradient-to-br from-[#6675F7] to-[#57007B] bg-clip-text text-transparent">
    *
  </span>
  
</label>
<div className="relative">
  <div className="fixed right-5 bottom-12 w-[72px] h-[72px] top-[520px]">
    <img
      src="image/whatsapplogo.png"
      alt="whatsapplogo"
      className="w-12"
    />
  </div>
</div>
    <input
      className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-purple-500"
      type="tel"
    />
  </div>
  

  <div className="mb-6">
    <label className="block mb-2 font-futuraLight w-[500px] h-[25.26px] opacity-75 items-center gap-[10px]  text-[20px] leading-[25.26px] text-left ">
      Email
      <span className="font-futuraLight text-[20px] font-medium leading-[25.26px] text-left bg-gradient-to-br from-[#6675F7] to-[#57007B] bg-clip-text text-transparent">
        *
      </span>
    </label>
    <input
      className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-purple-500"
      type="email"
    />
  </div>
  <div className="mb-6">
    <label className="block mb-2 font-futuraLight w-[500px] h-[25.26px] opacity-75 items-center gap-[10px]  text-[20px] leading-[25.26px] text-left">
      Message
      <span className="font-futuraLight text-[20px] font-medium leading-[25.26px] text-left bg-gradient-to-br from-[#6675F7] to-[#57007B] bg-clip-text text-transparent">
        *
      </span>
    </label>
    <input
      className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-purple-500"
    />
  </div>
  <button className="w-[192px] h-[65px] bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-[14px] px-[25px] rounded-[10px] opacity-75 text-center text-[20px] font-black leading-[14px] font-futuraLight">
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