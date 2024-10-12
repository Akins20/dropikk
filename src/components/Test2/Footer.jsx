import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-8">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Dropikk</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms of Service</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center space-x-6 mt-6">
        <FaFacebook className="text-2xl" />
        <FaTwitter className="text-2xl" />
        <FaInstagram className="text-2xl" />
      </div>
    </footer>
  );
};

export default Footer;
