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

import ProgressBar from 'progressbar.js/dist/progressbar';

export default function initProgressbar() {
    const progressBars = document.querySelectorAll('.progressLine');
    progressBars.forEach(bar => {
        let id = bar.getAttribute('id');
        let value = bar.dataset.value;
        let limit = value / 100;

        let lineBar = new ProgressBar.Line(`#${id}`, {
            strokeWidth: 3,
            trailWidth: 3,
            trailColor: '#5634f7',
            from: {
                color: '#f8f8f8',
            },
            to: {
                color: '#f8f8f8',
            },
            text: {
                value: '0',
                className: 'progressLine-text',
            },
            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.setText(`+${value}%`);
            }
        });

        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(bar);

        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    lineBar.animate(limit, {
                        duration: 700
                    });
                }
            });
        }
    })
}
