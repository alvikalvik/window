import { handleDigitalInputs } from "./services";

function handleModalState(state) {    

    function handleShape(shapesSelector) {
        const shapeElements = document.querySelectorAll(shapesSelector);

        for (const item of shapeElements) {
            item.addEventListener('click', () => {
                state.shape = item.dataset.shape;                
            });
        }        
    }

    function handleStateInput(selector, key) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            state[key] = input.value;            
        });
    } 

    function handleStateCheckboxes(selector, key) {
        const checkboxes = document.querySelectorAll(selector); 
        
        checkboxes.forEach( item => {
            item.addEventListener('change', () => {
                if (item.checked) {
                    for (const checkbox of checkboxes) {
                        checkbox.checked = false;
                    }
                    item.checked = true;
                } else {
                    for (const checkbox of checkboxes) {
                        checkbox.checked = true;
                    }
                    item.checked = false;
                }

                for (const checkbox of checkboxes) {
                    if (checkbox.checked) {
                        state[key] = item.dataset[key];
                    }
                }                
            });
        });     
    }   

    function handleButton(buttonSelector, neededKeys, selectorsToCheck) {
        function disableButton() {
            button.disabled = true;
            button.style.opacity = '0.2';
        }
    
        function enableButton() {
            button.disabled = false;
            button.style.opacity = '';
        }

        function checkButton() {
            return neededKeys.every( elem => state[elem]);
        }

        const button = document.querySelector(buttonSelector);   
        
        disableButton();

        for (const item of document.querySelectorAll(selectorsToCheck)) {
            if (item.type === 'checkbox') {
                item.addEventListener('change', () => {                
                    if (checkButton()) {
                        enableButton();
                    }
                });                
            } else {
                item.addEventListener('input', () => {                
                    if (checkButton()) {
                        enableButton();
                    }
                });
            }            
        }
    }    

    handleShape('.balcon_icons_img'); 
    handleStateInput('#height', 'height');
    handleStateInput('#width', 'width');
    handleStateInput('#view_type', 'profile');
    handleStateCheckboxes('.checkbox', 'type');
    handleDigitalInputs('#height, #width');

    handleButton('.popup_calc_button', ['width', 'height'], ['#width', '#height']);
    handleButton('.popup_calc_profile_button', ['type'], ['[data-type="warm"]', '[data-type="cold"]']);    

}

export default handleModalState;