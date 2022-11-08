export const createContactUsPage = () => {
    const container = document.querySelector('#content');

    const contactus = createContactUs();

    container.appendChild(contactus);
}

const createContactUs = () => {
    const contactusContainer = document.createElement('div');
    contactusContainer.setAttribute('id','contactusContainer');

    const header = createContactUsHeader();
    const info = createContactUsInfo();

    contactusContainer.appendChild(header);
    contactusContainer.appendChild(info);

    return contactusContainer;
}

const createContactUsHeader = () => {
    const contactUsHeader = document.createElement('p');
    contactUsHeader.textContent = 'Contact Us';
    contactUsHeader.setAttribute('id','contactUsHeader');

    return contactUsHeader;
}

const createContactUsInfo = () => {
    const contactInfocontainer = document.createElement('div');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-us-info');

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

    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('contact-us');

    const phoneHeader = document.createElement('p');
    phoneHeader.textContent = "Phone";

    const phone = document.createElement('p');
    hours.textContent = "(225)-789 4544";
    hours.setAttribute('id','phone');

    phoneDiv.appendChild(hoursHeader);
    phoneDiv.appendChild(hours);

    contactInfo.appendChild(addressDiv);
    contactInfo.appendChild(HoursDiv);
    contactInfo.appendChild(phoneDiv);

    contactInfocontainer.appendChild(contactInfo);

    return contactInfocontainer;
}