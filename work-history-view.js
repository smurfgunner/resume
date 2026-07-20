import { createStarRating } from './star-rating.js';

export function renderWorkHistory(container, jobs) {
    jobs.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('job');

        const jobTitle = document.createElement('h3');
        jobTitle.innerHTML = job.title;

        const jobLocation = document.createElement('p');
        jobLocation.innerHTML = `${job.location} • ${job.dates}`;

        const jobTasks = document.createElement('ul');
        job.tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = task;
            jobTasks.appendChild(taskItem);
        });

        jobDiv.appendChild(jobTitle);
        jobDiv.appendChild(jobLocation);
        jobDiv.appendChild(jobTasks);

        if (job.appstore && job.appstore.length > 0) {
            const appLinksDiv = document.createElement('div');
            appLinksDiv.classList.add('apps');

            job.appstore.forEach(app => {
                const appLink = document.createElement('a');
                appLink.href = app.link;
                appLink.textContent = app.app;
                appLink.target = '_blank';
                appLink.style.marginLeft = '12px';

                const appContainer = document.createElement('div');
                appContainer.classList.add('app-container');
                appContainer.appendChild(createStarRating(app.rating));
                appContainer.appendChild(appLink);

                appLinksDiv.appendChild(appContainer);
            });

            jobDiv.appendChild(appLinksDiv);
        }

        container.appendChild(jobDiv);
    });
}
