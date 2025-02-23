import Image from "next/image";

interface MoreCardsListProps {
  title: string;
  desc: string;
}

interface MoreCardsProps {
  title: string;
  image: string;
  list: MoreCardsListProps[];
  className?: string;
}

export const MoreCards = ({
  title,
  image,
  list,
  className,
}: MoreCardsProps) => {
  return (
    <div className={`max-lg:flex-col flex gap-6 items-center ${className}`}>
      <Image className="max-lg:w-full w-1/2" src={image} width={600} height={400} alt="more" />

      <div className="max-lg:w-full w-1/2">
        <div className="max-lg:hidden h-10 border-[#AA87E2] border-[1px] border-b-0 rounded-tl-[32px] rounded-tr-[32px]"></div>
        <div className="max-lg:p-0 px-9">
          <p
            className="max-lg:text-[40px] text-[60px] mb-8 leading-[93%] bg-clip-text bg-custom-gradient animate-gradient"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            {title}
          </p>

          <ul className="flex flex-col gap-4">
            {list.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Image
                  src="/icon/arrow-right.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
                <div>
                  <p className="font-bold text-lg mb-1 font-involve">{item.title}</p>
                  <p className="font-involve">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
