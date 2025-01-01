import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-gray-400 text-white py-8">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo/Title */}
            <div className="mb-6 lg:mb-0">
              <h1 className="text-2xl font-bold">Blogify</h1>
              <p className="text-sm mt-2">Your daily dose of inspiration and knowledge.</p>
            </div>
  
            {/* Navigation Links */}
            <div className="mb-6 lg:mb-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="/about" className="hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-gray-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/niba-farooq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Image
                  src="/images/icon1.avif"
                  alt="Linkdin"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://github.com/Niba-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Image
                  src="/images/icon2.png"
                  alt="github"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
  
          
          <hr className="my-6 border-gray-700" />
  
          <div className="text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Blogify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  