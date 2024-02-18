import Image from "next/image";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";

const Header = () => {
    return (
        <div className="container flex justify-between py-3
        4">
            <div className="flex items-center">
                <Image className="mr-3" src='/dua-logo.svg' width='60' height='60' alt='Logo' />
                <h1 className="text-[24px] font-bold">দোয়া রুকিয়া</h1>
            </div>
            <ul className="flex gap-8 items-center text-gray-800">
                <li className="header_btn">হোম</li>
                <li className="header_btn">সকল ক্যাটাগরি</li>
                <li className="header_btn">সকল দোয়া</li>
                <li className="header_btn">দোয়ার বই</li>
                <li className="header_btn">রুকিয়া</li>
                <li className="header_btn">অন্যান্য</li>
            </ul>
            <div className="flex items-center">
                <div className="flex justify-center items-center p-1 border rounded text-xl mr-2">
                    <MdOutlineWbSunny />
                </div>
                <div className="flex items-center bg-primary text-white py-1 px-3 rounded">
                    <button className="mr-2">সাপোর্ট করুন</button>
                    <IoMdHeart />
                </div>
            </div>
        </div>
    );
}

export default Header;