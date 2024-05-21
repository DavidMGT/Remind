import Image from "next/image";

import FeatImage01 from "@/public/images/handle-pic-01.png";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";
import { Button } from "antd";

export default function HomeMdidle() {
  return (
    <section>
      <div className="mx-auto  bg-white ">
        <div className="py-12 border-t border-gray-800">
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h1 className="h2 mb-4">One product, unlimited solutions</h1>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div> */}

          {/* Items */}
          <div className="grid gap-20 p-16">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center ">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded"
                  src={FeatImage01}
                  width={400}
                  height={300}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-black">Supported Peripherals</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Such as Exception Handling Interface,Advanca Function
                    Interfaces,Communication Service,Computing Intenslve,etc
                  </p>
                  <Button color="black" shape="round">
                    Find More
                  </Button>
                </div>
              </div>
            </div>
            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg"
                  src={FeatImage01}
                  width={400}
                  height={280}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-black">Open Algorithm</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Such as Exception Handling Interface,Advanca Function
                    Interfaces,Communication Service,Computing Intenslve,etc
                  </p>
                  <Button color="black" shape="round">
                    Find More
                  </Button>
                </div>
              </div>
            </div>
            {/* 3nd item Get Started */}
            <div className="flex flex-row bg-gray-100 p-16 ">
              {/* Image */}
              <div className="rtl" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg"
                  src={FeatImage01}
                  width={200}
                  height={100}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div className="mx-auto" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3 text-black">Open Algorithm</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Such as Exception Handling Interface,Advanca Function
                    Interfaces,Communication Service,Computing Intenslve,etc
                  </p>
                  <Button
                    style={{ background: "#000000", color: "white" }}
                    shape="round"
                  >
                    Find More
                  </Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
