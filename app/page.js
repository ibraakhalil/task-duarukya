import Categories from "@/components/Categories";
import Collection from "@/components/Collection";
import DownloadApp from "@/components/DownloadApp";
import DuaAudio from "@/components/DuaAudio";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RukyaCategories from "@/components/RukyaCategories";

const page = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-b from-bg to-white">
        <Header />
        <Hero />
      </div>
      <div className="container flex gap-6 my-[100px]">
        <Collection />
        <DuaAudio />
      </div>
      <div className="container">
        <Categories />
      </div>
      <div className="bg-bg mt-[140px]">
        <RukyaCategories/>
      </div>
      <div className="bg-bg">
        <DownloadApp/>
      </div>
    </div>
  );
}

export default page;