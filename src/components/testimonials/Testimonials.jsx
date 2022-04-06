import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import "swiper/css"
import "swiper/css/pagination"

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi vitae perspiciatis quisquam, voluptatum explicabo soluta porro nam, quod cum corporis dignissimos, magnam consequatur perferendis facilis non iure sunt nesciunt?"
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi vitae perspiciatis quisquam, voluptatum explicabo soluta porro nam, quod cum corporis dignissimos, magnam consequatur perferendis facilis non iure sunt nesciunt?"
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi vitae perspiciatis quisquam, voluptatum explicabo soluta porro nam, quod cum corporis dignissimos, magnam consequatur perferendis facilis non iure sunt nesciunt?"
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi vitae perspiciatis quisquam, voluptatum explicabo soluta porro nam, quod cum corporis dignissimos, magnam consequatur perferendis facilis non iure sunt nesciunt?"
  }
]

const Testimonials = () => {
  const arrayOfData = data.map(({avatar,name,review},index)=>{
    return (
        <SwiperSlide key={index} className='testimonial' >
            <div className="client_avatar">
              <img src={avatar} alt="Avatar1"  />
            </div>
            <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
                {review}
              </small>
        </SwiperSlide>
    )
  })

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper pagination={true} modules={[Pagination]}    className="container testimonials_container"
       spaceBetween={40}
       slidesPerView={1}
      >
        {arrayOfData}
      </Swiper>

    </section>
  )
}

export default Testimonials