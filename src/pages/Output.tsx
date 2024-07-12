import { FunctionComponent } from "react";
import Container from "../components/Container";

const Output: FunctionComponent = () => {
  return (
    <div className="w-full h-[3056px] relative bg-whitesmoke overflow-hidden leading-[normal] tracking-[normal] mq800:h-auto mq800:min-h-[3056]">
      <img
        className="absolute top-[-877px] left-[calc(50%_-_1407px)] w-[2813px] h-[1869px]"
        alt=""
        src="/background-visual.svg"
      />
      <main className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-center justify-start py-[120px] px-5 box-border gap-[48px] max-w-full z-[1] text-center text-sm text-lightslategray font-ibm-plex-mono mq675:gap-[24px]">
        <Container />
        <div className="w-[140px] flex flex-col items-center justify-center py-[3.5px] px-[9px] box-border">
          <img
            className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/logo1.svg"
          />
        </div>
        <div className="w-[960px] relative leading-[150%] inline-block max-w-full">
          © 2024 Candi Builder at GarudaHacks 5.0
        </div>
      </main>
    </div>
  );
};

export default Output;
