import communities from "../collections/community";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Community = () => {
  const [activeCommunityId, setActiveCommunityId] = useState(1);

  const handleCommunity = (id) => {
    setActiveCommunityId(id);
  };

  return (
    <div className=" bg-black px-4">
      <div className="h-full w-full bg-[#1B1B1B] rounded-xl">
        <div className="flex items-center justify-center">
          {communities.map((community) => (
            <div
              style={
                activeCommunityId === community.id
                  ? {
                      borderBottom: "2px solid transparent",
                      borderImage: "linear-gradient(to right,#FF17AF,#FFA218)",
                      borderImageSlice: 1,
                    }
                  : {}
              }
              onClick={() => handleCommunity(community.id)}
              className="flex items-center justify-center text-center text-white w-[50%] h-[8rem] px-3 border-b-2
              border-white cursor-pointer"
              key={community.id}
            >
              <h1 className="text-xl">{community.title}</h1>
            </div>
          ))}
        </div>
        <div>
          <div className=" w-full py-10 flex flex-col items-center justify-center gap-y-5 px-10">
            <div>
              <img src="/img/community/community1.png" alt="" />
            </div>
            <div>
              <img src="/img/community/community2.png" alt="" />
            </div>
            <div>
              <img src="/img/community/community3.png" alt="" />
            </div>
          </div>
          <div className="text-start text-white w-full pb-10 px-10">
            <h1 className="text-3xl mb-8">
              {communities[activeCommunityId - 1].heading}
            </h1>
            <p>{communities[activeCommunityId - 1].desc}</p>
            <button className="w-full flex items-center justify-start mt-10 text-transparent bg-clip-text bg-gradient-to-r  from-[#FF17AF] to-[#FFA218] hover:text-white font-GothamBold text-lg">
              {communities[activeCommunityId - 1].linkTitle}
              <FontAwesomeIcon
                className="ml-3 hidden md:block "
                icon={faArrowRight}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
