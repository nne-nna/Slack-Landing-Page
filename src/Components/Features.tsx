import { ExternalLink } from "lucide-react";

const Features = () => {
  return (
    <div className="flex flex-col items-center gap-6 bg-gray-200 py-16 px-6 max-w-full border-b-2 border-black">
      <div className="flex w-4/5 bg-white rounded-2xl overflow-hidden shadow-lg border-t-3 border-l-3 border-b-6 border-r-6 border-black">
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
      <div className="flex w-4/5 bg-white rounded-2xl overflow-hidden shadow-lg border-t-3 border-l-3 border-b-6 border-r-6 border-black">
        <div className="p-12 flex-1 flex items-center">
            <div className="w-full">
                <h2 className="text-xl font-bold text-black mb-4">
                    Choose how you want to work
                </h2>
                <p className="text-black text-sm tracking-wider">
                    In Slack, you&apos;ve got all the flexibility to work when, where
                    and how it&apos;s best for you. You can easily chat, send audio and
                    video clips, or hop on a huddle to talk things out live.
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
      <div className="flex w-4/5 bg-white rounded-2xl overflow-hidden shadow-lg border-t-3 border-l-3 border-b-6 border-r-6 border-black">
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
                With your other work apps connected to Slack, you can work faster by
                switching tabs less. And with powerful tools like Workflow Builder,
                you can automate away routine tasks.
          </p>
          <button className="mt-4 inline-flex items-center gap-2 border-2 border-black rounded-xl py-2 px-4 text-sm">
            Learn More about channels
            <ExternalLink className="w-4 h-4" />
            </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Features;