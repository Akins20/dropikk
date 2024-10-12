import Link from "next/link";
import { FaTruck, FaPhone, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-3xl font-bold">Dropikk</div>
      <ul className="flex space-x-6">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
      <div className="space-x-4 flex items-center">
        <FaPhone />
        <Link href="#" className="bg-white text-blue-600 px-4 py-2 rounded-lg">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
