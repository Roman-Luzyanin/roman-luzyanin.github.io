import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";
import { dialog } from "./reservation.js";

const content = document.querySelector('.content');
const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');
const contactBtn = document.querySelector('.contactBtn');
const reservationBtn = document.querySelector('.reservationBtn');

document.body.appendChild(dialog);

window.addEventListener('load', ()=> content.appendChild(home))

homeBtn.addEventListener('click', ()=> {
    content.firstChild.remove();
    content.appendChild(home);
})

menuBtn.addEventListener('click', ()=> {
    content.firstChild.remove();
    content.appendChild(menu);
})

contactBtn.addEventListener('click', ()=> {
    content.firstChild.remove();
    content.appendChild(contact);
})

reservationBtn.addEventListener('click', ()=> dialog.showModal());
