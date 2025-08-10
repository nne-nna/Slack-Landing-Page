import React from "react";
import { ChevronRight } from "lucide-react";

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-center mb-4 text-3d">
          Take a <span className="text-yellow-400">deeper dive</span> into a new
          way to work
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* First Card - Special Layout */}
          <div className="bg-yellow-400 rounded-3xl p-4 flex flex-col justify-between border-t-3 border-r-6 border-l-3 border-b-6 border-black">
            <div>
              <span className="text-sm font-medium mb-2 block">Collection</span>
              <h3 className="text-lg font-bold leading-tight">
                Slack as your Digital HQ
              </h3>
              {/* Center Image */}
              <div className="flex justify-center my-6">
                <img
                  src="/blog1.png"
                  alt="Digital HQ Icon"
                  className="object-cover"
                />
              </div>
            </div>

            {/* See All Link */}
            <div className="flex items-center justify-end">
              <span className="text-sm font-bold mr-1">See All</span>
              <ChevronRight className="w-4 h-4 font-bold" />
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-3xl p-4 shadow-sm border-t-3 border-r-6 border-l-3 border-b-6 border-black flex flex-col justify-between">
            <div>
              {/* Image */}
              <div className="mb-4 h-32 rounded-2xl overflow-hidden">
                <img
                  src="/blog2.png"
                  alt="Building Digital HQ"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium mb-2 block">Resource</span>
                <h3 className="text-base font-semibold text-gray-900 leading-tight">
                  See how others are building their digital HQ
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <span className="text-sm font-bold mr-1">Read More</span>
              <ChevronRight className="w-4 h-4 font-bold" />
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white rounded-3xl p-4 shadow-sm border-t-4 border-r-6 border-l-3 border-b-6 border-black flex flex-col justify-between">
            <div>
              {/* Image */}
              <div className="mb-4 h-32 rounded-2xl overflow-hidden">
                <img
                  src="/blog3.png"
                  alt="Win the battle for talent"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium mb-2 block">Webinar</span>
                <h3 className="text-base font-semibold text-gray-900 leading-tight">
                  Win the battle for talent with a digital HQ
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <span className="text-sm font-bold mr-1">Read More</span>
              <ChevronRight className="w-4 h-4 font-bold" />
            </div>
          </div>

          {/* Fourth Card */}
          <div className="bg-white rounded-3xl p-4 shadow-sm border-t-3 border-r-6 border-l-3 border-b-6 border-black flex flex-col justify-between">
            <div>
              {/* Image */}
              <div className="mb-4 h-32 rounded-2xl overflow-hidden">
                <img
                  src="/blog4.png"
                  alt="Future of working"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium mb-2 block">E-book</span>
                <h3 className="text-base font-semibold text-gray-900 leading-tight">
                  Reinventing work: New imperatives for the future of working
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <span className="text-sm font-bold mr-1">Read More</span>
              <ChevronRight className="w-4 h-4 font-bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
