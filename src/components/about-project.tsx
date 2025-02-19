import { Accardion } from "@/components/ui/accardion";
import Image from "next/image";

export const AboutProject = () => {
  return (
    <section className="flex flex-col gap-10 relative px-4 mb-[100px] max-md:h-full h-[80vh]">
      <div className="absolute top-0 left-0 right-0 w-full border-[#AA87E2] border-[1px] border-b-0 rounded-tl-[32px] rounded-tr-[32px] pt-[23px] px-[16px] ml-auto block text-[#909090] text-xs text-end">
        TG_BUYER
      </div>

      <h3 className="max-lg:text-[40px] max-lg:mt-6 text-[72px]">О проекте</h3>
      <p
        style={{
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
        }}
        className="max-lg:w-full text-[20px] w-1/2 bg-clip-text bg-custom-gradient animate-gradient"
      >
        <strong>TG_Buyer</strong> – это инновационное Telegram Mini-App, которое
        объединяет интересы покупателей, продавцов и инвесторов на популярных
        маркетплейсах, таких как Wildberries и Ozon. Платформа предоставляет
        удобный инструмент для выгодных покупок, эффективного продвижения
        товаров и знакомства с технологиями Web3 и блокчейна TON.
      </p>

      <div className="max-lg:flex-col flex items-start gap-[30px]">
        <Accardion
          className="max-lg:w-full"
          title="Миссия проекта"
          desc="Создать экосистему, которая объединяет возможности электронной
            коммерции, криптовалют и геймификации, делая современные технологии
            доступными для широкой аудитории и поддерживая развитие блокчейна
            TON."
        />
        <Accardion
          className="max-lg:w-full"
          title="Ценность проекта"
          desc="TG_Buyer – это платформа, которая приносит выгоду всем участникам экосистемы. Покупатели экономят деньги, продавцы продвигают свои товары, а инвесторы получают прозрачную модель с потенциалом роста. Благодаря интеграции с TON проект поддерживает развитие Web3 и делает новые технологии доступными для широкой аудитории."
        />
      </div>

      <Image
        className="max-lg:top-0 absolute bottom-0 right-[-16px] -z-10"
        src="/images/about-project-backgraund.png"
        width={800}
        height={500}
        alt="about-project"
      />
    </section>
  );
};
