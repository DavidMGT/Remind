import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'zh_cn'],
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh_cn|en)/:path*','/signup','/signin']
};