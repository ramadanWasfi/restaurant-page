import './style.css';

export const createHomePage = () => {
    const container = document.querySelector('#content');

    const header = CreateHeader();

    container.appendChild(header);
}

const CreateHeader = () => {
    const header = document.createElement('header');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'La Pizza';

    const nav = document.createElement('nav');

    const ul = document.createElement('ul');
    ul.setAttribute('id','navigation')

    const li1 = document.createElement('li');
    li1.textContent = 'Home';
    li1.classList.add('link');
    li1.setAttribute('id','home');

    const li2 = document.createElement('li');
    li2.textContent = 'Menu';
    li2.classList.add('link');
    li2.setAttribute('id','menu');

    const li3 = document.createElement('li');
    li3.textContent = 'Contact Us';
    li3.classList.add('link');
    li3.setAttribute('id','contact-us');

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    nav.appendChild(ul);

    header.appendChild(h1);
    header.appendChild(nav);

    return header;
}