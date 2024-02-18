import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaMouse } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="container flex">
            <div className="left w-1/2 mt-20">
                <div className="flex flex-col items-start">
                    <p className="text-[16px] text-text bg-frame py-1 px-3 rounded">আস-সালামু 'আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারকাতুহু</p>
                    <h1 className="text-[40px] font-bold mt-4 leading-[60px]">দোয়া ও যিকরঃ কুরআন মাজীদের রাব্বানা দোয়া এবং মাসনূন আমল</h1>
                </div>
                <div>
                    <p className="text-[16px] my-6 leading-[30px]">
                        এই ওয়েবসাইট থেকে আপনি প্রায় ১০০০+ দোয়া এবং প্রায় সকল দোয়ার অডিও সহ পেয়ে যাবেন ১৯ ক্যাটাগরির রুকিয়া এবং অডিও রুকিয়া
                    </p>

                </div>
                <div>
                    <div className="flex items-center justify-between bg-white p-1 pl-3 rounded-lg my-4 gap-2 w-[450px] border">
                        <div className="flex items-center gap-2 flex-1">
                            <BsFillSearchHeartFill />
                            <input className="w-full" type="text" placeholder="এখানে সার্চ করুন..." />
                        </div>
                        <div className="bg-primary rounded text-white flex items-center py-2 px-3 gap-2">
                            <button>সার্চ করুন</button>
                            <IoIosSearch />
                        </div>
                    </div>
                    <p className="text-[13px]">আপনার জানা এবং অজানা সকল দোয়া এখানে সার্চ করতে পারবেন ---</p>
                </div>

                <div className="flex gap-2 items-center mt-16">
                    <FaMouse />
                    <p>স্ক্রল করুন</p>
                </div>
            </div>
            <div className="right w-1/2 relative">
                <Image className="absolute top-[-50px] right-0" src='/moon_hero.png' width='500' height='600' alt='moon' />
            </div>
        </div>
    );
}

export default Hero;