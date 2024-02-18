import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";


const Categories = () => {
    const array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return (
        <div className="pt-4">
            <div className="flex justify-between pb-4">
                <h2 className="text-[24px] font-bold">দোয়ার ক্যাটাগরিসমূহ</h2>
                <ul className="flex gap-6 bg-[#E9E7E0] p-1 px-2 rounded-full">
                    <li className="flex gap-2 items-center p-1 px-2">
                        <p>সবগুলো দেখুন</p>
                        <IoMdArrowDropright />
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {array.map((item, i)=> <div key={i} className="bg-bg p-3 rounded-lg flex gap-4 items-center">
                    <div className="bg-[#E9E7E0] p-2 rounded-xl ">
                        <Image src='/dua.png' width='40' height='40' alt='categories_icon' />
                    </div>
                    <div>
                        <h4 className="text-[16px] font-medium mb-1">দোয়ার গুরুত্ব</h4>
                        <div className="text-[12px] flex gap-2 text-gray-500">
                            <p className="text-gray-500">সাবক্যাটাগরিঃ <span>৭</span></p> |
                            <p className="text-gray-500">সর্বমোট দোয়াঃ <span>৫২</span></p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
}

export default Categories;