import { useState } from "react";
import { Search, ChevronDown, Headset } from "lucide-react";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-black shadow-sm h-16">
      <div className="max-w-full mx-auto flex items-center justify-between h-full">
        <div className="flex items-center px-4">
          <img src="/Brand-Logo.png" alt="Slack" className="h-8 w-auto" />
          <div className="border-r-2 border-black pr-4 h-16"></div>

          <div className="hidden md:flex items-center space-x-10 pl-4">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center text-black hover:text-gray-800 font-medium">
                Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-black rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <div className="space-y-3">
                      <a
                        href="#"
                        className="block p-3 rounded-md hover:bg-gray-100"
                      >
                        <div className="font-semibold text-black">Slack</div>
                        <div className="text-sm text-black">
                          Transform the way your team works
                        </div>
                      </a>
                      <a
                        href="#"
                        className="block p-3 rounded-md hover:bg-gray-100"
                      >
                        <div className="font-semibold text-black">
                          Slack AI
                        </div>
                        <div className="text-sm text-black">
                          Harness the power of generative AI
                        </div>
                      </a>
                      <a
                        href="#"
                        className="block p-3 rounded-md hover:bg-gray-100"
                      >
                        <div className="font-semibold text-black">
                          Slack Connect
                        </div>
                        <div className="text-sm text-black">
                          Work with external partners
                        </div>
                      </a>
                      <a
                        href="#"
                        className="block p-3 rounded-md hover:bg-gray-100"
                      >
                        <div className="font-semibold text-black">
                          Slack Huddles
                        </div>
                        <div className="text-sm text-black">
                          Lightweight audio and video meetings
                        </div>
                      </a>
                    </div>
                    <div className="border-t border-black mt-4 pt-4">
                      <a
                        href="#"
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View all products →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            <a
              href="#"
              className="text-black hover:text-gray-800 font-medium"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 font-medium"
            >
              Enterprise
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 font-medium"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 font-medium"
            >
              Pricing
            </a>
          </div>
        </div>

        {/* Right Side - Search and Buttons */}
        <div className="flex space-x-4">
          <div className="border-l-2 border-black h-16"></div>
          <button className="text-black hover:text-gray-800 flex items-center">
            <Search className="h-5 w-5" />
          </button>
          <div className="border-r-2 border-black h-16"></div>

          <button className="flex items-center text-black hover:text-gray-800 font-medium">
            <div className="w-4 h-4 mr-2 flex items-center justify-center">
              <Headset className="h-4 w-4 text-black" />
            </div>
            Talk To Sales
          </button>

          <button className="bg-black text-white px-4 font-medium hover:bg-gray-800 transition-colors">
            Login / Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;