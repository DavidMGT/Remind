"use client";

import { Layout, Flex, Button, Typography } from "antd";
import FeatImage01 from "@/public/images/handle-pic-01.png";
import Image from "next/image";
export default function HomeHeader() {
  return (
    <section className="pt-40 p-16">
      <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
        {/* Image */}
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
          data-aos="fade-up"
        >
          <Image
            className="max-w-full mx-auto md:max-w-none h-auto rounded-lg bg-gray-100"
            src={FeatImage01}
            width={500}
            height={400}
            alt="Features"
          />
        </div>
        {/* Content */}
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
          data-aos="fade-right"
        >
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
            <h3 className="h3 mb-3">WelCome to our</h3>
            <h3 className="h3 mb-3">Remind</h3>
            <h3 className="h3 mb-3">Community</h3>
            <p className="text-xl text-gray-400 mb-4">
              Such as Exception Handling Interface,Advanca Function
              Interfaces,Communication Service,Computing Intenslve,etc
            </p>
            <Image
              className="max-w-full mx-auto md:max-w-none h-auto rounded-lg bg-gray-100"
              src={FeatImage01}
              width={200}
              height={200}
              alt="Features"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
