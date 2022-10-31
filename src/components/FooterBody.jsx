import { Link } from "react-router-dom";

const FooterBody = () => {
  return (
    <div className="mt-16 pb-10">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center space-x-5 mb-5">
          <img src="/img/logo.png" alt="" />
          <h1 className="text-3xl text-white">Playo</h1>
        </div>
        <p className="text-white">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center pt-10">
        <div className="mb-5">
          <h1 className="text-white mb-3 text-lg">Games</h1>
          <ul className="flex flex-col space-y-2 text-[#A2AFAF] ">
            <li className="hover:text-[#FF14BA]">
              <Link to="">Fifa 21</Link>
            </li>
            <li className="hover:text-[#FF14BA]">
              <Link to="">Warzone</Link>
            </li>
            <li className="hover:text-[#FF14BA]">
              <Link to="">Call of Duty</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white mb-3 text-lg">Categories</h1>
          <ul className="flex flex-col space-y-2 text-[#A2AFAF]">
            <li className="hover:text-[#FF14BA]">
              <Link to="">Hardware</Link>
            </li>
            <li className="hover:text-[#FF14BA]">
              <Link to="">Marchendise</Link>
            </li>
            <li className="hover:text-[#FF14BA]">
              <Link to="">Games</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="w-full relative flex justify-center items-center">
          <input
            className="w-[20rem] px-5 py-8 rounded-3xl bg-[#504E4D] text-sm outline-none mt-10"
            type="text"
            placeholder="Email"
          />
          <button className="bg-gradient-to-b from-[#FF01D4] to-[#FFB702] px-10 py-3 rounded-xl font-GothamBold text-lg relative top-5 -left-12">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterBody;
