import PlayersCard from "./PlayersCard";
import Advertisement from "./Advertisement";

interface Players {
  playersData: Props[];
  advertisement: Props2[];
}

interface Props {
  id: string;
  name: string;
  totalEvents: string;
  sport: string;
  img: string;
}
interface Props2 {
  id: string;
  title: string;
  description: string;
  addImg: string;
}
export default function Players({ playersData, advertisement }: Players) {
  return (
    <div className="mt-11 ">
      <h2 className="py-1.5 border-b-2 border-[#738FFF] w-fit text-2xl font-bold my-0 mx-auto lg:mx-0 dark:text-white lg:ml-5 xl:ml-0">
        Sports
      </h2>
      <div className="flex gap-3 flex-col sm:flex-row">
        <PlayersCard playersData={playersData} />
        <Advertisement advertisement={advertisement} />
      </div>
      <div className="w-full mt-[50px] flex justify-center">
        <button className="shadow-[0px_4px_8px_0px_#0000000D] bg-[#2C9CF0] text-white font-semibold text-sm px-8 py-2.5 rounded">
          See More
        </button>
      </div>
    </div>
  );
}
