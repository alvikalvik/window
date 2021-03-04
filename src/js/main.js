import './slider';
import modals from './modules/modal';
import tabs from './modules/tab';
import forms from './modules/forms';
import handleModalState from './modules/handlemodalstate';

window.addEventListener('DOMContentLoaded', () => {     
    const modalState = {
        shape: 1,      
        profile: 'wood',      
    };

    handleModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > .row > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
    forms(modalState);
});