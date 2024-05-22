"use client";
import { useLocale } from "next-intl";
import {
  localeItems,
  useRouter,
  usePathname,
  defaultLocale,
} from "@/novigation";
export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    console.log(e.target.value);
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <div>
      <select
        value={locale}
        onChange={handleChange}
        className="m-10 p-1 rounded "
      >
        <option value={locale}> {GetLangData(locale).name}</option>

        {localeItems.map((item) => {
          if (item.code === locale) return null;
          return (
            <option key={item.code} value={item.code}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export function GetLangData(defaultLocale) {
  var res = {};
  {
    localeItems.map((locale) => {
      if (locale.code === defaultLocale) {
        console.log(locale);
        res = locale;
      }
    });
  }
  return res;
}
