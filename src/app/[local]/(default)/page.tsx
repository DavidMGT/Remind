export const metadata = {
  title: "Home - Remind",
  description: "Page description",
};

import Hero from "@/src/components/hero";
import Features from "@/src/components/features";
import Newsletter from "@/src/components/newsletter";
import Zigzag from "@/src/components/zigzag";
import Testimonials from "@/src/components/testimonials";
import HomeHeader from "./components/header";
import Blocks from "../../../components/blocks";
import HomeMiddle from "./components/home-middle";

export default function Home() {
  return (
    <>
      <HomeHeader />
      {/* <Hero /> */}
      <HomeMiddle/>
      <Features />
      <Zigzag /> 
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  );
}
