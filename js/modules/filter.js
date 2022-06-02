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

import Shuffle from 'shufflejs';

function initFilter(container, trigger, options) {
    const containerEl = document.querySelector(container);

    if (containerEl) {
        const shuffleInstance = new Shuffle(containerEl, {...options});
        const triggers = document.querySelectorAll(trigger);

        triggers.forEach(el => {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                for (let i = 0; i < triggers.length; i++) {
                    triggers[i].classList.remove('current');
                }
                this.classList.add('current');
                const filter = this.dataset.target;
                shuffleInstance.filter(filter);
            })
        })

        window.addEventListener('resize', () => {
            shuffleInstance.layout();
        });
    }
}

export default initFilter;