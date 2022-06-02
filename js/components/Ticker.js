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
import React from 'react';
import Marquee from "react-easy-marquee";

export default function Ticker() {
    // create an empty array to store ticker text
    let textArr = [];
    // get all the HTML elements containing ticker text
    const textElems = document.querySelectorAll('.ticker-item');
    // push every text string to an array
    textElems.forEach(el => {
        textArr.push(el.textContent);
    })
    // render
    return React.createElement(
        // wrapper tag name
        "div",
        // wrapper props
        {className: "ticker-wrapper"},
        // render Marquee component
        React.createElement(
            Marquee,
            // props
            { duration: 15000, reverse: true, className: "ticker-component"},
            // create Marquee component child elements
            textArr.map(text => React.createElement("div", {className: "ticker-text"}, text))
        )
    );
}
