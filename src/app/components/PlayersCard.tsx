export default function PlayersCard() {
  return (
    <div className="bg-white shadow-[0px_4px_8px_0px_#0000000D] w-fit mt-6">
      <div className="px-2.5 py-2.5">
        <img src="/Player1.jpg"/>
        <div className="mt-4">
          <h3 className="text-[17px] font-medium leading-5">Sacramento River Cats</h3>
          <div className="mt-3.5 flex gap-10 bg-[#F7F7F8] rounded-sm px-2.5 py-3">
            <div>
              <p className="text-xs text-[#525965] leading-[15px] font-normal">Total Events</p>
              <p className="text-sm mt-1">48 Events</p>
            </div>
            <div>
              <p className="text-xs text-[#525965] leading-[15px] font-normal">Sport</p>
              <p className="text-sm mt-1">Baseball</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// font-family: Inter;
// font-size: 14px;
// font-weight: 500;
// line-height: 16.94px;
// text-align: left;


