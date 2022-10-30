import features from "../collections/feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div className=" bg-gradient-to-b from-[#000000] to-[#000000] via-[#4D1B26] py-16 px-[2.3rem]">
      <div className="text-center text-white">
        <h1 className="text-3xl mb-5">Features</h1>
        <p>
          We are constantly working to bring new updates and features to Playo,
          such as:
        </p>
      </div>
      <div className="py-16 space-y-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center justify-center text-center"
          >
            <img src={feature.imgUrl} alt="" className="mb-8" />
            <h1 className="text-white text-2xl mb-2">{feature.title}</h1>
            <p className="text-[#888384]">{feature.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-8">And so much more...</h1>
        <p className="mb-16">
          Earn achievements, read reviews, explore custom recommendations, and
          more.
        </p>
        <button className="px-10 py-3 border-2 bg-transparent border-white text-lg flex items-center justify-center rounded-lg hover:text-[#FF14BA] hover:border-[#FF14BA] transition-colors duration-200">
          Learn More <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Features;
