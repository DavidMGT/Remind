"use client";

import { Layout, Flex, Button, Typography } from "antd";
const imgStyle: React.CSSProperties = {
  display: "block",
  width: 400,
};
export default function HomeHeader() {
  return (
    <section className="bg-emerald-500">
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16  ">
        <Flex justify="space-evenly">
          <img
            alt="avatar"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            style={imgStyle}
          />
          <Flex
            vertical
            align="center"
            justify="space-between"
            className="p-5"
          >
            <Flex vertical  align="">
            <Typography.Title level={1} >
              Welcome to our<br></br> Remind<br></br> Community
            </Typography.Title>
            <Typography.Title level={5} >
              Welcome to ourWelcome to our Welcome to our<br></br> Remind Remind Remind Remind<br></br> Community
            </Typography.Title>
            </Flex>
            <img
              alt="avatar"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              className="w-40 block"
            />
          </Flex>
        </Flex>
      </div>
    </section>
  );
}
