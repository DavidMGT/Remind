import { ReactNode } from "react";
import { DownOutlined } from "@ant-design/icons";
type DropDownList = {
  children: ReactNode;
  list: { key?: string; label: ReactNode | string }[];
};

const DropDownList = ({ children, list }: DropDownList) => {
  return (
    <div className="relative dropdown w-[fit-content] grow-0 }"  style={{ background: "red !important" }}>
      <div className="cursor-pointer dropdown-btn flex flex-row hover:underline">
        {children}
        <div className="arrow transition-transform no-underline w-[20px] h-[20px] bg-slate-500">
          {" "}
          <DownOutlined />
        </div>
      </div>
      <div className=" dropdown-list left-[50%] bottom-[0] translate-y-[100%] w-[fit-content] whitespace-nowrap bg-[#FFFFFF] rounded-t-[12px] rounded-[24px]  opacity-[0] transition-transform translate-x-[50px] absolute shadow-lg p-[16px] ">
        {list.map((a, idx) => (
          <div
            key={a.key ?? idx}
            className="cursor-pointer hover:underline py-[16px] text-black"
          >
            {a.label}
          </div>
        ))}
      </div>
    </div>
  );
};
export default DropDownList;
