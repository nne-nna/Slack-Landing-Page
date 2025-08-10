import { ExternalLink } from "lucide-react";

const Features = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 bg-blend-overlay opacity-90 py-16 px-6 max-w-full border-b-2 border-black relative"
      style={{
        backgroundColor: "#d0d0d0",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='40' viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,5 Q25,0 50,5 T100,5' stroke='%23c5c3c6' stroke-width='1' fill='none' opacity='0.6'/%3E%3Cpath d='M0,15 Q25,10 50,15 T100,15' stroke='%23c5c3c6' stroke-width='1' fill='none' opacity='0.6'/%3E%3Cpath d='M0,25 Q25,20 50,25 T100,25' stroke='%23c5c3c6' stroke-width='1' fill='none' opacity='0.6'/%3E%3Cpath d='M0,35 Q25,30 50,35 T100,35' stroke='%23c5c3c6' stroke-width='1' fill='none' opacity='0.6'/%3E%3C/svg%3E")`,
      }}
    >
      {/* First Feature Card with Vector on Bottom Right */}
      <div className="relative w-4/5">
        <div className="flex bg-white rounded-2xl overflow-hidden shadow-lg border-t-3 border-l-3 border-b-6 border-r-6 border-black">
          <div className="py-12 pr-12 flex-1">
            <img
              src="feature-frame-1.png"
              alt="Left Image 1"
              className="max-w-full h-auto"
            />
          </div>
          <div className="border-r-2 border-black my-4"></div>
          <div className="p-12 flex-1 flex items-center">
            <div className="w-full">
              <h2 className="text-xl font-bold text-black mb-4">
                Bring Your Team Together
              </h2>
              <p className="text-black text-sm tracking-wider">
                At the heart of Slack are channels: organized spaces for everyone
                and everything you need for work. In channels, it&apos;s easier to
                connect across departments, offices, time zones and even other
                companies.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 border-2 border-black rounded-xl py-2 px-4 text-sm">
                More about channels
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Vector element for first card - bottom right */}
        <div className="absolute bottom-0 -right-12 w-20 h-20 z-10">
          <img
            src="feature-vector1.png"
            alt="Decorative vector 1"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Second Feature Card with Vector on Bottom Left */}
      <div className="relative w-4/5">
        <div className="flex bg-white rounded-2xl overflow-hidden shadow-lg border-t-3 border-l-3 border-b-6 border-r-6 border-black">
          <div className="flex-1 flex items-center">
            <div className="w-full p-12">
              <h2 className="text-xl font-bold text-black mb-4">
                Choose how you want to work
              </h2>
              <p className="text-black text-sm tracking-wider">
                In Slack, you&apos;ve got all the flexibility to work when, where
                and how it&apos;s best for you. You can easily chat, send audio
                and video clips, or hop on a huddle to talk things out live.
                <br />
              </p>
              <button className="mt-4 inline-flex items-center gap-2 border-2 border-black rounded-xl py-2 px-4 text-sm">
                Flexible Communication
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="border-r-2 border-black my-4"></div>
          <div className="py-12 pl-12 flex-1">
            <img
              src="feature-frame-2.png"
              alt="Right Image 2"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        {/* Vector element for second card - bottom left */}
        <div className="absolute bottom-0 -left-12 w-20 h-20 z-10">
          <img
            src="feature-vector2.png"
            alt="Decorative vector 2"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Third Feature Card with Vector on Bottom Right */}
      <div className="relative w-4/5">
        <div className="flex bg-white rounded-2xl overflow-hidden shadow-lg border-t-3 border-l-3 border-b-6 border-r-6 border-black">
          <div className="py-12 pr-12 flex-1">
            <img
              src="feature-frame-3.png"
              alt="Left Image 3"
              className="max-w-full h-auto"
            />
          </div>
          <div className="border-r-2 border-black my-4"></div>
          <div className="p-12 flex-1 flex items-center">
            <div className="w-full">
              <h2 className="text-xl font-bold text-black mb-4">
                Move faster with your tools in one place
              </h2>
              <p className="text-black text-sm tracking-wider">
                With your other work apps connected to Slack, you can work faster
                by switching tabs less. And with powerful tools like Workflow
                Builder, you can automate away routine tasks.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 border-2 border-black rounded-xl py-2 px-4 text-sm">
                Learn More about channels
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Vector element for third card - bottom right */}
        <div className="absolute bottom-0 -right-14 w-20 h-20 z-10">
          <img
            src="feature-vector3.png"
            alt="Decorative vector 3"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;