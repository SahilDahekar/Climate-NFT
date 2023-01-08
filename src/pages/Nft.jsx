import Navbar from "../components/Navbar";
import Header from "../components/Navbar";

const Nft = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="mt-20">
        {/* <button className="font-bold mt-20 ml-20 place-content-center bg-purple-500 text-white rounded p-2 shadow-lg">
              Mint NFT
          </button> */}
        <div className="w-[300px] mx-auto py-7 px-4 mb-3 text-center bg-th-bgDark bg-opacity-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste
          eveniet explicabo officia ea aut sequi assumenda modi! Atque suscipit
          quos porro nisi eligendi totam, ad soluta a placeat laudantium! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Consectetur quo
          officiis, obcaecati a, nisi voluptate quas, natus neque eius sint quae
          quasi. Magni totam nam vero atque cumque, ab quae.
        </div>
        <div className="flex justify-center items-center">
          <button className="text-2xl border-2 border-[#000] px-4 py-1">
            Mint NFT
          </button>
        </div>
      </div>
    </>
  );
};

export default Nft;
