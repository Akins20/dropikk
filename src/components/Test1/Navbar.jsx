import Link from "next/link";
import { FaTruck } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="flex items-center text-2xl font-bold text-blue-600"
        >
          <FaTruck className="mr-2" /> Dropikk
        </Link>
        <div>
          <Link
            href="#features"
            className="mx-4 text-gray-700 hover:text-blue-600"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="mx-4 text-gray-700 hover:text-blue-600"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="mx-4 text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
