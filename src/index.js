import './style.css';
import { createHomePage } from './home';
import { createMenuPage } from './menu';

const CreateHeader = () => {
    const container = document.querySelector('#content');

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

    container.appendChild(header);

    return header;
}

CreateHeader();

const clearPage = () => {
    const content = document.querySelector('#content');
    let nodes = content.childNodes;
    const CONTENT_AFTER_HEADER = 2;
    for(let i = CONTENT_AFTER_HEADER; i < nodes.length; i++) {
        content.removeChild(nodes[i]);
    }
}

const navLinks = document.querySelectorAll('.link');
const handleNavigation = (link) => {
        switch(link.textContent) {
            case 'Home':
                {
                    clearPage();
                    createHomePage();
                    break;
                }
            case 'Menu':
                {
                    clearPage();
                    createMenuPage();
                    break;
                }
            case 'Contact Us':
                {
                    clearPage();
                    //createContactUsPage();
                    break;
                }
            default:
                break;
        }
}
navLinks.forEach(link => link.addEventListener('click', () => {
    handleNavigation(link);
}))


