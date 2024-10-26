
function Footer() {
 

  return (
<footer className="bg-black text-white py-6">
<div className="container mx-auto px-4">
  <div className="flex justify-between items-center">
    {/* Left Section: Logo */}
    <div
  className="flex justify-normal space-x-[50px] -m-24 ">
    <img
    src=".\image\logo.png" // Replace with the actual path to your logo
    alt="Logo"
    className="w-[130px] h-[137px] -mt-4" // Added -mt-6 to move the logo upward
  />
  </div>

    {/* Center Section: Links */}
    <div className="flex space-x-14 text-[18px] font-MontserratRegular -ml-40 mt-10 ">
            <a href="/" className="group text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500">Home</a>
            <a href="/about" className="group text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500">About</a>
            <a href="/howitworks" className="group text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500">How It Works</a>
            <a href="#service" className="group text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500">Services</a>
            <a href="/howitworks" className="group text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500">Contact</a>
          </div>
           
  {/* <!-- Social Icons-->
        <!-- For more icon options, visit https://fontawesome.com/icons?d=gallery&p=2&s=brands--> */}
     <div className="social-icons -mr-28">
      <div className="flex flex-wrap justify-center gap-2 mt-3 ">
        <a
          className="btn btn-dark flex justify-center items-center"
          href="https://www.linkedin.com/company/tree-information-technology/"
        >
          <img src="./image/linkidinicon.png" className="w-12 h-12" alt="LinkedIn Icon" />
        </a>
        <a
          className="btn btn-dark flex justify-center items-center"
          href="https://www.instagram.com/tree_information_technology?igsh=bGwzamN5ZHNqb2ls"
        >
          <img src="./image/instaicon.png" className="w-12 h-12" alt="Instagram Icon" />
        </a>
        <a
          className="btn btn-dark flex justify-center items-center"
          href="https://www.facebook.com/treeinformationtechnologycompany?mibextid=8HI2vyzhxhZ0rFJs"
        >
          <img src="./image/facebookicon.png" className="w-12 h-12" alt="Facebook Icon" />
        </a>
      </div>
    </div>
      </div>
    
  {/* Bottom Section */}
  <div className="flex justify-between items-center mt-2 pt-4 w-[1200px] -ml-24" 
          style={{
            borderTop: '1px solid',
            borderImageSource: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
            borderImageSlice: 1
          }}>
    <p className="text-[19.41px] font-montserratLight font-[400] leading-[23.67px]">© tree.femme 2024 , All rights reserved.</p>
    <a href="#" className="text-[19.41px] font-montserratLight font-[400] leading-[23.67px]">
      Terms of Use & Privacy Policy
    </a>
  </div>
</div>
</footer>
  );
}

export default Footer;
