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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvN7KzMA4hQwfwgcMzwFTOan6wxodfdfArw&s",
      content: "Học sinh lo lắng khi đối mặt với kì thi Final",
    },
    {
      img: "https://fptcity.vn/wp-content/uploads/z2111894361184_cab20108c6e8264d6c6c263a5c032f26.jpg",
      content: "Trường ĐH FPT Nghị Định Mới",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5RsTdxtsal_SIGZGx0gmLlqJWHVzkB59lQ&s",
      content: "Nên theo học chuyên ngành bán dẫn?",
    },
    {
      img: "https://data.ihoc.vn/ihoc-bucket/2023/10/truong-dai-hoc-fpt-da-nang.jpeg",
      content: "Những lời bình luận có cánh về trường FPT",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0X5HVmGNnGwSJNVoXh2CZMawDAmtbzfzBA&s",
      content: "Thi tốt nghiệp",
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
      content: "Đại học FPT dấn thân vào AI",
    },
    {
      img: "https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      content: "Đại học FPT dấn thân vào AI",
    },
    {
      img: "https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      content: "Đại học FPT dấn thân vào AI",
    },
    {
      img: "https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      content: "Đại học FPT dấn thân vào AI",
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
              <h1 className="text-4xl font-bold">Your Text Here</h1>
              <p className="text-lg mt-4">Some additional text here.</p>
            </div>
          </div>
          {/* 2. component có trong https://www.discourse.org/# */}
          <div className="flex flex-col items-center justify-center mt-20 ">
            <div
              className="font-bold text-4xl"
              data-aos="fade-down"
              data-aos-offset="200"
            >
              THU HÚT<span className="text-primary"> NGƯỜI DÙNG</span>
            </div>
            <div
              className="mt-6 text-3xl font-semibold"
              data-aos="fade-right"
              data-aos-offset="200"
            >
              Mỗi ngày có hơn <span className="text-5xl text-green">500</span>{" "}
              người truy cập
            </div>
            <div
              className="mt-5 text-2xl"
              data-aos="fade-left"
              data-aos-offset="200"
            >
              Khám phá thêm nhiều nội dung mới ở trong trang web
            </div>
            {/* Để 6 component */}
            <div
              className="flex mt-20 justify-center"
              data-aos="fade-down"
              data-aos-offset="200"
            >
              <div className="rotate-left flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10 bg-white">
                <img
                  src={images[0]}
                  className="w-full h-72 object-cover mb-4"
                  alt="Image"
                />
                <div className="font-bold">
                  SỰ KIỆN JAMBO TRƯỜNG ĐH FPT Đà Nẵng
                </div>
              </div>
              <div className="rotate-right flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10  animate-pulse">
                <img
                  src={images[1]}
                  className="w-full h-72 object-cover mb-4"
                  alt="Image"
                />
                <div>VÒNG CHUNG KẾT CODE CAMP</div>
              </div>
              <div className="rotate-left flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10">
                <img
                  src={images[2]}
                  className="w-full h-72 object-cover mb-4"
                  alt="Image"
                />
                <div>SINH VIÊN HÁO HỨC ĐƯỢC THAM GIA VÀO HỘI TRẠI</div>
              </div>
            </div>
            <div
              className="flex mt-32 justify-center"
              data-aos="fade-up"
              data-aos-offset="100"
            >
              <div className="rotate-right flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10 animate-pulse">
                <img
                  src={images[0]}
                  className="w-full h-72 object-cover mb-4"
                  alt="Image"
                />
                <div>THÔNG TIN MỚI VỀ CHUYÊN NGÀNH AI CỦA ĐH FPT</div>
              </div>
              <div className="rotate-left flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10">
                <img
                  src={images[1]}
                  className="w-full h-72 object-cover mb-4"
                  alt="Image"
                />
                <div>NGÀNH BÁN DẪN TẠI ĐH FPT</div>
              </div>
              <div className="rotate-right flex flex-col w-[30%] items-center justify-center overflow-hidden rounded-3xl -mr-10 animate-pulse">
                <img
                  src={images[2]}
                  className="w-full h-72 object-cover mb-4"
                  alt="Image"
                />
                <div>ĐH FPT KHÁT VỌNG ĐỔI THAY</div>
              </div>
            </div>
          </div>
          {/* 3. component có trong https://wordpress.com */}
          <div className="mt-32">
            <div className="text-center font-bold text-4xl">
              NỘI DUNG ĐẢM BẢO UY TÍN
            </div>

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
                      <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-primary">
                        {item.content}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
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
                      <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-primary">
                        {item.content}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
          {/* 4. Một số bài viết phổ biến về AI */}
          <div className="mt-28 bg-primary py-16 ">
            <div className="text-center font-bold text-4xl text-white">
              MỘT SỐ BÀI VIẾT{" "}
              <span className="text-black text-outline-white text-6xl">
                VỀ AI
              </span>
            </div>
            <div
              className="mt-6 text-3xl text-center"
              data-aos="fade-right"
              data-aos-offset="200"
            >
              Chất lượng giảng dạy về AI đang được nâng cao trong khuôn khổ ĐH
              FPT
            </div>
            <div className="flex gap-x-10 justify-center content-center my-10">
              {postAi.map((post, index) => {
                return (
                  <div
                    className="relative h-[400px] w-[20%] overflow-hidden rounded-lg cursor-pointer group"
                    data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                    data-aos-offset="400"
                  >
                    {/* Image */}
                    <img
                      src={post.img}
                      alt={post.content}
                      className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0 cursor-pointer"
                    />
                    {/* Text Overlay */}
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className="text-black text-xl w-[80%]">
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
              data-aos-offset="200"
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
                  Xin chào chúng tôi là Ổ Kiến Lửa
                </h1>
                <div className="flex flex-col gap-y-4 pt-32">
                  <h2 className="text-xl text-start font-secondary font-medium text-four ">
                    Luôn sẵn sàng hỗ trợ khách hàng
                  </h2>
                  <span className="text-lg">
                    Tại Antidee, chúng tôi hiểu rằng cuộc sống bận rộn và công
                    việc hàng ngày có thể khiến bạn không có đủ thời gian và
                    năng lượng để chăm sóc ngôi nhà của mình. Chính vì vậy,
                    chúng tôi tự hào mang đến dịch vụ dọn dẹp nhà chuyên nghiệp
                    và tận tâm nhất. Đội ngũ nhân viên của chúng tôi đều được
                    đào tạo kỹ lưỡng, có lý lịch rõ ràng và luôn cam kết mang
                    lại không gian sống sạch sẽ, thoáng mát cho bạn và gia đình.
                    Dù bạn cần dọn dẹp nhà cửa hàng tuần, vệ sinh tổng thể hay
                    chỉ là một số công việc nhỏ lẻ, chúng tôi luôn sẵn sàng hỗ
                    trợ bạn một cách nhanh chóng và hiệu quả nhất.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative px-60 mt-16 flex">
              <div className=" flex flex-col justify-center w-1/2">
                <div className="flex flex-col gap-y-4 justify-center">
                  <h2 className="text-xl font-secondary font-medium">
                    Sự hài lòng của khách hàng là niềm vinh hạnh của chúng tôi
                  </h2>
                  <span className="text-lg ">
                    Tại đây, chúng tôi không chỉ đơn thuần là mang lại sự sạch
                    sẽ cho ngôi nhà của bạn, mà còn tạo ra một trải nghiệm dịch
                    vụ hoàn hảo từ đầu đến cuối. Trang web của chúng tôi được
                    thiết kế thân thiện và dễ sử dụng, giúp bạn dễ dàng đặt
                    lịch, quản lý các yêu cầu dịch vụ và theo dõi tiến độ công
                    việc chỉ trong vài bước đơn giản. Với sự đa dạng trong các
                    gói dịch vụ, từ dọn dẹp thường xuyên đến vệ sinh công
                    nghiệp, chúng tôi luôn sẵn sàng đáp ứng mọi nhu cầu của bạn.
                    Hãy để chúng tôi trở thành người bạn đồng hành tin cậy trong
                    việc chăm sóc tổ ấm của bạn, mang lại cho bạn nhiều thời
                    gian hơn để tận hưởng cuộc sống.
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
        <div>
          <div class="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-primary to-light_primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
              <div class="text-white relative bg-primary shadow-lg rounded-3xl p-20">
                <div class="text-center pb-6">
                  <h1 class="text-3xl font-bold">
                    Đây là <span className="text-4xl text-[#1656AD]">địa điểm</span> chúng tôi làm việc!
                  </h1>

                  <p class="text-gray-300">
                    Fill up the form below to send us a message.
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
        <div className="">
          <img src="https://vietnam.vnanet.vn//Styles/info/images/map.png" />
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
