import useServiceStore from "../../../store/ServiceDetails";

import image1 from "../../../assets/image2/SevicePageImg/blog9-removebg-preview.png";
import image2 from "../../../assets/image2/SevicePageImg/blog10.b0a38dc5-removebg-preview.png";
import image6 from "../../../assets/image2/SevicePageImg/main-pic.52b102d9.png";
import Accordian from "./SDAccordian.jsx";
import EcommerseImage from "../../../assets/image2/EcommerseImage.png";
import DigitalMarketing1 from "../../../assets/image2/DigitalMarketing1.png";
import DigitalMarketing2 from "../../../assets/image2/DigitalMarketing2.png";
import SoftwarImage from "../../../assets/image2/SoftwareDevelomentDetailImges.png";

const serviceDetailsContent = [
  {
    title: "IoT Automation",
    description:
      "Unlock the potential of seamless connectivity with our IoT automation services. By integrating smart devices, sensors, and advanced communication technologies, we create interconnected systems that simplify everyday operations. Our solutions are designed to optimize efficiency, enhance security, and provide real-time insights for your home or business.",
    description2:
      "Whether it’s automating industrial workflows, smart home systems, or energy management, our IoT solutions empower you to control and monitor devices remotely. With features like predictive maintenance and real-time analytics, you can make data-driven decisions and ensure uninterrupted operations. ",
    description3:
      "Partner with us to transform your environment with cutting-edge IoT automation tailored to your needs. We prioritize scalability, reliability, and user-friendly interfaces to ensure our solutions grow with your demands. Experience the future of technology today with our innovative IoT services. ",
    image: image1,
    accordiandata: [
      {
        title: "IoT Automation",
        quote:
          "Real-Time Monitoring and Control :IoT automation enables real-time data collection and analysis from connected devices, allowing users to monitor and control systems remotely through smartphones, computers, or other interfaces.",
      },
      {
        title: "Interconnectivity and Communication",
        quote:
          "IoT devices are interconnected and communicate seamlessly via wireless protocols. ",
      },
      {
        title: "Data-Driven Decision Making",
        quote:
          "IoT automation leverages data from sensors and devices to identify patterns, make predictions, and optimize performance.",
      },
    ],
  },
  {
    title: "Website Development Services",
    description:
      " Our website development services are designed to create user-friendly, visually appealing, and highly functional websites customized to meet your unique needs. Whether you’re launching a personal blog, an e-commerce store, or a corporate platform, we ensure your site aligns perfectly with your goals. With a focus on responsive design, your website will provide an optimal user experience across all devices.",
    description2:
      "From conceptualization to deployment, we manage every step of the development process with precision. We also integrate essential features like SEO optimization, secure payment gateways, and easy navigation for seamless functionality.   ",
    description3:
      "We don’t just build websites; we create digital experiences that captivate your audience and drive growth. Partner with us for reliable maintenance, regular updates, and scalable solutions to keep your online presence thriving. ",
    image: image2,
    accordiandata: [
      {
        title: " User-Centric ",
        quote:
          "We design and develop websites with the user in mind, ensuring easy navigation, accessibility, and a seamless user journey.",
      },
      {
        title: "Responsive Designs",
        quote:
          "Our websites look stunning and function perfectly across all devices, providing a consistent user experience regardless of how they access your site. ",
      },
      {
        title: "Modern Tech",
        quote:
          "Utilizing the latest web technologies and frameworks for high-performance and cutting-edge solutions.",
      },
    ],
  },
  {
    title: "Software Development",
    description:
      "At our core, we offer tailored software development services designed to transform your business vision into reality. Our team specializes in creating scalable, user-friendly applications that align with your unique goals. Whether it's a mobile app, web platform, or enterprise solution, we employ the latest technologies to ensure seamless performance and functionality.",
    description2:
      "From ideation to deployment, we prioritize collaboration and innovation. Our agile development process allows for flexibility, ensuring your project evolves with your needs. We also integrate robust testing and quality assurance at every stage, guaranteeing a reliable, high-performing end product.   ",
    description3:
      "Beyond development, we provide ongoing support and maintenance to keep your software secure and up to date with our expertise, your business gains the digital tools needed to stay competitive and thrive in an ever-changing technological landscape. Let us help you build solutions that drive success. ",
    image: SoftwarImage,
    accordiandata: [
      {
        title: "User-Centric Design",
        quote:
          "We prioritize understanding your needs and creating software that is intuitive, efficient, and enjoyable to use.",
      },
      {
        title: "Agile Development",
        quote:
          "We embrace flexibility and adapt to changing requirements throughout the development process, ensuring your software stays relevant.",
      },
      {
        title: "Quality Assurance",
        quote:
          "We conduct rigorous testing and implement robust quality control measures to deliver software that is reliable, secure, and free of defects.",
      },
    ],
  },
  {
    title: "Research & Development",
    description:
      "Our Research and Development (R&D) services are designed to drive innovation and provide tailored solutions that meet your unique challenges. We specialize in analyzing trends, exploring cutting-edge technologies, and developing innovative strategies to help your business stay ahead in a competitive market. With a commitment to excellence, our team works tirelessly to transform ideas into actionable outcomes.",
    description2:
      "Through our R&D process, we focus on creating sustainable and efficient solutions for businesses across diverse industries. Whether it's improving existing processes, designing new products, or implementing advanced tools, we combine creativity and technical expertise to deliver impactful results. Our goal is to empower your business with strategies that are future-ready and adaptive to market demands. ",
    description3:
      "Partner with us to leverage our R&D services for a smarter, more innovative approach to growth. Let us help you bridge the gap between your vision and tangible achievements, driving success through unparalleled expertise and dedication.",
    image: image6,
    accordiandata: [
      {
        title: "Innovation",
        quote:
          "R&D fuels innovation by pushing the boundaries of knowledge and developing novel solutions to existing problems. This leads to new products, services, and technologies that drive progress and improve lives.",
      },
      {
        title: " Competitive Advantage",
        quote:
          "Investing in R&D allows companies to stay ahead of the curve and gain a competitive edge. Through continuous research and development, businesses can develop unique offerings, improve efficiency, and enhance their market position.",
      },
      {
        title: "Future-Proofing",
        quote:
          "R&D is essential for long-term success and sustainability. By anticipating future trends and challenges, businesses can adapt and evolve, ensuring they remain relevant and competitive in a rapidly changing world.",
      },
    ],
  },
  {
    title: "E-commerce Development",
    description:
      " Transform your business with our expert e-commerce development services. We craft user-friendly, visually appealing, and fully functional online stores tailored to your unique needs. Our solutions are designed to provide a seamless shopping experience, with features such as intuitive navigation, secure payment gateways, and responsive designs that look great on any device.",
    description2:
      " From startups to established enterprises, we help businesses grow by integrating advanced tools and functionalities. These include inventory management systems, multi-currency support, and marketing automation to boost conversions. ",
    description3:
      " Our team stays ahead of industry trends to deliver cutting-edge solutions. With a focus on performance and user engagement, we ensure your e-commerce site is optimized for speed and search engines. Let us turn your vision into a thriving online store that drives revenue and customer satisfaction.",
    description4:
      "We specialize in creating impactful digital marketing strategies tailored to your unique business needs. Our services encompass SEO, social media management, pay-per-click (PPC) advertising, email marketing, and content creation. We focus on driving traffic, generating leads, and increasing conversions to help your business thrive in the competitive online space.",
    description5:
      " Our team of experts uses advanced tools and proven techniques to optimize your website's visibility and enhance brand engagement across all digital platforms. From crafting compelling campaigns to conducting in-depth analytics, we ensure your online presence is not just visible but unforgettable.",
    description6:
      "Whether you're looking to grow your brand, launch new products, or boost sales, we provide end-to-end solutions to achieve measurable results. Partner with us to harness the power of digital marketing and transform your online potential into success. Let’s take your business to the next level!",
    image: EcommerseImage,
    accordiandata: [
      {
        title: "User-Friendly",
        quote:
          "We design online stores that are easy for customers to navigate and shop.",
      },
      {
        title: "Secure & Reliable",
        quote:
          "Our platforms are built for speed and security, with features like secure payments and inventory management.",
      },
      {
        title: "SEO Optimized",
        quote:
          "We help your online store rank higher in search results, bringing you more customers.",
      },
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "At Jezh Technologies, we specialize in creating impactful digital marketing strategies tailored to your unique business needs. Our services encompass SEO, social media management, pay-per-click (PPC) advertising, email marketing, and content creation. We focus on driving traffic, generating leads, and increasing conversions to help your business thrive in the competitive online space.",
    description2:
      "Our team of experts uses advanced tools and proven techniques to optimize your website's visibility and enhance brand engagement across all digital platforms. From crafting compelling campaigns to conducting in-depth analytics, we ensure your online presence is not just visible but unforgettable.",
    description3:
      "Whether you're looking to grow your brand, launch new products, or boost sales, we provide end-to-end solutions to achieve measurable results. Partner with us to harness the power of digital marketing and transform your online potential into success. Let’s take your business to the next level!",
    image: DigitalMarketing1,
    image2: DigitalMarketing2,
    accordiandata: [
      {
        title: "Data-Driven",
        quote:
          "We use data and insights to create effective marketing campaigns that get results.",
      },
      {
        title: "Full-Service",
        quote:
          "We offer a wide range of services to meet all your digital marketing needs.",
      },
      {
        title: "Results-Focused",
        quote: "We're dedicated to helping you achieve your business goals.",
      },
    ],
  },
];

export default function ServiceDetailsCom() {
  const serviceDetails = useServiceStore((state) => state.serviceDetails);
  const currentService = serviceDetailsContent.find(
    (item, index) => index === serviceDetails.index
  );

  return (
    <div className="font-jakarta">
      {currentService ? (
        <>
          <div className=" grid grid-cols-1 md:grid-cols-2  p-6">
            {/* Text Section */}
            <section className="flex flex-col justify-center gap-4 mx-5 md:mx-10">
              <h1 className="text-2xl font-bold text-customBlue mb-4">
                {currentService?.title}
              </h1>
              <p className="text-gray-500 leading-7 text-justify text-sm">
                {currentService?.description}
              </p>
              <p className="text-gray-500 leading-7 text-justify text-sm">
                {currentService?.description2}
              </p>
            </section>

            {/* Image Section */}
            <section className="flex justify-center items-center bg-white ">
              <img
                src={currentService?.image}
                alt={currentService?.title}
                className="w-full max-w-lg rounded-lg "
              />
            </section>
          </div>

          {/* 2nd Row  */}

          <div className=" grid grid-cols-1 md:grid-cols-2  p-6">
            {/* Image Section */}
            <section className="flex justify-center items-center bg-white ">
              <img
                src={currentService?.image2?currentService.image2:currentService.image}
                alt={currentService?.title}
                className="w-full max-w-lg rounded-lg "
              />
            </section>
            {/* Text Section */}
            <section className="flex flex-col justify-center gap-4 mx-5 md:mx-10">
              <p className="text-gray-500 leading-7 text-justify text-sm">
                {currentService?.description3}
              </p>
              <p className="text-gray-500 leading-7 text-justify text-sm">
                {currentService?.description4 && currentService?.description4}
              </p>
              <p className="text-gray-500 leading-7 text-justify text-sm">
                {currentService?.description5 && currentService?.description5}
              </p>
              {currentService.description6 ? null : (
                <Accordian accordianData={currentService.accordiandata} />
              )}
            </section>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2  p-6">
            {/* Image Section */}

            {/* Text Section */}
            <section className="flex flex-col justify-center gap-4 mx-5 md:mx-10">
              <p className="text-gray-500 leading-7 text-justify text-sm">
                {currentService?.description6 && currentService?.description6}
              </p>

              {currentService.description6 ? (
                <Accordian accordianData={currentService.accordiandata} />
              ) : null}
            </section>
            <section className="flex justify-center items-center bg-white ">
              {currentService.description6 ? (
                <img
                  src={currentService?.image}
                  alt={currentService?.title}
                  className="w-full max-w-lg rounded-lg "
                />
              ) : null}
            </section>
          </div>
        </>
      ) : (
        <>
          {serviceDetailsContent.slice(0, 1).map((item) => (
            <div key={item.title}>
              <div className=" grid grid-cols-1 md:grid-cols-2  p-6">
                {/* Text Section */}
                <section className="flex flex-col justify-center gap-4 mx-5 md:mx-10">
                  <h1 className="text-2xl font-bold text-customBlue mb-4">
                    {item.title}
                  </h1>
                  <p className="text-gray-500 leading-7 text-justify text-sm">
                    {item.description}
                  </p>
                  <p className="text-gray-500 leading-7 text-justify text-sm">
                    {item.description2}
                  </p>
                </section>

                {/* Image Section */}
                <section className="flex justify-center items-center bg-white ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-lg rounded-lg "
                  />
                </section>
              </div>

              {/* 2nd Row  */}

              <div className=" grid grid-cols-1 md:grid-cols-2  p-6">
                {/* Image Section */}
                <section className="flex justify-center items-center bg-white ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-lg rounded-lg "
                  />
                </section>
                {/* Text Section */}
                <section className="flex flex-col justify-center gap-4 mx-5 md:mx-10">
                  <p className="text-gray-500 leading-7 text-justify text-sm">
                    {item.description3}
                  </p>
                    <Accordian accordianData={item.accordiandata} />
                </section>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
