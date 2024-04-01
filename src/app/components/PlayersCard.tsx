interface Players {
  playersData: Props[];
}
interface Props {
  id: string;
  name: string;
  totalEvents: string;
  sport: string;
  img: string;
}
export default function PlayersCard({ playersData }: Players) {
  return (
    <div className="mt-6 flex gap-3 flex-col lg:flex lg:flex-row sm:grid sm:rows-auto sm:grid-cols-2 md:grid-cols-3">
      {playersData.map(({ id, name, totalEvents, sport, img }) => {
        return (
          <div
            className="bg-white dark:bg-[#3B3E47] px-2.5 py-2.5 my-0 mx-auto shadow-[0px_4px_8px_0px_#0000000D]"
            key={id}
          >
            <img src={img} alt="players image" />
            <div className="mt-4 dark:text-white">
              <h3 className="text-[17px] font-medium leading-5">{name}</h3>
              <div className="mt-3.5 flex gap-10 bg-[#F7F7F8] dark:bg-[#292B32] rounded-sm px-2.5 py-3">
                <div>
                  <p className="text-xs text-[#525965] dark:text-[#DFDFDF] leading-[15px] font-normal">
                    Total Events
                  </p>
                  <p className="text-sm mt-1">{totalEvents}</p>
                </div>
                <div>
                  <p className="text-xs text-[#525965] dark:text-[#DFDFDF] leading-[15px] font-normal">
                    Sport
                  </p>
                  <p className="text-sm mt-1">{sport}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// font-family: Inter;
// font-size: 14px;
// font-weight: 500;
// line-height: 16.94px;
// text-align: left;
