import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2A0D18] to-[#0c0505] via-[#4D1B26] py-16 px-2"
    >
      <div className="flex flex-col items-center justify-center mb-5">
        <img src="/img/spiderMan.png" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center text-center text-white ">
        <p className="text-5xl px-6 font-GothamBold mb-5">
          Play, Improve & Win
        </p>
        <p className="text-lg mb-10">
          Playo is the ultimate destination for playing, discussing and creating
          game.
        </p>
        <div className="flex flex-col flex-wrap items-center justify-center">
          <div className="mb-5">
            <p className="mb-2 relative">
              Online
              <span className="w-[8px] h-[8px] rounded-full bg-[#448FFF] inline-block absolute right-18 top-0"></span>
            </p>

            <p className="text-4xl font-GothamBold">19,302,927</p>
          </div>
          <div className="mb-10">
            <p className="mb-2 relative">
              Playing Now
              <span className="w-[8px] h-[8px] rounded-full bg-[#92FF88] inline-block absolute right-8 -top-1"></span>
            </p>

            <p className="text-4xl font-GothamBold">4,831,224</p>
          </div>
        </div>
        <button className="px-10 py-3 border-2 bg-transparent border-white text-lg mb-10 flex items-center justify-center rounded-lg hover:text-[#FF14BA] hover:border-[#FF14BA] transition-colors duration-200">
          Learn More <FontAwesomeIcon className="ml-3" icon={faArrowDown} />
        </button>
      </div>
    </div>
  );
};

export default Home;
