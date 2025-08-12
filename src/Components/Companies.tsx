const Companies = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-white border-b-2 border-black">
      <div className="flex flex-col sm:flex-row items-center text-center">
        <img
          src="/yellow-vector.png"
          alt="Yellow Vector"
          className="w-12 h-12 animate-bounce animate-stagger-fade-in stagger-1 mb-4 sm:mb-0 sm:mr-4"
        />
        <h2 className="text-xl sm:text-2xl font-bold text-black animate-stagger-fade-in stagger-2">
          TRUSTED BY COMPANIES <br />
          <span className="text-lg sm:text-xl font-extrabold text-black relative inline-block">
            ALL OVER THE{" "}
            <span className="inline-block relative">
              WORLD
              <img
                src="/Line.png"
                alt="Decorative Line"
                className="absolute left-0 top-full mt-1 w-full"
              />
            </span>
          </span>{" "}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 mt-16 px-4">
        <img
          src="/Airbnb.png"
          alt="Airbnb"
          className="w-12 sm:w-20 h-auto hover:animate-scale-in hover:rotate-scale animate-stagger-fade-in stagger-1"
        />
        <img
          src="/Nasa.png"
          alt="NASA"
          className="w-12 sm:w-20 h-auto hover:animate-scale-in hover:rotate-scale animate-stagger-fade-in stagger-2"
        />
        <img
          src="/Uber.png"
          alt="Uber"
          className="w-12 sm:w-20 h-auto hover:animate-scale-in hover:rotate-scale animate-stagger-fade-in stagger-3"
        />
        <img
          src="/NYT.png"
          alt="NYT"
          className="w-12 sm:w-20 h-auto hover:animate-scale-in hover:rotate-scale animate-stagger-fade-in stagger-4"
        />
        <img
          src="/Etsy.png"
          alt="Etsy"
          className="w-12 sm:w-20 h-auto hover:animate-scale-in hover:rotate-scale animate-stagger-fade-in stagger-5"
        />
      </div>
    </div>
  );
};

export default Companies;
