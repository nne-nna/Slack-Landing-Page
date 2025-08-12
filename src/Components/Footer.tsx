import { ChevronDown, CloudUpload, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#74247a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1 flex justify-center sm:justify-start lg:justify-center">
            <img 
              src="/footer-logo.png" 
              alt="Slack Logo" 
              className="h-25 sm:h-25 w-auto mb-4 hover:animate-bounce animate-stagger-fade-in stagger-1"
            />
          </div>

          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 animate-fade-in-up animate-stagger-fade-in stagger-2">Why Slack?</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-3">Slack vs. Email</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-4">Channels</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-5">Engagement</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-6">Scale</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-7">Watch the Demo</a></li>
            </ul>
          </div>

          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 animate-fade-in-up animate-stagger-fade-in stagger-2">PRODUCT</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-3">Features</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-4">Integrations</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-5">Enterprise</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-6">Solutions</a></li>
            </ul>
          </div>

          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 animate-fade-in-up animate-stagger-fade-in stagger-2">Pricing</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-3">Plans</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-4">Paid vs. Free</a></li>
            </ul>
          </div>

          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 animate-fade-in-up animate-stagger-fade-in stagger-2">RESOURCES</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-3">Partners</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-4">Developers</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-5">Community</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-6">Apps</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-7">Blog</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-8">Help Center</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-9">Events</a></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 animate-fade-in-up animate-stagger-fade-in stagger-2">COMPANY</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-3">About Us</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-4">Leadership</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-5">Investor Relations</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-6">News</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-7">Media Kit</a></li>
              <li><a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-8">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#ffc700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-black font-medium text-sm order-2 lg:order-1">
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-2">
                <a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-1">Status</a>
                <a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-2">Privacy</a>
                <a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-3">Terms</a>
                <a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-4 hidden sm:inline">Cookie Preferences</a>
                <a href="#" className="hover:underline-slide animate-stagger-fade-in stagger-5">Contact Us</a>
              </div>
              <div className="flex items-center">
                <span><Globe className='w-4 h-4' /></span>
                <span className="ml-1 hover:underline-slide animate-stagger-fade-in stagger-6">Change Region</span>
                <ChevronDown className='w-4 h-4'/>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 order-1 lg:order-2">
              <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold border-t-1 border-r-3 border-b-3 border-l-1 hover:bg-gray-100 flex items-center hover:animate-scale-in hover:border-pulse animate-stagger-fade-in stagger-1">
                <span className="mr-2"><CloudUpload className='w-4 h-4'/></span>
                Download Slack
              </button>

              <div className="flex items-center space-x-3">
                <a href="#" className="text-black hover:text-gray-600 hover:animate-bounce hover:rotate-scale animate-stagger-fade-in stagger-2 hover:scale-110 transition-all duration-200">
                  <img src="/footer-social-icon1.png" alt="Twitter" className="h-5 w-5" />
                </a>
                <a href="#" className="text-black hover:text-gray-600 hover:animate-bounce hover:rotate-scale animate-stagger-fade-in stagger-3 hover:scale-110 transition-all duration-200">
                  <img src="/footer-social-icon2.png" alt="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="text-black hover:text-gray-600 hover:animate-bounce hover:rotate-scale animate-stagger-fade-in stagger-4 hover:scale-110 transition-all duration-200">
                  <img src="/footer-social-icon3.png" alt="YouTube" className="h-5 w-5" />
                </a>
                <a href="#" className="text-black hover:text-gray-600 hover:animate-bounce hover:rotate-scale animate-stagger-fade-in stagger-5 hover:scale-110 transition-all duration-200">
                  <img src="/footer-social-icon4.png" alt="LinkedIn" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer