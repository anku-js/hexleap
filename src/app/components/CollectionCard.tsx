
import { Swiper, SwiperSlide } from "swiper/react";
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

export default function CollectionCard({ collection }: Collection) {

  return (
    <div className="flex lg:grid lg:rows-auto lg:grid-cols-3 md:grid md:grid-cols-2 flex-col gap-10 ">
        {collection.map(({ id, name, date, day, time, img, place, action }) => {
          return (
            <div
              key={id}
              className="bg-[url('/Bg.png')] dark:bg-[url('/Bg2.png')] bg-center object-cover shadow-[0px 8px_16px_0px_#0000001A] bg-no-repeat flex flex-col items-center h-[625px] w-[257px]"
            >
              <img src={img} alt="players collection" />
              <div className="flex flex-col items-center px-[22px] my-5">
                <h3 className="font-medium text-[17px] leading-[26px]">
                  {name}
                </h3>
                <div className="font-normal text-sm mt-2">
                  <span>{date}</span> | <span>{day}</span> | <span>{time}</span>
                </div>
                <p className="text-center text-sm font-normal text-[#525965] dark:text-[#DFDFDF] leading-[20px] mt-3">
                  {place}
                </p>
                <button className="mt-4 bg-[#1D1D1F] text-white text-xs font-medium px-10 py-2.5">
                  {action}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
// box-shadow: 0px 8px 16px 0px #0000001A;
