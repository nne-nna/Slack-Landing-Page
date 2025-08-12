import { useState, useRef } from "react";
import { Search, ChevronDown, Headset, Menu } from "lucide-react";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200); 
  };

  return (
    <nav className="bg-white border-b-2 border-black shadow-sm h-16">
      <div className="max-w-full mx-auto flex items-center justify-between h-full">
        <div className="flex items-center px-4">
          <img src="/Brand-Logo.png" alt="Slack" className="h-8 w-auto" />
          <div className="border-r-2 border-black pr-4 h-16"></div>

          <div className="hidden lg:flex items-center space-x-10 pl-4">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-black hover:text-gray-800 font-medium hover:underline-slide">
                Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-black rounded-lg shadow-lg z-50 animate-fade-in-up"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-4">
                    <div className="space-y-3">
                      <a
                        href="#"
                        className="block p-3 rounded-md hover:bg-gray-100 hover:lift"
                      >
                        <div className="font-semibold text-black">Slack</div>
                        <div className="text-sm text-black">
                          Transform the way your team works
                        </div>
                      </a>
                      <a
                        href="#"
                        className="block p-3 rounded-md hover:bg-gray-100 hover:lift"
                      >
                        <div className="font-semibold text-black">Slack AI</div>
                        <div className="text-sm text-black">
                          Harness the power of generative AI
                        </div>
                      </a>
                      <a
                        href="#"
                        className="block p-3 rounded-md hover:bg-gray-100 hover:lift"
                      >
                        <div className="font-semibold text-black">Slack Connect</div>
                        <div className="text-sm text-black">
                          Work with external partners
                        </div>
                      </a>
                      <a
                        href="#"
                        className="block p-3 rounded-md hover:bg-gray-100 hover:lift"
                      >
                        <div className="font-semibold text-black">Slack Huddles</div>
                        <div className="text-sm text-black">
                          Lightweight audio and video meetings
                        </div>
                      </a>
                    </div>
                    <div className="border-t border-black mt-4 pt-4">
                      <a
                        href="#"
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline-slide"
                      >
                        View all products →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-black hover:text-gray-800 font-medium hover:underline-slide"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 font-medium hover:underline-slide"
            >
              Enterprise
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 font-medium hover:underline-slide"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 font-medium hover:underline-slide"
            >
              Pricing
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-black hover:text-gray-800 flex items-center"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="hidden lg:flex space-x-4">
            <div className="border-l-2 border-black h-16"></div>
            <button className="text-black hover:text-gray-800 flex items-center hover:animate-bounce">
              <Search className="h-5 w-5" />
            </button>
            <div className="border-r-2 border-black h-16"></div>

            <button className="flex items-center text-black hover:text-gray-800 font-medium hover:underline-slide">
              <div className="w-4 h-4 mr-2 flex items-center justify-center">
                <Headset className="h-4 w-4 text-black" />
              </div>
              Talk To Sales
            </button>

            <button className="bg-black text-white px-4 font-medium hover:bg-gray-800 transition-colors hover:animate-scale-in">
              Login / Register
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-b-2 border-black shadow-sm absolute top-16 left-0 w-full z-50 animate-fade-in-up">
          <div className="px-6 py-4 space-y-4">
            {/* Products */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-black font-medium hover:text-gray-800 hover:underline-slide"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              >
                Products
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isMobileProductsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMobileProductsOpen && (
                <div className="mt-2 space-y-3">
                  <a
                    href="#"
                    className="block p-3 rounded-md hover:bg-gray-100 hover:lift"
                  >
                    <div className="font-semibold text-black">Slack</div>
                    <div className="text-sm text-black">
                      Transform the way your team works
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-3 rounded-md hover:bg-gray-100 hover:lift"
                  >
                    <div className="font-semibold text-black">Slack AI</div>
                    <div className="text-sm text-black">
                      Harness the power of generative AI
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-3 rounded-md hover:bg-gray-100 hover:lift"
                  >
                    <div className="font-semibold text-black">Slack Connect</div>
                    <div className="text-sm text-black">
                      Work with external partners
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-3 rounded-md hover:bg-gray-100 hover:lift"
                  >
                    <div className="font-semibold text-black">Slack Huddles</div>
                    <div className="text-sm text-black">
                      Lightweight audio and video meetings
                    </div>
                  </a>
                  <div className="border-t border-black mt-2 pt-2">
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline-slide block"
                    >
                      View all products →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="block text-black hover:text-gray-800 font-medium hover:underline-slide py-2"
            >
              Solutions
            </a>
            <a
              href="#"
              className="block text-black hover:text-gray-800 font-medium hover:underline-slide py-2"
            >
              Enterprise
            </a>
            <a
              href="#"
              className="block text-black hover:text-gray-800 font-medium hover:underline-slide py-2"
            >
              Resources
            </a>
            <a
              href="#"
              className="block text-black hover:text-gray-800 font-medium hover:underline-slide py-2"
            >
              Pricing
            </a>

            <div className="border-t-2 border-black pt-4">
              <button className="flex items-center text-black hover:text-gray-800 hover:animate-bounce w-full justify-start py-2">
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
              <button className="flex items-center text-black hover:text-gray-800 font-medium hover:underline-slide w-full justify-start py-2">
                <Headset className="h-4 w-4 mr-2" />
                Talk To Sales
              </button>
              <button className="bg-black text-white px-4 py-2 font-medium hover:bg-gray-800 transition-colors hover:animate-scale-in w-full mt-2">
                Login / Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;