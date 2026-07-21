export function renderProjects(container, projects) {
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const h3 = document.createElement('h3');
        h3.textContent = project.title;

        if (project.appstore) {
            const appLink = document.createElement('a');
            appLink.href = project.appstore.link;
            appLink.target = '_blank';
            appLink.className = 'appstore-badge';
            appLink.innerHTML = '<i class="fab fa-app-store-ios"></i> App Store';
            h3.appendChild(document.createTextNode(' '));
            h3.appendChild(appLink);
        }

        projectDiv.appendChild(h3);

        const datesP = document.createElement('p');
        datesP.textContent = project.dates;
        projectDiv.appendChild(datesP);

        const descP = document.createElement('p');
        descP.classList.add('description');
        descP.innerHTML = project.description;
        projectDiv.appendChild(descP);

        const featuresList = document.createElement('ul');
        featuresList.classList.add('features');
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = feature;
            featuresList.appendChild(li);
        });
        projectDiv.appendChild(featuresList);

        container.appendChild(projectDiv);
    });
}
