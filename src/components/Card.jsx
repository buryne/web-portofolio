/* eslint-disable react/prop-types */
export default function Card({ icon, title, content, alt }) {
  return (
    <div className="w-full rounded-lg bg-gray-950 px-5 py-12 text-center text-white lg:w-[400px]">
      <div className="inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-2 py-2">
        <img width="60" height="60" src={icon} alt={alt} />
      </div>
      <h4 className="mb-4 mt-2 font-bold">{title}</h4>
      <p className="text-gray-300">{content}</p>
    </div>
  );
}
