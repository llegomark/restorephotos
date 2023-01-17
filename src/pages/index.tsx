import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import Balancer from 'react-wrap-balancer'

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Restore Old and Blurred Face Photos - RestorePhotos App</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-15 mt-12">
        <h2 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
        <Balancer>Unleash the{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">power of AI</span>
          </span>{" "}
          to revive your memories -{" "}
          restore old and blurry face photos for free!</Balancer>
        </h2>
        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
        <Balancer>Bring your old and blurry face photos back to life with our Artificial Intelligence (AI) restoration service. Keep your memories alive forever, and at no cost to you - start restoring your photos today for free.</Balancer>
        </p>
        <div className="flex justify-center sm:mt-1 mt-6">
          <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 hover:bg-black/80 mr-4"
            href="/restore"
          >
            Face Restoration &rarr;
          </Link>
          <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 hover:bg-black/80"
            href="/captions"
          >
            Generate Photo Captions &rarr;
          </Link>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <p className="text-gray-500 mt-3 mb-3 sm:text-base text-sm">
          <Balancer>Please take a look at these comparison photos, which display the original image and the restored version.</Balancer>
          </p>
          <div className="flex flex-col space-y-10 mt-4 mb-10">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="Elementary Days Restored Photo"
                  src="/img20230112_15081124.png"
                  className="w-200 h-277 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="Elementary Days Restored Photo"
                  width={320}
                  height={320}
                  src="/img20230112_15081124-new.jpg"
                  className="w-200 h-277 rounded-2xl sm:mt-0 mt-2"
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