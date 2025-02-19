import { AboutProject } from "@/components/about-project";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { MiniApp } from "@/components/mini-app";
import { MoreDetails } from "@/components/more-details";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <AboutProject/>
      <MiniApp/>
      <MoreDetails/>
    </>
  );
}
