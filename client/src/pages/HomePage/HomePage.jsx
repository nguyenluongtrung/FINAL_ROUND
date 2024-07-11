import { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css";
import Marquee from "react-fast-marquee";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import AOS from "aos";
import { FaUserCheck } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { LuCheckCheck } from "react-icons/lu";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { GoDot } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BiHome } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

export const HomePage = () => {
  const images = [
    "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/450596092_873760104782983_8543438945309424177_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=6ph2zcDOx28Q7kNvgET4xR1&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYDKR1rAe-Yq--FLYFSJoo5yfw0b_5YyOZetlEH9MM_mHQ&oe=66950EC9",
    "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/450304283_873674494791544_8446779523882542849_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=IZ8MKT-Rpg0Q7kNvgFcp9Ir&_nc_ht=scontent.fsgn2-8.fna&oh=00_AYCE4XmsQ6irbwTUqKQeOU3dV0kQrOWr8Zw7UR9-K8b8ug&oe=66950A09",
    "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/450590928_873757761449884_8372129257328785630_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=mePRGGxUfTwQ7kNvgGVWDGp&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYDrEu_AlMPFI96jwKNaroJOmGE3MNN0_L4NjGvqWdOJig&oe=66952CAD",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out", // Loại easing cho hiệu ứng
      delay: 50, // Độ trễ trước khi hiệu ứng bắt đầu (ms)
      once: true, // Chỉ chạy hiệu ứng một lần khi cuộn xuống
    });
  }, []);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  const itemForLoop = [
    {
      img: "https://fptcity.vn/wp-content/uploads/truong-fpt-university.jpg",
      content: "Trường ĐH FPT công bố điểm",
    },
    {
      img: "https://fpt-semiconductor.com/wp-content/uploads/cwv-webp-images/2022/11/image-10.jpg.webp",
      content: "Chuyên ngành bán dẫn ở ĐH FPT",
    },
    {
      img: "https://daihoc.fpt.edu.vn/wp-content/uploads/2022/06/theo-duoi-nganh-tri-tue-nhan-tao.jpg",
      content: "Chuyên Ngành AI ở ĐH FPT",
    },
    {
      img: "https://fpt-semiconductor.com/wp-content/uploads/cwv-webp-images/2024/03/DESIGN-FSEMI-_-THUMB-WEBSITE-13.jpg.webp",
      content: "Nên theo học chuyên ngành bán dẫn?",
    },
    {
      img: "https://imagev3.vietnamplus.vn/1200x630/Uploaded/2024/xtsqr/2023_12_12/ong-nguyen-van-khoa-tong-giam-doc-fpt-chia-se-ve-chu-de-fpt-tu-chip-nguon-den-giac-mo-ban-dan-anh-giang-huy1-5921.jpg.webp",
      content: "FPT và giấc mơ bán dẫn",
    },
    {
      img: "https://daihoc.fpt.edu.vn/wp-content/uploads/2022/06/hoc-tri-tue-nhan-tao-o-dau.jpg",
      content: "Trí tuệ nhân tạo ở đại học FPT",
    },
  ];

  const achievement = [
    {
      name: "97%",
      image: <FaUserCheck className="size-16" />,
      text: "Khách hàng hài lòng",
    },
    {
      name: "1,000+",
      image: <MdPostAdd className="size-16" />,
      text: "Bài viết hàng ngày",
    },
    {
      name: "100%",
      image: <LuCheckCheck className="size-16" />,
      text: "Thông tin cập nhật chính xác",
    },
  ];

  const postAi = [
    {
      img: "https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      content: "Đại học FPT và công cuộc làm chủ AI",
    },
    {
      img: "https://i-vnexpress.vnecdn.net/2021/05/17/FPT-1621246824.jpg",
      content: "FPT trí tuệ nhân tạo TOÀN DIỆN",
    },
    {
      img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.15752-9/449886059_453293727600534_1503606143306351165_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=UJuUr_aunbcQ7kNvgFAoz5w&_nc_ht=scontent.fsgn2-8.fna&oh=03_Q7cD1QFK9mMiIDM6m8N94jqgMFdXfWnWxzQhddQfD6Dwz2aN3A&oe=66B7C712",
      content: "Trợ lí ảo tổng đài",
    },
    {
      img: "https://daihoc.fpt.edu.vn/wp-content/uploads/2022/06/theo-duoi-nganh-tri-tue-nhan-tao.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR22G7hgUfwkCwvKNRTHFeQ043lwQvfl8OtWGPFY75ld7sC-PW19H9-Ye5g_aem_fCekC_i6NUgw6Fq82Y7gTg",
      content: "Theo đuổi chuyên ngành trí tuệ  nhân tạo",
    },
  ];

  return (
    <>
      {!introComplete && <IntroScreen onComplete={handleIntroComplete} />}
      {/* 1. Bg có ánh và video của FPT + hiệu ứng chữ, thư viện các kiểu */}
      {introComplete && (
        <div>
          <div
            className="relative w-full h-screen overflow-hidden"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-30">
              <h1 className="text-6xl font-bold">Sự kiện tưng bừng</h1>
              <p className="text-lg mt-4">Jambojee đổ bộ nhà F</p>
            </div>
          </div>
          {/* 2. component có trong https://www.discourse.org/# */}
          <div className="flex flex-col items-center justify-center mt-20 ">
            <div
              className="font-bold text-4xl"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              THU HÚT<span className="text-primary"> NGƯỜI DÙNG</span>
            </div>
            <div
              className="mt-6 text-3xl font-semibold"
              data-aos="fade-right"
              data-aos-offset="400"
            >
              Mỗi ngày có hơn <span className="text-5xl text-green">500</span>{" "}
              người truy cập
            </div>
            <div
              className="mt-5 text-2xl"
              data-aos="fade-left"
              data-aos-offset="400"
            >
              Khám phá thêm nhiều nội dung mới ở trong trang web
            </div>
            {/* Để 6 component */}
            <div
              className="flex mt-20 justify-center"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              <div className="rotate-left flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10 bg-white">
                <img
                  src={images[0]}
                  className="w-full h-72 object-cover mb-4 rounded-lg"
                  alt="Image"
                />
                <div className="font-bold">
                  SỰ KIỆN JAMBO TRƯỜNG ĐH FPT Đà Nẵng
                </div>
              </div>
              <div className="rotate-right flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10  animate-pulse">
                <img
                  src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/449444002_481201158104830_433083719325365606_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=mtUh58-8MkEQ7kNvgHdY6CK&_nc_ht=scontent.fsgn2-9.fna&oh=03_Q7cD1QG4pP4eUr0Yo7Z3-IGEHP5hoYLlg9OrzxnAVbSrofI_2A&oe=66B7D124"
                  className="w-full h-72 object-cover mb-4 rounded-lg"
                  alt="Image"
                />
                <div className="font-bold">VÒNG CHUNG KẾT CODE CAMP</div>
              </div>
              <div className="rotate-left flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10">
                <img
                  src={images[2]}
                  className="w-full h-72 object-cover mb-4 rounded-lg"
                  alt="Image"
                />
                <div className="font-bold">
                  SINH VIÊN HÁO HỨC ĐƯỢC THAM GIA VÀO HỘI TRẠI
                </div>
              </div>
            </div>
            <div
              className="flex mt-32 justify-center"
              data-aos="fade-up"
              data-aos-offset="100"
            >
              <div className="rotate-right flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10 animate-pulse">
                <img
                  src="https://daihoc.fpt.edu.vn/wp-content/uploads/2022/06/theo-duoi-nganh-tri-tue-nhan-tao.jpg"
                  className="w-full h-72 object-cover mb-4 rounded-lg"
                  alt="Image"
                />
                <div className="font-bold">
                  THÔNG TIN MỚI VỀ CHUYÊN NGÀNH AI CỦA ĐH FPT
                </div>
              </div>
              <div className="rotate-left flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10">
                <img
                  src="https://www.vista.gov.vn/vn-uploads/news/2023/11-2023/29-11-2023/7.jpg"
                  className="w-full h-72 object-cover mb-4 rounded-lg"
                  alt="Image"
                />
                <div className="font-bold">NGÀNH BÁN DẪN TẠI ĐH FPT</div>
              </div>
              <div className="rotate-right flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10 animate-pulse">
                <img
                  src="https://danang12-school.fpt.edu.vn/wp-content/uploads/2022/11/About_VN_20210914.webp"
                  className="w-full h-72 object-cover mb-4 rounded-lg"
                  alt="Image"
                />
                <div className="font-bold">ĐH FPT KHÁT VỌNG ĐỔI THAY</div>
              </div>
            </div>
          </div>
          {/* 3. component có trong https://wordpress.com */}
          <div className="mt-32">
            <div
              className="text-center font-bold text-4xl"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-offset="400"
            >
              NỘI DUNG CÓ NGUỒN TIN RÕ RÀNG UY TÍN
            </div>

            <div data-aos="fade-up" data-aos-delay="100" data-aos-offset="400">
              <Marquee
                autoFill
                pauseOnHover
                className="h-64 rounded-lg bg-white mt-10"
              >
                {itemForLoop.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center mr-10"
                  >
                    <div className="relative group w-96 h-60 rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt={`item-${index}`}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-black text-white py-2 px-4 hover:bg-primary">
                          {item.content}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" data-aos-offset="400">
              <Marquee
                autoFill
                pauseOnHover
                direction="right"
                className="h-64 rounded-lg bg-white mt-6"
              >
                {itemForLoop.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center mr-10"
                  >
                    <div className="relative group w-96 h-60 rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt={`item-${index}`}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-black text-white py-2 px-4 hover:bg-primary">
                          {item.content}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
          <div className="mt-28 bg-primary py-16 ">
            <div
              className="text-center font-bold text-4xl text-white"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              MỘT SỐ BÀI VIẾT{" "}
              <span className="text-black text-outline-white text-6xl">
                VỀ AI
              </span>
            </div>
            <div
              className="mt-6 text-3xl text-center font-semibold"
              data-aos="fade-right"
              data-aos-offset="400"
            >
              Chất lượng giảng dạy về AI đang được nâng cao trong khuôn khổ ĐH
              FPT
            </div>
            <div className="flex gap-x-10 justify-center content-center my-10">
              {postAi.map((post, index) => {
                return (
                  <div
                    className="relative h-[400px] w-[20%] overflow-hidden rounded-lg cursor-pointer group hvr-shutter-in-horizontal "
                    data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                    data-aos-offset="400"
                  >
                    {/* Image */}
                    <img
                      src={post.img}
                      alt={post.content}
                      className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-45 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
                      <p className="text-white text-xl w-[80%] p-2 text-center font-bold">
                        {post.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 5. Một số phổ biến về bán dẫn */}
          {/* 7. Thành tựu FPT và trang web */}

          <div className="pt-5 bg-white">
            <div
              className=" my-10 font-bold text-center"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              <span className="font-extrabold text-4xl text-primary">
                100,000+
              </span>
              <span className="text-4xl"> khách hàng sử dụng ứng dụng</span>
            </div>

            <div className="flex justify-center grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
              {achievement.map((item, index) => {
                return (
                  <div
                    className="container bg-white flex flex-col justify-center items-center gap-y-2 bg-slate-50 max-w-[292px] h-[220px] m-3 rounded-md shadow-md"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-delay={300 + index * 200}
                    key={index}
                  >
                    <div>{item.image}</div>
                    <h4 className="mt-2 text-primary text-2xl font-bold">
                      {item.name}
                    </h4>
                    <p className="font-bold text-lg">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 6. Cam kết. chính xác.  */}
          <div className="mt-16">
            <div className="relative px-60 flex">
              <div
                className="w-1/2"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-offset="400"
              >
                <img
                  className=""
                  src="https://kientrucvietnam.org.vn/wp-content/uploads/2021/09/Alpha-Building-1.jpg"
                  alt=""
                />
              </div>

              <div className=" flex flex-col gap-y-4 bottom-1 w-1/2 mx-12">
                <h1
                  className="absolute text-[62px] text-primary leading-[62px] font-extrabold top-0 left-[600px] w-[600px] text-outline-white"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  data-aos-offset="400"
                >
                  Xin chào chúng tôi là FuHub
                </h1>
                <div
                  className="flex flex-col gap-y-4 pt-32"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-offset="400"
                >
                  <h2 className="text-xl text-start font-secondary font-medium text-four ">
                    Luôn sẵn sàng hỗ trợ khách hàng
                  </h2>
                  <span className="text-lg">
                    FU Hub là đội ngũ admin tạo ra hệ thống blog và diễn đàn tại
                    Đại học FPT, nơi mà học sinh và sinh viên có thể tự do thảo
                    luận, chia sẻ và tìm hiểu về các ngành học đa dạng của
                    trường cũng như những tin tức mới nhất về cuộc sống và học
                    tập tại Đại học FPT. Chúng tôi cam kết cung cấp một nền tảng
                    đổi mới và năng động, thúc đẩy sự giao tiếp và sáng tạo
                    trong cộng đồng sinh viên, đồng thời đóng góp vào việc xây
                    dựng một môi trường học tập hòa nhập và phát triển.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative px-60 mt-16 flex">
              <div className=" flex flex-col justify-center w-1/2">
                <div
                  className="flex flex-col gap-y-4 justify-center"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-offset="400"
                >
                  <h2 className="text-xl font-secondary font-medium">
                    Sự hài lòng của khách hàng là niềm vinh hạnh của chúng tôi
                  </h2>
                  <span className="text-lg ">
                    Chào mừng bạn đến với trang web của chúng tôi! Tại đây,
                    chúng tôi cam kết mang đến cho bạn trải nghiệm người dùng
                    tuyệt vời nhất. Với giao diện thân thiện, dễ sử dụng và tốc
                    độ tải trang nhanh chóng, bạn sẽ dễ dàng tìm thấy thông tin
                    mình cần chỉ trong vài cú click. Hãy khám phá các tính năng
                    ưu việt của chúng tôi và tận hưởng một hành trình trực tuyến
                    mượt mà và đầy thú vị. Chúng tôi cam kết cung cấp một nền
                    tảng đổi mới và năng động, thúc đẩy sự giao tiếp và sáng tạo
                    trong cộng đồng sinh viên, đồng thời đóng góp vào việc xây
                    dựng một môi trường học tập hòa nhập và phát triển.
                  </span>

                  <div className="text-xl font-bold hover:text-primary animate-bounce cursor-pointer">
                    <PiArrowBendDownRightBold
                      size={60}
                      className="absolute -bottom-3 -left-20 animate-bounce"
                    />
                    Liên Hệ với chúng tôi nếu bạn cần hỗ trợ !!!
                  </div>
                </div>
              </div>
              <div
                className="w-1/2 ml-10"
                data-aos="fade-left"
                data-aos-offset="400"
              >
                <img
                  className=""
                  src="https://photo.znews.vn/w660/Uploaded/wyhktpu/2021_05_21/23.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Nơi làm việc */}
      <div className="flex items-center justify-around">
        <div data-aos="fade-right" data-aos-delay="100" data-aos-offset="400">
          <div class="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
            <div
              class="relative py-3 sm:max-w-xl sm:mx-auto"
              data-aos="fade-right"
              // data-aos-delay="100"
              data-aos-offset="400"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-primary to-light_primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
              <div class="text-white relative bg-primary shadow-lg rounded-3xl p-20">
                <div class="text-center pb-6">
                  <h1 class="text-3xl font-bold text-black">
                    Đây là <span className="text-4xl text-white">địa điểm</span>{" "}
                    chúng tôi làm việc!
                  </h1>

                  <p class="text-gray-300 pt-2">
                    Chúng tôi luôn sẵn lòng nhận sự hỗ trợ của các bạn.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="absolute w-[300px] rotate-45 ml-[600px] p-5"
              src="../../../public/img/fly.gif"
              alt=""
            />
          </div>
        </div>
        <div>
          <img
            src="https://vietnam.vnanet.vn//Styles/info/images/map.png"
            data-aos="fade-right"
            // data-aos-delay="100"
            data-aos-offset="400"
          />
          <div className="absolute -mt-[300px] ml-[184px] group">
            {/* <GoDot className="text-green size-12 animate-ping cursor-pointer" /> */}
            <IoLocationSharp class="text-info size-12 animate-bounce cursor-pointer" />
            <div className="absolute w-[200px] ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black p-4 rounded shadow-lg ">
              <div class="mb-4">
                <strong class="flex items-center text-orange-500 space-x-2">
                  <BiHome class="text-xl" />
                  <span>Địa Chỉ</span>
                </strong>
                <p class="mt-1 text-gray-700">
                  Khu đô thị FPT Đà Nẵng, P.Hòa Hải, Q.Ngũ Hành Sơn, TP Đà Nẵng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
