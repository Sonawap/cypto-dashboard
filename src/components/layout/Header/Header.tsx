import { Divider, Logo } from "@/components/Elements";
import { AvatarPanel } from "./Avater";
import { Nav } from "../Nav";

export const Header = () => {
  return (
    <div className="flex gap-5 justify-between py-3 pr-8 pl-4 w-full text-sm font-medium text-gray-400 border-b border-solid bg-bgDark-800 border-neutral-700 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center my-auto text-center leading-[114%] max-md:flex-wrap">
        <Logo />
        <Divider />
        <Nav />
      </div>
      <div className="flex gap-4 items-center leading-[171%]">
        <AvatarPanel />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/623167bce9745b32a9964a2c764bb2e4d9f24c37cdb35190ba48a3824eba24fb?"
          className="shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c9c2c29097279eb4451529e96aaf39786878937c6046b8edcfee01a9c71987c?"
          className="shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
    </div>
  );
}


