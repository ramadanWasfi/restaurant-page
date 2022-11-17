import Margherita from './pizzatypes-margherita-.jpg';
import GreekPizza from './onions.jpg';
import Sicilian from './rectangle.jpg';

export const createMenuPage = () => {
    const container = document.querySelector('#content');

    const menu = createMenu();

    container.appendChild(menu);
}


const createMenu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id','menuContainer');

    let menuHeader = createMenuHeader();
    let item1 = createMenuItem(Margherita,'Pizza Margherita','50 $','Features tomatoes, sliced mozzarella, basil, and extra virgin olive oil.');
    let item2 = createMenuItem(GreekPizza,'Greek Pizza','55 $','usually heavier on the sauce than the cheese. The sauce typically has a tangy tomato paste with a strong oregano flavor.');
    let item3 = createMenuItem(Sicilian,'Sicilian Pizza','60 $','Sicilian pizzas are often topped with bits of tomato, onion, anchovies, and herbs.');

    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(item3);

    return menuContainer;
}


const createMenuHeader = () => {
    const menuHeader = document.createElement('p');
    menuHeader.textContent = 'Menu';
    menuHeader.setAttribute('id','menuHeader');

    return menuHeader;
}

const createMenuItem = (imgSrc, name, price, description) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContainer');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');
    const img = new Image();
    img.src = imgSrc;
    img.classList.add('itemImg');
    imgContainer.appendChild(img);

    const item = document.createElement('div');
    item.classList.add('item');

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('itemInfo');
    
    const itemName = document.createElement('p');
    itemName.classList.add('itemName');
    itemName.textContent = name;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('itemPrice');
    itemPrice.textContent = price;

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('itemDescription');
    itemDescription.textContent = description;

    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemDescription);


    itemContainer.appendChild(imgContainer);
    itemContainer.appendChild(item);

    return itemContainer;
}