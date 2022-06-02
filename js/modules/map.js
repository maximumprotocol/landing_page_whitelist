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

const _KEY = 'PasteYourGoogleMapsApiKeyHere';

import {Loader} from "@googlemaps/js-api-loader";
import mapTheme from "./map-theme";

function initMap() {
    const loader = new Loader({
        apiKey: _KEY,
        version: "weekly",

    });
    const mapContainer = document.querySelector('#map');
    const coords = [
        {
            lat: 40.74881584652125,
            lng: -73.98561648634562
        },
        {
            lat: 40.80886299662628,
            lng: -73.8791304171755
        }
    ]

    if (mapContainer) {
        loader.load().then(() => {
            const map = new google.maps.Map(mapContainer, {
                center: coords[1],
                zoom: 10,
                styles: [...mapTheme],
                disableDefaultUI: true,
            });
            coords.forEach(el => {
                const marker = new google.maps.Marker({
                    position: el,
                    map: map,
                    icon: './svg/marker.svg'
                });
            })
        });
    }
}

export default initMap;