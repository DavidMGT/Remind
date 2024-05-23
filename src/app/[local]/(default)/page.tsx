export const metadata = {
  title: "Home - Remind",
  description: "Page description",
};

import Hero from "@/src/app/[local]/ui/hero";
import Features from "@/src/app/[local]/ui/features";
import Newsletter from "@/src/app/[local]/ui/newsletter";
import Zigzag from "@/src/app/[local]/ui/zigzag";
import Testimonials from "@/src/app/[local]/ui/testimonials";
import HomeHeader from "./components/header";
import Blocks from "../ui/blocks";
import HomeMiddle from "./components/home-middle";
import HomeInteraction from "./components/interaction";
import { Button } from "antd";

export default function Home() {
  return (
    <>
    
      <HomeHeader />
      {/* <Hero /> */}
      <HomeMiddle/>
      <HomeInteraction/>
      {/* <Features />
      <Zigzag />  */}
      <Testimonials />
      <Newsletter />
    </>
  );
}
