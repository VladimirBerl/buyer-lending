export const Offer = () => {
  return (
    <section className="max-md:bg-[top_right] max-md:bg-[auto_120vw] max-md:bg-[url(/images/offer-mobile-background.png)] bg-[auto_60vw] bg-[left_bottom] bg-[url(/images/offer-backgarund.png)] bg-no-repeat flex flex-col relative px-4 mb-[100px] pb-[100px] rounded-tl-[32px] rounded-tr-[32px]">
      <div className="absolute top-0 left-0 right-0 w-full border-[#AA87E2] border-[1px] border-b-0 rounded-tl-[32px] rounded-tr-[32px] pt-[23px] px-[16px] ml-auto block text-[#909090] text-xs text-end">
        TG_BUYER
      </div>

      <h3 className="max-lg:text-[40px] mt-10 leading-[100%] max-lg:mt-6 text-[72px]">
        Что предлагает <br /> TG_Buyer?
      </h3>

      <div className="max-xl:w-3/4 max-md:w-full max-md:mt-10 grid grid-cols-2 gap-9 w-1/2 ml-auto">
        <div className="max-sm:col-span-2 backdrop-blur-[15px] border-[#AA87E2] border-[1px] rounded-[32px] py-[30px] px-[20px]">
          <p className="max-lg:text-lg text-[25px] font-semibold leading-[100%] mb-4">
            Для покупателей:
          </p>

          <ul className="list-decimal pl-3 text-[#E9E3F4]">
            <li className="w-full list-item break-words whitespace-normal mb-1">
              Возможность экономить на покупках с кэшбэком до 100%.
            </li>
            <li className="w-full list-item break-words whitespace-normal mb-1">
              Зарабатывать внутренние монеты, выполняя задания.
            </li>
            <li className="w-full list-item break-words whitespace-normal">
              Получать уникальный опыт использования криптовалюты TON и других
              инструментов Web3.
            </li>
          </ul>
        </div>

        <div className="max-sm:col-span-2 backdrop-blur-[15px] border-[#AA87E2] border-[1px] rounded-[32px] py-[30px] px-[20px]">
          <p className="max-lg:text-lg text-[25px] font-semibold leading-[100%] mb-4">
            Для продавцов:
          </p>

          <ul className="list-decimal pl-3 text-[#E9E3F4]">
            <li className="w-full list-item break-words whitespace-normal mb-1">
              Доступные инструменты для продвижения товаров, увеличения продаж и
              улучшения рейтинга на маркетплейсах.
            </li>
            <li className="w-full list-item break-words whitespace-normal mb-1">
              Гибкость в оплате услуг (рубли, внутренние монеты, криптовалюта
              TON, звезды Telegram).
            </li>
            <li className="w-full list-item break-words whitespace-normal">
              Органический рост популярности товаров через отзывы, лайки и
              задания.
            </li>
          </ul>
        </div>

        <div className="col-span-2 backdrop-blur-[15px] border-[#AA87E2] border-[1px] rounded-[32px] py-[30px] px-[20px]">
          <p className="max-lg:text-lg text-[25px] font-semibold leading-[100%] mb-4">
            Для инвесторов:
          </p>

          <ul className="list-decimal pl-3 text-[#E9E3F4]">
            <li className="w-full list-item break-words whitespace-normal mb-1">
              Прозрачную бизнес-модель, основанную на размещении платных постов
              и активности пользователей.
            </li>
            <li className="w-full list-item break-words whitespace-normal mb-1">
              Потенциал роста стоимости токенов TGB благодаря механизму выкупа и
              сжигания.
            </li>
            <li className="w-full list-item break-words whitespace-normal">
              Возможность участвовать в развитии проекта через голосование и
              краудсорсинг.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
