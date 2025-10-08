import React from "react";
import Header from "../../components/layout/header";
import Title from "../../components/blog/title";
import Paragraph from "../../components/blog/paragraph";
import Divider from "../../components/blog/divider";
import Image from "next/image";
import Banner from "../../components/home/banner";
import Footer from "../../components/layout/footer";
import ReactPlayer from "react-player";

export default function Explanatory() {
  return (
    <>
      <Banner />
      <Header />
      <div className="bg-black font-sans leading-normal tracking-normal py-4">
        <div className="container mx-auto min-h-[50vh] mb-5">
          <div className="mx-0 sm:mx-6 flex justify-center">
            <iframe
              src="https://drive.google.com/file/d/1xs4y-SQwc-UYw86n_UBlEmIdY-tJYUn0/preview"
              width="1280"
              height="720"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
