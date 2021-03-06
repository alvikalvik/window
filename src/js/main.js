import './slider';
import modals from './modules/modal';
import tabs from './modules/tab';
import forms from './modules/forms';
import handleModalState from './modules/handlemodalstate';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {     
    const modalState = {
        shape: 1,      
        profile: 'wood',      
    };
    const deadline = '2022-03-09';

    handleModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > .row > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
    forms(modalState);
    timer('#timer', '#days', '#hours', '#minutes', '#seconds', deadline);
    images();
});