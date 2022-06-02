/**
 * Sitech
 * HTML template with high-quality content and latest design trends that fit product market for SaaS, App Solutions Promo Campaigns, Development Studios, Digital Marketing Agencies, Startups and other rising internet technology services
 * Exclusively on https://1.envato.market/sitech-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lilith Lamber (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
"use strict";

import {initSwiperSlider} from "./modules/slider";
import setYTFrame from "./modules/video";

document.addEventListener('DOMContentLoaded', () => {
    initSwiperSlider('.chart_slider', '.chart_slider', {
        effect: "coverflow",
        centeredSlides: true,
        autoplay: true,
        speed: 700,
        slidesPerView: "auto",
        spaceBetween: 30,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
        },
        breakpoints: {
            767.98: {
                spaceBetween: 0
            }
        }
    })
})