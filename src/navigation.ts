"use client";
import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";
import { locales } from "./i18n";

export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/signin": "/signin",
  "/signup": "/signup",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });