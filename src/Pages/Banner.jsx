

export default function Banner() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        <div className="mx-auto text-center">
          <h1 className="text-8xl font-extrabold sm:text-8xl">
            Save time & <span className="text-blue-600">work smarter </span>
          </h1>
          <h1 className="text-8xl font-extrabold sm:text-8xl">
            with AI Automation
          </h1>

          <p className="mt-4 sm:text-xl/relaxed font-light">
            We help you automate your workflows, automate repetitive <br />{" "}
            tasks, and elevate your business.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="border-none text-xl text-white font-bold flex items-center bg-blue-600 btn px-7 rounded-[25px] hover:bg-black"
              href="#"
            >
              Book Your Free Audit Call
            </a>
          </div>
          {/* Avter  */}
          <div className="mt-6 flex items-center justify-center gap-4 hover:gap-2 duration-300">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div>
                <h1 className="text-[24px] font-bold hover:text-blue-500">200+ Happy Clients!</h1>
                <h2 className="text-[17px] font-bold"> Join Them Naw</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
