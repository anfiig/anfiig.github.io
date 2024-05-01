import {scrollEvent} from './scroll.js';
import {slider} from './slider.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        scrollEvent();
        slider();
        AOS.init();
    } catch (error) {
        console.error('Initialization error:', error);
    }
});