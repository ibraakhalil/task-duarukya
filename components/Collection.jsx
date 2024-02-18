import { FaClock } from "react-icons/fa6";


const Collection = () => {
    const array = [1, 1, 1, 1, 1, 1]
    return (
        <div className="bg-bg w-[660px] p-6 rounded-lg" >
            <div className="flex justify-between pb-4">
                <h2 className="text-[24px] font-bold">কালেকশন</h2>
                <ul className="flex gap-6 bg-[#E9E7E0] p-1 px-2 rounded-lg">
                    <li className="flex gap-2 items-center bg-white rounded-md p-1 px-2">
                        <FaClock />
                        <p>সর্বশেষ পঠিত দোয়া</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <FaClock />
                        <p>বুকমার্কস</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <FaClock />
                        <p>পিনস </p>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {array.map((item, i) => <div key={i} className="bg-white rounded p-3">
                    <div className="text-[24px]"><FaClock /></div>
                    <h4 className="my-3">দোয়ার গুরুত্ব</h4>
                    <small>সর্বশেষ পঠিত দোয়া নং <span>১৫</span></small>
                </div>)}
            </div>
        </div>
    );
}

export default Collection;