import { useState } from 'react';
// eslint-disable-next-line no-undef

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
    <div className="bg-black flex justify-between items-center px-4 ">
      <div className="text-2xl font-bold ml-10">
        <img
          src={'image/logo.png'}
          alt="Company Logo"
          className="w-auto h-40 object-contain" // Set fixed size and maintain aspect ratio
        />
      </div>
      <nav className="flex justify-between items-center bg-black text-white p-4 rounded-full border border-transparent hover:border-gradient-to-r from-purple-500 to-cyan-500">
      <ul className="flex space-x-8 text-lg font-medium">
        <li>
          <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">How It Works</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Services</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
      <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg">
        Contact Us
      </button>
    </div>
  );
}

export default Navbar;
