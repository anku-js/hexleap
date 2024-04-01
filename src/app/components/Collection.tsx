import CollectionCard from "./CollectionCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface Collection {
  collection: Props[];
}
interface Props {
  id: string;
  name: string;
  date: string;
  day: string;
  time: string;
  img: string;
  place: string;
  action: string;
}

export default function Collection({ collection }: Collection) {
  return (
    <div className="bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] mt-14 mb-20">
      <div className="flex flex-col items-center dark:text-white">
        <h2 className="text-[50px] mt-16  font-bold text-center">
          Collection Spotlight
        </h2>
        <p className="mt-6 max-w-[918px] text-center text-sm leading-[22px]">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        <div className="flex flex-col gap-3 my-[51px] items-center md:gap-10 lg:flex-row xl:gap-20">
          <div className="hidden border border-[#2C9CF0] px-2.5 py-4 cursor-pointer lg:block">
            <FaAngleLeft className="text-[#2C9CF0] text-xl" />
          </div>
          <CollectionCard collection={collection} />
          <div className="hidden border border-[#2C9CF0] px-2.5 py-4 cursor-pointer lg:block">
            <FaAngleRight className="text-[#2C9CF0] text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
