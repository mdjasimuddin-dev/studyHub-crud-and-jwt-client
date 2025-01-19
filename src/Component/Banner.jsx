import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className={`bg-[url("https://i.postimg.cc/vH2jg0tL/pexels-pixabay-207636.jpg")] flex justify-center bg-cover p-2 w-full md:h-[500px]`}
    >
      <div className="flex flex-col justify-center items-center md:w-1/2 space-y-3">
        <h1 className="text-6xl lg:text-7xl text-white text-center font-bold">
          Welcome to <span className="text-orange-600">Study</span>Hub
        </h1>

        <p className="text-white md:text-center p-2 text-xl mx-auto text-justify">
          where learning together is easier than ever! With StudyHub Online
          Group Study, learning is no longer a solo journey. Experience the
          power of collective knowledge and stay motivated by studying with a
          supportive community.
        </p>

        <Link
          to="/assignments"
          className="btn w-full md:w-auto bg-orange-500 text-white"
        >
          View Assignment
        </Link>
      </div>
    </div>
  );
};

export default Banner;
