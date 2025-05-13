const dialog = document.createElement('dialog');
const form = document.createElement('form');

const input = document.createElement('input');
input.setAttribute('placeholder', 'Name');
input.setAttribute('name', 'Name');
input.setAttribute('required', '');
form.appendChild(input);

const tel = document.createElement('input');
tel.setAttribute('type', 'tel');
tel.setAttribute('placeholder', 'Phone number');
tel.setAttribute('name', 'Phone number');
tel.setAttribute('required', '');
form.appendChild(tel);

const number = document.createElement('input');
number.setAttribute('type', 'number');
number.setAttribute('placeholder', 'Number of guests');
number.setAttribute('name', 'Number of guests');
number.setAttribute('min', '1');
form.appendChild(number);

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const todayDate = `${year}-${month < 10 ? '0' + month : month}-${day}`;

const date = document.createElement('input');
date.setAttribute('type', 'date');
date.setAttribute('value', `${todayDate}`);
date.setAttribute('name', 'date');
form.appendChild(date);

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const todayTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

const time = document.createElement('input');
time.setAttribute('type', 'time');
time.setAttribute('value', `${todayTime}`);
time.setAttribute('name', 'time');
form.appendChild(time);

const buttons = document.createElement('div');
buttons.classList.add('buttons');
form.appendChild(buttons);

    const apply = document.createElement('button');
    apply.textContent = 'Apply';
    apply.setAttribute('formmethod', 'dialog');
    buttons.appendChild(apply);

        // async function sendData() {
        //     const formData = new FormData(form);

        //     try{
        //         const response = await fetch('https://mail.google.com?email=luzyanin.ro@gmail.com', {
        //             method: "POST",
        //             body: formData,
        //         });
        //         console.log(await response.json());
        //     } catch (e) {
        //         console.error(e);
        //     }
        // }

        // apply.addEventListener('click', (e)=> {
        //     e.preventDefault();
        //     sendData();
        // });

    const cancel = document.createElement('button');
    cancel.textContent = 'Cancel';
    buttons.appendChild(cancel);

        cancel.addEventListener('click', (e)=> {
            e.preventDefault();
            dialog.close();
        })

dialog.addEventListener('close', ()=> {
    input.value = "";
    tel.value = "";
    number.value = "";
})

dialog.appendChild(form);

export { dialog };
