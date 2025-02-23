import Image from "next/image";
import Link from "next/link";

export const Main = () => (
  <>
    <section className="relative max-lg:static">
      <Image
        className="hidden lg:block"
        src="/images/home-backgraund.png"
        width={1440}
        height={809}
        alt="home"
      />

      <Image
        className="hidden max-lg:block absolute inset-0 z-[-1]"
        src="/images/home-backgraund-two.png"
        fill
        alt="home"
      />

      <Image
        className="hidden lg:block absolute top-0 right-0 animate-wrap max-xl:size-[10vw]"
        src="/images/text-circle.png"
        width={157}
        height={157}
        alt="text"
      />

      <div className="max-lg:static max-md:min-h-[65vh] absolute z-1 top-[30px] left-[30px]">
        <h1
          style={{
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
          className="hidden lg:block max-xl:text-[28px] text-[35px] leading-[110%] max-w-[54%] bg-clip-text bg-custom-gradient animate-gradient"
        >
          Инновационное Telegram Mini-App, которое объединяет интересы
          покупателей, продавцов и инвесторов на популярных маркетплейсах в
          игровой экономический симулятор
        </h1>

        <h1
          style={{
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
          className="hidden max-lg:block max-sm:text-2xl text-[35px] pt-12 font-normal leading-[110%] max-w-[700px] bg-white"
        >
          Инновационное <strong>Telegram Mini-App</strong>, которое объединяет
          интересы
          {""} <strong>покупателей, продавцов и инвесторов</strong> на
          популярных маркетплейсах в игровой экономический симулятор
        </h1>
      </div>

      <div className="max-lg:static max-lg:translate-y-0 max-lg:my-[50px] max-lg:w-full max-md:hidden absolute w-[40%] right-[30px] top-1/2 translate-y-[-50%]">
        <h2 className="max-xl:text-[24px] text-[30px] leading-[30px] mb-[25px]">
          Кому может помочь <br /> платформа?
        </h2>

        <div className="flex flex-col gap-y-[15px]">
          <div className="flex items-center border-[#7061aa] rounded-[30px] border-[1px] backdrop-blur-[15px] bg-[#ffffff20]">
            <div className="w-[30%] flex-shrink-0 max-lg:w-[40%] flex items-center justify-center gap-x-[6px] py-[16px] px-[18px] rounded-[30px] border-[1px] border-[#ffffff]">
              <Image
                src="/icon/arrow-right.svg"
                width={14}
                height={14}
                alt="arrow"
              />
              <p className="font-involve">Пакупателям</p>
            </div>
            <p className="px-[18px] font-involve">Находить товары с кэшбэком до 100%</p>
          </div>

          <div className="flex items-center border-[#7061aa] rounded-[30px] border-[1px] backdrop-blur-[15px] bg-[#ffffff20]">
            <div className="w-[30%] flex-shrink-0 max-lg:w-[40%] flex items-center justify-center gap-x-[6px] py-[16px] px-[18px] rounded-[30px] border-[1px] border-[#ffffff]">
              <Image
                src="/icon/arrow-right.svg"
                width={14}
                height={14}
                alt="arrow"
              />
              <p className="font-involve">Продавцам</p>
            </div>
            <p className="px-[18px] font-involve">Эффективно продвигать свои продукты</p>
          </div>

          <div className="flex items-center border-[1px] border-[#7061aa] rounded-[30px] backdrop-blur-[15px] bg-[#ffffff20]">
            <div className="w-[30%] flex-shrink-0 max-lg:w-[40%] flex items-center justify-center gap-x-[6px] py-[16px] px-[18px] rounded-[30px] border-[1px] border-[#ffffff]">
              <Image
                src="/icon/arrow-right.svg"
                width={14}
                height={14}
                alt="arrow"
              />
              <p className="font-involve">Инвесторам</p>
            </div>
            <p className="px-[18px] font-involve">
              Участвовать в развивающемся проекте с прозрачной бизнес-моделью
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center absolute left-[30px] bottom-[15vw] size-[120px] border-[1px] border-[#8954dd3c] rounded-full">
        <div className="relative size-[66px] border-[2px] border-[#8854DD] rounded-full">
          <Image
            className="absolute left-1/2 top-0 -translate-x-1/2 animate-topBottom"
            src="/icon/arrow.svg"
            width={12}
            height={44}
            alt="arrow"
          />
        </div>
      </div>

      <Link
        className="max-lg:static max-lg:w-full max-lg:justify-center absolute z-2 bottom-[5vw] left-0 flex items-center justify-between w-max gap-10 bg-[#5F29B7] px-[25px] py-[12px] rounded-[35px]"
        href="#"
      >
        <p className="max-sm:text-lg text-2xl font-medium">
          Начать пользоваться
        </p>
        <div className="flex-shrink-0 relative size-[40px] border-[1px] border-[#ffffff2a] rounded-full">
          <Image
            className="absolute left-[-10%] top-1/2 -translate-y-1/2 -rotate-90 animate-leftRight"
            src="/icon/arrow.svg"
            width={14}
            height={14}
            alt="arrow"
          />
        </div>
      </Link>
    </section>

    <div className="md:flex max-lg:my-[50px] hidden items-end gap-x-[20px] mt-[-7vw] mb-[100px]">
      <ul className="flex item-center justify-center py-[20px] px-[17px] bg-[#0E0915] rounded-[15px] min-h-[80px]">
        <li className="font-semibold my-auto">Интеграция с AI</li>
      </ul>
      <ul className="flex item-center justify-center py-[20px] px-[17px] bg-[#0E0915] rounded-[15px] min-h-[80px]">
        <li className="font-semibold my-auto">
          Интеграция с инфраструктурой Web3
        </li>
      </ul>
      <ul className="flex item-center justify-center py-[20px] px-[17px] bg-[#0E0915] rounded-[15px] min-h-[80px]">
        <li className="font-semibold my-auto">Интеграция с TON</li>
      </ul>
      <ul className="flex item-center justify-center py-[20px] px-[17px] bg-[#0E0915] rounded-[15px] min-h-[80px]">
        <li className="font-semibold my-auto">
          Токены, Звезды TG, Монеты для проведения платежей
        </li>
      </ul>
      <Image
        className="max-lg:hidden ml-auto max-w-[170px] max-xl:w-[13vw]"
        src="/images/home-iphone.png"
        width={170}
        height={211}
        alt="iphone-mini"
      />
    </div>

    <div className="max-md:block hidden my-[100px]">
      <h4 className="text-center font-semibold text-[18px] mb-4">
        Кому поможет платформа:
      </h4>

      <ul className="flex flex-col gap-[15px]">
        <li className="border-[#7B708D] border-[1px] rounded-[20px] py-[11px] px-[20px]">
          <p className="bg-[#5F29B7] font-semibold rounded-[30px] px-[16px] py-[6px] w-max mx-auto mb-2">
            Покупателям
          </p>
          <p className="text-center">Находить товары с кэшбэком до 100%</p>
        </li>
        <li className="border-[#7B708D] border-[1px] rounded-[20px] py-[11px] px-[20px]">
          <p className="bg-[#5F29B7] font-semibold rounded-[30px] px-[16px] py-[6px] w-max mx-auto mb-2">
            Продавцам
          </p>
          <p className="text-center">Эффективно продвигать свои товары</p>
        </li>
        <li className="border-[#7B708D] border-[1px] rounded-[20px] py-[11px] px-[20px]">
          <p className="bg-[#5F29B7] font-semibold rounded-[30px] px-[16px] py-[6px] w-max mx-auto mb-2">
            Инвесторам
          </p>
          <p className="text-center">
            Участвовать в развивающемся проекте с прозрачной бизнес-моделью
          </p>
        </li>
      </ul>
    </div>

    <div className="max-md:block hidden mb-[100px]">
      <ul className="flex flex-col gap-3">
        <li className="text-center text-[17px] font-involve">Интеграция с AI</li>
        <li className="text-center text-[17px] font-involve">
          Интеграция с инфраструктурой Web3
        </li>
        <li className="text-center text-[17px] font-involve">
          Интеграция с TON Токены, Звезды TG, Монеты для проведения платежей
        </li>
      </ul>

      <Image
        className="mx-auto"
        src="/icon/ton-coins-row.svg"
        width={400}
        height={350}
        alt="ton-coins-row"
      />
    </div>
  </>
);
