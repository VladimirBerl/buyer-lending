import Image from "next/image";

export const BusinessModel = () => {
  return (
    <section className="bg-custom-gradient-four px-4 pt-[40px] pb-[100px] rounded-tl-[32px] rounded-tr-[32px]">
      <div className="border-white border-[1px] border-b-0 rounded-tl-[32px] rounded-tr-[32px] h-10"></div>
      <h3 className="px-4 max-lg:text-[40px] leading-[100%] text-[72px] mb-[76px]">
        Бизнес-модель
      </h3>

      <Image
        className="mx-auto"
        src="/images/business-model.png"
        width={1160}
        height={676}
        alt="business"
      />
    </section>
  );
};
