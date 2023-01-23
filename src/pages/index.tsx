import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import Balancer from "react-wrap-balancer";

const Home: NextPage = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center py-2">
      <Head>
        <title>Restore Old and Blurred Face Photos - RestorePhotos App</title>
      </Head>

      <Header />
      <main className="sm:mt-15 mt-12 flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <h2 className="font-display mx-auto max-w-4xl text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          <Balancer>
            Unleash the{" "}
            <span className="relative whitespace-nowrap text-[#3290EE]">
              <SquigglyLines />
              <span className="relative">Power of AI</span>
            </span>{" "}
            to Revive Your Memories - Restore Old and Blurry Face Photos for
            Free!
          </Balancer>
        </h2>

        <p className="mx-auto mt-12 max-w-xl text-lg leading-7 text-slate-700">
          <Balancer>
            Bring your photos back to life with our Artificial Intelligence (AI)
            restoration service. Our AI-powered face restoration service can
            restore your old and blurry face photos in seconds.
          </Balancer>
        </p>

        <div className="mt-6 mb-10 flex justify-center sm:mt-1">
          <Link
            className="mr-4 rounded-xl bg-black px-4 py-3 text-lg text-white hover:bg-black/80 sm:mt-10"
            href="/restore"
          >
            Face Restoration
          </Link>
          <Link
            className="rounded-xl bg-black px-4 py-3 text-lg text-white hover:bg-black/80 sm:mt-10"
            href="/captions"
          >
            Photo Captions
          </Link>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-between">
          <h2 className="font-display mx-auto max-w-4xl text-4xl font-bold tracking-normal text-slate-900 sm:text-5xl">
            <Balancer>
              From Faded to Vibrant: See the Restoration Transformation
            </Balancer>
          </h2>
          <div className="mt-4 mb-10 flex flex-col space-y-10">
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <div>
                <h2 className="mb-1 text-base text-slate-700">
                  Original Photo
                </h2>
                <Image
                  alt="Elementary Days Restored Photo"
                  src="/img20230112_15081124.png"
                  className="w-200 h-277 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="mt-8 sm:mt-0">
                <h2 className="mb-1 text-base text-slate-700">
                  Restored Photo
                </h2>
                <Image
                  alt="Elementary Days Restored Photo"
                  width={320}
                  height={320}
                  src="/img20230112_15081124-new.jpg"
                  className="w-200 h-277 mt-2 rounded-2xl sm:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;