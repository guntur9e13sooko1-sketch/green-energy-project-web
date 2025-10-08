import React from "react";

export default function Banner() {
  return (
    <div
      className="w-full m-0 p-0 bg-cover bg-bottom h-[25vh] lg:h-[35vh]"
      style={{
        backgroundImage: "url('/images/bg.png')",
        maxHeight: "660px",
      }}
    >
      <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
        {/* <!--Title--> */}
        <p className="text-white font-extrabold text-3xl md:text-5xl">
          <span className="text-green-500">Green</span> Energy Project
        </p>
        <p className="text-xl md:text-2xl inline-block px-6 py-1 text-white mt-3">
          Sebuah Karya Jurnalistik Tentang Transisi Energi.
        </p>
      </div>
    </div>
  );
}
