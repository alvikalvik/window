import {handleDigitalInputs, sendForm} from './services';

function forms(modalState) {
    const formsList = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');    

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с Вами скоро свяжемся!',
        fail: 'Ошибка отправки данных...',
    };

    let currentMessage = '';    

    function clearInputs() {
        for (const input of inputs) {
            input.value = '';
        }
    }

    function initForms() {
        for (const item of formsList) {
            item.addEventListener('submit', (evt) => {
                evt.preventDefault();
    
                const formData = new FormData(item);
                const messageBox = document.createElement('div');

                if (item.dataset.calc === 'end') {
                    for (const key in modalState) {                        
                        formData.append(key, modalState[key]);
                    }                    
                }
    
                messageBox.classList.add('status');
                messageBox.textContent = message.loading;
                item.appendChild(messageBox);
    
                sendForm('./assets/server.php', formData)            
                .then(response => {
                    currentMessage = message.success;
                    console.log(response);
                    return response;
                })            
                .catch(error => {
                    currentMessage = `${message.fail}: ${error}`;
                })
                .finally( () => {
                    messageBox.textContent = currentMessage;
                    setTimeout( () => {
                        messageBox.remove();
                        clearInputs();
                        if (item.dataset.calc === 'end') {
                            modalState = {
                                shape: 1,      
                                profile: 'wood',      
                            };
                        }
                    }, 5000);
                });           
    
            });
        }        
    }    

    initForms();
    handleDigitalInputs('input[name="user_phone"]');    
}

export default forms;