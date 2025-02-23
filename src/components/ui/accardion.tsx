"use client";

import { useState } from "react";

interface AccardionProps {
  title: string;
  desc: string;
  className?: string;
}

export const Accardion = ({ title, desc, className }: AccardionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`backdrop-blur-[15px] w-1/3 cursor-pointer border-[#AA87E2] border-[1px] rounded-[32px] py-[30px] px-[20px] ${className}`}
    >
      {!isOpen && <p className="font-semibold text-[25px] max-lg:text-lg mb-3">{title}</p>}
      {isOpen && <p className="font-involve">{desc}</p>}
      <p className="text-xs text-[#AA87E2] text-end">
        {isOpen ? "скрыть" : "подробнее..."}
      </p>
    </div>
  );
};
