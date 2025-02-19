"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

const tabs = [
  { name: "Главная", id: 1 },
  { name: "План", id: 2 },
  { name: "Токены", id: 3 },
  { name: "Друзья", id: 4 },
  { name: "Особенности", id: 5 },
];

const tabsContent = [
  [
    {
      title: "Центр статистики:",
      desc: "Информация о текущей активности проекта: количество покупателей, продавцов, платных и бесплатных постов.",
    },
    {
      title: "Цели проекта:",
      desc: "Пользователи могут увидеть краткие цели платформы и прогресс их достижения.",
    },
    {
      title: "Ежедневный фарминг:",
      list: [
        "Кнопка для ежедневного фарминга монет проекта.",
        "Дополнительная мотивация для пользователей возвращаться в приложение.",
      ],
    },
    {
      title: "Простая навигация:",
      desc: "Быстрый доступ к основным функциям и разделам приложения.",
    },
  ],
  [
    {
      title: "Краудсорсинг:",
      desc: "Пользователи, владеющие токенами проекта, могут участвовать в развитии платформы:",
      list: [
        "Участие в голосованиях.",
        "Консультации и предложения по улучшению.",
        "Совместная работа над развитием экосистемы.",
      ],
    },
    {
      title: "Вознаграждения:",
      desc: "За вклад в развитие проекта пользователи получают монеты TG_Buyer.",
    },
  ],
  [
    {
      title: "Дополнительные бонусы:",
      desc: "За покупки, стейкинг или добавление ликвидности пользователи получают награды в монетах проекта",
    },
    {
      title: "Донаты:",
      desc: "Возможность сделать донат в криптовалюте и получить монеты проекта в качестве вознаграждения.",
    },
  ],
  [
    {
      title: "Вознаграждения за рефералов:",
      desc: "За каждого приглашенного друга пользователь получает монеты проекта.",
    },
    {
      title: "Управление командой:",
      desc: "В разделе отображается статистика реферальной сети: количество друзей и заработанные монеты.",
    },
  ],
  [
    {
      title: "Рулетка с призами:",
      desc: "За каждый новый уровень пользователь получает вращение рулетки с ценными наградами.",
    },
    {
      title: "Дополнительные возможности:",
      desc: "Повышение уровня открывает новые функции и преимущества в проекте.",
    },
  ],
];

export const MiniApp = () => {
  const sliderRef = useRef<Slider>(null);
  const [isActiveTab, setIsActiveTab] = useState(1);

  const settings = {
    centerMode: false,
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    adaptiveHeight: false,
    slidesToShow: tabsContent[isActiveTab - 1].length >= 3 ? 3 : 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="min-h-[100vh] flex flex-col gap-10 relative px-4 mb-[100px] bg-[url(/images/mini-app-backgraund.png)] bg-cover bg-no-repeat bg-top">
      <div className="absolute top-0 left-0 right-0 w-full border-[#AA87E2] border-[1px] border-b-0 rounded-tl-[32px] rounded-tr-[32px] pt-[23px] px-[16px] ml-auto block text-[#909090] text-xs text-end">
        TG_BUYER
      </div>

      <h3 className="max-lg:text-[40px] max-lg:mt-6 text-[72px]">Mini-App</h3>

      <div className="max-md:justify-center flex flex-wrap items-center gap-[15px] mb-10">
        {tabs.map((item) => (
          <button
            onClick={() => setIsActiveTab(item.id)}
            key={item.id}
            className={`${
              isActiveTab === item.id
                ? "max-lg:w-[30%] max-[440px]:w-full max-md:w-[48%] w-[20%] border-transparent bg-[#5F29B7]"
                : "max-md:w-[48%] max-[440px]:w-full w-[170px] border-[#B4B4B4] bg-transparent"
            } font-semibold backdrop-blur-[15px] text-lg px-[18px] py-[16.5px] rounded-[26px] border-[1px] border-[#B4B4B4] transition-all duration-400`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="max-md:p-0 relative pr-[300px]">
        <div className="hidden max-md:flex mb-10 max-sm:justify-between">
          <Image
            className="max-[440px]:w-[70%]"
            src="/images/mini-app-iphone.png"
            width={300}
            height={600}
            alt="mini-app"
          />

          <div className="flex flex-col justify-end gap-[15px] mt-10">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="flex items-center justify-center border-[1px] border[#B4B4B4] rounded-full size-[60px]"
            >
              <Image
                className="rotate-90"
                src="/icon/arrow-low.svg"
                width={16}
                height={9}
                alt="arrow"
              />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="flex items-center justify-center h-[125px] w-[60px] border-[1px] border[#B4B4B4] rounded-[43px]"
            >
              <Image
                className="rotate-90"
                src="/icon/arrow-low-right.svg"
                width={35}
                height={9}
                alt="arrow"
              />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {tabsContent[isActiveTab - 1].map((item, index) => (
            <div key={index} className="pl-3 w-full">
              <div className="min-h-[300px] border-[1px] border-[#402E5C] rounded-[26px] backdrop-blur-[15px] px-[16px] py-[26px]">
                <h4 className="mb-5 text-xl font-semibold">{item.title}</h4>
                {item.desc && <p className="mb-2">{item.desc}</p>}
                {item.list && (
                  <ul className="list-disc pl-4">
                    {item.list.map((item, index) => (
                      <li
                        className="w-full list-item list-disc break-words whitespace-normal"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </Slider>

        <div className="max-md:hidden flex justify-end gap-[15px] mt-10">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="flex items-center justify-center border-[1px] border[#B4B4B4] rounded-full size-[60px]"
          >
            <Image
              src="/icon/arrow-low.svg"
              width={16}
              height={9}
              alt="arrow"
            />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="flex items-center justify-center w-[125px] h-[60px] border-[1px] border[#B4B4B4] rounded-[43px]"
          >
            <Image
              src="/icon/arrow-low-right.svg"
              width={35}
              height={9}
              alt="arrow"
            />
          </button>
        </div>

        <Image
          className="max-md:hidden absolute top-1/2 right-0 -translate-y-1/2"
          src="/images/mini-app-iphone.png"
          width={300}
          height={600}
          alt="mini-app"
        />
      </div>
    </section>
  );
};
