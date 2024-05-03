export default function Footer() {
  const Socials = [
    {
      name: "Instagram",
      url: "https://img.icons8.com/parakeet-line/48/instagram-new.png",
    },
    {
      name: "Github",
      url: "https://img.icons8.com/glyph-neue/64/github.png",
    },
    {
      name: "LinkedIn",
      url: "https://img.icons8.com/pulsar-line/48/linkedin.png",
    },
  ];
  return (
    <footer className="mt-20 space-y-5 bg-gray-300 py-16 text-center">
      <div className="flex items-center justify-center gap-3">
        {Socials.map((social, i) => (
          <SocialsComponent key={i} {...social} />
        ))}
      </div>

      <p className="text-gray-500">&#169; 2024 All Right Reserved</p>
    </footer>
  );
}

/**
 *
 * @param {String} url
 * @returns
 */
// eslint-disable-next-line react/prop-types
const SocialsComponent = ({ url }) => {
  return (
    <a href="">
      <img src={url} alt="" width="24" height="24" />
    </a>
  );
};

// IG : https://img.icons8.com/parakeet-line/48/instagram-new.png

// GITHUB: https://img.icons8.com/glyph-neue/64/github.png

// LINKED : https://img.icons8.com/plumpy/48/linkedin-2--v1.png
