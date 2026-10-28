import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const footerLinks = [
  { name: "About", link: "/about" },
  { name: "Bangalore", link: "/bangalore" },
  { name: "Contact", link: "/contact" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Disclaimer", link: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-white p-4 flex flex-col gap-4 relative border border-gray-200">

        <div className="lg:px-6">
          <p className="text-xs text-gray-700 leading-relaxed">
            <Link href="/disclaimer" className="font-medium hover:text-primary">Disclaimer</Link>: SobhaParkcity.com is an independent information website and is not the official website of Sobha Limited or Sobha Group. Project details—including prices, availability, plans, approvals and timelines—are provided for general reference, may change and should be confirmed through current official records and written project documents. Images may be illustrative. Nothing on this site is an offer, booking confirmation, legal advice or investment advice. Enquiry information is handled as described in our{" "}
            <Link href="/privacy-policy" className="font-medium hover:text-primary">Privacy Policy</Link>.
          </p>
        </div>

        {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Footer Links */}
          <nav aria-label="Footer" className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-700">
            {footerLinks.map((item) => (
              <Link key={item.link} href={item.link} className="hover:text-primary transition">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Media */}
          <div className="flex justify-center gap-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
            >
              <FaYoutube size={14} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs md:text-sm text-gray-600">
            © 2026 Sobha Park City. All rights reserved.
            <span className="hidden md:inline mx-2 text-gray-300">|</span>
            <br className="md:hidden" />
            Developed and Marketing by{" "}
            <a
              href="https://www.mndigitalagency.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              M2N Digital Agency
            </a>
          </p>
      </div>
    </footer>
  );
}