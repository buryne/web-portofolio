import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="mx-auto w-full  pb-12 lg:w-[1000px] lg:px-0">
      <Navbar />
      <section
        id="home"
        className="flex w-full flex-col items-center lg:flex-row"
      >
        {/* left */}
        <div className="w-full space-y-3 lg:w-2/4">
          <h3 className="relative w-fit pl-10 text-base tracking-widest text-gray-600 before:absolute before:left-0 before:top-[12px] before:h-[1px] before:w-5 before:bg-black before:content-[''] ">
            Hallo all I am
          </h3>
          <h1 className="text-6xl font-bold">Firmansyah</h1>
          <p className="leading-relaxed text-gray-700">
            Sebagai seorang mahasiswa Teknik Informatika, saya memiliki keahlian
            dalam pengembangan web dan berkeinginan untuk terus meningkatkan
            kemampuan saya sebagai seorang fullstack developer.
          </p>
          <a
            href=""
            className="inline-block border border-black px-4 py-2 transition-colors duration-200 ease-linear hover:bg-black hover:text-white"
          >
            <button>My Resume</button>
          </a>
        </div>

        {/* rigth */}
        <div className="flex w-full justify-center lg:w-2/4">
          <img
            src="/profile.png"
            title="max-verstappen"
            alt="profile-home"
            className=""
          />
        </div>
      </section>
    </header>
  );
}
