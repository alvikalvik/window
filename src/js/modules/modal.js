function modals() {
    let isShown = false;
    const allModalsSelector = '[data-modal]';   

    function showModal(modalSelector) {
        const modal = document.querySelector(modalSelector);

        isShown = true;                

        modal.style.display = 'block';
        // document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
    }
    function hideModal(modalSelector) {
        const modals = document.querySelectorAll(modalSelector);

        for (const modal of modals) {
            modal.style.display = '';
            // document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        }        
    }

    function runModal(modalSelector, triggerSelector, closeSelector) {
        const modal = document.querySelector(modalSelector);
        const close = modal.querySelector(closeSelector);
        const triggers = document.querySelectorAll(triggerSelector);        

        for (const trigger of triggers) {
            trigger.addEventListener('click', (evt) => {
                if(evt.target) {
                    evt.preventDefault();
                }

                hideModal(allModalsSelector);
                showModal(modalSelector);                
            });
        }

        modal.addEventListener('click', evt => {
            if(evt.target === modal && !modal.dataset.closeOnlyWithButton) {
                hideModal(modalSelector);
            }
        });

        close.addEventListener('click', (evt) => {
            if(evt.target) {
                evt.preventDefault();
            }

            hideModal(modalSelector);                
        });

        document.addEventListener('keydown', (evt) => {            
            if (evt.code === 'Escape') {
                hideModal(modalSelector);
            }
          });
        
    }
    
    function showModalWithDelay(modalSelector, time) {
        setTimeout( () => {            
            if (!isShown) {  
                hideModal(allModalsSelector);              
                showModal(modalSelector);
            }            
        }, time);        
    }

    runModal('.popup_engineer', '.popup_engineer_btn', '.popup_close');
    runModal('.popup', '.phone_link', '.popup_close');
    runModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close');
    runModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close');
    runModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close');

    // showModalWithDelay('.popup', 60000);
}

export default modals;