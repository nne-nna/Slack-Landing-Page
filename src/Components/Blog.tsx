import React from "react";
import { ChevronRight } from "lucide-react";

const Blog: React.FC = () => {
  return (
    <div
      className="py-16 px-4 bg-blend-overlay opacity-90 border-b-2 border-black"
      style={{
        backgroundColor: "#d0d0d0",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='2' fill='%23c5c3c6' opacity='0.4'/%3E%3Ccircle cx='45' cy='15' r='2' fill='%23c5c3c6' opacity='0.4'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%23c5c3c6' opacity='0.4'/%3E%3Ccircle cx='15' cy='45' r='2' fill='%23c5c3c6' opacity='0.4'/%3E%3Ccircle cx='45' cy='45' r='2' fill='%23c5c3c6' opacity='0.4'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 text-xl sm:text-2xl lg:text-3d text-3d animate-stagger-fade-in stagger-1">
          Take a <span className="text-yellow-400">deeper dive</span> into a new
          way to work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-yellow-400 rounded-3xl p-4 flex flex-col justify-between border-t-3 border-r-6 border-l-3 border-b-6 border-black animate-stagger-fade-in stagger-1">
            <div>
              <span className="text-sm font-medium mb-2 block">Collection</span>
              <h3 className="text-lg font-bold leading-tight">
                Slack as your Digital HQ
              </h3>
              <div className="flex justify-center my-6">
                <img
                  src="/blog1.png"
                  alt="Digital HQ Icon"
                  className="object-cover hover:rotate-scale"
                />
              </div>
            </div>

            <div className="flex items-center justify-end group cursor-pointer">
              <span className="text-sm font-bold mr-1 transition-transform duration-200 group-hover:scale-105 group-hover:text-gray-700">See All</span>
              <ChevronRight className="w-4 h-4 font-bold transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-sm border-t-3 border-r-6 border-l-3 border-b-6 border-black flex flex-col justify-between animate-stagger-fade-in stagger-2">
            <div>
              <div className="mb-4 h-32 rounded-2xl overflow-hidden">
                <img
                  src="/blog2.png"
                  alt="Building Digital HQ"
                  className="w-full h-full object-cover hover:rotate-scale"
                />
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium mb-2 block">Resource</span>
                <h3 className="text-base font-semibold text-gray-900 leading-tight">
                  See how others are building their digital HQ
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-end group cursor-pointer">
              <span className="text-sm font-bold mr-1 transition-transform duration-200 group-hover:scale-105 group-hover:text-gray-700">Read More</span>
              <ChevronRight className="w-4 h-4 font-bold transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-sm border-t-3 border-r-6 border-l-3 border-b-6 border-black flex flex-col justify-between animate-stagger-fade-in stagger-3">
            <div>
              <div className="mb-4 h-32 rounded-2xl overflow-hidden">
                <img
                  src="/blog3.png"
                  alt="Win the battle for talent"
                  className="w-full h-full object-cover hover:rotate-scale"
                />
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium mb-2 block">Webinar</span>
                <h3 className="text-base font-semibold text-gray-900 leading-tight">
                  Win the battle for talent with a digital HQ
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-end group cursor-pointer">
              <span className="text-sm font-bold mr-1 transition-transform duration-200 group-hover:scale-105 group-hover:text-gray-700">Read More</span>
              <ChevronRight className="w-4 h-4 font-bold transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-sm border-t-3 border-r-6 border-l-3 border-b-6 border-black flex flex-col justify-between animate-stagger-fade-in stagger-4">
            <div>
              <div className="mb-4 h-32 rounded-2xl overflow-hidden">
                <img
                  src="/blog4.png"
                  alt="Future of working"
                  className="w-full h-full object-cover hover:rotate-scale"
                />
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium mb-2 block">E-book</span>
                <h3 className="text-base font-semibold text-gray-900 leading-tight">
                  Reinventing work: New imperatives for the future of working
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-end group cursor-pointer">
              <span className="text-sm font-bold mr-1 transition-transform duration-200 group-hover:scale-105 group-hover:text-gray-700">Read More</span>
              <ChevronRight className="w-4 h-4 font-bold transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;