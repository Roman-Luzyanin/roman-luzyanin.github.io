const home = document.createElement('div');
home.classList.add('home');

import image from "./images/about/glasses.jpg";
const homeImage = document.createElement('img');
homeImage.src = image;
homeImage.classList.add('glasses');

const h1 = document.createElement('h1');
h1.textContent = 'Welcome';

const para1 = document.createElement('p');
para1.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

const para2 = document.createElement('p');
para2.textContent = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.";

const homeText = document.createElement('div');
homeText.appendChild(h1);
homeText.appendChild(para1);
homeText.appendChild(para2);

home.appendChild(homeImage);
home.appendChild(homeText);

export { home };