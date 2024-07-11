import { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css";
import Marquee from "react-fast-marquee";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import AOS from "aos";
import { FaUserCheck } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { LuCheckCheck } from "react-icons/lu";

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
          <div className="mt-28">
            <div className="text-center font-bold text-4xl">
              MỘT SỐ BÀI VIẾT VỀ AI
            </div>
            <div className="flex gap-x-6 justify-center content-center my-10">
              {postAi.map((post, index) => {
                return (
                  <div
                    className="relative h-[500px] w-[20%] overflow-hidden rounded-lg cursor-pointer group"
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
                      <p className="text-black text-xl w-[80%]">{post.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 5. Một số phổ biến về bán dẫn */}
          {/* 7. Thành tựu FPT và trang web */}

          <div className="pt-5 bg-light_gray">
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
          <div></div>
        </div>
      )}
    </>
  );
};
