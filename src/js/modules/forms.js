function forms() {
    const formsList = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с Вами скоро свяжемся!',
        fail: 'Ошибка отправки данных...',
    };

    let currentMessage = '';

    async function sendForm(url, data) {    
        // let object = {};
        // data.forEach((value, key) => object[key] = value);
        // let json = JSON.stringify(object); 
        // console.log(json);
        
        const response = await fetch(url, {
            method: 'POST', 
            // headers: {
            //     'Content-Type': 'application/json;charset=utf-8'
            // },           
            body: data
        });        

        if (response.ok) {             
            currentMessage = message.success;           
            return await response.text();            
        } else {         
            throw new Error("Wrong server responce");
        }             
    }

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
    
                messageBox.classList.add('status');
                messageBox.textContent = message.loading;
                item.appendChild(messageBox);
    
                sendForm('./assets/server.php', formData)            
                .then(response => {
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
                    }, 5000);
                });            
    
            });
        }        
    }

    function handlePhoneInputs() {
        for (const input of phoneInputs) {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/\D/, '');
            });
        }
    }

    initForms();
    handlePhoneInputs();
    
}

export default forms;