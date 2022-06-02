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

import initGallery from "./modules/gallery";
import {initDestroySwiper, initSwiperSlider} from "./modules/slider";

document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initSwiperSlider('.page_slider', '.page_slider-controls', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        speed: 1500,
        breakpoints: {
            767.98: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991.98: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1199.98: {
                slidesPerView: 2,
                spaceBetween: 50,
            }
        }
    })
    initDestroySwiper('.recent_posts','.recent_controls');
})