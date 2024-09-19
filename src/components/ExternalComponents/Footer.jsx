
function Footer() {
 

  return (
    <div className="bg-black text-white py-8 text-center">
    <div className="text-lg">© 2022 DOML. All rights reserved.</div>
    <ul className="flex justify-center space-x-8 mt-4">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">How It Works</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
    <div className="mt-4 space-x-4">{/* Social Media Icons here */}</div>
  </div>
  );
}

export default Footer;
