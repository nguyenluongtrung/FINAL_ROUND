import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const TimeLine = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const events = [
    {
      year: "1999",
      title: "Tổ chức giáo dục FPT  ",
      description:
        "Thành lập năm 1999, trải qua 18 năm hình thành – xây dựng – phát triển, Tổ chức giáo dục FPT đã trở thành hệ thống giáo dục lớn của Việt Nam, gồm các hệ giáo dục đào tạo THPT, Cao đẳng, Đại học, sau Đại học, đào tạo nghề, đào tạo dành cho khối doanh nghiệp… và các dự án ươm tạo.",
    },
    {
      year: "2006",
      title: "Thành lập đại học FPT",
      description:
        "Đánh dấu bước đầu tiên trong việc phát triển giáo dục đại học chất lượng cao của tập đoàn FPT.",
    },
    {
      year: "2007",
      title: "Chứng nhận Quốc Tế",
      description:
        "FPT University trở thành trường đại học đầu tiên ở Việt Nam đáp ứng tiêu chuẩn chất lượng quốc tế.",
    },
    {
      year: "2008",
      title: "Tiên Phong Chất Lượng",
      description:
        "Bắt đầu triển khai các chương trình hợp tác đào tạo với các đối tác quốc tế, mở rộng quan hệ đào tạo quốc tế.",
    },
    {
      year: "2010",
      title: "Đảm bảo chất lượng",
      description:
        "Đạt chứng chỉ ISO 9001:2008 về quản lý chất lượng giáo dục, thể hiện cam kết đảm bảo chất lượng trong đào tạo và quản lý.",
    },

    {
      year: "2012",
      title: "Mở rộng quy mô",
      description:
        "Mở rộng quy mô với việc khai trương nhiều chi nhánh tại các thành phố lớn trong cả nước, gia tăng sự hiện diện và tiếp cận đối tượng sinh viên.",
    },

    {
      year: "2014",
      title: "Đạt chứng chỉ quốc tế",
      description:
        "FPT University trở thành trường đại học đầu tiên tại Việt Nam đạt chứng chỉ quản lý chất lượng theo ISO 9001:2015, khẳng định tiêu chuẩn quản lý chất lượng quốc tế.",
    },

    {
      year: "2016",
      title: "Từ FPT University Đến FPT Education",
      description:
        "Đổi tên thành FPT Education, mở rộng hoạt động đào tạo từ đại học đến sau đại học và các chương trình đào tạo ngắn hạn chuyên sâu.",
    },
    {
      year: "2019",
      title: "Định Hướng Tương Lai",
      description:
        "Ra mắt nhiều chương trình đào tạo mới trong lĩnh vực công nghệ 4.0 và các lĩnh vực đặc thù như Y tế số, Nông nghiệp thông minh, đáp ứng xu hướng phát triển công nghệ và nhu cầu thị trường.",
    },
    {
      year: "2020",
      title: "Hợp Tác Và Đổi Mới",
      description:
        "Đẩy mạnh hoạt động nghiên cứu khoa học ứng dụng và hợp tác công nghệ với các doanh nghiệp, tổ chức trong và ngoài nước, thúc đẩy sự phát triển công nghệ và sáng tạo.",
    },
    {
      year: "2023",
      title: "Khởi Nghiệp Và Sáng Tạo",
      description:
        "Tăng cường phát triển hệ sinh thái khởi nghiệp và sáng tạo, hỗ trợ sinh viên khởi nghiệp và phát triển dự án công nghệ, đóng góp vào sự nghiệp đổi mới sáng tạo của đất nước.",
    },
    {
      year: "2024",
      title: "25 năm thành lập",
      description:
        "Năm 2024 là một cột mốc đáng kỷ niệm khi FPT Education chính thức đánh dấu 25 năm hoạt động, thể hiện sự phát triển bền vững và đóng góp lớn cho ngành giáo dục Việt Nam.",
    },
    {
      year: "2024",
      title: "Hứa hẹn tương lai",
      description:
        "FPT Education cam kết cung cấp chất lượng giảng dạy hàng đầu với đội ngũ giảng viên chuyên nghiệp và chương trình học quốc tế. Chúng tôi đảm bảo cơ sở vật chất hiện đại và hỗ trợ toàn diện cho sinh viên, bao gồm tư vấn nghề nghiệp và kỹ năng mềm. Hợp tác với doanh nghiệp giúp sinh viên tiếp cận cơ hội thực tập và việc làm. Chúng tôi khuyến khích phát triển cá nhân thông qua các hoạt động ngoại khóa và kỹ năng lãnh đạo. FPT Education luôn đồng hành và hỗ trợ sinh viên trên con đường phát triển toàn diện.",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="relative w-full max-w-4xl">
        <div className="font-bold text-center text-4xl my-10">
          Hành trình vượt ngàn chông gai
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-light_primary h-[95%]"></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex items-center w-full mb-8 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div
              className={`w-1/2 px-4 ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <div className="inline-block p-4 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.year}</p>
                <p className="mt-2 text-justify">{event.description}</p>
              </div>
            </div>
            <div
              className={`w-0.5 bg-gray-300 ${
                index % 2 === 0 ? "ml-4" : "mr-4"
              } h-6`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
