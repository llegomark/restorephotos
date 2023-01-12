import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Blurred Face Photos Restorer</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-24 mt-20">
        <h2 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Restoring old and blurry{" "} 
          face photos{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">using AI.</span>
          </span>{" "}
        </h2>
        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Bring your old and blurry face photos back to life with our Artificial Intelligence (AI) restoration service. Keep your memories alive forever, and at no cost to you - start restoring your photos today for free.
        </p>
        <Link
          className="bg-black rounded-full text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80"
          href="/restore"
        >
          <p className="font-bold text-lg sm:text-xl">RESTORE YOUR MEMORIES NOW</p>
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <p className="text-gray-500 mt-3 mb-3 sm:text-base text-sm">
            Please take a look at this restoration of a photo of me from 2007 when I was in high school.
          </p>
          <div className="flex flex-col space-y-10 mt-4 mb-10">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  src="/original.png"
                  className="w-80 h-80 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  width={320}
                  height={320}
                  src="/restored.png"
                  className="w-80 h-80 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  src="/img20230112_16102985231.png"
                  className="w-80 h-80 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  width={320}
                  height={320}
                  src="/img20230112_16102985231-new.png"
                  className="w-80 h-80 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  src="/img20230112_15511412.png"
                  className="w-80 h-80 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  width={320}
                  height={320}
                  src="/img20230112_15511412-new.png"
                  className="w-80 h-80 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  src="/img20230112_15202451.png"
                  className="w-80 h-80 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  width={320}
                  height={320}
                  src="/img20230112_15202451-new.png"
                  className="w-80 h-80 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  src="/img20230112_15542521_0002.png"
                  className="w-342 h-512 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  width={320}
                  height={320}
                  src="/img20230112_15542521_0002-new.png"
                  className="w-342 h-512 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  src="/img20230112_1513311312.png"
                  className="w-342 h-512 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  width={320}
                  height={320}
                  src="/img20230112_1513311312-new.png"
                  className="w-342 h-512 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  src="/img20230112_16020511.png"
                  className="w-342 h-512 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="High School Restored Photo"
                  width={320}
                  height={320}
                  src="/img20230112_16020511-new.png"
                  className="w-342 h-512 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="Restored Photo"
                  src="/20230111_022818.jpg"
                  className="w-484 h-536 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="Restored Photo"
                  width={320}
                  height={320}
                  src="/20230111_022818-new.jpg"
                  className="w-484 h-536 rounded-2xl sm:mt-0 mt-2"
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
