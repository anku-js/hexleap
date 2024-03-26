import PlayersCard from "./PlayersCard";
import Advertisement from "./Advertisement";
export default function Players({ playersData, advertisement }) {
  return (
    <div className="max-w-[1250px] mx-auto pt-11">
      <h2 className="py-1.5 border-b-2 border-[#738FFF] w-fit text-2xl font-bold my-0 mx-auto lg:mx-0">
        Sports
      </h2>
      <div className="flex gap-3 flex-col lg:flex-row">
        <PlayersCard playersData={playersData} />
        <Advertisement advertisement={advertisement} />
      </div>
      <div className="w-full flex justify-center">
        <button className="shadow-[0px_4px_8px_0px_#0000000D] mt-[50px] bg-[#2C9CF0] text-white font-semibold text-sm px-8 py-2.5 rounded">
          See More
        </button>
      </div>
    </div>
  );
}
