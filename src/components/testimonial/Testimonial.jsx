import React from "react";
import "./testimonial.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {

    id:1,
    avatar: avatar1,
    name: "Ram Patil",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam impedit consectetur odio possimus sunt quia atque, cumque aliquid inventore.",
  },
  {
    id:2,
    avatar: avatar2,
    name: "Sham Patil",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam impedit consectetur odio possimus sunt quia atque, cumque aliquid inventore.",
  },
  {
    id:3,
    avatar: avatar3,
    name: "jayesh Patil",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam impedit consectetur odio possimus sunt quia atque, cumque aliquid inventore.",
  },
];

export const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonial__container"
      modules={[Pagination,Navigation,Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      >
        {data.map(({ id,avatar, name, review }) => {
          return (
            <SwiperSlide id={id}  className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar-1" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
