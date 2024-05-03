export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full px-2 py-12 lg:w-[1000px] lg:px-0"
    >
      <div id="main-container" className="space-y-8">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold">Contact</h1>
          <p className="text-gray-500">
            Jika Anda memiliki pertanyaan atau permintaan informasi, jangan ragu
            untuk menghubungi kami. Kami senang mendengar dari Anda!
          </p>
        </div>
        <form className="space-y-4">
          <div className="">
            <input
              type="text"
              name="nama"
              placeholder="Nama"
              className="w-full rounded-lg bg-gray-200 px-3 py-3 placeholder:text-black"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-lg bg-gray-200 px-3 py-3 placeholder:text-black"
            />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="w-full resize-none  rounded-lg bg-gray-200 px-3 py-3 placeholder:text-black"
          ></textarea>
          <button className="w-full rounded-lg bg-black px-2 py-2 text-white">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
