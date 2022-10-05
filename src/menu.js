export const createMenuPage = () => {
    const container = document.querySelector('#content');

    const menu = createMenu();

    container.appendChild(menu);
}


const createMenu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id','menuContainer');

    let menuHeader = createMenuHeader();
    let item1 = createMenuItem('','Pizza1','50$','nice one');
    let item2 = createMenuItem('','Margerita','50$','margeriatasd one');
    let item3 = createMenuItem('','seasd pizza','50$','seasd one');

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
    const img = document.createElement('img');
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

    item.appendChild(itemInfo);
    item.appendChild(itemDescription);


    itemContainer.appendChild(imgContainer);
    itemContainer.appendChild(item);

    return itemContainer;
}