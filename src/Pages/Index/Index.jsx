import React from "react";
import Nav from "../../Components/Nav/Nav";
import heroImage from "../../assets/rev_home3_01.png";

import element01 from '../../assets/h5_decor4.png'
import element02 from '../../assets/rev_home3_04.png'
import element03 from '../../assets/rev_home3_05.png'
import element04 from '../../assets/rev_home3_06.png'


import sliderImage01 from '../../assets/h3_cat-4.jpg'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Index() {
    return (
        <>
            <div className="flex flex-col relative min-h-[90vh] bg-[#ffded1]">
                <Nav />
                <div className="w-full px-[12%] pt-[100px] flex gap-5 flex-col lg:flex-row">
                    <div className="flex flex-col lg:w-[50%] w-full items-start gap-4 justify-center ">
                        <small className="text-4xl font-dancing">Best Seller</small>
                        <h2 className="text-7xl 2xl:text-8xl font-medium text-red-600">Ice Cream <br /> Novelties</h2>
                        <p className="text-lg ">Loaded with chunks of chocolate sandwich cookies in a smooth vanilla base. A crowd-pleaser for all ages!</p>
                        <button className="btn">Shop Now <i className="ri-arrow-right-line"></i> </button>
                    </div>
                    <div className="lg:w-[50%] full flex items-center justify-center z-[1] relative md:absolute right-0 bottom-0">
                        <img src={heroImage} alt="header-image" className="w-full sm:w-[400px] 2xl:w-[500px]" />
                    </div>
                    <img src={element01} alt="element1" className="w-[80px] h-[80px] absolute -top-[-80%] left-5" />
                    <img src={element02} alt="element2" className="w-[80px] h-[80px] absolute -top-[-20%] lg:left-[90%] left-[65%] hidden sm:flex" />
                    <img src={element03} alt="element3" className="w-[90px] h-[90px] absolute -top-[-10%] left-5" />
                    <img src={element04} alt="element3" className="w-[90px] h-[90px] absolute -top-[-85%] sm:-top-[85%] lg:left-[85%] left-[-75%] " />
                </div>
            </div>
            {/* category section */}
            <section id="category">
                <h3 className="section_heading">Shop By Category</h3>
                <Swiper>
                    <SwiperSlide>
                        <div className="w-[180px] card group">
                            <img src={sliderImage01} alt="sliderImage" className="w-full rounded-full mb-4 " />
                            <span className="slide_text text-black">Ice Cream Bar</span>
                            <span className="text-center w-full text-base hidden group-hover:inline-block">2 product</span>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section></>
    )
}
export default Index;