import { CiCircleCheck } from "react-icons/ci";
export default function Workflows() {
  return (
    <section>
        <div className="w-[1100px] mx-auto mt-10 mb-10">
            <div>
            <button className="font-bold text-[22px] px-4 py-3 text-blue-600 rounded-[10px] bg-slate-300">Content block</button>
            </div>
            <div className="grid grid-cols-5">
            <div className="col-span-3">
                <h1 className="text-7xl font-bold mt-5 mb-5">Workflows with our AI <br /> automation <span className="text-blue-600">expertise</span></h1>
                <p className="text-gray-500 text-[18px] mb-6">Revolutionize tasks, reduce errors, and boost efficiency with <br /> intelligent technology, streamlining operations for unparalleled <br /> productivity.</p>
                <div >
                <div className="flex items-center gap-6 text-2xl font-normal"><span><CiCircleCheck /></span><span>Functional sections</span></div>
                <div className="flex items-center gap-6 text-2xl font-normal"><span><CiCircleCheck /></span><span>Easy to customize</span></div>
                </div>
                <button className="mt-8 btn bg-blue-600 hover:bg-black duration-300 font-bold text-white text-[20px] rounded-[25px]">Book Your Free Audit Call</button>
            </div>
            <div className="w-full col-span-2">
                <img className="w-full" src="https://framerusercontent.com/images/RIu7ujIfc3SKq931mOnyFqKaEaY.png" alt="" />
            </div>
        </div>
        </div>
    </section>
  )
}
