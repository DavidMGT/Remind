import { ReactNode } from 'react';

type DropDownList = {
  children: ReactNode;
  list: { key?: string; label: ReactNode | string }[];
  listOffsetY?: number;
};

const DropDownList = ({ children, list, listOffsetY }: DropDownList) => {
  return (
    <div className="relative dropdown w-[fit-content]">
      <div className="cursor-pointer dropdown-btn flex flex-row hover:underline">
        {children}
        <div className="absolute arrow transition-transform no-underline w-[20px] h-[20px] bg-slate-500 right-0 translate-x-[100%] origin-right"></div>
      </div>
      <div className="left-[50%] bottom-[0] translate-y-[100%] opacity-[0] dropdown-list transition-transform translate-x-[50px] inline-block">
        <div style={{ height: listOffsetY }} className="w-[100%]" />
        <div className="whitespace-nowrap  rounded-t-[12px] rounded-[24px] absolute shadow-lg p-[16px] bg-[#fff]">
          {list.map((a, idx) => (
            <div key={a.key ?? idx} className="cursor-pointer hover:underline py-[16px] ">
              {a.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DropDownList;
