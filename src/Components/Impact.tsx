const Impact = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden border-b-2 border-black">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Header Section with Floating Notifications */}
        <div className="text-center mb-16 relative">
          {/* Floating Notification Elements - positioned relative to header */}
          <img
            src="/notif-1.png"
            alt="Notification 1"
            className="absolute -top-8 left-0 z-50"
          />

          <img
            src="/notif-2.png"
            alt="Notification 2"
            className="absolute -top-8 right-0 z-50"
          />

          <img
            src="/notif-3.png"
            alt="Notification 3"
            className="absolute top-8 -left-8 z-50"
          />

          <img
            src="/notif-4.png"
            alt="Notification 4"
            className="absolute top-8 -right-8 z-50"
          />

          <img
            src="/notif-5.png"
            alt="Notification 5"
            className="absolute top-24 left-0 z-50"
          />

          <img
            src="/notif-6.png"
            alt="Notification 6"
            className="absolute top-24 right-0 z-50"
          />

          <h1 className="text-xl font-bold mb-4">
            Teams <span className="font-black text-2xl">large</span> and small
            rely on <span className="font-black text-2xl">Slack</span>
          </h1>
          <p className="text-base max-w-md mx-auto">
            Slack securely scales up to support collaboration at the world's
            biggest companies.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold">
              Meet Slack For Enterprise
            </button>
            <button className="border border-black text-black px-6 py-2 rounded-lg font-semibold">
              Talk to Sales
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16 max-w-3xl mx-auto pl-24">
          <div className="flex-1 max-w-xs">
            <div className="text-6xl font-bold text-yellow-500 mb-4">
              <img src="/85%.png" alt="85%" />
            </div>
            <p className="text-sm">
              of users say Slack has improved communication*
            </p>
          </div>

          <div className="flex-1 max-w-xs">
            <div className="text-6xl font-bold text-green-500 mb-4">
              <img src="/86%.png" alt="86%" />
            </div>
            <p className="text-sm">
              feel their ability to work remotely has improved*
            </p>
          </div>

          <div className="flex-1 max-w-xs">
            <div className="text-6xl font-bold text-blue-500 mb-4">
              <img src="/88%.png" alt="88%" />
            </div>
            <p className="text-sm">
              feel more connected to their <br />
              teams*
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative">
            <img
              src="/video-vector.png"
              className="absolute top-0 -left-10 z-0 object-contain"
              alt="Background image"
            />
            <img
              src="/Video.png"
              className="w-full h-96 z-10 relative"
              alt="Video thumbnail"
            />
          </div>
          <div className="space-y-4">
            <blockquote className="text-lg leading-relaxed">
              "We were able to create a large virtual network of employees that
              can communicate as though they are together. There was a lot of
              disruption in terms of where we worked, but in terms of how we
              worked—very little disruption."
            </blockquote>
            <div className="">
              <div className="font-bold text-lg">Mark Smith</div>
              <div className="">Senior Technical Product Manager, T-Mobile</div>
            </div>
            <button className="border-2 border-black px-6 py-2 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              See more Customer Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;