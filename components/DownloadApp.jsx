import Image from "next/image";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoLogoAppleAppstore } from "react-icons/io5";


const DownloadApp = () => {
    return (
        <div className="container flex pt-[120px]">
            <div className="left max-w-[50%]">
                <div>
                    <h1 className="text-[40px] font-bold mb-6">
                        ডাউনলোড করুন দোয়া ও রুকিয়া (হিসনুল মুসলিম) মোবাইল অ্যাপ
                    </h1>
                    <p>এই ওয়েবসাইট থেকে আপনি প্রায় ১০০০+ দোয়া এবং প্রায় সকল দোয়ার অডিও সহ পেয়ে যাবেন ১৯ ক্যাটাগরির রুকিয়া এবং অডিও রুকিয়া এই ওয়েবসাইট থেকে আপনি প্রায় ১০০০+ দোয়া এবং প্রায় সকল দোয়ার অডিও সহ পেয়ে যাবেন ১৯ ক্যাটাগরির রুকিয়া এবং অডিও রুকিয়া</p>
                </div>
                <div className="flex gap-4 my-8">
                    <div className="flex items-center bg-white gap-3 p-1 px-4 rounded-xl">
                        <div className="text-[26px]"><BiLogoPlayStore /></div>
                        <div className="flex flex-col">
                            <small>Download on the</small>
                            <strong>App Store</strong>
                        </div>
                    </div>
                    <div className="flex items-center bg-white gap-3 p-1 px-4 rounded-xl">
                        <div className="text-[26px]"><IoLogoAppleAppstore /></div>
                        <div className="flex flex-col">
                            <small>Download on the</small>
                            <strong>Apple Store</strong>
                        </div>
                    </div>
                </div>

            </div>
            <div className="relative flex-1">
                <Image className='w-[1200px]' src='/iphone.jpg' width='230' height='500' alt='' />
            </div>
        </div>
    );
}

export default DownloadApp;