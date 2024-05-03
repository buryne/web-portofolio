import Card from "./Card";

const contents = [
  {
    title: "Web Development",
    icon: "https://img.icons8.com/ios-glyphs/60/domain.png",
    content:
      "Pengembangan web, atau web development, adalah proses menciptakan dan memelihara situs web atau aplikasi web. Ini melibatkan serangkaian kegiatan mulai dari perancangan tampilan visual, pengkodean elemen-elemen interaktif menggunakan bahasa pemrograman seperti HTML, CSS, dan JavaScript, hingga pengelolaan basis data dan pengaturan server",
    alt: "domain",
  },
  {
    title: "AI",
    icon: "https://img.icons8.com/ios/50/000000/artificial-intelligence.png",
    content:
      "Kecerdasan Buatan (Artificial Intelligence/AI) adalah cabang ilmu komputer yang bertujuan untuk menciptakan mesin atau program komputer yang mampu melakukan tugas yang memerlukan kecerdasan manusia. Ini termasuk pemecahan masalah, pengambilan keputusan, pengenalan pola, dan bahkan interaksi manusia-mesin yang kompleks",
    alt: "artificial-intelligence",
  },
  {
    title: "Cloud",
    icon: "https://img.icons8.com/ios/50/cloud--v1.png",
    content:
      "Komputasi awan (cloud computing) adalah model penyimpanan, pengelolaan, dan pemrosesan data yang berbasis internet. Sebagai alternatif dari penyimpanan data di perangkat keras lokal, cloud computing memungkinkan akses ke sumber daya komputasi yang fleksibel dan terukur melalui internet.",
    alt: "cloud--v1ss",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 lg:px-[260px]">
      {/* <div className="absolute bg-red-500 w-full h-[550px] -z-10 left-0"></div> */}
      <div id="main-container" className="w-full">
        <div className="mb-10 w-full space-y-8 text-center">
          <h1 className="text-3xl font-bold">About</h1>
        </div>

        <div className="items-centers flex flex-wrap justify-center gap-4 lg:flex-nowrap">
          {contents.map((content, i) => (
            <Card key={i} {...content} />
          ))}
        </div>
      </div>
    </section>
  );
}
