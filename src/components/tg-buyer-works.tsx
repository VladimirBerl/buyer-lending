"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

const tabs = [
  { name: "Для продавцов", id: 1 },
  { name: "Для покупателей", id: 2 },
  { name: "Для инвесторов", id: 3 },
];

const tabsContent = [
  [
    {
      title: "Продвижение товаров:",
      desc: "Улучшение позиций в рейтинге маркетплейсов через отзывы, лайки и органическую активность покупателей.",
    },
    {
      title: "Рост продаж:",
      desc: "Органические выкупы создают видимость популярности товара, что стимулирует дальнейшие продажи.",
    },
    {
      title: "Экономия на маркетинге:",
      desc: "Размещение постов в TG_Buyer обходится дешевле, чем стандартные рекламные кампании, при этом привлекает заинтересованных покупателей.",
    },
    {
      title: "Гибкость оплаты:",
      desc: "Возможность оплаты постов не только рублями, но и внутренними монетами, криптовалютой TON или звездами Telegram, что делает сервис удобным для разных категорий продавцов.",
    },
    {
      title: "Доступ к аудитории Web3:",
      desc: "Продавцы получают доступ к растущей аудитории, интересующейся блокчейном и криптовалютами, что расширяет их рыночные возможности.",
    },
    {
      title: "Простое управление заданиями:",
      desc: "Продавцы могут размещать задания для покупателей, стимулируя оставлять отзывы и лайки, что повышает доверие к их товарам.",
    },
  ],
  [
    {
      title: "Экономия денег:",
      desc: "Покупатели могут приобретать товары с кэшбэком до 100%, что делает покупки значительно выгоднее.",
    },
    {
      title: "Доступ к уникальным предложениям:",
      desc: "Прямой доступ к эксклюзивным сделкам, которые недоступны на самих маркетплейсах.",
    },
    {
      title: "Простота использования:",
      desc: "Все выгодные предложения от продавцов собраны в одном месте, упрощая поиск нужных товаров.",
    },
    {
      title: "Дополнительный доход:",
      desc: "Пользователи зарабатывают внутренние монеты за выполнение заданий (лайки, отзывы, подписки), которые можно использовать для покупок или обмена на криптовалюту.",
    },
    {
      title: "Образовательная ценность:",
      desc: "Покупатели знакомятся с технологиями Web3, криптовалютой TON и звездочками Telegram, получая новый опыт и доступ к инновациям",
    },
  ],
  [
    {
      title: "Привлекательная токеномика:",
      desc: "Токены TGB растут в цене за счет механизма выкупа и сжигания, что создает устойчивую ценность для инвесторов.",
    },
    {
      title: "Прозрачная бизнес-модель:",
      desc: "Приложение предоставляет открытую статистику по количеству постов, активности пользователей и доходам платформы, что укрепляет доверие инвесторов.",
    },
    {
      title: "Активное участие в проекте:",
      desc: "Владельцы токенов могут участвовать в развитии платформы через голосование и краудсорсинг, получая награды за вклад в проект.",
    },
    {
      title: "Популяризация TON:",
      desc: "Проект активно продвигает экосистему TON, привлекая внимание инвесторов и повышая ликвидность криптовалюты.",
    },
  ],
];

export const TGBuyerWorks = () => {
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
    slidesToShow: 3,
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
    <section className="flex flex-col gap-10 relative px-4 pb-[100px] mb-[100px] bg-[url(/images/mini-app-backgraund.png)] bg-cover bg-no-repeat bg-top">
      <div className="absolute top-0 left-0 right-0 w-full border-[#AA87E2] border-[1px] border-b-0 rounded-tl-[32px] rounded-tr-[32px] pt-[23px] px-[16px] ml-auto block text-[#909090] text-xs text-end">
        TG_BUYER
      </div>

      <h3
        style={{
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
        }}
        className="max-lg:text-[40px] mt-10 leading-[100%] max-lg:mt-10 text-[72px] bg-clip-text bg-custom-gradient animate-gradient"
      >
        Проблемы, которые <br /> решает TG_BUYER
      </h3>

      <div className="hidden md:flex justify-end gap-[15px] mt-[-70px]">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="flex items-center justify-center border-[1px] border[#B4B4B4] rounded-full size-[60px]"
        >
          <Image src="/icon/arrow-low.svg" width={16} height={9} alt="arrow" />
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

      <div className="max-md:justify-center flex flex-wrap items-center gap-[15px]">
        {tabs.map((item) => (
          <button
            onClick={() => setIsActiveTab(item.id)}
            key={item.id}
            className={`${
              isActiveTab === item.id
                ? "max-lg:w-[40%] max-[480px]:w-full max-md:w-[48%] w-[30%] border-transparent bg-[#5F29B7]"
                : "max-lg:w-[30%] max-md:w-[48%] max-[480px]:w-full w-[20%] border-[#B4B4B4] bg-transparent"
            } max-sm:text-sm font-semibold backdrop-blur-[15px] text-lg px-[18px] py-[16.5px] rounded-[26px] border-[1px] border-[#B4B4B4] transition-all duration-400`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <Slider ref={sliderRef} {...settings}>
        {tabsContent[isActiveTab - 1].map((item, index) => (
          <div key={index} className="pl-3">
            <div className="min-h-[300px] border-[1px] border-[#402E5C] rounded-[26px] backdrop-blur-[15px] px-[16px] py-[26px]">
              <h4 className="mb-5 text-xl font-semibold">{item.title}</h4>
              {index >= 3 ? (
                <Image
                  className="mb-5"
                  src="/icon/tg-buyer-settings.svg"
                  width={90}
                  height={86}
                  alt="image"
                />
              ) : (
                <Image
                  className="mb-5"
                  src="/icon/tg-buyer-arrow.svg"
                  width={90}
                  height={86}
                  alt="image"
                />
              )}
              <p className="font-involve">{item.desc}</p>
            </div>
          </div>
        ))}
      </Slider>

      <div className="hidden max-md:flex justify-end gap-[15px]">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="flex items-center justify-center border-[1px] border[#B4B4B4] rounded-full size-[60px]"
        >
          <Image src="/icon/arrow-low.svg" width={16} height={9} alt="arrow" />
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
    </section>
  );
};
