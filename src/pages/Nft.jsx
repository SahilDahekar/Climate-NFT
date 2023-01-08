import Navbar from "../components/Navbar";
import Header from "../components/Navbar";

const Nft = () => {

  return (
    <>
        <Navbar/>
        <Header />
        <div>Nft</div>
        <div className="mt-20">
          <button className="font-bold mt-20 ml-20 place-content-center bg-purple-500 text-white rounded p-2 shadow-lg">
              Mint NFT
          </button>
        </div>
    </>
  )
}

export default Nft;