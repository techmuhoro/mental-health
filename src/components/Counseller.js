import counsellerOne from "../imgs/counsellor-one.jpg";
import counsellerTwo from "../imgs/counsellor-two.jpg";
import counsellerThree from "../imgs/counsellor-three.jpg";
import counsellerFour from "../imgs/counsellor-four.jpg";

export function Counseller() {
    return (
        <div className="px-4 m-auto mb-16 md:w-5/6 md:px-0 lg:w-3/4">
            <p className="text-4xl font-bold mb-2">
                <span>Best</span>
                <span className="text-primary"> Counsellor</span>
            </p>
            <div className="mb-6 flex flex-col md:flex-row items-center">
                <p className="mb-4 self-start">
                    <span className="md:block">All of our counsellors have a minimum qualification </span>
                    <span> of Masters in Psychology or Psychiatry</span>
                </p>
                <button className="border-primary border text-primary px-12 py-2 rounded-xl block md:ml-auto items-start hover:bg-primary hover:text-white transition-all duration-300">See all</button>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-stretch">
                <div className="border border-grey-300 w-64 p-2 rounded-lg mb-6">
                    <div className="w-full h-50">
                        <img className="w-full h-full mb-4" src={counsellerOne} alt="" />
                    </div>
                    <p className="text-center font-bold text-lg">Willock Smith</p>
                    <p className="text-center text-gray-400">Pyschologist</p>
                </div>
                <div className="border border-grey-300 w-64 p-2 rounded-lg mb-6">
                    <div className="w-full h-50">
                        <img className="w-full h-full mb-4" src={counsellerTwo} alt="" />
                    </div>
                    <p className="text-center font-bold text-lg">Goodluck Dias</p>
                    <p className="text-center text-gray-400">Pyschologist</p>
                </div>
                <div className="border border-grey-300 w-64 p-2 rounded-lg mb-6">
                    <div className="w-full mb-4">
                        <img className="w-full h-50" src={counsellerThree} alt="" />
                    </div>
                    <p className="text-center font-bold text-lg">Jon Kiasaki</p>
                    <p className="text-center text-gray-400">Pyschologist</p>
                </div>
            </div>
        </div>
    );
}