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

import initFilter from "./modules/filter";
import {initDestroySwiper} from "./modules/slider";
import initProgressbar from "./modules/progress";

document.addEventListener('DOMContentLoaded', () => {
    initFilter('.blog_posts', '.blog_filters-item', {
        itemSelector: '.blog_posts-item'
    });
    initProgressbar();
    initDestroySwiper();
    showPanel();
    triggerCommentMenu();
})

function showPanel() {
    const panel = document.querySelector('.share_panel');
    if (panel) {
        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(panel);
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0) {
                panel.style.animationPlayState = "running";
            }
        });
    }
}

function triggerCommentMenu() {
    const triggers = document.querySelectorAll('.post .menu_trigger');
    const menus = document.querySelectorAll('.post .menu_action');
    if (triggers) {
        triggers.forEach((el, i) => {
            el.addEventListener('click', () => {
                menus[i].classList.toggle('visible');
            })
        })
    }
}