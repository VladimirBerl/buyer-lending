"use client";

import { TargetAccardion } from "@/components/ui/target-accardion";
import Image from "next/image";
import { useState } from "react";

const accardionList = [
  {
    id: 1,
    title: "Для покупателей",
    list: [
      {
        title: "Сделать покупки выгодными:",
        desc: "Обеспечить пользователям возможность получать кэшбэк до 100% за выполнение простых условий.",
      },
      {
        title: "Заработок внутри платформы:",
        desc: "Дать пользователям инструмент для получения внутренней валюты (монет) через выполнение заданий и активное участие в проекте.",
      },
      {
        title: "Знакомство с Web3:",
        desc: "Упростить доступ к экосистеме блокчейна TON и криптовалютам, делая технологии понятными и доступными для широкой аудитории.",
      },
    ],
  },
  {
    id: 2,
    title: "Для продавцов",
    list: [
      {
        title: "Эффективное продвижение товаров:",
        desc: "Предоставить доступные инструменты для продвижения товаров на маркетплейсах через органические отзывы и лайки.",
      },
      {
        title: "Привлечение новых продавцов:",
        desc: "Привлечь на платформу как начинающих, так и опытных продавцов, предлагая доступные и бесплатные возможности для тестирования сервиса.",
      },
      {
        title: "Расширение аудитории:",
        desc: "Продавцы смогут привлекать покупателей, знакомых с Web3 и криптовалютой, тем самым увеличивая охват и адаптируясь к новым рынкам.",
      },
    ],
  },
  {
    id: 3,
    title: "Для инвесторов",
    list: [
      {
        title: "Создание устойчивой токеномики:",
        desc: "Обеспечить стабильный рост стоимости токена TGB за счет выкупа и сжигания, что делает проект привлекательным для долгосрочных инвестиций.",
      },
      {
        title: "Прозрачность доходов:",
        desc: "Открытая статистика по активности платформы (количество постов, доходов, бесплатных и платных размещений) для повышения доверия инвесторов.",
      },
      {
        title: "Участие в развитии проекта:",
        desc: "Дать инвесторам возможность участвовать в развитии платформы через краудсорсинг и голосования, стимулируя их вовлеченность.",
      },
    ],
  },
  {
    id: 4,
    title: "Для экосистемы TON",
    list: [
      {
        title: "Популяризация TON:",
        desc: "Увеличить использование криптовалюты TON, звёзд Telegram и Web3-кошельков среди широкой аудитории.",
      },
      {
        title: "Рост доверия к блокчейну:",
        desc: "Упростить взаимодействие с Web3 через интуитивно понятный интерфейс приложения в Telegram",
      },
      {
        title: "Привлечение новых пользователей:",
        desc: "TG_Buyer служит мостом между пользователями традиционных приложений и Web3, стимулируя рост экосистемы TON.",
      },
    ],
  },
  {
    id: 5,
    title: "Для проекта",
    list: [
      {
        title: "Становление лидером среди Telegram Mini-Apps:",
        desc: "Развить платформу до уровня ведущего сервиса в сфере e-commerce в Telegram.",
      },
      {
        title: "Создание самодостаточной экосистемы:",
        desc: "Объединить интересы покупателей, продавцов и инвесторов в едином пространстве с выгодными условиями для каждого.",
      },
      {
        title: "Увеличение доходности проекта:",
        desc: "Постоянное наращивание активности, количества постов и пользователей, что обеспечит рост прибыли и стабильное развитие.",
      },
    ],
  },
];

export const TargetProject = () => {
  const [isActiveTab, setIsActiveTab] = useState(1);

  return (
    <section id="targets" className="flex flex-col gap-10 relative px-4 mb-[100px]">
      <div className="absolute top-0 left-0 right-0 w-full border-[#AA87E2] border-[1px] border-b-0 rounded-tl-[32px] rounded-tr-[32px] pt-[23px] px-[16px] ml-auto block text-[#909090] text-xs text-end">
        TG_BUYER
      </div>
      <h3 className="max-lg:text-[40px] mt-10 leading-[100%] max-lg:mt-10 text-[72px]">
        Цели проекта
      </h3>

      <div className="max-lg:w-full flex gap-6 w-1/2 h-full">
        <div className="hidden lg:flex items-center justify-center flex-shrink-0 border-[2px] border-[#E9FF7A] rounded-[15px] w-[7%]">
          <Image
            src="/icon/target-arrow.svg"
            width={15}
            height={15}
            alt="arrow"
          />
        </div>
        <p className="font-involve">
          Цели проекта направлены на создание уникальной платформы, которая
          соединяет экономическую выгоду, удобство использования и инновации
          Web3, одновременно стимулируя развитие экосистемы TON и привлекая
          новые аудитории.
        </p>
      </div>

      <ul className="max-md:justify-center flex flex-wrap items-center gap-[15px]">
        {accardionList.map((item) => (
          <button
            onClick={() => setIsActiveTab(item.id)}
            key={item.id}
            className={`${
              isActiveTab === item.id
                ? "max-lg:w-[40%] max-[480px]:w-full max-md:w-[48%] w-[30%] border-transparent bg-[#5F29B7]"
                : "max-lg:w-[30%] max-md:w-[48%] max-[480px]:w-full w-[20%] border-[#B4B4B4] bg-transparent"
            } max-sm:text-sm font-semibold backdrop-blur-[15px] text-lg px-[18px] py-[16.5px] rounded-[26px] border-[1px] border-[#B4B4B4] transition-all duration-400`}
          >
            {item.title}
          </button>
        ))}
      </ul>

      <ul className="max-lg:flex-col flex gap-5 mb-10">
        {accardionList[isActiveTab - 1].list.map((item, index) => (
          <li
            key={index}
            className="max-xl:w-full bg-[#392D76] rounded-[17px] py-[20px] px-[30px] w-[25%]"
          >
            <div className="size-[28px] rounded-full flex items-center justify-center bg-[#FFFFFF] ml-auto">
              <Image src="/icon/pluse.svg" width={12} height={12} alt="pluse" />
            </div>

            <div className="flex items-start gap-2 mb-[15px]">
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

      <ul className="hidden lg:flex flex-col gap-12">
        {accardionList.map((item, index) => (
          <li
            style={{ marginLeft: `${index === 0 ? "0" : index * 2}rem` }}
            key={index}
          >
            <TargetAccardion
              index={index}
              title={item.title}
              list={item.list}
            />
          </li>
        ))}
      </ul>

      <div></div>
    </section>
  );
};
