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

import Swiper, {Navigation, Autoplay, Grid, EffectCoverflow, Pagination} from 'swiper';

Swiper.use([Navigation, Autoplay, Grid, EffectCoverflow, Pagination]);

const commonOptions = {
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
}

// basic swiper initialization
export function initSwiperSlider(container, parentClass, options) {
    const containerEL = document.querySelector(container);
    if (containerEL) {
        const swiper = new Swiper(container, {
            ...commonOptions,
            pagination: {
                el: `${parentClass} .swiper-pagination`,
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: `${parentClass} .swiper-button-next`,
                prevEl: `${parentClass} .swiper-button-prev`,
            },
            ...options,
        });
    }
}

export function initDestroySwiper(container = '.recent_posts', parentClass = '.recent_controls') {
    const containerEl = document.querySelector(container);

    let swiperInstance = {};
    let init = false;

    const options = {
        navigation: {
            nextEl: `${parentClass} .swiper-button-next`,
            prevEl: `${parentClass} .swiper-button-prev`,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            575.98: {
                slidesPerView: 2,
            },
            767.98: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991.98: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    }

    function swiperMode() {
        let isSlider = window.matchMedia('(max-width: 1199.98px)');
        let isGrid = window.matchMedia('(min-width: 1200px)');

        if (containerEl) {
            if (isSlider.matches) {
                if (!init) {
                    init = true;
                    swiperInstance = new Swiper(container, {
                        ...commonOptions,
                        ...options
                    });
                }

            } else if (isGrid.matches && Object.keys(swiperInstance).length !== 0) {
                swiperInstance.destroy(true, true);
                init = false;
            }
        }
    }

    window.addEventListener('load', swiperMode);
    window.addEventListener('resize', swiperMode);
}