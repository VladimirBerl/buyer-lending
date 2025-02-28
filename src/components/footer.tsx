import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-8 pb-14 px-6 mt-[-32px] rounded-tl-[32px] rounded-tr-[32px] bg-[#171022]">
      <div className="md:flex max-lg:w-full hidden justify-between w-1/2">
        <p className="mt-auto text-[#8F889A]">© 2024 TG_BUYER</p>
        <div>
          <p className="mb-6 text-[#8F889A]">
            Социальные <br /> сети:
          </p>

          <ul className="flex items-start gap-2 mb-11">
            <a href="group transition-colors" target="_blank">
              <Image
                className="mb-2"
                src="/icon/telegram.svg"
                width={33}
                height={33}
                alt="telegram"
              />
              <p className="text-[8px] group-hover:bg-[#8950E7] text-center">
                Chat
              </p>
            </a>
            <a href=" transition-colors" target="_blank">
              <Image
                className="mb-2"
                src="/icon/telegram.svg"
                width={33}
                height={33}
                alt="telegram"
              />
              <p className="text-[8px] text-center">Channel</p>
            </a>
          </ul>

          <a
            className="hover:text-[#8950E7] transition-colors"
            href="mailto:info@exempl.app"
            target="_blank"
          >
            info@exempl.app
          </a>
        </div>

        <div>
          <p className="text-lg mb-5">Меню</p>

          <ul className="text-[#8F889A] flex flex-col gap-2">
            <a className="hover:text-[#8950E7] transition-colors" href="">
              Terms of use
            </a>
            <a className="hover:text-[#8950E7] transition-colors" href="">
              Privacy Policy{" "}
            </a>
            <a className="hover:text-[#8950E7] transition-colors" href="">
              Referral Agreement
            </a>
          </ul>
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-7">
        <div>
          <p className="mb-4 text-[#8F889A] text-lg">
            Мы в социальных сетях <br /> подписывайся:
          </p>

          <ul className="flex items-start gap-2">
            <a href="group transition-colors" target="_blank">
              <Image
                className="mb-2"
                src="/icon/telegram.svg"
                width={33}
                height={33}
                alt="telegram"
              />
              <p className="text-[8px] group-hover:bg-[#8950E7] text-center">
                Chat
              </p>
            </a>
            <a href=" transition-colors" target="_blank">
              <Image
                className="mb-2"
                src="/icon/telegram.svg"
                width={33}
                height={33}
                alt="telegram"
              />
              <p className="text-[8px] text-center">Channel</p>
            </a>
          </ul>
        </div>
        <a
          className="hover:text-[#8950E7] transition-colors text-lg"
          href="mailto:info@exempl.app"
          target="_blank"
        >
          info@exempl.app
        </a>
        <div>
          <p className="text-xl mb-5">Меню</p>

          <ul className="text-[#8F889A] flex flex-col gap-2">
            <a className="hover:text-[#8950E7] transition-colors" href="">
              Terms of use
            </a>
            <a className="hover:text-[#8950E7] transition-colors" href="">
              Privacy Policy{" "}
            </a>
            <a className="hover:text-[#8950E7] transition-colors" href="">
              Referral Agreement
            </a>
          </ul>
        </div>

        <Link
          className="w-full flex items-center justify-between max-[460px]:gap-5 gap-10 bg-[#5F29B7] px-[25px] py-[12px] rounded-[35px]"
          href="https://t.me/TG_Buyer_bot"
          target="_blank"
        >
          <p className="max-sm:text-lg max-[460px]:text-sm text-2xl font-medium">
            Начать пользоваться
          </p>
          <div className="max-[460px]:size-[25px] flex-shrink-0 relative size-[40px] border-[1px] border-[#ffffff2a] rounded-full">
            <Image
              className="max-[460px]:w-[10px] max-[460px]:h-[30px] absolute left-[-10%] top-1/2 -translate-y-1/2 -rotate-90 animate-leftRight"
              src="/icon/arrow.svg"
              width={14}
              height={14}
              alt="arrow"
            />
          </div>
        </Link>
      </div>
    </footer>
  );
};
