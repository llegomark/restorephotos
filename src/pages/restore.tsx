import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "../components/CompareSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import Toggle from "../components/Toggle";
import appendNewToName from "../utils/appendNewToName";
import downloadPhoto from "../utils/downloadPhoto";
import CountUp from "react-countup";
import FAQ from "../components/FAQ";
import SquigglyLines from "../components/SquigglyLines";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const uploader = Uploader({ apiKey: "free" });
const options = {
  maxFileCount: 1,
  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
  editor: { images: { crop: false } },
  styles: { colors: { primary: "#000" } },
};

const Restore: NextPage = () => {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  const [sideBySide, setSideBySide] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file: any) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName);
          setOriginalPhoto(file[0].fileUrl.replace("raw", "thumbnail"));
          generatePhoto(file[0].fileUrl.replace("raw", "thumbnail"));
        }
      }}
      width="670px"
      height="250px"
    />
  );

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: fileUrl }),
    });

    const newPhoto = await res.json();
    if (res.status !== 200) {
      setError(newPhoto);
    } else {
      setRestoredImage(newPhoto);
    }
    setLoading(false);
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center py-2">
      <Head>
        <title>Restore Blurred Face Photos - RestorePhotos App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="sm:mt-15 mt-12 flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <Balancer ratio={0.6}>
          <span className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 text-sm font-semibold text-[#1d9bf0] transition-colors hover:bg-blue-200">
            <Link href="/captions">
              Ready to elevate your photo captions with AI? Try it now!
            </Link>
          </span>
        </Balancer>
        <h2 className="font-display mx-auto mb-5 max-w-4xl text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl">
          <Balancer>
            See Your Loved Ones’ Faces in{" "}
            <span className="relative whitespace-nowrap text-[#3290EE]">
              <SquigglyLines />
              <span className="relative">Perfect Clarity</span>
            </span>{" "}
            With RestorePhotos.app
          </Balancer>
        </h2>
        <Balancer ratio={0.6}>
          <p className="mb-3 text-slate-500">
            {" "}
            <CountUp start={5000} end={7081} /> face restoration and counting.
          </p>
        </Balancer>
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="mt-0 flex w-full flex-col items-center justify-between">
              <Toggle
                className={`${restoredLoaded ? "visible" : "invisible"} mb-2`}
                sideBySide={sideBySide}
                setSideBySide={(newVal) => setSideBySide(newVal)}
              />
              {restoredLoaded && sideBySide && (
                <CompareSlider
                  original={originalPhoto!}
                  restored={restoredImage!}
                />
              )}
              {!originalPhoto && <UploadDropZone />}
              {originalPhoto && !restoredImage && (
                <Image
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl"
                  width={475}
                  height={475}
                />
              )}
              {restoredImage && originalPhoto && !sideBySide && (
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div>
                    <h2 className="mb-1 text-lg">Original Photo</h2>
                    <Image
                      alt="original photo"
                      src={originalPhoto}
                      className="relative rounded-2xl"
                      width={475}
                      height={475}
                    />
                  </div>
                  <div className="mt-8 sm:mt-0">
                    <h2 className="mb-1 text-lg">Restored Photo</h2>
                    <a href={restoredImage} target="_blank" rel="noreferrer">
                      <Image
                        alt="restored photo"
                        src={restoredImage}
                        className="relative mt-2 cursor-zoom-in rounded-2xl sm:mt-0"
                        width={475}
                        height={475}
                        onLoadingComplete={() => setRestoredLoaded(true)}
                      />
                    </a>
                  </div>
                </div>
              )}
              {loading && (
                <button
                  disabled
                  className="mt-8 w-40 rounded-full bg-black px-4 pt-2 pb-3 text-lg text-white hover:bg-black/80"
                >
                  <span className="pt-4">
                    <LoadingDots color="white" style="large" />
                  </span>
                </button>
              )}
              {error && (
                <div
                  className="relative mt-8 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <div className="flex justify-center space-x-2">
                {originalPhoto && !loading && (
                  <button
                    onClick={() => {
                      setOriginalPhoto(null);
                      setRestoredImage(null);
                      setRestoredLoaded(false);
                    }}
                    className="mt-8 rounded-full border bg-white px-4 py-2 text-lg text-black transition hover:bg-gray-100"
                  >
                    Upload New Photo
                  </button>
                )}
                {originalPhoto && !loading && (
                  <button className="mt-8 rounded-full border bg-white px-4 py-2 text-lg text-black transition hover:bg-gray-100">
                    <Link href="/captions">Generate Photo Captions</Link>
                  </button>
                )}
                {restoredLoaded && (
                  <button
                    onClick={() => {
                      downloadPhoto(
                        restoredImage!,
                        appendNewToName(photoName!)
                      );
                    }}
                    className="mt-8 rounded-full bg-black px-4 py-2 text-lg text-white transition hover:bg-black/80"
                  >
                    Download Restored Photo
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      <FAQ startId={1} endId={26} />
      <Footer />
    </div>
  );
};

export default Restore;
