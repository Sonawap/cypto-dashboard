import { Divider } from "@/components/Elements";
import { Nav } from "../Nav";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex gap-5 justify-between py-3 pr-8 pl-4 w-full text-sm font-medium text-gray-400 border-b border-solid bg-bgDark-800 border-neutral-700 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center my-auto text-center leading-[114%] max-md:flex-wrap">
        <Link 
          to='/'
        >
          Exchange
        </Link>
        <Divider />
        <a 
          href="https://sonawap.codeitmi.ng/" tabIndex={0} target="_Blank"
        >
          Portfolio
        </a>
        <Divider />
        <a 
          href="https://sonawap.codeitmi.ng/" tabIndex={0} target="_Blank"
        >
          Copyright @sonawap 2024
        </a>
        <Nav />
      </div>
    </div>
  );
}


