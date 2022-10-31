import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div className="text-white text-center border-b-2 border-[#55504F] pb-5">
      <h1 className="text-lg">Trusted by Global Game Platforms</h1>
      <ul className="flex flex-col justify-center items-center py-10 space-y-10">
        <li>
          <Link to="#">
            <img src="/img/platforms/riotLogo.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/img/platforms/streamLogo.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/img/platforms/epicLogo.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/img/platforms/xboxLogo.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/img/platforms/psLogo.png" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Brands;
