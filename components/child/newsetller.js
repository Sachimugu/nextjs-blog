export default function Newslatter() {
  return (
    <section className="bg-gray-100 mt-4">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-xl md:text-3xl">Subscribe Newslatter</h1>

        <div className="py-4">
          <input
            type="text"
            className="input-text md:w-9/12 mx-auto py-3 px-3
                   "
            placeholder="Enter Your Email"
          />
        </div>

        <button className="mx-auto bg-orange-400 hover:bg-orange-600 px-16 md:px-20 py-3 rounded-full text-gray-50 text-md md:text-xl">
          Subscribe
        </button>
      </div>
    </section>
  );
}
