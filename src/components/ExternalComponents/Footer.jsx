
function Footer() {
 

  return (
<footer className="bg-black text-white py-6">
<div className="container mx-auto text-center">
   
 {/* Logo and Navigation */}
 

     {/* Navigation Links */}
     <div
  className="flex justify-normal space-x-[50px] -m-24 ">
    <img
    src="./image/logo.png" // Replace with the actual path to your logo
    alt="Logo"
    className="w-[130px] h-[137px] mb-24" // Added -mt-6 to move the logo upward
  />
  <a href="/" className="hover:text-gray-400">Home</a>
  <a href="/about" className="hover:text-gray-400">About</a>
  <a href="/howitworks" className="hover:text-gray-400">How It Works</a>
  <a href="/services" className="hover:text-gray-400">Services</a>
  <a href="/contact" className="hover:text-gray-400">Contact</a>
</div>
</div>

{/* Gradient Separator */}
<div
  className="border-t-2 -mt-28 mx-12" // Set the width and center it
  style={{
    borderImage: 
      "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%) 1"
  }}>
</div>

        {/* Copyright */}
        <div className="flex justify-between items-center p-4">
  <div className="p-4">
      <p
        className="text-sm font-montserratLight"
        style={{
          fontSize: '19.41px',
          fontWeight: 400,
          lineHeight: '23.67px',
          textAlign: 'left',
        }}
      >
        Copyright &copy; 2022 DOML.All rights reserved.
      </p>
      </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
        <a class="btn btn-dark m-3" href="https://wa.me/9074429360"><i class="fa-brands fa-whatsapp"></i></a>
</div>


        {/* Terms & Privacy */}
        <div className="-p-2">
      <a
        href="#terms"
        className="text-sm font-montserratLight text-white hover:text-gray-300"
        style={{
          fontSize: '19.41px',
          fontWeight: 400,
          lineHeight: '23.67px',
          textAlign: 'right',
          display: 'block', // Ensure the text alignment is applied properly
        }}
      >
        Terms of Use & Privacy Policy
      </a>
    </div>
      </div>
      
  
</footer>

  );
}

export default Footer;
