"use client";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { CaretDownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Image, message, Button } from "antd";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../language-switcher";
import DropDownList from "@/src/app/ui/dropdown/drowpdown";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link href="/signin" className="block" aria-label="Cruip">
        Sign in
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link href="/signup" className="block" aria-label="Cruip">
        Sign Out
      </Link>
    ),
  },
];
const langs: MenuProps["items"] = [
  {
    label: <div>中文</div>,
    key: "zh",
  },
  {
    label: <div>English</div>,
    key: "en",
  },
];
const dropdownRender = (menuNode: any) => (
  <div style={{ backgroundColor: "green", color: "yellow" }}>{menuNode}</div>
);
const Header = () => {
  const t = useTranslations("Index");
  const handleMenuClick = (e: any) => {
    var loacal = e["key"];
    console.log("click", loacal);
  };

  return (
    <header className="absolute w-full z-30 bg-slate-500">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                src="https://www.hanglok-tech.cn/Template/Home/img/logo.png"
                width={150}
                preview={false}
              />
            </Link>
          </div>
          <DropDownList
          listOffsetY={20}
            list={[
              {
                label: (
                  <Link href="/signup" className="block" aria-label="Cruip">
                    Sign Out
                  </Link>
                ),
              },
              {
                label: (
                  <Link href="/signin" className="block" aria-label="Cruip">
                    Sign In
                  </Link>
                ),
              },
            ]}
          >
            {t("Perpheral device")}
          </DropDownList>
          <DropDownList
            list={[
              {
                label: (
                  <Link href="/signup" className="block" aria-label="Cruip">
                    Sign Out
                  </Link>
                ),
              },
              {
                label: (
                  <Link href="/signin" className="block" aria-label="Cruip">
                    Sign In
                  </Link>
                ),
              },
            ]}
          >
           {t("Algorithm")}
          </DropDownList>
          <DropDownList
            list={[
              {
                label: (
                  <Link href="/signup" className="block" aria-label="Cruip">
                    Sign Out
                  </Link>
                ),
              },
              {
                label: (
                  <Link href="/signin" className="block" aria-label="Cruip">
                    Sign In
                  </Link>
                ),
              },
            ]}
          >
            {t("SDK")}
          </DropDownList>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in gitlinks */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <LanguageSwitcher></LanguageSwitcher>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
