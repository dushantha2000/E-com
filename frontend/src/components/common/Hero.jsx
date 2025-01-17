import React from 'react'
import SliderOneImg from "../../assets/images/banner-1.jpg";

function Hero() {
  return (
    <section className="section-1">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src={SliderOneImg} alt="Slider Two" className="w-100" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
