export default function Advertisement({ advertisement }) {
  return (
    <div className="bg-white shadow-[0px_4px_8px_0px_#0000000D] mt-0 max-w-[240px] my-0 mx-auto lg:mx-0 lg:mt-6">
      <div className="px-2.5 py-2.5">
        <img src={advertisement[0].addImg} alt="advertisement"/>
        <div>
          <h3 className="mt-7 text-xl font-semibold	text-[#222D3A]">{advertisement[0].title}</h3>
          <p className="text-sm font-normal text-[#525965] mt-2 leading-6">{advertisement[0].description}</p>
        </div>
      </div>
    </div>
  );
}

