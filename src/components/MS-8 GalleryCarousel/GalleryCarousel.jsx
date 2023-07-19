import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GalleryCarousel.scss";

const GalleryCarousel = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef();

  const images = [
    "https://res.cloudinary.com/dzmkilinu/image/upload/v1689393388/medical-site/gallery-1_jlzrit.jpg",
    "https://res.cloudinary.com/dzmkilinu/image/upload/v1689393387/medical-site/gallery-3_a2sosw.jpg",
    "https://res.cloudinary.com/dzmkilinu/image/upload/v1689393387/medical-site/gallery-4_yj9i5o.jpg",
    "https://res.cloudinary.com/dzmkilinu/image/upload/v1689393387/medical-site/gallery-2_qday1w.jpg",
    "https://res.cloudinary.com/dzmkilinu/image/upload/v1689393388/medical-site/gallery-1_jlzrit.jpg",
    "https://res.cloudinary.com/dzmkilinu/image/upload/v1689393387/medical-site/gallery-3_a2sosw.jpg",
    "https://res.cloudinary.com/dzmkilinu/image/upload/v1689393387/medical-site/gallery-4_yj9i5o.jpg",
    "https://res.cloudinary.com/dzmkilinu/image/upload/v1689393387/medical-site/gallery-2_qday1w.jpg",
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  const handleImageClick = (image) => {
    if (!isDragging) {
      openModal(image);
    }
  };

  const handleSwipe = () => {
    setIsDragging(true);
  };

  const handleSwipeEnd = () => {
    setIsDragging(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    swipe: true,
    swipeToSlide: true,
    beforeChange: handleSwipe,
    afterChange: handleSwipeEnd,
  };

  const handlePrevious = () => {
    const currentIndex = images.indexOf(selectedImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  const handleImageLoad = () => {
    const modalImage = document.querySelector(".modal-image");
    modalImage.classList.add("loaded");
  };

  return (
    <div>
      <div className="gallery-carousel__header">
        <span className="gallery-carousel__header--p">What we did</span>
        <h1 className="gallery-carousel__header--h1">View our gallery</h1>
      </div>
      <Slider ref={sliderRef} className="carousel-slider" {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="carousel-image"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </Slider>

      {modalOpen && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal-content">
            <img
              src={selectedImage}
              alt="Modal"
              className={`modal-image ${modalOpen ? "transitioned" : ""}`}
              onLoad={handleImageLoad}
            />
            <div className="modal-arrows">
              <button className="modal-arrow-left" onClick={handlePrevious}>
                &lt;
              </button>
              <button className="modal-arrow-right" onClick={handleNext}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCarousel;
