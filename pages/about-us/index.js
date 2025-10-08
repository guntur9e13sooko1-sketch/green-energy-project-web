import React from "react";
import Header from "../../components/layout/header";
import Title from "../../components/blog/title";
import Paragraph from "../../components/blog/paragraph";
import Divider from "../../components/blog/divider";
import Image from "next/image";
import Banner from "../../components/home/banner";
import Footer from "../../components/layout/footer";

export default function AboutUs() {
  return (
    <>
      <Banner />
      <Header />
      <div className="bg-black font-sans leading-normal tracking-normal py-4">
        <div className="container  max-w-5xl mx-auto">
          <div className="mx-0 sm:mx-6">
            <div
              className="bg-gray-900 w-full p-8 md:p-24 mb-3 text-xl md:text-2xl  text-gray-300 leading-normal"
              style={{ fontFamily: ["Georgia", "serif"] }}
            >
              <div className="text-center">
                <Title>Tentang</Title>
              </div>
              <div className="text-justify">
                <Paragraph>
                  Green Energy Project adalah sebuah karya tugas akhir mahasiswa Sekolah
                  Tinggi Multimedia Yogyakarta angkatan 2019. Kami adalah sebuah
                  tim yang berkolaborasi dari berbagai program studi, yakni
                  Manajemen Produksi Berita, Manajemen Teknik Studio Produksi,
                  dan Animasi.
                </Paragraph>
              </div>
              <div className="text-justify">
                Green Energy Project adalah sebuah karya tugas akhir Sekolah
                Tinggi Multimedia Yogyakarta angkatan 2019. Kami adalah sebuah
                tim yang berkolaborasi dari berbagai program studi, yakni
                Manajemen Produksi Berita, Manajemen Teknik Studio Produksi, dan
                Animasi.
              </div>
              <div className="text-justify">
                <Paragraph>
                  Karya ini diproduksi dengan metode jurnalisme data dan terdiri
                  dari 3 konten berbeda. Berbagai konten yang hadir sama-sama
                  membahas tentang transisi energi di Indonesia yang penuh tanda
                  tanya akibat adiksi berat terhadap energi kotor. Ketiga konten
                  tersebut yakni:
                </Paragraph>
              </div>
              <ol className="list-decimal mx-9 text-justify">
                <li>
                  <Paragraph>
                    Longform yang menyajikan hasil liputan dalam bentuk tulisan
                    dan dilengkapi dengan visualisasi data interaktif.
                  </Paragraph>
                </li>
                <li>
                  Video Eksplanatori yang menyajikan tayangan audio visual dan
                  dilengkapi dengan visualisasi data serta soundbyte narasumber.
                </li>
                <li>
                  <Paragraph>
                    Newsgame yang membawa pemain menuju rangkaian cerita menarik
                    mengenai sebuah tempat bernama Nusantara yang dalam kondisi
                    pasca apokaliptik karena kerusakan alam akibat eksploitasi
                    sumber daya energi yang serampangan.
                  </Paragraph>
                </li>
              </ol>
              {/* Creator */}
              <div className="my-10">
                <Divider></Divider>
                <div style={{textAlign: 'center'}}>
                <Title>Kerabat Kerja</Title>
               Supervisor I: Diyah Ayu Karunianingsih, S.PT., MA <br/>
                Supervisor II: Dra. Siti Asiatun, M.M <br/>
                </div>
              </div>
              <div className="grid grid-cols-none gap-10 justify-items-stretch text-center text-white text-lg ">
                <div className="grid grid-cols-3 gap-10">
                  <div className=" flex flex-col gap-4 items-center">
                    <Image
                      src={"/images/user/Puja Pratama Ridwan.png"}
                      height={0}
                      width={0}
                      alt="banteng"
                      className="w-48 h-60 object-cover"
                      unoptimized
                    />
                    <div className="flex flex-col gap-1">
                      <span>Puja Pratama Ridwan</span>
                      <span>Produser</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center">
                    <Image
                      src={"/images/user/Elisabeth Putri Mulia.png"}
                      height={0}
                      width={0}
                      alt="banteng"
                      className="w-48 h-60 object-cover"
                      unoptimized
                    />
                    <div className="flex flex-col gap-1">
                      <span>Elisabeth Putri Mulia</span>
                      <span>Newscaster</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center ">
                    <Image
                      src={"/images/user/Alfian Assauqiy Suryo Saputra.png"}
                      height={0}
                      width={0}
                      alt="banteng"
                      className="w-48 h-60 object-cover"
                      unoptimized
                    />
                    <div className="flex flex-col gap-1">
                      <span>Alfian Assauqiy SS</span>
                      <span>Script Writer</span>
                    </div>
                  </div>
                </div>
                {/* Bottom */}
                <div className="grid grid-cols-2 gap-20 justify-items-center">
                  <div className="justify-self-end flex flex-col gap-4 items-center">
                    <Image
                      src={"/images/user/Arnand Rafif Athallah.png"}
                      height={0}
                      width={0}
                      alt="banteng"
                      className="w-48 h-60 object-cover"
                      unoptimized
                    />
                    <div className="flex flex-col gap-1">
                      <span>Arnand Rafif Athallah</span>
                      <span>Ilustrator</span>
                    </div>
                  </div>
                  <div className="justify-self-start flex flex-col gap-4 items-center ">
                    <Image
                      src={"/images/user/Ikram Nazaruddin A.I.J.png"}
                      height={0}
                      width={0}
                      alt="banteng"
                      className="w-48 h-60 object-cover"
                      unoptimized
                    />
                    <div className="flex flex-col gap-1">
                      <span>Ikram Nazaruddin A.I.J</span>
                      <span>Video Editor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
