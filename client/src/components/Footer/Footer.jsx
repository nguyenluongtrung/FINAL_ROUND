import logoFPTUni from "../../../public/img/Logo_FPT_Education.png"
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
export const Footer = () => {
    return (
        <div class="w-full bg-gray-100 shadow-md p-8">
            <div class="grid grid-cols-[1fr,2fr,2fr] gap-4">
                <div className="flex justify-center items-center">
                    <img src={logoFPTUni} class="w-80 mb-2" />
                </div>
                <div class="flex flex-col items-center">
                    <div class="flex flex-col space-y-2 ">
                        <h1 class="text-2xl font-bold text-orange-500 mb-5">Các nội dung chính</h1>
                        <strong class="text-lg hover:text-orange-500">Trí tuệ nhân tạo</strong>
                        <strong class="text-lg hover:text-orange-500">Bán dẫn</strong>
                        <strong class="text-lg hover:text-orange-500">Diễn đàn</strong>
                        <strong class="text-lg hover:text-orange-500">Blog</strong>
                        <strong class="text-lg  text-orange-500 hover:text-blue-500">Đại học FPT Đà Nẵng</strong>
                    </div>
                </div>


                <div>
                    <h1 class="text-2xl font-bold text-orange-500 mb-5">Đại học FPT Đà Nẵng</h1>

                    <div class="mb-4">
                        <strong class="flex items-center text-orange-500 space-x-2">
                            <CiLocationOn class="text-xl" />
                            <span>Địa Chỉ</span>
                        </strong>
                        <p class="mt-1 text-gray-700">Khu đô thị FPT Đà Nẵng, P.Hòa Hải, Q.Ngũ Hành Sơn, TP Đà Nẵng</p>
                    </div>

                    <div class="mb-4">
                        <strong class="flex items-center text-orange-500 space-x-2">
                            <FaPhoneAlt class="text-xl" />
                            <span>Hotline liên hệ</span>
                        </strong>
                        <p class="mt-1 text-gray-700">(0236) 730 0999</p>
                    </div>

                    <div class="mb-4">
                        <strong class="flex items-center text-orange-500 space-x-2">
                            <MdEmail class="text-xl" />
                            <span>Email</span>
                        </strong>
                        <p class="mt-1 text-gray-700">dnuni@fe.edu.vn</p>
                    </div>

                    <div class="flex mb-4">
                        <strong class="flex items-center text-2xl font-bold text-orange-500 mb-2 mr-5">Kết nối với chúng tôi</strong>
                        <div class="flex space-x-4">
                            <FaTwitter class="border border-gray-400 w-10 h-10 p-2 rounded-full text-xl text-blue-500" />
                            <FaYoutube class="border border-gray-400 w-10 h-10 p-2 rounded-full text-xl text-red-500" />
                            <FaFacebookF class="border border-gray-400 w-10 h-10 p-2 rounded-full text-xl text-blue-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}