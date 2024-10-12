import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-inherit-800 text-gray-800 py-8">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Dropikk. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaTwitter />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
