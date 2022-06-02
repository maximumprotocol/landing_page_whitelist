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
import ReactDOM from 'react-dom';
import Ticker from "./components/Ticker";

const container = document.getElementById('ticker');
if (container) {
    ReactDOM.render(React.createElement(
        React.StrictMode,
        null,
        React.createElement(Ticker, null)
    ), container);
}



