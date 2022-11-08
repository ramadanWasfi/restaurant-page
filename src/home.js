export const createHomePage = () => {
    const container = document.querySelector('#content');

    const main = createMainContent();

    container.appendChild(main);
}

const createMainContent = () => {
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id','mainContent');

    const mainDiv = createMainDiv();
  //  const contactUsDiv = createContactUsDiv();

    mainContent.appendChild(mainDiv);
//    mainContent.appendChild(contactUsDiv);

    return mainContent;
}

const createMainDiv = () => {
    const container = document.createElement('div');
    container.setAttribute('id','main-div');

    const p = document.createElement('p');
    p.textContent = 'Come on down for some delicious pizzas';
    p.setAttribute('id','main-paragraph');

    const p2 = document.createElement('p');
    p2.textContent = 'Best pizzas in your country';
    p2.setAttribute('id','secondary-paragraph');

    container.appendChild(p);
    container.appendChild(p2);

    return container;
}

const createContactUsDiv = () => {
    const container = document.createElement('div');
    container.setAttribute('id','contact-us-div');

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('contact-us');

    const addressHeader = document.createElement('p');
    addressHeader.textContent = "Address";

    const address = document.createElement('p');
    address.textContent = "1024 Oakwood Ave San Diego, CA 22434";
    address.setAttribute('id','address');

    addressDiv.appendChild(addressHeader);
    addressDiv.appendChild(address);

    const HoursDiv = document.createElement('div');
    HoursDiv.classList.add('contact-us');

    const hoursHeader = document.createElement('p');
    hoursHeader.textContent = "Hours";

    const hours = document.createElement('p');
    hours.textContent = "Mon-Thurs:   8am-8pm";
    hours.setAttribute('id','hours');

    HoursDiv.appendChild(hoursHeader);
    HoursDiv.appendChild(hours);

    container.appendChild(addressDiv);
    container.appendChild(HoursDiv);

    return container;
}