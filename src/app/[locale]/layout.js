import "./globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata = {
  title: "Benjamin Daly Ndiaye",
  description: "Generated by create next app",
};

export default async function LocaleLayout({ children, params }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const locale = params.locale || "fr";

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
