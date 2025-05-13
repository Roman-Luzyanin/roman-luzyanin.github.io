const contact = document.createElement('div');
contact.classList.add('contact');

const info = document.createElement('div');
info.classList.add('info');
contact.appendChild(info);
    const para1 = document.createElement('p');
    para1.innerHTML = `St. Petersburg,<br>
                       &emsp;&emsp;Stachek Avenue, 5<br>
                       &emsp;&emsp;&emsp;198085`;                       
    info.appendChild(para1);

    const para2 = document.createElement('p');
    para2.innerHTML = `&emsp;&emsp;luzyanin.ro@gmail.com<br>
                       8 (929) 111-21-09`;
    info.appendChild(para2);

const map = document.createElement('div');
map.classList.add('map');
contact.appendChild(map);
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', "https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=30.272891%2C59.900924&mode=whatshere&whatshere%5Bpoint%5D=30.271534%2C59.901226&whatshere%5Bzoom%5D=17&z=17.89");
    map.appendChild(iframe);

export { contact };

