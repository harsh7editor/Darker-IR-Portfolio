import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Download } from "lucide-react";
import gsap from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificates = [
  {
    title: "First Runner-Up",
    issuer: "Net Zero Challenge 3.0",
    date: "2024",
    image:
      "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/873ce93b-7493-4000-acf0-76a1d8977595.jpg",
    downloadUrl: "https://drive.google.com/file/d/1nNyghwRbV7P8C-YsfsFbl2qQgqRu1gcI/view?usp=drive_link",
  },
  {
    title: "Core Java (Basic)",
    issuer: "HackerRank Certificates",
    date: "2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/600px-HackerRank_Icon-1000px.png",
    downloadUrl: "https://www.hackerrank.com/certificates/iframe/b3bfc3a3ce5b",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft",
    date: "2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    downloadUrl: "https://drive.google.com/file/d/1Hnx5dBqJlx0fCHQGLbmvLqBEpxYU6rTO/view",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2024",
    image:
      "https://images.credly.com/size/340x340/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png",
    downloadUrl: "https://www.credly.com/badges/95fbafd1-c05b-4727-afa2-1b26c0bf270f/print",
  },
  // Add more certificates as needed
];

export const CertificateSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slides = document.querySelectorAll(".slick-slide");
    gsap.fromTo(
      slides,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-12">
      <Slider {...settings} ref={sliderRef}>
        {certificates.map((cert, index) => (
          cert && (
            <div key={index} className="p-4">
              <div className="max-w-md bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {cert.date}
                  </p>
                  <a
                    href={cert.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Certificate
                  </a>
                </div>
              </div>
            </div>
          )
        ))}
      </Slider>
    </div>
  );
};
