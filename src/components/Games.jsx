import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Games = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#000000] via-[#130609] py-10 px-4">
      <div className="text-center text-white">
        <h1 className="text-3xl mb-2">Popular Games</h1>
        <button className="w-full flex items-center justify-center mb-10 text-transparent bg-clip-text bg-gradient-to-r  from-[#FF17AF] to-[#FFA218] hover:text-white font-GothamBold text-lg">
          View All
          <FontAwesomeIcon
            className="ml-3 hidden md:block "
            icon={faArrowRight}
          />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="h-[80vh] bg-gradient-to-tr from-[#3A2627] to-[#3A2627] via-[#4B2D2F] w-full rounded-3xl text-white px-4 py-8 mt-10 flex flex-col justify-end items-start relative">
          <div className="h-[15rem] absolute right-0 -top-12">
            <img
              className="h-full w-full"
              src="/img/instantGames/valo.png"
              alt=""
            />
          </div>
          <p className="mb-3">18 million players</p>
          <img className="mb-5" src="/img/instantGames/valoLogo.png" alt="" />
          <p>
            Tactical shooter with 5v5 matches and unique characters. Free Access
          </p>
          <div className="w-full relative flex justify-start items-center">
            <input
              className="w-[13rem] px-5 py-6 rounded-3xl bg-[#675354] text-sm outline-none mt-10"
              type="text"
              placeholder="Free Access"
            />
            <button className="bg-gradient-to-b from-[#FF01D4] to-[#FFB702] px-10 py-3 rounded-xl font-GothamBold text-lg relative top-5 -left-12">
              Play
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="h-[35vh] bg-gradient-to-tr from-[#3A2627] to-[#3A2627] via-[#4B2D2F] w-full rounded-3xl text-white px-4 py-8 mt-10 flex flex-col justify-end items-start relative">
            <div className="absolute -top-3">
              <img src="/img/instantGames/forza.png" alt="" />
            </div>
            <div className="flex items-center justify-between w-full">
              <img src="/img/instantGames/forzaLogo.png" alt="" />
              <button className="px-5 py-2 border-2 border-white text-lg font-GothamBold rounded-xl">
                Store
              </button>
            </div>
          </div>
          <div className="h-[35vh] bg-gradient-to-tr from-[#3A2627] to-[#3A2627] via-[#4B2D2F] w-full rounded-3xl text-white px-4 py-8 mt-10 items-start relative">
            <div className="absolute -bottom-[0.45rem] right-0">
              <img src="/img/instantGames/cod.png" alt="" />
            </div>
            <div className="flex flex-col items-start justify-between h-full">
              <img src="/img/instantGames/codLogo.png" alt="" />
              <button className="px-5 py-2 border-2 border-white text-lg font-GothamBold rounded-xl">
                Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
