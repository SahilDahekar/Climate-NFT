import { useState,useMemo } from "react";
import { IoIosWallet } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {

  const[navColor, setNavColor] = useState(false);
  const [connected, toggleConnect] = useState(false);
  const [currAddress, updateAddress] = useState('0x');

  const navbarColor = () => {
    if(window.scrollY >= 80){
      setNavColor(true);
    }
    else{
      setNavColor(false);
    }
  }

  window.addEventListener('scroll', navbarColor);

  const getAccount = async () =>  await window.ethereum.request({method: 'eth_accounts'}).then((accounts)=>{
    console.log(accounts);
    if(accounts.length === 0){
      toggleConnect(false)
    }else{
      toggleConnect(true)
    }
    updateAddress(accounts[0]);
  });
  
  async function connectWebsite() {
  
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      if(chainId !== '0x5')
      {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x5' }],
       })
      }  
      await window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts)=>{
          console.log(accounts);
  
        if (accounts.length === 0) {
          console.log(accounts);
        } else if (accounts.length > 0) {
          console.log(`Has ${accounts}`);
        }
        }).catch(console.error)
        getAccount();
  }
  
  useMemo(() => {
    getAccount();
  },[connected]);
  

  return (
    <nav className={navColor ? "fixed top-0 bg-[#ffffff99] backdrop-blur transition-all inset-x-0 mx-auto flex justify-between items-center w-[100%] px-6 py-3 z-10" : "fixed top-0 transition-all inset-x-0 mx-auto flex justify-between items-center w-[100%] px-6 py-3 z-10"}>
        <div className="flex justify-between items-center w-[100%] max-w-[1250px] mx-auto">
          <Link to="/"><h1 className="text-5xl text-[#000] font-normal">ClimFT</h1></Link>
          <ul className="flex gap-4 text-2xl">
              <Link to="/nft">
                  <li className="text-[#000] hover:underline-offset-4 hover:underline">NFT MINT</li>
              </Link>
          </ul>
          <div className="text-2xl border-2 border-[#000] px-4 py-1">
              <a className="flex justify-center items-center text-[#000]" href="#" onClick={connectWebsite}>{connected?currAddress.substring(0,15)+'...':"Connect"} <IoIosWallet color="inherit" className="ml-2"/></a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar