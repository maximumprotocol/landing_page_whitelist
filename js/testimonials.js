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
import {setEdgePadding} from "./modules/helpers"

document.addEventListener('DOMContentLoaded', () => {
    initSwiperSlider('.testimonials_slider', '.testimonials_controls', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        speed: 1200,
        breakpoints: {
            767.98: {
                spaceBetween: 40,
            },
            991.98: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1199.98: {
                slidesPerView: "auto",
                spaceBetween: 50,
            }
        }
    })

    setEdge();
    window.addEventListener('resize', setEdge);
})

function setEdge() {
    const container = document.querySelector('.testimonials .container');
    if (window.innerWidth >= 1199.98) {
        container.style.marginLeft = `${setEdgePadding('.header .container')}px`
    } else {
        container.style.marginLeft = "auto";
    }
}