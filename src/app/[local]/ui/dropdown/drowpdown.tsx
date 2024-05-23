import { ReactNode } from "react";
import { DownOutlined } from "@ant-design/icons";
type DropDownList = {
  children: ReactNode;
  list: { key?: string; label: ReactNode | string }[];
  listOffsetY?: number;
};

const DropDownList = ({ children, list, listOffsetY = 10 }: DropDownList) => {
  return (
    <div className="relative dropdown w-[fit-content]   ml-8 h-30 p-2">
      <div className="flex cursor-pointer dropdown-btn  flex-row hover:underline mt-5">
        {children}
        <div className="absolute arrow transition-transform no-underline w-[20px] h-[20px]  right-0 translate-x-[100%] origin-right  ">
          <DownOutlined />
        </div>
      </div>
      <div className="left-[50%] bottom-[0] translate-y-[100%] opacity-[0] dropdown-list transition-transform translate-x-[50px] inline-block">
        <div style={{ height: listOffsetY }} className="w-[100%]" />
        <div className="whitespace-nowrap  rounded-b-lg  absolute shadow-lg  bg-[#fff] min-w-[150px] pl-16 pr-16">
          {list.map((a, idx) => (
            <div
              key={a.key ?? idx}
              className="cursor-pointer hover:underline py-[10px] flex "
            >
              {a.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DropDownList;
