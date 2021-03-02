import './slider';
import modals from './modules/modal';
import tabs from './modules/tab';

window.addEventListener('DOMContentLoaded', () => {    
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > .row > div', 'after_click');
});