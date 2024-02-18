import { IoMusicalNotesSharp } from "react-icons/io5";

const DuaAudio = () => {
    return (
        <div className="bg-bg flex-1 p-6 rounded-lg" >
            <div className="flex justify-between pb-4">
                <h2 className="text-[24px] font-bold">দোয়ার অডিও</h2>
                <ul className="flex gap-6 bg-[#E9E7E0] p-1 px-2 rounded-lg">
                    <li className="flex gap-2 items-center rounded-md p-1 px-2">
                    <IoMusicalNotesSharp />
                        <p>লিস্ট</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DuaAudio;