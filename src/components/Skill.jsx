/* eslint-disable react/prop-types */
export default function Skill() {
  const skillsProgram = [
    "HTML",
    "CSS",
    "Javascript",
    "Mysql",
    "MonggoDB",
    "Firebase",
  ];

  const skillsLibrary = [
    "React JS",
    "Next JS",
    "Express JS",
    "Node JS",
    "TailwindCSS",
    "GSAP",
    "Framer Motion",
    "Hono JS",
  ];

  const experiences = [
    {
      title:
        "Project-Based Virtual Intern : BTPN Syariah Fullstack Developer x Rakamin Academy",
      experience:
        "Pengalaman sebagai Pengembang Fullstack di BTPN Syariah: Memperkenalkan penggunaan framework Vue.js, mengeksplorasi kedalaman bahasa pemrograman Java, menguasai bahasa pemrograman Golang dan penggunaan MySQL, yang menghasilkan pembuatan aplikasi fullstack sebagai proyek akhir.",
      year: 2023,
      duration: 0,
    },
    {
      title:
        "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka (Cloud Computing Cohort)",
      experience:
        "Partisipasi saya dalam program ini memberi saya pemahaman yang mendalam tentang cloud computing dan meningkatkan keterampilan saya dalam pengembangan aplikasi berbasis cloud. Selain itu, hal itu juga membantu saya membangun jaringan profesional yang kuat di industri teknologi. Program Bangkit Academy telah menjadi tonggak penting dalam perjalanan saya untuk mengejar karir di bidang cloud computing.",
      year: 2023,
      duration: 1,
    },
  ];

  return (
    <section id="section" className="py-12">
      <div
        id="skill"
        className="mx-auto w-full space-y-8 px-2 lg:w-[1000px] lg:px-0"
      >
        <h1 className="text-center text-3xl font-bold">Experience & Skills</h1>

        <div
          id="container"
          className="flex w-full flex-col justify-between gap-10 lg:flex-row"
        >
          <div id="skills-left" className="w-full lg:w-6/12">
            {experiences.map((experience, i) => (
              <Experience key={i} {...experience} />
            ))}
          </div>

          <div id="right" className="w-full lg:w-6/12">
            <SkillsSection
              skillsProgram={skillsProgram}
              skillsLibrary={skillsLibrary}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience({ title, experience, year = 2020, duration = 1 }) {
  const formattedYear = `${year} - ${year + duration}`;
  return (
    <div id="experience" className="flex gap-5 space-y-2">
      <div id="line">
        <div className="relative h-full w-1 bg-black  before:absolute before:-left-1  before:top-2 before:z-20 before:h-3 before:w-3 before:rounded-full before:bg-black before:content-['']"></div>
      </div>
      <div id="experience-info" className="w-full">
        <h4 className="font-bold">{title}</h4>
        <p className="text-gray-700">{experience}</p>
        <h4 className="font-bold">{formattedYear}</h4>
      </div>
    </div>
  );
}

const SkillList = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((item) => (
        <div
          key={item}
          className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const SkillsSection = ({ skillsProgram, skillsLibrary }) => {
  return (
    <div
      id="skill"
      className="ml-4 flex flex-col space-y-5 lg:flex-row lg:space-y-0"
    >
      <div>
        <h4 className="mb-2 font-bold">Programming Skills</h4>
        <SkillList skills={skillsProgram} />
      </div>
      <div>
        <h4 className="mb-2 font-bold">Library Skills</h4>
        <SkillList skills={skillsLibrary} />
      </div>
    </div>
  );
};
