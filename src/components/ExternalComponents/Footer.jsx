
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
    className="w-[130px] h-[137px] mb-12" // Added -mt-6 to move the logo upward
  />
  </div>

    {/* Center Section: Links */}
    <div className="flex space-x-8 text-lg -ml-72">
            <a href="#" className="hover:text-pink-500">Home</a>
            <a href="#" className="hover:text-pink-500">About</a>
            <a href="#" className="hover:text-pink-500">How It Works</a>
            <a href="#" className="hover:text-pink-500">Services</a>
            <a href="#" className="hover:text-pink-500">Contact</a>
          </div>
           
  {/* <!-- Social Icons-->
        <!-- For more icon options, visit https://fontawesome.com/icons?d=gallery&p=2&s=brands--> */}
        <div class="social-icons">
            <div class="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                <a class="btn btn-dark m-3" href="https://www.instagram.com/tree_information_technology?igsh=bGwzamN5ZHNqb2ls"><i class="fab fa-instagram"></i></a>
                <a class="btn btn-dark m-3" href="https://www.facebook.com/treeinformationtechnologycompany?mibextid=8HI2vyzhxhZ0rFJs"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark m-3" href="mailto:tree_india@icloud.com"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
 
        </div>
 

  {/* Bottom Section */}
  <div className="flex justify-between items-center mt-6 pt-4 w-[1200px] -ml-24" 
          style={{
            borderTop: '1px solid',
            borderImageSource: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
            borderImageSlice: 1
          }}>
    <p className="text-sm">&copy; 2022 DOML. All rights reserved.</p>
    <a href="#" className="text-sm hover:text-pink-500">
      Terms of Use & Privacy Policy
    </a>
  </div>
</div>
</footer>
  );
}

export default Footer;
