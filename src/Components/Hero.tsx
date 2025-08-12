const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)] border-b-2 border-black">
      <div className="relative flex-1 bg-purple-900 text-white p-6 md:p-12 flex flex-col justify-center border-b-2 lg:border-r-2 border-black">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-6 animate-stagger-fade-in stagger-1">
          Great teamwork starts
          <br />{" "}
          <span className="font-bold text-4xl sm:text-5xl md:text-6xl">
            with a <span className="text-yellow-400">digital HQ</span>
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-light mb-6 md:mb-8 tracking-wider animate-stagger-fade-in stagger-2" style={{ animationDelay: '0.2s' }}>
          With all your people, tools and communication in <br className="hidden md:block" /> one place, you
          can work <span className="font-bold">faster</span> and{" "}
          <span className="font-bold">more flexibly</span> <br className="hidden md:block" /> than ever
          before.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-stagger-fade-in stagger-3">
          <button className="bg-black font-semibold text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            Email Signup
          </button>
          <button className="flex items-center justify-center space-x-2 bg-white font-semibold text-black px-6 py-2 md:px-8 md:py-3 rounded-lg border-2 border-black hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            <img src="/google-logo.png" alt="Google Logo" className="w-4 h-4" />
            <span>Google Signup</span>
          </button>
        </div>

        <img
          src="/feature-vector1.png" 
          alt="Bouncing Vector 1"
          className="lg:hidden absolute top-10 left-10 w-16 h-16 animate-bounce-around"
          style={{ animationDelay: '0s' }}
        />
        <img
          src="/feature-vector2.png" 
          alt="Bouncing Vector 2"
          className="lg:hidden absolute bottom-20 right-10 w-16 h-16 animate-bounce-around"
          style={{ animationDelay: '0.5s' }}
        />
        <img
          src="/feature-vector3.png" 
          alt="Bouncing Vector 3"
          className="lg:hidden absolute bottom-10 left-10 w-16 h-16 animate-bounce-around"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="hidden lg:flex flex-1 bg-yellow-400 items-center justify-center">
        <img
          src="/hero-right-side.png"
          alt="Teamwork Illustration"
          className="max-w-full h-auto animate-parallax"
          style={{ animationDelay: '0.4s' }}
        />
      </div>
    </div>  
  );
};

export default Hero;