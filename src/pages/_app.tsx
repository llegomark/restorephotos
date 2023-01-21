import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import "../styles/globals.css";
import { Provider as RWBProvider } from "react-wrap-balancer";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RWBProvider>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
        <Analytics />
      </RWBProvider>
    </>
  );
}

export default MyApp;
