import { useState } from 'react';

function Navbar() {
  const [gradient, setGradient] = useState('bg-gradient-to-r from-purple-600 to-cyan-400');

  // Function to change gradient dynamically
  const changeGradient = (text) => {
    let newGradient;
    switch (text) {
      case 'Home':
        newGradient = 'bg-gradient-to-r from-purple-600 to-cyan-400';
        break;
      case 'About':
        newGradient = 'bg-gradient-to-r from-orange-500 to-yellow-400';
        break;
      case 'How It Works':
        newGradient = 'bg-gradient-to-r from-green-500 to-green-700';
        break;
      case 'Services':
        newGradient = 'bg-gradient-to-r from-blue-500 to-blue-800';
        break;
      case 'Contact':
        newGradient = 'bg-gradient-to-r from-purple-700 to-purple-900';
        break;
      default:
        newGradient = 'bg-gradient-to-r from-purple-600 to-cyan-400'; // Default gradient
    }
    setGradient(newGradient);
  };

  return (
    <div className="bg-black flex justify-between items-center px-4 -ml-5 ">
      <div className="text-2xl font-bold -ml-5">
        <img
          src={'image/logo.png'}
          alt="Company Logo"
          className="w-auto h-40 object-contain" // Set fixed size and maintain aspect ratio
        />
      </div>
      <div
  className="p-[1px] w-[625px] h-[43px] rounded-[20px] mr-60"
  style={{
    background: "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
  }}
>
  <nav
    className="flex justify-normal items-center p-[15px] bg-black text-white w-full h-full rounded-[19px]"
    style={{
      backgroundClip: "padding-box", // Ensures inner content isn't affected by gradient
    }}
  >
  <ul className="flex space-x-24  ml-2 font-MontserratRegular font-[700] text-[18px] leading-[27px]">
    <li>
      <a href="/" className="group text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500">Home</a>
    </li>
    <li>
      <a href="/about" className="group text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500">About</a>
    </li>
    <li>
      <a href="/howitworks" className="group text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500">How It Works</a>
    </li>
    <li>
      <a href="#service" className="group text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500">Services</a>
    </li>
  </ul>
</nav>
</div>
    <a href="/howitworks" className="group text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500">
    <button className="px-4 py-2 w-[124px] h-[42px] bg-[linear-gradient(225deg,_#6675F7_0%,_#57007B_100%)] hover:bg-[linear-gradient(225deg,_#7E8BFF_0%,_#6A008B_100%)] text-white font-[600] font-MontserratRegular text-[14px] leading-[14px] rounded-lg mr-16">
    Contact Us
</button>

      </a>
    </div>
  );
}

export default Navbar;
