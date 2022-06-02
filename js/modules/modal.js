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

import Swal from 'sweetalert2/dist/sweetalert2.js'
import {validateForm} from "./forms";

export function initModal(settings, customPopupClass) {
    Swal.fire({
        showClass: {
            popup: 'fadeIn'
        },
        hideClass: {
            popup: 'fadeOut'
        },
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: `
                <i class="icon-times"></i>
            `,
        customClass: {
            container: 'modal',
            popup: customPopupClass ? `${customPopupClass}` : 'modal_popup',
            closeButton: 'modal_popup-close',
            htmlContainer: 'modal_popup-content',
        },
        ...settings
    })
}
