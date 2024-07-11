import logoFPTUni from "../../../public/img/Logo_FPT_Education.png";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full shadow-md border-t-2 p-3 border-primary">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex justify-center items-center mb-4 md:mb-0">
          <img src={logoFPTUni} className="w-40 md:w-80" />
        </div>

        <div className="mb-4 md:mb-0 text-center md:text-left">
          <div className="flex flex-col text-gray items-center md:items-start">
            <h1 className="text-lg md:text-2xl font-bold text-black">
              Các nội dung chính
            </h1>
            <div className="hover:text-primary cursor-pointer">
              Trí tuệ nhân tạo
            </div>
            <div className="hover:text-primary cursor-pointer">Bán dẫn</div>
            <div className="hover:text-primary cursor-pointer">Diễn đàn</div>
            <div className="hover:text-primary cursor-pointer">Blog</div>
            <div className="text-primary hover:text-blue cursor-pointer font-bold">
              Đại học FPT Đà Nẵng
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1 text-center md:text-left items-center md:items-start">
          <h1 className="text-lg md:text-2xl font-bold text-black">
            Đại học FPT Đà Nẵng
          </h1>

          <div className="mt-4">
            <div className="flex flex-col md:flex-row items-center text-primary">
              <CiLocationOn className="text-xl mr-1" />
              <div className="flex text-center md:text-left">
                <div>Địa Chỉ: </div>
                <div className="text-gray">
                  Khu đô thị FPT Đà Nẵng, P.Hòa Hải, Q.Ngũ Hành Sơn, TP Đà Nẵng
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col md:flex-row items-center text-primary">
              <FaPhoneAlt className="text-xl mr-1" />
              <div className="flex text-center md:text-left">
                <div>Hotline liên hệ: </div>
                <div className="text-gray">(0236) 730 0999</div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col md:flex-row items-center text-primary">
              <MdEmail className="text-xl mr-1" />
              <div className="flex text-center md:text-left">
                <div>Email: </div>
                <div className="text-gray">dnuni@fe.edu.vn</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center text-lg font-bold text-primary mb-2 mr-0 md:mr-5">
              Kết nối với chúng tôi
            </div>
            <div className="flex space-x-4">
              <FaTwitter className="border border-gray-400 w-10 h-10 p-2 rounded-full text-blue" />
              <FaYoutube className="border border-gray-400 w-10 h-10 p-2 rounded-full text-red" />
              <FaFacebookF className="border border-gray-400 w-10 h-10 p-2 rounded-full text-blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
