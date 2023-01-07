import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="relative bg-forestRed bg-cover bg-no-repeat bg-center h-[100vh] w-full flex justify-center items-center">
        <div className="absolute top-20 bg-[#ffffff08] backdrop-blur-sm flex flex-col justify-center items-center max-w-[650px] z-7">
          <h2 className="text-6xl text-[#000]">Wildfires</h2>
          <p className="text-3xl text-[#000] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, hic.
            Dolor maiores vero fuga ex molestiae cum. Illum fuga inventore
            facere illo repellendus, libero sapiente cupiditate veniam, ut
            corporis voluptates!
          </p>
        </div>
      </div>
      <div className="relative bg-iceberg bg-cover bg-no-repeat bg-center h-[100vh] w-full flex justify-center items-center">
        <div className="absolute top-72 bg-[#ffffff08] backdrop-blur-sm flex flex-col justify-center items-center max-w-[650px] z-7">
          <h2 className="text-6xl text-[#fff]">Floods</h2>
          <p className="text-3xl text-[#fff] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, hic.
            Dolor maiores vero fuga ex molestiae cum. Illum fuga inventore
            facere illo repellendus, libero sapiente cupiditate veniam, ut
            corporis voluptates!
          </p>
        </div>
      </div>
      <div className="relative bg-extreme bg-cover bg-no-repeat bg-center h-[100vh] w-full flex justify-center items-center">
        <div className="absolute flex flex-col justify-center items-center max-w-[650px] z-7">
          <h2 className="text-6xl text-[#fff]">Extreme Temperature</h2>
          <p className="text-3xl text-[#fff] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, hic.
            Dolor maiores vero fuga ex molestiae cum. Illum fuga inventore
            facere illo repellendus, libero sapiente cupiditate veniam, ut
            corporis voluptates!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
