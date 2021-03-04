export function handleDigitalInputs(selector) {    
    for (const input of document.querySelectorAll(selector)) {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
        });
    }
}

export async function sendForm(url, data) {    
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
        return await response.text();            
    } else {         
        throw new Error("Wrong server responce");
    }             
}

