interface Players {
  advertisement: Props2[];
}
interface Props2 {
  id: string;
  title: string;
  description: string;
  addImg: string;
}

export default function Advertisement({ advertisement }:Players) {
  return (
    <div className="bg-white dark:bg-[#3B3E47] shadow-[0px_4px_8px_0px_#0000000D] max-w-[250px] mt-0  md:max-w-[200px] my-0 mx-auto sm:mt-6 xl:max-w-[250px]">
      <div className="mx-2.5 my-2.5 border-[0.2px] border-[#006555]">
        <img
          src={advertisement[0].addImg}
          alt="advertisement"
          className="w-full"
        />
        <div className="px-2.5 ">
          <h3 className="mt-6 text-xl font-semibold	text-[#222D3A] dark:text-white">
            {advertisement[0].title}
          </h3>
          <p className="text-sm font-normal text-[#525965] dark:text-[#DFDFDF] my-2 leading-[1.4rem]">
            {advertisement[0].description}
          </p>
        </div>
      </div>
    </div>
  );
}
