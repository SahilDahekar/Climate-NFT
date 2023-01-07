import { useState } from "react";
import { IoIosWallet } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {

  const[navColor, setNavColor] = useState(false);

  const navbarColor = () => {
    if(window.scrollY >= 80){
      setNavColor(true);
    }
    else{
      setNavColor(false);
    }
  }

  window.addEventListener('scroll', navbarColor);

  return (
    <nav className={navColor ? "fixed top-0 bg-[#ffffff99] backdrop-blur transition-all inset-x-0 mx-auto flex justify-between items-center w-[100%] px-6 py-3 z-10" : "fixed top-0 transition-all inset-x-0 mx-auto flex justify-between items-center w-[100%] px-6 py-3 z-10"}>
        <div className="flex justify-between items-center w-[100%] max-w-[1250px]">
          <Link to="/"><h1 className="text-5xl text-[#000] font-normal">ClimFT</h1></Link>
          <ul className="flex gap-4 text-2xl">
              <Link to="/nft">
                  <li className="text-[#000] hover:underline-offset-4 hover:underline">NFT MINT</li>
              </Link>
          </ul>
          <div className="text-2xl border-2 border-[#000] px-4 py-1">
              <a className="flex justify-center items-center text-[#000]" href="#">Connect <IoIosWallet color="inherit" className="ml-2"/></a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar