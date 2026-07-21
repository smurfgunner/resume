export function renderPersonalInfo(container, info) {
    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.textContent = info.name;
    header.appendChild(h1);

    const phoneP = document.createElement('p');
    phoneP.innerHTML = `<i class="fas fa-phone-alt"></i> ${info.phone}`;
    header.appendChild(phoneP);

    const emailP = document.createElement('p');
    emailP.innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:${info.email}">${info.email}</a>`;
    header.appendChild(emailP);

    const locationP = document.createElement('p');
    locationP.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${info.location}`;
    header.appendChild(locationP);

    const githubAccounts = Array.isArray(info.github) ? info.github : [info.github];
    githubAccounts.forEach(account => {
        const githubP = document.createElement('p');
        githubP.innerHTML = `<i class="fab fa-github"></i> <a href="${account.url}" target="_blank">${account.handle}</a>`;
        header.appendChild(githubP);
    });

    container.appendChild(header);
}
