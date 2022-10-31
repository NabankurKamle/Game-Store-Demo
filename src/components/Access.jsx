import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Access = () => {
  return (
    <div className="">
      <div className="bg-black py-10">
        <ul className="flex flex-wrap items-center justify-center ">
          <li className="px-8 py-2 text-xl  rounded-full bg-white text-black mb-3 mr-3">
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=""
              to="access"
            >
              Access
            </Link>
          </li>
          <li className="px-8 py-2 text-xl rounded-full bg-white text-black mb-3 mr-3">
            <Link
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className=""
              to="community"
            >
              Community
            </Link>
          </li>
          <li className="px-8 py-2 text-xl rounded-full bg-white text-black mb-3 mr-3">
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=""
              to="features"
            >
              Features
            </Link>
          </li>
          <li className="px-8 py-2 text-xl rounded-full bg-white text-black mb-3 mr-3">
            <Link
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              className=""
              to="games"
            >
              Games
            </Link>
          </li>
        </ul>
      </div>
      <div
        id="access"
        className=" bg-gradient-to-b from-[#000000] to-[#000000] via-[#4D1B26] py-16 px-2 relative overflow-hidden z-0"
      >
        <div className="flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] opacity-50 z-[5] h-[65rem] w-[65rem] border-[3px] border-[#663945] ">
          <div className="flex items-center justify-center h-[40rem] w-[40rem] border-[3px] border-[#663945] rounded-[50%]">
            <div className="flex items-center justify-center h-[15rem] w-[15rem] border-[3px] border-[#663945] rounded-[50%]"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-16 mb-10 relative block z-10">
            <img
              className="h-full absolute top-0 left-8"
              src="/img/games/game6.png"
              alt="Game"
            />
          </div>
          <div className="h-[4.5rem] mb-10 relative">
            <img
              className="h-full absolute top-0 right-10"
              src="/img/games/game2.png"
              alt="Game"
            />
          </div>
          <div className="h-14 mb-10 relative z-10">
            <img
              className="h-full absolute top-0 left-8"
              src="/img/games/game5.png"
              alt="Game"
            />
          </div>
          <div className="h-12 mb-10 relative">
            <img
              className="h-full absolute top-0 right-6"
              src="/img/games/game3.png"
              alt="Game"
            />
          </div>
        </div>
        <div className="text-center text-white px-2 py-5">
          <h1 className="text-3xl mb-10">Access Games Instantly</h1>
          <p className="mb-10">
            With nearly 30,000 games from AAA to indie and everything
            in-between. Enjoy exclusive deals, automatic game updates, and other
            great perks.
          </p>
          <button className="w-full flex items-center justify-center mb-10 text-transparent bg-clip-text bg-gradient-to-r  from-[#FF17AF] to-[#FFA218] hover:text-white font-GothamBold text-lg">
            Browse the Store
            <FontAwesomeIcon
              className="ml-3 hidden md:block "
              icon={faArrowRight}
            />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="h-12 mb-10 relative block">
            <img
              className="h-full absolute top-0 right-8"
              src="/img/games/game7.png"
              alt="Game"
            />
          </div>
          <div className="h-[4.5rem] mb-10 relative z-10">
            <img
              className="h-full absolute top-0 left-12"
              src="/img/games/game1.png"
              alt="Game"
            />
          </div>
          <div className="h-12 mb-10 relative">
            <img
              className="h-full absolute top-0 right-12"
              src="/img/games/game8.png"
              alt="Game"
            />
          </div>
          <div className="h-14 relative z-10">
            <img
              className="h-full absolute top-0 left-20"
              src="/img/games/game3.png"
              alt="Game"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
