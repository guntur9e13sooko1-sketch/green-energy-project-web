import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Paragraph from "../../components/blog/paragraph";
import Title from "../../components/blog/title";
import Divider from "../../components/blog/divider";
import Blockquote from "../../components/blog/blockquote";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import dynamic from "next/dynamic";
import "dayjs/locale/id";
import dayjs from "dayjs";

const Iframe = dynamic(() => import("../../components/blog/iframe"));
const Blog = () => {
  return (
    <>
      <Header />
      <div className="bg-black font-sans leading-normal tracking-normal">
        {/* <!--Title--> */}
        <div className="text-center pt-16 md:pt-32  pb-6">
          <h1 className="font-bold break-normal text-3xl md:text-5xl text-white">
            Manifestasi Pelik Transisi Energi
          </h1>
          <div className="flex justify-center items-baseline gap-3">
            <p className="text-sm md:text-base mt-1 text-white ">
              Penulis: <span className="font-bold">Alfian Assauqiy</span> |
              Editor: <span className="font-bold">Puja Pratama Ridwan</span>
            </p>
            <div
              style={{
                width: "1px",
                backgroundColor: "white",
                display: "inline-block",
                height: "16px",
              }}
            ></div>
            <p className=" text-green-500 font-bold">
              {dayjs().locale("id").format("DD MMMM YYYY")}
            </p>
          </div>
        </div>

        {/* <!--image--> */}
        <div
          className="container w-full max-w-6xl mx-auto  bg-cover rounded"
          style={{
            backgroundImage:
              "url('https://www.prococommodities.com/wp-content/uploads/2020/03/power-header_1600x900_acf_cropped.jpg')",
            height: "75vh",
          }}
        ></div>

        {/* <!--Container--> */}
        <div className="container  max-w-5xl mx-auto -mt-32 mb-11">
          <div className="mx-0 sm:mx-6">
            <div
              className="bg-gray-900 w-full p-8 md:p-24 text-xl md:text-2xl text-gray-300 leading-normal"
              style={{ fontFamily: ["Georgia", "serif"] }}
            >
              {/* <!--Post Content--> */}
              {/* <!--Lead Para--> */}
              <Paragraph>
                Tepat November tahun 2021, Presiden Joko Widodo mengikrarkan
                komitmen nyata atas perubahan iklim yang terjadi di berbagai
                belahan dunia di Conference of Parties (COP) 26 yang digelar di
                Glasgow. Setahun setelahnya pada COP 27 yang digelar di Mesir
                pada 2022 lalu, Wakil Presiden Ma’ruf Amin juga menyampaikan
                beberapa komitmen Indonesia untuk mengurangi emisi karbon di
                dunia.
              </Paragraph>
              <Paragraph>
                Pernyataan Joko Widodo dan Ma’ruf Amin tersebut tentu tak bisa
                lepas dari komitmen Indonesia pada Paris Agreement dalam COP
                ke-21 pada 2015 lalu. Pada perjanjian maha sakral untuk merawat
                bumi tersebut, setiap negara yang menandatangani perjanjian
                tersebut kemudian menyusun Nationally Determined Carbon (NDC)
                yang menjadi cetak biru dari langkah-langkah dan komitmen setiap
                negara untuk menurunkan emisi karbon.
              </Paragraph>
              <Paragraph>
                Komitmen untuk menurunkan emisi karbon tersebut juga disertai
                target untuk menghentikan kenaikan suhu bumi pada angka tepat
                dua derajat saja. Dalam buku The Uninhabitable Earth karya David
                Wallace-Wells yang juga ditulis setelah dirinya menguliti
                beberapa jurnal penelitian dan melakukan wawancara kepada
                beberapa pakar, kondisi dimana terjadi kenaikan suhu bumi yang
                lebih dari dua derajat dapat diproyeksikan sebagai sebuah
                bencana yang amat mengerikan.
              </Paragraph>
              <Paragraph>
                Kenaikan suhu bumi dikatakan dapat menyebabkan bencana banjir,
                kebakaran, kelaparan, kekurangan air, hingga tenggelamnya
                beberapa bagian bumi lantaran mencairnya es di Artika. Dalam
                tulisannya, es abadi Artika tercatat mengandung 1,8 triliun ton
                karbon atau lebih dari dua kali lipat dari yang sekarang ada
                pada atmosfer bumi. Yang artinya, jika es abadi Artika mencair
                tentu akan ada 1,8 triliun ton karbon yang akan lepas ke
                atmosfer serta berdampak parah pada kenaikan suhu yang semakin
                menjadi.
              </Paragraph>
              <Paragraph>
                Selain itu, dalam proyeksi Peter Wadhams yang juga dibahas David
                Wallace, ada hal disebut dengan albedo effect. Es adalah benda
                berwujud padat yang memantulkan cahaya matahari kembali ke
                antariksa dan bukan menyerapnya. Yang artinya makin sedikit es,
                makin banyak cahaya matahari yang terserap sebagai pemanasan
                global.
              </Paragraph>
              <Paragraph>
                Dalam The Uninhabitable Earth, David memproyeksikan bahwa dalam
                pemanasan lima derajat saja banyak bagian dunia yang bakal tak
                bisa didiami manusia. Dengan kenaikan suhu enam derajat, manusia
                akan mustahil untuk bekerja fisik di luar ruangan pada musim
                panas di Lembah Misisipi dan timur pegunungan Rocky Amerika
                Serikat. Dengan kondisi tersebut, suhu di Bahrain akan memicu
                hipotermia bahkan kepada orang yang sedang terlelap.
              </Paragraph>
              <Paragraph>
                Jika peradaban saat ini tak mampu menghentikan emisi gas rumah
                kaca, 5 persen seluruh penduduk dunia akan kebanjiran setiap
                tahun pada tahun 2100. Sementara dalam kondisi yang sama Jakarta
                akan diproyeksikan tenggelam seluruhnya pada 2050.
              </Paragraph>
              <Paragraph>
                Tak ayal dengan seluruh proyeksi apokalips tersebut, Presiden
                Joko Widodo dan Wakil Presiden Ma’ruf Amin menjadi banyak
                menjanjikan dan menunjukkan komitmen nyata atas penurunan emisi
                karbon karena sadar akan “sumbangan” emisi karbon Indonesia yang
                cukup banyak meskipun beberapa di antaranya cukup kontradiktif
                dengan realita.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12672110/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12672110/?utm_source=embed&utm_campaign=visualisation/12672110"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Menurut data dari British Petroleum Statistical Energy Report
                2022, Indonesia menjadi negara peringkat sepuluh dari 93 negara
                produsen emisi karbon hasil produksi energi tertinggi di dunia.
                Laporan BP menunjukkan bahwa di tahun 2021, emisi karbon yang
                dihasilkan dari produksi energi Indonesia berada di angka 572,5
                juta ton. Angka tersebut cukup jangkung sekaligus menyeramkan
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12606533/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12606533/?utm_source=embed&utm_campaign=visualisation/12606533"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                BP juga berhasil merekam data jumlah emisi karbon yang
                dihasilkan Indonesia dari proses produksi energi. Angka tersebut
                menunjukkan kenaikan yang cukup eksplosif. 1965 adalah tahun
                pertama yang masuk dalam pencatatan BP, pada tahun tersebut
                emisi karbon dari produksi energi Indonesia berada di angka
                20,14 juta ton. Kini, angka tersebut sudah mencapai 572,47 juta
                ton di tahun 2021. Bahkan pada tahun-tahun pasca Paris
                Agreement, emisi karbon dari produksi energi Indonesia masih
                membengkak perlahan.
              </Paragraph>
              <Divider />
              <Title>Penggunaan Energi Untuk Produksi Listrik Indonesia</Title>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648599/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648599/?utm_source=embed&utm_campaign=visualisation/12648599"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              {/* <div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a className='flourish-credit' href='https://public.flourish.studio/visualisation/12648599/?utm_source=embed&utm_campaign=visualisation/12648599' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div> */}
              <Paragraph>
                Faktor utama tingginya emisi karbon dari produksi energi bisa
                terjadi karena penggunaan masif dari energi kotor untuk
                mengenyangkan listrik negara. Menurut catatan Statistik
                Ketenagalistrikan, produksi energi listrik Indonesia masih
                didominasi dari sumber daya batu bara pada 2020 dan 2021. Di
                tahun 2020, produksi energi dengan batu bara berada di angka
                180,87 TWh (Terawatt Hour). Sementara itu, produksi listrik dari
                sumber daya kotor lain seperti Minyak Bumi dan Gas Alam
                masing-masing berada di angka 6,76 dan 28,58 TWh.
              </Paragraph>
              <Paragraph>
                Pada tahun 2021, produksi listrik dari sumber daya batu bara
                semakin meningkat menjadi 189,96 TWh. Tak hanya itu, produksi
                listrik dari gas alam juga mengalami kenaikan menjadi 56,27 TWh.
                Meskipun demikian, produksi listrik dari EBT (Energi Baru
                Terbarukan) juga naik menjadi 31,5 TWh dan Air menjadi 24,7 TWh.
                Tercatat juga terjadi sedikit penurunan produksi listrik dari
                sumber daya minyak bumi sebanyak -1,63 persen dari tahun 2020.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12646984/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12646984/?utm_source=embed&utm_campaign=visualisation/12646984"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Jika dilihat secara persentase melalui data yang tertera dalam
                laporan tahunan ESDM yang berjudul “Statistik Ketenagalistrikan
                2021”, kapasitas terpasang dari PLTU (Pembangkit Listrik Tenaga
                Uap) yang berkuasa di antara semua pembangkit listrik di tahun
                2021 dengan persentase di angka 43,88 persen Disusul di bawahnya
                oleh PLTGU (Pembangkit Listrik Tenaga Gas dan Uap) dengan
                persentase di angka 16,65 persen.
              </Paragraph>
              <Paragraph>
                Menariknya, PLTA (Pembangkit Listrik Tenaga Air) menjadi kuda
                hitam dan berada pada urutan ketiga sebagai pembangkit listrik
                dengan kapasitas terpasang paling tinggi dengan persentase di
                angka 8,03 persen. Urutan di bawahnya diduduki oleh PLTG
                (Pembangkit Listrik Tenaga Gas) dengan persentase 7,18 persen.
                Sayangnya, perbandingan pembangkit listrik dari energi bersih
                dan kotor masih cukup terlihat timpang.
              </Paragraph>
              <Paragraph>
                Tentunya perbandingan dengan persentase masih belum cukup
                menunjukkan kesenjangan atas penggunaan energi bersih dan kotor
                sebagai sumber produksi listrik. Jika dilihat berdasarkan
                bilangan real kapasitas terpasang pada pembangkit listrik di
                Indonesia, cukup jelas terlihat bahwa PLTU menjadi pembangkit
                listrik kesayangan dengan kapasitas terpasang paling besar.
                Kapasitas terpasang PLTU di tahun 2017 berada di angka 26.733,07
                megawatt dan terus melonjak setiap tahunnya hingga berada di
                angka 32.705,36 megawatt. Angka-angka di atas cukup membuktikan
                bahwa Indonesia masih nyaman dalam pelukan PLTU dan sangat
                tergila-gila dengan energi kotor untuk memasok aliran listrik
                negara.
              </Paragraph>
              <Paragraph>
                Padahal menurut Dr. Rachmawan Budiarto, S.T., M.T. yang
                merupakan seorang Peneliti Energi dan Dosen Department of
                Nuclear Engineering and Engineering Physics Universitas Gadjah
                Mada masih banyak sekali teknologi pengembangan pembangkit
                listrik yang bahkan belum tersentuh di Indonesia yang
                notabenenya memiliki banyak keunggulan.
              </Paragraph>
              <Blockquote>
                “Wah semuanya masih terbuka lebar ya. Luar biasa. Bahkan yang
                dianggap banyak orang teknologi mature, matang, tidak bisa
                dikembangkan lagi, air misalnya. PLTA itu luar biasa. Masih
                banyak ruang inovasi yang berkembang, yang masih belum
                diimplementasi. Bahkan di PLTA, kita di PLTA ini agak berkurang
                perhatiannya ya. Terserap dengan berbagai macam hiruk pikuk
                energi terbarukan yang lain. Tapi itu bagus kok. Dari sisi lain
                itu bagus kok. Di satu sisi bagus. Tapi di satu sisi saya ambil
                contoh PLTA. Kalau kita menyebutkan dengan istilah teknisnya ya,
                PLTA heat rendah, ultra low heat. Kemudian pump storage yang
                bukan konvensional. Pump storage yang inovatif, yang storagenya
                itu bermacam-macam. Bisa pakai seperti kantung. Bukan hanya
                danau tapi bisa semacam kantung besar dan seterusnya. Nah, itu
                masih tersedia luar biasa. Jadi turbin yang masih bisa kita
                eksplorasi itu turbin low heat dan seterusnya. Apalagi yang
                lain. Dan misalnya pembangkit listrik tenaga surya. Kita
                nampaknya hanya berkutat di photovoltaic. Tapi kita masih bisa
                masuk ke pembangkit listrik surya yang solar thermal power
                plant. Itu belum. Belum dijamah. Jadi secara teknik photovoltaic
                itu tidak memanfaatkan panas, bukan memanfaatkan suhunya. Yang
                memanfaatkan suhunya itu teknologi lain, Solar power plant. Wah
                itu belum. Kita belum masuk kesana. Turbin angin misalnya.
                Turbin angin yang belum di eksplorasi itu vertica assist turbine
                dan juga turbin angin dengan kecepatan angin rendah sampai
                menengah ya. Beda dengan Eropa utara yang produktivitas atau
                sangat banyak inovasi dengan kecepatan angin yang tinggi”,
                jelasnya.
              </Blockquote>
              <Paragraph>
                Menariknya, tim Green Energy Project juga bertanya kepada Didiet
                Haryo Wicaksono selaku Climate and Energy Team Leader Greenpeace
                Indonesia perihal apakah benar bahwa energi baru memang amat
                mahal seperti yang selama ini sering dinarasikan. Menurutnya,
                fakta bahwa energi baru terbarukan memang cenderung mahal adalah
                benar, tetapi jika dibandingkan dengan energi kotor yang
                dilabeli murah dengan segudang nilai eksternalitasnya seperti
                dampak ke lingkungan hingga masyarakat, nominal mahal untuk
                energi baru terbarukan cenderung lebih rendah.{" "}
              </Paragraph>
              <Blockquote>
                “Kalau pemerintah melihat hanya melihat kata murah dari angka
                tersebut atau narasi tersebut yang digunakan ke masyarakat, itu
                betul. Tapi kita nggak boleh lupa murah di sini tidak hanya
                berkisaran antara harga jual beli, murah di sini kita harus
                masukkan angka eksternalitas. Apa itu angka eksternalitas?
                Dampak lingkungan, dampak kesehatan, dan hilangnya mata
                pencaharian. Kalau angka tersebut dimasukkan ke angka harga jual
                maka angka yang harus dibeli dari energi kotor itu akan sangat
                jauh jauh lebih tinggi. Karena biaya bpjs-nya masyarakat harus
                ditanggung misalnya masyarakat yang kehilangan mata
                pencahariannya harus diberikan mata pencaharian baru, itu satu.
                Yang kedua besaran lahan mungkin kalau kita ambil contoh di
                batang ada PLTU untuk menghasilkan 2000 megawat dia hanya
                membutuhkan 226 hektar lahan. Apakah jika 226 hektar lahan
                tersebut kita Ubah menjadi panel surya mampu menghasilkan 2000
                megawatt? Jawabannya tidak. 2000 megawatt akan memberikan lahan
                lebih besar dari 226 hektare, tapi enggak boleh lupa dari 2000
                megawatt PLTU Berapa besar lubang tambang atau konsesi tambang
                yang dibutuhkan untuk menghidupi PLTU tersebut ? Kalau angka
                besaran lahan tersebut ditambah dengan PLTU tersebut maka, 2000
                megawatt tidak akan membutuhkan besaran lahan sebesar PLTU dan
                konsesi tambang seperti itu.”, tuturnya.
              </Blockquote>
              <Divider />
              <Title>Menguliti Gagasan Roadmap Net Zero Emission</Title>
              <Paragraph>
                Untuk beralih ke energi bersih dan mengurangi emisi karbon,
                pemerintah Indonesia mencanangkan strategi menuju Net Zero
                Emissions di tahun 2060. Demi tercapainya rencana tersebut,
                Kementerian ESDM (Energi dan Sumber Daya Mineral) merilis
                proyeksi dan road map atau peta jalan yang akan memberikan
                gambaran capaian pada tahun-tahun yang telah ditentukan. Road
                Map tersebut dirilis sebagai siaran pers dengan nomor
                359.Pers/04/SJI/2021 dan dipublikasikan pada tanggal 8 Oktober
                2021.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12674114/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12674114/?utm_source=embed&utm_campaign=visualisation/12674114"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                ESDM memilih tahun 2022 sebagai tahun pertama dalam rancangan
                peta jalan mereka. ESDM mencanangkan akan merilis undang-undang
                EBT dan penggunaan kompor listrik untuk 2 juta rumah tangga per
                tahun. Sayangnya rencana ini pincang, UU EBT masih menjadi RUU
                di tahun 2022 hingga awal tahun 2023. Tak hanya itu,
                pendistribusian kompor listrik pun juga kandas begitu saja.
              </Paragraph>
              <Paragraph>
                Di tahun 2025 yang kian dekat, ESDM memproyeksikan bahwa bauran
                EBT akan mencapai 23 persen yang akan didominasi oleh PLTS.
                Padahal di tahun 2021, bauran EBT masih digenggam PLTA di angka
                8,03 persen. Sementara, PLTS masih hanya berada di angka 0,27
                persen.
              </Paragraph>
              <Paragraph>
                {`Di 2030, diproyeksikan kepemilikan kendaraan listrik berada di
                angka 2 juta untuk mobil dan 13 juta untuk motor. Disusul
                rancangan capaian 2031 perihal suntik mati PLTU Subcritical,
                jenis PLTU yang dinilai paling berjasa menyumbang emisi karbon
                dalam proses produksinya.`}{" "}
              </Paragraph>
              <Paragraph>
                Pada 3 April 2023, kami telah melakukan wawancara virtual dengan
                Qatro Romandhi selaku Koordinator Penyiapan Program Konservasi
                Energi Kementerian ESDM. Dalam ruang zoom tersebut, Qatro tak
                hadir sendiri. Ia hadir bersama dengan Andi Luxbinatur selaku
                analis konservasi energi, Robi Kurniawan selaku staf Direktorat
                Konservasi ESDM dan Haris Askari yang sama sekali tak bersuara
                saat wawancara itu berlangsung kecuali saat perkenalan. Meski
                hadir dalam ruang virtual tersebut, Qatro sedang tidak bisa
                berbicara sampai akhir waktu wawancara kami lantaran sedang
                melakukan rapat.
              </Paragraph>
              <Paragraph>
                Tim Green Energy Project bertanya perihal bagaimana langkah ESDM
                untuk bisa secepatnya melakukan tukar guling penggunaan energi
                kotor ke energi bersih. Robi menjelaskan bahwa akan ada beberapa
                negara maju yang akan membantu untuk melakukan early retirement
                pada PLTU. Program tersebut akan mendapatkan bantuan dana dari
                IPG (International Partner Group) yang jumlahnya diperkirakan
                akan mencapai 20 miliar dolar dan akan dipergunakan untuk
                melakukan optimalisasi early retirement dari beberapa PLTU untuk
                bisa konsisten dengan cita-cita 34 persen bauran energi baru
                terbarukan di tahun 2030.
              </Paragraph>
              <Paragraph>
                Sementara itu, Andi Luxbinatur selaku Analis Konservasi Energi
                menambahkan jawaban Robi. Menurutnya, saat ini PLTS tanpa
                baterai sudah punya harga yang terbilang murah. Namun umumnya
                PLTS belum mampu memenuhi target TKDN (Tingkat Komponen Dalam
                Negeri) yang diharuskan mencapai 40 persen.
              </Paragraph>
              <Blockquote>
                “PLTS tanpa baterai saat ini harganya sudah di bawah Rp1.000 per
                KWH, sudah di angka 900-an lah 900 rupiah per KWH.
                Permasalahannya adalah kalau untuk PLTS ini kami belum bisa,
                bukan kami ya, kita di Indonesia belum bisa untuk memenuhi
                target tkdn PLTS yang sebesar 40% tanpa adanya monopoli. Mungkin
                itu tambahannya dari saya terima kasih” tambah Andi sore itu.
              </Blockquote>
              <Paragraph>
                Sementara itu, Didiet merasa regulasi PLTS terlalu menyulitkan
                di tengah kondisi oversupply listrik Indonesia. PLTS yang
                dinilai bisa memiliki nilai ekonomis alih-alih menyelamatkan
                bumi justru diberikan regulasi pembatasan akibat oversupply
                listrik yang tetap harus diserap.
              </Paragraph>
              <Blockquote>
                “Pertama konsumen yang tadinya melirik ini sebagai peluang untuk
                mereka lebih hemat secara keekonomian, peluang untuk mereka
                misalnya merasa ini bisa jadi jalan bagi mereka untuk
                menyelamatkan lingkungan, itu (pembatasan oleh PLN) membuat
                mereka menjadi mikir dua kali. Karena ROA-nya jadi tidak masuk
                akal. Efeknya apa? Efeknya industri-industri yang sebelumnya
                menopang untuk pembangunan pembangkit-pembangkit skala rumah ini
                pun terkena imbasnya. Banyak sekali industri-industri yang
                sebenarnya menopang untuk pengembangan energi terbarukan
                akhirnya gulung tikar karena akhirnya tidak ada peminatnya lagi.
                Dan ini diakibatkan oleh kebijakannya PLN. Karena dia tidak mau
                semakin banyak orang yang memproduksi listrik dari tenaga surya.
                Karena efeknya dia harus membayar lebih besar oversupply yang
                ada di PLN yang ada di jaringan listrik mereka.”, pungkasnya.
              </Blockquote>
              <Paragraph>
                Regulasi yang dimaksudkan oleh Didiet disini adalah regulasi PLN
                yang membatasi produksi listrik PLTS yang hanya berkisar 10 - 15
                persen dari total daya yang terpasang oleh PLN. Atau
                gamblangnya, hanya akan ada sedikit penghematan biaya listrik
                pengguna PLTS dikarenakan hanya bisa menggunakan 10 - 16 persen
                total daya terpasang dari PLN. Hal tersebut yang membuat banyak
                masyarakat dan pelaku usaha berfikir dua kali untuk menggunakan
                PLTS, alat yang tak murah dan penghematan yang tak seberapa
                pula.
              </Paragraph>
              <Divider />
              <Title>
                Menyoal Adiksi Berat Indonesia Terhadap Energi Kotor
              </Title>
              <Paragraph>
                Bisa dikatakan Indonesia masih menjadi negara yang punya adiksi
                atau ketergantungan berat terhadap sumber daya energi kotor.
                Dikatakan demikian bukan tanpa alasan, menurut data dari BP
                Statistical Energy Report 2022, nama Indonesia sering menjadi
                nominasi dalam jajaran negara dengan produksi energi kotor yang
                tinggi.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648927/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648927/?utm_source=embed&utm_campaign=visualisation/12648927"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Untuk produksi batu bara misalnya, tercatat Cina memang menjadi
                negara dengan produksi batu bara tertinggi di dunia di tahun
                2021. Namun, tak mengejutkan lagi untuk melihat nama Indonesia
                muncul sebagai peringkat kedua dengan produksi batu bara
                tertinggi di dunia. BP mencatat bahwa produksi batu bara
                Indonesia berada di angka 15,15 exajoules. Sementara jika satuan
                exajoules dikonversi menjadi ton, jumlahnya bisa berada di angka
                361.851.533,4 ton di tahun 2021.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648909/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648909/?utm_source=embed&utm_campaign=visualisation/12648909"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Beralih ke gas alam, Indonesia mendapatkan peringkat 14 dalam
                jajaran negara penghasil gas alam tertinggi di tahun 2021 dengan
                total produksi sebanyak 2,13 exajoules gas alam. Jika
                dikonversikan menjadi ton, Indonesia sama saja telah memproduksi
                50.874.176 ton gas alam di tahun 2021.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648821/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648821/?utm_source=embed&utm_campaign=visualisation/12648821"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Sementara itu, produksi minyak bumi Indonesia juga cukup membuat
                begah. Di tahun 2021 Indonesia telah memproduksi 33,77 juta ton
                minyak bumi dan menjadi negara peringkat ke 24 dalam produksi
                minyak bumi tertinggi di dunia. Jumlah tersebut jika
                dikonversikan ke dalam exajoules akan setara dengan 1,41
                exajoules.
              </Paragraph>
              <Paragraph>
                Bisa dikatakan bahwa Indonesia tak hanya begah dan kecanduan
                terhadap energi kotor, namun juga bisa dikatakan belum berhasil
                tukar guling dengan energi bersih di tahun-tahun yang lalu.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648545/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648545/?utm_source=embed&utm_campaign=visualisation/12648545"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Jika dilihat berdasarkan perbandingan jumlah produksi energi
                kotor dan bersih dalam satuan exajoules, jumlahnya menunjukkan
                ketimpangan yang cukup besar. Di tahun 2021, tak satupun
                produksi sumber daya energi kotor Indonesia yang gagal mencapai
                angka 1 exajoules. Produksi energi dari sumber daya biofuel
                hanya mampu mencapai 0,31 exajoules, sementara biomassa hanya
                mampu mencapai 0,32 yang hanya memiliki selisih 0,1 exajoules
                dengan biofuel. Disusul oleh produksi energi dari sumber daya
                air di angka 0,09 exajoules.
              </Paragraph>
              <Paragraph>
                Ironisnya, sumber daya energi angin hanya mampu menghasilkan
                sebanyak 0,001584 exajoules. Sementara matahari (solar) hanya
                mencapai angka 0,000693432 exajoules.
              </Paragraph>
              <Paragraph>
                Labilnya Indonesia dalam Paris Agreement cukup terlihat dengan
                makin melambungnya produksi energi via sumber daya batu bara.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12648567/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12648567/?utm_source=embed&utm_campaign=visualisation/12648567"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Jika dilihat dari segi konsumsi, Indonesia tercatat mengonsumsi
                sebanyak 3,28 exajoules batu bara di tahun 2021. Sementara,
                Indonesia mengonsumsi masing-masing 2,83 dan 1,33 exajoules
                minyak bumi dan gas alam di tahun yang sama.
              </Paragraph>
              <Paragraph>
                Konsumsi sumber daya air dan biofuel hanya berada di angka 0,23
                dan 0,21 exajoules. Sementara, Indonesia konsumsi energi
                matahari dan angin benar-benar berada pada angka nol besar.
                Kondisi miris ini tak cukup sampai disitu, peningkatan konsumsi
                dari sumber daya energi bersih juga mengalami peningkatan secara
                lambat bak jalan siput.
              </Paragraph>
              <Divider></Divider>
              <Paragraph>
                <span className="font-bold  text-2xl mb-3 block">
                  Tingginya Produksi Batu bara Tanpa Komitmen Ramah Lingkungan
                </span>
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12685614/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12685614/?utm_source=embed&utm_campaign=visualisation/12685614"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Laporan BP Statistical Energy Report juga berhasil mencatat
                kenaikan produksi batu bara Indonesia sejak tahun 1981 hingga
                2021. Dalam laporan tersebut, tercatat bahwa di tahun 2013
                produksi batu bara Indonesia berada di angka 43,37 juta ton.
                Meski menurun di tahun-tahun berikutnya, produksi batu bara
                Indonesia kembali mencuat naik di tahun 2018 dan 2019 dengan
                masing-masing produksi di angka 557,77 dan 616,16 juta ton.
                Sempat turun di tahun 2020, namun kembali naik di tahun 2021.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/story/1822797/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/1822797/?utm_source=embed&utm_campaign=visualisation/1822797"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Di tahun 2021, sebaran tambang batu bara berada di angka 1.226
                dengan berbagai macam jenis izin. Sementara, total luas izin
                tambang berada di angka 4.771.906 hektare. Berdasarkan laporan
                ESDM yang bertajuk Grand Strategy Mineral dan Batubara, jumlah
                perusahaan dengan IUP (Izin Usaha Pertambangan) di seluruh
                Indonesia berjumlah 1.136 dengan luas 3.328.236 hektare.
              </Paragraph>
              <Paragraph>
                Sementara, perusahaan yang sudah mengantongi izin PKP2B
                (Perjanjian Karya Pengusahaan Pertambangan Batu Bara) berjumlah
                83 dengan luas 1.399.463 hektare dan perusahaan yang mengantongi
                IUPK (Izin Usaha Pertambangan Khusus) berjumlah 7 dengan luas
                34.207 hektare.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/14087130/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/14087130/?utm_source=embed&utm_campaign=visualisation/14087130"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Berdasarkan laporan tahunan tiap perusahaan batu bara Indonesia,
                perusahaan Bumi Resource menjadi perusahaan dengan produksi batu
                bara tertingi pada tahun 2021 dengan total produksi di angka
                52,7 juta ton, disusul oleh Adaro Energy dan Bayan Resource
                dengan total produksi batu bara masing-masing di angka 52,7 dan
                37,6 juta ton.
              </Paragraph>
              <Paragraph>
                Dari sekian banyak perusahaan batu bara di Indonesia, Adaro
                Energy dan Bukit Asam adalah dua nama yang cukup menarik
                perhatian dalam industri batu bara di Indonesia. Meski bukan
                menjadi perusahaan yang paling banyak memproduksi batu bara di
                Indonesia, dua perusahaan ini menjadi yang paling terbuka
                perihal informasi perusahaannya. Hal tersebut tercermin dari
                paparan perusahaan dalam Public Expose 2022 pada kanal Youtube
                Indonesia Stock Exchange.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12649120/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12649120/?utm_source=embed&utm_campaign=visualisation/12649120"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Dari situs resmi dua perusahaan tersebut tercatat jumlah
                produksi masing-masing perusahaan mengalami kenaikan sejak tahun
                2017 hingga 2019. Namun, di tahun 2020 kedua perusahaan tersebut
                sama-sama mengalami penurunan produksi. Di tahun 2019, produksi
                batu bara Adaro Energy berada di angka 58,03 juta ton. Produksi
                tersebut menurun menjadi 54,53 juta ton di tahun 2022.
                Sementara, produksi batu bara Bukit Asam tahun 2019 berada di
                angka 29,07 juta ton dan turun menjadi 24,84 juta ton di tahun
                2020.
              </Paragraph>
              <Paragraph>
                Sekretaris PT. Adaro Energy, Mahardika dalam Public Expose 2022
                yang digelar pada 12 September 2022 lalu menyampaikan bahwa{" "}
                <Link
                  href={"https://www.youtube.com/watch?v=mTg1G-GNKvo"}
                  target="_blank"
                  className="link"
                >
                  PT Adaro Energy
                </Link>{" "}
                tetap memiliki target produksi batu bara di tahun 2022 pada
                angka 58 - 60 juta ton. Sementara, di acara yang sama Farida
                Thamrin selaku Direktur Keuangan dan Manajemen Risiko{" "}
                <Link
                  href={
                    "https://www.youtube.com/watch?v=sSoNtxcNKoI&list=PLCNhB9UaGLBHJCbAz7PkGB04Shc-HUY35&index=19"
                  }
                  target="_blank"
                  className="link"
                >
                  PT Bukit Asam
                </Link>{" "}
                menargetkan produksi batu bara full year tahun 2022 di angka 36
                juta ton.
              </Paragraph>
              <Paragraph>
                Untuk itu, selayaknya fitrah perusahaan yang memang akan
                menargetkan revenue yang tinggi, tak heran mengapa Adaro Energy
                dan Bukit Asam tetap akan berkomitmen meningkatkan produksinya
                di tahun-tahun mendatang. Namun dari beberapa riset media yang
                kami lakukan, hampir seluruh “pemain” industri batu bara tak
                berkomitmen untuk mengurangi angka produksi.
              </Paragraph>
              <Paragraph>
                Padahal pada 2019, pemerintah Indonesia menetapkan aturan
                pembatasan produksi batu bara pada 489 juta ton. Sementara pada
                tahun tersebut, produksi batu bara nasional berada pada angka
                616,9 juta ton. Hal tersebut menunjukkan inkosistensi pemerintah
                Indonesia untuk berkomitmen mengurangi energi kotor.
              </Paragraph>
              <Divider />
              <Title>Celah Bolong Solusi Kendaraan Listrik</Title>
              <Paragraph>
                Dalam berbagai rencana pemerintah untuk mengurangi emisi, mobil
                listrik menjadi salah satu kartu as yang diklaim mujarab untuk
                menurunkan emisi. Bahkan dalam road map yang dirancang ESDM,
                pada tahun 2030 ditargetkan sudah ada sebanyak 2 juta mobil
                listrik dan 13 juta motor listrik yang dimiliki masyarakat.
                Selain itu, agenda suntik mati perlahan kendaraan konvensional
                akan dilakukan sejak 2040 hingga 2050. Tahun 2040 dirancang
                sebagai tahun tanpa penjualan motor konvensional kemudian
                disusul oleh tahun 2050 dengan matinya seluruh penjualan mobil
                konvensional.
              </Paragraph>
              <Paragraph>
                Menurut data dari berbagai situs resmi perusahaan otomotif yang
                memproduksi mobil listrik, harga mobil listrik kini masih bisa
                dikatakan cukup mahal dan sulit dijangkau.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12654384/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12654384/?utm_source=embed&utm_campaign=visualisation/12654384"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Hingga kini, perusahaan otomotif yang berhasil menjual harga
                mobil listrik paling receh adalah Wuling dengan Air EV Standard
                Range-nya yang dibanderol pada angka 243 juta rupiah, disusul
                oleh Air EV Long Range yang dibanderol pada angka 299 juta
                rupiah. Sementara sisanya, sudah berada di atas angka 300 juta
                rupiah.
              </Paragraph>
              <Paragraph>
                Kini timbul pertanyaan besar, apakah masyarakat Indonesia punya
                daya beli yang memadai untuk berpaling pada kendaraan listrik
                secepat mungkin?
              </Paragraph>
              <Paragraph>
                Pada 2022 lalu, Jongkie D Sugiarto selaku ketua Gaikindo
                (Gabungan Industri Kendaraan Bermotor Indonesia) mengklaim bahwa
                daya beli masyarakat Indonesia terhadap kendaraan masih berada
                di angka 300 juta rupiah ke bawah karena sejalan dengan PDB per
                kapita Indonesia.
              </Paragraph>
              <Paragraph>
                Sementara ketika ditanyakan perihal nasib masyarakat yang kurang
                mampu untuk beralih ke kendaraan listrik. Robi menjelaskan bahwa
                yang menyebabkan tingginya harga tersebut adalah baterai, untuk
                itu akan ada insentif dalam pembelian kendaraan listrik baik
                roda dua maupun empat.
              </Paragraph>
              <Blockquote>
                “Kalau lihat komposisinya itu kan kurang lebih baterainya. Ya
                baterainya yang harganya menyebabkan Harga jual kendaraan
                listrik itu telah lebih tinggi nah itu yang kemudian dorong oleh
                pemerintah dengan memberikan insentif ya. Termasuk di kendaraan
                motor roda dua kendaraan roda empat. Nah ini yang kemudian
                dilakukan pengembangan oleh pemerintah yang artinya pemerintah
                memberikan insentif untuk kendaraan untuk baterainya gitu-gitu
                ya.” tuturnya.
              </Blockquote>
              {/* <Paragraph>
                Dalam konferensi pers yang disiarkan langsung pada kanal youtube
                Info GATRIK pada 18 Januari 2022, bisa disimpulkan bahwa sebaran
                SPKLU dan SPBKLU secara timpang didominasi oleh wilayah DKI
                Jakarta dengan total 101 SPKLU dan 217 SPBKLU. Dapat disimpulkan
                juga bahwa jumlah SPKLU dan SPBKLU di wilayah Pulau Jawa masih
                mendominasi..
              </Paragraph> */}
              <Paragraph>
                Tentu untuk mendorong pertumbuhan penggunaan kendaraan listrik,
                fasilitas SPKLU (Stasiun Pengisian Kendaraan Listrik Umum) dan
                SPBKLU (Stasiun Penukaran Baterai Kendaraan Listrik Umum) harus
                terus dikembangkan. Pasalnya, sebaran SPKLU dan SPBKLU masih
                cukup jakartasentris.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12696488/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12696488/?utm_source=embed&utm_campaign=visualisation/12696488"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Dalam konferensi pers yang disiarkan langsung pada kanal youtube
                Info GATRIK pada 18 Januari 2022, bisa disimpulkan bahwa sebaran
                SPKLU dan SPBKLU secara timpang didominasi oleh wilayah DKI
                Jakarta dengan total 101 SPKLU dan 217 SPBKLU. Dapat disimpulkan
                juga bahwa jumlah SPKLU dan SPBKLU di wilayah Pulau Jawa masih
                mendominasi.
              </Paragraph>
              <Paragraph>
                Tentu untuk mendorong peralihan menuju kendaraan listrik secepat
                mungkin perlu dilakukan pemerataan sebaran SPKLU dan SPBKLU di
                seluruh wilayah Indonesia. Menurut Andi saat ini SPKLU kini
                sudah tersedia di seluruh kantor PLN UP3 Provinsi.
              </Paragraph>
              <Blockquote>
                “Sebenarnya untuk SPKLU itu untuk seluruh kantor UP3 Provinsi
                PLN sudah ada SPKLU. Gak perlu khawatir, untuk UP3 di kota-kota
                besar sudah ada. Bahkan saya sempat juga nengokin SPKLU yang ada
                di Mataram Lombok sana di kantor UP3 itu juga sudah ada, artinya
                untuk penggunaan lingkup dalam kota terutama kota-kota besar itu
                sudah hadir.” ungkapnya.
              </Blockquote>
              <Paragraph>
                Untuk mempercepat masyarakat agar hijrah menuju kendaraan
                listrik, Robi juga melanjutkan bahwa akan ada banyak cara
                meningkatkan minat masyarakat untuk segera beralih menuju
                kendaraan listrik. Mulai dari inisiasi SPKLU, insentif
                perpajakan, komponen perpajakan yang dilonggarkan hingga anti
                ganjil genap.
              </Paragraph>
              <Blockquote>
                “Kemudian juga infrastrukturnya dengan menginisiasi beberapa
                spklu ya. Kemudian dari sisi insentif perpajakan dan sejumlah
                komponen pajak yang kemudian dilonggarkan untuk kendaraan
                listrik termasuk juga tadi yang sudah di highlight oleh Mas
                Andi, jadi tidak terkena ganjil genap ya terus kemudian ada juga
                Kemudian beberapa fasilitas lain yang diberikan oleh pemerintah
                untuk mendorong tadi ya mendorong beberapa variabel yang dapat
                mempengaruhi minat masyarakat untuk mengadopsi kendaraan
                listrik”, katanya.
              </Blockquote>
              <Paragraph>
                Sementara itu, menurut Didiet proses realisasi kendaraan listrik
                harusnya lebih difokuskan untuk kendaraan publik. Pendapatnya,
                jika memang realisasi kendaraan listrik pribadi masih
                menggunakan listrik dari PLTU hasilnya akan setali tiga uang.
              </Paragraph>
              <Blockquote>
                “Nah ini yang sangat berbahaya sebenarnya, yang perlu kita
                lakukan, yang ingin Greenpeace lakukan adalah mendorong
                peralihan kendaraan listrik ini lebih ke basis kendaraan publik
                atau kendaraan massal. Karena dengan demikian pertama, dampak
                lingkungan yang dihasilkan baik itu langsung maupun tidak
                langsung akan menjadi lebih sedikit dari konsep yang pribadi.
                Tidak hanya di Indonesia sebenarnya di seluruh dunia kita
                mendorong hal ini, jadi beralih saja tidak cukup kalau kendaraan
                tersebut masih bersifat perorangan karena jumlahnya akan terus
                bertambah, artinya jika jumlah bertambah,artinya jika jumlahnya
                terus bertambah, di hulunya terus dikeruk, selesai digunakan
                akan jadi limbah, dan limbahnya akan jadi masalah baru untuk
                kita kedepannya. jadi peralihan atau transisi kendaraan ini tak
                akan menimbulkan atau mem memberikan ruang perbedaan yang cukup
                signifikan misalnya karena sifatnya tetap industri. Lalu
                permasalahan yang lain yang ditimbulkan juga didorong
                menggunakan kendaraan listrik tidak lain dan tidak bukan PLN,
                negara perlu konsumsi listriknya ada yang menyerap. Cara paling
                sederhana ya itu didorong masyarakatnya beralih ke kompor
                listrik misalnya, beralih ke kendaraan listrik yang dikasih
                subsidi sangat besar misalnya. Jadi kalau sumber energi yang
                digunakan untuk menyalakan kendaraan listrik itu dari PLTU maka
                gak ada perbedaan yang signifikan sebenarnya terhadap
                pengurangan emisi itu sendiri. Yang ada, permasalahan baru yang
                ditimbulkan.” tuturnya lengkap.
              </Blockquote>
              <Divider />
              <Title>Nikel, Mobil Listrik dan Kesengsaraan</Title>
              <Paragraph>
                Dengan dicanangkannya berbagai strategi pengembangan dan
                stimulus penggunaan mobil listrik yang tak hanya di Indonesia,
                tentu produsen mobil listrik harus memacu angka produksinya.
                Namun, sebagai negara yang memiliki produksi nikel yang paling
                tinggi di dunia, Indonesia memilih untuk melakukan ekspor nikel
                besar-besaran untuk bahan baku pembuatan baterai mobil listrik.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12697892/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12697892/?utm_source=embed&utm_campaign=visualisation/12697892"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Di tahun 2020, Indonesia melahirkan angka produksi nikel
                sebanyak 771 ribu ton. Angka tersebut mengalami kenaikan hingga
                memiliki angka produksi mencapai 1 juta ton di tahun 2021. Tentu
                saja hal ini memperlihatkan bahwa Indonesia banjir sumber daya
                nikel.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12697929/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12697929/?utm_source=embed&utm_campaign=visualisation/12697929"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                INSG (International Nickel Study Group) dan NRCan (Natural
                Resources Canada) bahkan pernah mencatat bahwa Indonesia
                berhasil menjadi negara dengan distribusi produksi tertinggi di
                seluruh dunia dengan persentase di angka 30,4 persen.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/story/1819254/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/1819254/?utm_source=embed&utm_campaign=visualisation/1819254"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Sebaran tambang nikel di Indonesia bisa dikatakan cukup banyak.
                Jika dilihat berdasarkan jenis perizinan, perusahaan tambang
                yang mengantongi izin berada di angka 338. Jumlah tersebut
                terbagi menjadi 3 jenis izin, yakni IUP Eksplorasi dengan total
                izin sebanyak 4. Sementara izin, IUP OP dengan total izin
                sebanyak 328 dan KK OP sebanyak 6 izin.
              </Paragraph>
              {/* <Paragraph>
                <span className="font-bold uppercase">
                  PENJELASAN JENIS IZIN
                </span>
              </Paragraph> */}
              <Paragraph>
                Ekspor nikel Indonesia bisa dibilang juga cukup sombong, di
                tahun 2021 Indonesia memiliki volume ekspor nikel di angka
                166.331 ribu ton. Angka tersebut naik hingga 534,.047 ribu ton
                di tahun 2022.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12698054/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12698054/?utm_source=embed&utm_campaign=visualisation/12698054"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Data-data di atas melahirkan konklusi bahwa Indonesia berhasil
                mendapatkan produksi yang gemuk dari eksplorasi yang cukup
                masif. Tak heran beberapa perusahan produsen mobil listrik,
                melirik Indonesia dalam hal industri nikel yang notabenenya
                berfungsi sebagai bahan baku produksi baterai mobil listrik.
              </Paragraph>
              <Paragraph>
                Sayangnya, berbagai perusahaan nikel menunjukkan laku tata
                kelola yang buruk di tengah eksplorasi yang masif. Beberapa
                permasalahan dan konflik agraria hingga kerusakan lingkungan
                kerap terjadi karena hal tersebut.
              </Paragraph>

              <Iframe>
                {/* <div className="bg-red-500 text-white w-full h-44">Image</div> */}
                <iframe
                  src="/static/map/index.html"
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                    left: 0,
                    overflow: "hidden",
                  }}
                  frameBorder={0}
                ></iframe>
                <div style={{ height: "100vh" }}></div>
              </Iframe>
              <Paragraph>
                Dalam waktu satu tahun ke belakang ada tiga perusahaan nikel
                yang kerap menyita perhatian publik lantaran permasalahan yang
                timbul karena tercatat membuat hubungan yang buruk dengan
                masyarakat sekitar.
              </Paragraph>
              <Paragraph>
                Yang pertama ada{" "}
                <Link
                  href={
                    "https://projectmultatuli.org/perempuan-obi-bertahan-di-tengah-gusuran-industri-nikel-torang-dibuat-mati-perlahan-lahan/"
                  }
                  target="_blank"
                  className="link"
                >
                  PT. Trimegah Bangun Persada
                </Link>{" "}
                yang berlokasi di Pulau Obi, Maluku Utara. Dalam beberapa
                laporan yang telah rilis, PT. Trimegah Bangun Persada pernah
                melakukan penggusuran tanah warga. Tak sampai disitu, PT
                Trimegah Bangun Persada bahkan juga menggunakan tanah sengketa
                tanpa izin.
              </Paragraph>
              <Paragraph>
                Hal yang tak kalah menyedihkan juga terjadi di Halmahera Tengah,
                Provinsi Maluku Utara.{" "}
                <Link
                  href={
                    "https://betahita.id/news/detail/7992/mereka-yang-melawan-dan-tersingkir-lantaran-nikel.html?v=1664358309"
                  }
                  target="_blank"
                  className="link"
                >
                  PT Weda Bay Nickel
                </Link>{" "}
                tercatat pernah melakukan pembebasan lahan seenak jidat dengan
                mematok harga lahan seharga 8 ribu rupiah, bahkan nominal
                tersebut juga diturunkan menjadi 2.500 rupiah yang tak bahkan
                lebih murah dari sebungkus indomie ayam bawang. Masyarakat
                setempat juga mengklaim bahwa PT. Weda Bay Nickel juga mencemari
                laut dan udara akibat aktivitas pertambangan. Sedihnya, di tahun
                2013 lalu bahkan ada salah satu warga Desa Lelilef yang
                dipenjara karena tuduhan mengancam karyawan PT Weda Bay Nickel.
              </Paragraph>
              <Paragraph>
                Selain itu,{" "}
                <Link
                  href={
                    "https://projectmultatuli.org/perempuan-obi-bertahan-di-tengah-gusuran-industri-nikel-torang-dibuat-mati-perlahan-lahan/"
                  }
                  target="_blank"
                  className="link
                  "
                >
                  PT. Gema Kreasi Perdana
                </Link>{" "}
                juga pernah melakukan penerobosan lahan milik warga Roko-Roko
                Raya, Konawe Kepulauan, Sulawesi Tenggara. Selain tiga kasus di
                atas masih banyak kasus yang ditimbulkan di tahun-tahun
                sebelumnya.
              </Paragraph>
              <Iframe>
                <iframe
                  src="https://flo.uri.sh/visualisation/12674146/embed"
                  title="Interactive or visual content"
                  className="flourish-embed-iframe"
                  frameBorder="0"
                  scrolling="no"
                  style={{ width: "100%", height: "600px" }}
                  sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                ></iframe>
                <div
                  style={{
                    marginTop: "4px!important",
                    textAlign: "right!important",
                  }}
                  className="w-full bg-white"
                >
                  <a
                    className="flourish-credit"
                    href="https://public.flourish.studio/visualisation/12674146/?utm_source=embed&utm_campaign=visualisation/12674146"
                    target="_blank"
                    style={{ textDecoration: "none!important" }}
                  >
                    <Image
                      alt="Made with Flourish"
                      src="https://public.flourish.studio/resources/made_with_flourish.svg"
                      style={{
                        width: "105px!important",
                        height: "16px!important",
                        border: "none!important",
                        margin: "0!important",
                      }}
                      width={105}
                      height={16}
                    />{" "}
                  </a>
                </div>
              </Iframe>
              <Paragraph>
                Tentu eksplorasi nikel tak mungkin dihentikan begitu saja,
                permasalahan bak kaset lama ini perlu sebuah solusi, yakni
                dengan menetapkan ketegasan tata kelola yang semakin baik.
              </Paragraph>
              <Paragraph>
                Hingga tulisan ini dipublikasi, kami telah berupaya menghubungi
                pihak Direktorat Jenderal Minerba Kementerian ESDM dengan
                segudang pertanyaan yang telah disiapkan perihal ancaman konflik
                agraria dalam tahap transisi energi Indonesia. Pesan kami sempat
                diberi respons oleh Ridwan Djamaluddin selaku Direktur Minerba
                ESDM, namun kami tak kunjung mendapat balasan lebih lanjut.
              </Paragraph>
              <Divider />
              <Paragraph>
                <span className="font-bold  text-2xl mb-3 block">
                  Solusi di Balik Ketimpangan dan Simalakama
                </span>
                Di antara berbagai celah dan kecacatan kondisi transisi energi
                Indonesia sebagai negara yang tak lagi berumur belasan tahun,
                Rachmawan Budiarto memaparkan harusnya Indonesia bisa belajar
                dari kejadian dan inovasi yang telah lalu agar transisi energi
                ini tak menjadi kebijakan yang gagal. Ia berharap ada kejelasan
                lebih perihal transisi energi, tidak dilakukan secara terburu
                buru, berusaha untuk konsisten tanpa melewatkan inovasi dan
                bersifat inklusif.
              </Paragraph>
              <Blockquote>
                “Satu tadi jelas arahnya, dua jangan terburu buru, tiga kalau
                bisa konsisten. Mengapa saya katakan kalau bisa? Karena
                kadang-kadang kata konsisten itu menutup pintu bagi modifikasi.
                Gak baik juga, kalau kita katakan konsisten tapi kemudian
                katakanlah dua atau tiga tahun lagi ada perubahan. Wah ini gak
                konsisten, gak juga gitu. Karena ada perubahan yang memang perlu
                harus direspons, saya yakin nanti EV akan ada banyak adjustment,
                fotovoltaik akan ada banyak adjustment, nah itu jangan buru buru
                dikatakan tidak konsisten. Yang keempat karena konsistensi kita
                dinamis, maka harus dilibatkan semua, antara pemerintah,
                pebisnis dan komunitas. Jangan ditinggal, karena masing masing
                saling mengisi. Contoh yang sudah gamblang, pemerintah tak akan
                punya duit yang cukup untuk memenuhi target dari transisi
                energi, dari target akselerasi peran energi terbarukan maka
                duitnya dari pebisnis, dan jangan lupa dorongan agar memenuhi
                target itu datangnya juga dari masyarakat. Misal masyarakat
                nanti moga-moga makin terbuka lebar untuk bisa pasang
                fotovoltaik dan berbisnis dengan BUMN izin menjadi lebih jelas
                dan lebih pendek dan seterusnya. Dalam poin ini, ada banyak
                inovasi dan opsi regulasi yang belum kita buka. Contoh yang
                belum kita buka sekarang kan kita gak boleh berjualan listrik ke
                tetangga kita, siapa tau loh nanti kecamatan B bisa langsung
                berjualan ke kecamatan B kabelnya gimana? Kabelnya nyewa PLN,
                “oh gak mungkin itu”, jangan bilang gak mungkin dulu, dengan
                teknologi itu serba mungkin, dan itu sangat dimungkinkan. Jadi
                itu, yang satu jelas arahnya, yang kedua tidak terburu buru,
                ketiga konsisten dynamic ya. Keempat inklusif, harus dilibatkan
                semua itu. Satu saja gak terpenuhi, kayaknya gak akan optimal
                jalannya transisi energi.”
              </Blockquote>
              <Paragraph>
                Perihal realistis atau tidaknya, menurut Didiet dengan parahnya
                kondisi Indonesia saat ini yang tak hanya meliputi rusaknya
                lingkungan dan adiksi energi kotor, namun juga kebijakan dan
                regulasi yang kurang berpihak, transisi energi hanya akan jadi
                mimpi. Namun, hal tersebut tetap harus diupayakan bagaimanapun
                caranya.
              </Paragraph>
              <Blockquote>
                “Bicara antara mimpi dan realita, realitanya dengan dengan
                kondisi saat ini kelas itu hanya akan jadi mimpi. tapi kalau
                kita bicara apa namanya keharusan itu harus dilakukan
                bagaimanapun caranya. Karena suhu yang terus naik ini dampaknya
                tidak hanya terhadap orang-orang yang menolak atau orang-orang
                yang ingin melakukan transisi energi tapi dampaknya juga ke
                orang-orang yang tidak ingin melakukan transisi energi. Climate
                catastrophic itu tidak akan memilih apakah Anda pengusaha
                batubara atau Anda aktivis lingkungan. Semuanya akan kena.
                Mungkin itu titik tekan yang paling masuk akal saat ini apakah
                naluri kita mau mendengarnya atau enggak siapapun itu.”
              </Blockquote>
              <Paragraph>
                Transisi energi menjadi sebuah janji yang harus dibayar tuntas.
                Indonesia punya segudang celah dan kekurangan dalam memulai dan
                menjalankan transisi energi. Meski akan menjadi sebuah jalan
                yang berdarah-darah, transisi energi tetap harus dipenuhi rasa
                optimistik sembari tak menutup mata dari kritik agar suhu bumi
                terjaga dan umur bumi semakin panjang.
              </Paragraph>
              {/* <!--/ Post Content--> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
