const Hero = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] border-b-2 border-black">
      <div className="flex-1 bg-purple-900 text-white p-12 flex flex-col justify-center border-r-2 border-black">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Great teamwork starts
          <br />{" "}
          <span className="font-bold text-5xl md:text-6xl">
            with a <span className="text-yellow-400">digital HQ</span>
          </span>
        </h1>
        <p className="text-base md:text-lg font-light mb-8 tracking-wider">
          With all your people, tools and communication in <br /> one place, you
          can work <span className="font-bold">faster</span> and{" "}
          <span className="font-bold">more flexibly</span> <br /> than ever
          before.
        </p>
        <div className="flex gap-4">
          <button className="bg-black font-semibold text-white px-8 py-2 rounded-lg">
            Email Signup
          </button>
          <button className="flex items-center space-x-2 bg-white font-semibold text-black px-8 py-2 rounded-lg border-2 border-black">
            <img src="/google-logo.png" alt="Google Logo" className="w-4 h-4" />
            <span>Google Signup</span>
          </button>
        </div>
      </div>
      <div className="flex-1 bg-amber-500 flex items-center justify-center">
        <img
          src="/hero-right-side.png"
          alt="Teamwork Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
