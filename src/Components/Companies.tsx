const Companies = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-white border-b-2 border-black">
      <div className="flex items-center">
        <img
          src="/yellow-vector.png"
          alt="Yellow Vector"
          className="w-12 h-12"
        />
        <h2 className="text-2xl font-bold text-black text-center mt-12">
          TRUSTED BY COMPANIES <br />
          <span className="text-xl font-extrabold text-black ml-2 relative inline-block">
            ALL OVER THE{" "}
            <span className="inline-block relative">
              WORLD
              <img
                src="/Line.png"
                alt=""
                className="absolute left-0 top-full mt-1 w-full"
              />
            </span>
          </span>{" "}
        </h2>
      </div>
      <div className="flex space-x-16 mt-16">
        <img src="/Airbnb.png" alt="Airbnb"/>
        <img src="/Nasa.png" alt="NASA"/>
        <img src="/Uber.png" alt="Uber" />
        <img src="/NYT.png" alt="NYT"/>
        <img src="/Etsy.png" alt="Etsy"/>
      </div>
    </div>
  );
};

export default Companies;
