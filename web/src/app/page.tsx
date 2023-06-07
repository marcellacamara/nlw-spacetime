import { User } from "lucide-react";
import Image from "next/image";

import nlwLogo from "../assets/nlw-spacetime-logo.svg";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Stipes */}
        <div className="absolute top-0 bottom-0 w-2 right-2 bg-stripes" />

        {/* Sign In */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full">
            <User className="w-5 h-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />

          <div className="max-x[420px] space-y-1">
            <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p>
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a className="inline-block" href="">
            CADASTRAR LEMBRANÇA
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex items-center justify-center flex-1">
          <p className="leading-relaxed text-center w-80">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  );
}
