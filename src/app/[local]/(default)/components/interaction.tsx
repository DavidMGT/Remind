import Image from "next/image";
import FeatImage01 from "@/public/images/handle-pic-01.png";
import { Button, Flex, Layout, Card, Typography } from "antd";

export default function HomeInteraction() {
  return (
    // headerpart
    <div className="flex flex-col pl-16 pr-16 pb-16">
      <div>
        <h3 className="h3 mb-3 text-black">Human-Computer Interaction</h3>
        <p className="text-xl text-gray-500 mb-4">
          Such as Exception Handling Interface,Advanca Function Interfaces,
        </p>
        <p className="text-xl text-gray-500 mb-4">
          Communication Service,Computing Intenslve,etc
        </p>
      </div>
      {/* contentPart */}
      <div className="grid grid-cols-2 gap-4 place-items-stretch h-96  ">
        <div className="flex rounded-lg  bg-red-400 items-center justify-center">01</div>
        <div className="flex rounded-lg bg-red-400 items-center justify-center">02</div>
        <div className="flex rounded-lg bg-red-400 items-center justify-center">03</div>
        <div className="flex rounded-lg bg-red-400 items-center justify-center">04</div>
      </div>
    </div>
  );
}
