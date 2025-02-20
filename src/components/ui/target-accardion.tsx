"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface TargetAccardionItemProps {
  title: string;
  desc: string;
}

 interface TargetAccardionProps {
  index: number;
  title: string;
  list: TargetAccardionItemProps[];
  className?: string;
}

export const TargetAccardion = ({
  index,
  title,
  list,
  className,
}: TargetAccardionProps) => {
  const [toggle, setToggle] = useState(false);
  const accardionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`cursor-pointer ${className}`}
      onClick={() => setToggle(!toggle)}
    >
      <div className="border-[1px] border-b-0 border-[#f4f4f426] rounded-tl-[12px] rounded-tr-[12px] h-3 w-full"></div>

      <div className="px-3 mb-10">
        <p className="text-[30px] text-[#f4f4f44c] leading-[100%]">
          0{index + 1}/
        </p>
        <div className="flex items-center gap-2">
          <p className="uppercase text-[26px] font-bold ml-16">{title}</p>
          <Image
            className={toggle ? "-rotate-90" : "rotate-90"}
            src="/icon/arrow-right.svg"
            width={20}
            height={20}
            alt="arrow"
          />
        </div>
      </div>

      <div
        className="transition-all overflow-hidden"
        style={{
          height: toggle ? accardionRef.current?.offsetHeight : "0px",
        }}
      >
        <div ref={accardionRef}>
          <ul className="flex gap-5 mb-10">
            {list.map((item, index) => (
              <li
                key={index}
                className="max-xl:w-full bg-[#392D76] rounded-[17px] py-[20px] px-[30px] w-[25%]"
              >
                <div className="size-[28px] rounded-full flex items-center justify-center bg-[#FFFFFF] ml-auto">
                  <Image
                    src="/icon/pluse.svg"
                    width={12}
                    height={12}
                    alt="pluse"
                  />
                </div>

                <div className="flex items-center gap-2 mb-[15px]">
                  <div className="flex-shrink-0 size-[33px] rounded-full flex items-center justify-center bg-[#f4f4f44c]">
                    <Image
                      src="/icon/bitcoin-logo.svg"
                      width={12}
                      height={16}
                      alt="bitcoin"
                    />
                  </div>

                  <p className="font-bold text-[16px]">{item.title}</p>
                </div>

                <p>{item.desc}</p>
              </li>
            ))}
          </ul>

          <div className="border-[1px] border-t-0 border-[#f4f4f426] rounded-bl-[12px] rounded-br-[12px] h-3 w-full"></div>
        </div>
      </div>
    </div>
  );
};
