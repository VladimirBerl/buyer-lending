import { AboutProject } from "@/components/about-project";
import { BusinessModel } from "@/components/business-model";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { MiniApp } from "@/components/mini-app";
import { MoreDetails } from "@/components/more-details";
import { Offer } from "@/components/offer";
import { TargetProject } from "@/components/target-project";
import { TGBuyer } from "@/components/tg-buyer";
import { TGBuyerWorks } from "@/components/tg-buyer-works";

export default function Home() {
  return (
    <>
      <div className="px-4">
        <Header />
        <Main />
        <AboutProject />
        <MiniApp />
        <MoreDetails />
        <Offer />
        <TGBuyer />
        <TargetProject />
        <TGBuyerWorks />
      </div>
      <BusinessModel />
      <Footer />
    </>
  );
}
