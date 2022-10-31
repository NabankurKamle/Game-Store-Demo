import Brands from "./Brands";
import FooterBody from "./FooterBody";
import License from "./License";

const Footer = () => {
  return (
    <div className=" w-full bg-gradient-to-b from-[#3A2927] to-[#222222] via-[#272322] pt-16 px-4">
      <Brands />
      <FooterBody />
      <License />
    </div>
  );
};

export default Footer;
