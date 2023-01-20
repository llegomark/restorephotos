import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-5 flex w-full items-center justify-between border-b-2 px-2 pb-7 sm:px-4">
      <Link href="/" className="flex w-full justify-center sm:justify-start">
        <Image
          alt="Restore Photos App Logo"
          src="/restorephotosapp.svg"
          className="h-9 w-9 sm:h-14 sm:w-14"
          width={36}
          height={36}
        />
        <h1 className="ml-2 text-3xl font-bold tracking-tight sm:text-5xl">
          restorephotos.app
        </h1>
      </Link>
      <Link href="restore" className="hidden sm:block">
        <Image
          alt="Restore Icon"
          src="/Account.svg"
          className="sm:w-10 sm:h-[34px] w-8 h-[28px]"
          width={32}
          height={32}
        />
      </Link>
    </header>
  );
}
