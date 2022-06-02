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

import Typewriter from 'typewriter-effect/dist/core';
import {CountUp} from 'countup.js';

export function initType() {
    const targetElems = document.querySelectorAll('.type');
    if (targetElems) {
        targetElems.forEach(el => {
            let typeInstance = new Typewriter(el, {
                autoStart: false,
                cursor: ""
            });
            const observer = new IntersectionObserver(handleIntersection);
            observer.observe(el);

            function handleIntersection(entries, observer) {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        typeInstance
                            .typeString(el.dataset.text)
                            .start();
                        observer.unobserve(entry.target);
                    }
                });
            }
        })
    }
}

export function initCounterAnimation(numSelector = '.countNum', animationDuration = 3, startVal = 0) {
    const numArr = document.querySelectorAll(numSelector);
    for (let i = 0; i < numArr.length; i++) {
        let num = numArr[i];
        let value = +num.dataset.value;
        let options = {
            prefix: num.dataset.prefix ? num.dataset.prefix : '',
            suffix: num.dataset.suffix ? num.dataset.suffix : '',
            separator: num.dataset.separator ? num.dataset.separator : '',
            duration: animationDuration,
            startVal: startVal
        };
        let animatedNum = new CountUp(num, value, options);

        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(num);

        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    animatedNum.start();
                    observer.unobserve(entry.target);
                }
            });
        }
    }
}

export function animateUnderline() {
    const line = document.querySelector('.animatedUnderline');
    if (line) {
        let options = {
            root: null,
            rootMargin: '80px',
            threshold: 0.75
        }
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0.75) {
                    line.style.width = "100%";
                } else {
                    line.style.width = "0";
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(line);
    }
}
