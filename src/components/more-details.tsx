import { MoreCards } from "@/components/ui/more-cards";

export const MoreDetails = () => {
  return (
    <section className="flex flex-col gap-[15vh] relative px-4 mb-[100px]">
      <div className="absolute top-0 left-0 right-0 w-full border-[#AA87E2] border-[1px] border-b-0 rounded-tl-[32px] rounded-tr-[32px] pt-[23px] px-[16px] ml-auto block text-[#909090] text-xs text-end">
        TG_BUYER
      </div>

      <h3 className="max-lg:text-[40px] mt-10 leading-[100%] max-lg:mt-10 text-[72px]">Подробнее</h3>

      <MoreCards
        title="Почему Telegram Mini-App?"
        image="/images/more-one.png"
        list={[
          {
            title: "Доступность:",
            desc: "Те, кто хочет экономить на покупках и зарабатывать внутреннюю валюту.",
          },
          {
            title: "Популярность платформы:",
            desc: "Telegram предоставляет доступ к огромной базе активных пользователей, что упрощает привлечение аудитории.",
          },
          {
            title: "Интеграция с Web3:",
            desc: "Telegram активно поддерживает криптовалюты (TON, звезды Telegram), что делает платформу идеальной для популяризации блокчейна.",
          },
        ]}
      />
      <MoreCards
        className="flex-row-reverse"
        title="Ключевые особенности"
        image="/images/more-two.png"
        list={[
          {
            title: "Интеграция с Web3:",
            desc: "Пользователи могут подключать криптокошельки, приобретать токены и зарабатывать награды за активность в экосистеме.",
          },
          {
            title: "Геймификация:",
            desc: "Система уровней, награды, вращение рулетки и задания делают участие в проекте увлекательным и мотивирующим.",
          },
          {
            title: "Прозрачность:",
            desc: "Платформа предоставляет открытую статистику, где каждый пользователь видит прогресс и доходы проекта.",
          },
          {
            title: "Развитие TON:",
            desc: "TG_Buyer популяризирует экосистему TON, привлекая новых пользователей и стимулируя их вовлеченность.",
          },
        ]}
      />
      <MoreCards
        title="Кто участвует в экосистеме?"
        image="/images/more-tree.png"
        list={[
          {
            title: "Покупатели:",
            desc: "Те, кто хочет экономить на покупках и зарабатывать внутреннюю валюту.",
          },
          {
            title: "Продавцы:",
            desc: "Владельцы товаров на маркетплейсах, желающие улучшить свои позиции и увеличить продажи.",
          },
          {
            title: "Инвесторы:",
            desc: "Пользователи, которые видят потенциал проекта и хотят участвовать в его развитии через токены TGB.",
          },
          {
            title: "Сторонники Web3:",
            desc: "Люди, интересующиеся криптовалютами и блокчейном, которым важен удобный доступ к технологиям.",
          },
        ]}
      />
    </section>
  );
};
