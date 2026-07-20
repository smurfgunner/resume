async function loadSkills() {
    try {
        const response = await fetch('skills.json');
        if (!response.ok) {
            throw new Error(`Error fetching skills: ${response.status}`);
        }

        const data = await response.json();
        const skillsContainer = document.getElementById('skills-container');

        data.skills.forEach((skill, index) => {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('skill');
            skillDiv.style.opacity = '0';

            const skillName = document.createElement('span');
            skillName.textContent = skill.name;

            // const skillBar = document.createElement('div');
            // skillBar.classList.add('skill-bar');

            // const skillLevel = document.createElement('div');
            // skillLevel.classList.add('skill-level');
            // skillLevel.style.width = '0%';

            // skillBar.appendChild(skillLevel);
            skillDiv.appendChild(skillName);
            // skillDiv.appendChild(skillBar);
            skillsContainer.appendChild(skillDiv);

            setTimeout(() => {
                skillDiv.style.opacity = '1';
                // skillLevel.style.width = skill.level;
            }, 200 * (index + 1));
        });

    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
}

// Function to generate star ratings with Font Awesome
function generateStarRating(rating) {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = maxStars - fullStars - halfStar;

    const starDiv = document.createElement('div');
    starDiv.classList.add('star-rating');

    for (let i = 0; i < fullStars; i++) {
        const fullStar = document.createElement('i');
        fullStar.classList.add('fas', 'fa-star');
        starDiv.appendChild(fullStar);
    }

    if (halfStar) {
        const halfStarEl = document.createElement('i');
        halfStarEl.classList.add('fas', 'fa-star-half-alt');
        starDiv.appendChild(halfStarEl);
    }

    for (let i = 0; i < emptyStars; i++) {
        const emptyStar = document.createElement('i');
        emptyStar.classList.add('far', 'fa-star');
        starDiv.appendChild(emptyStar);
    }

    return starDiv;
}


// Function to load work history from the JSON file
async function loadWorkHistory() {
    try {
        const response = await fetch('work-history.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        const workHistoryContainer = document.getElementById('work-history-container');

        data.jobs.forEach(job => {
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

                    const ratingDiv = generateStarRating(app.rating);

                    const appContainer = document.createElement('div');
                    appContainer.classList.add('app-container');
                    appContainer.appendChild(ratingDiv);
                    appContainer.appendChild(appLink);

                    appLinksDiv.appendChild(appContainer);
                });

                jobDiv.appendChild(appLinksDiv);
            }
            workHistoryContainer.appendChild(jobDiv);
        });
    } catch (error) {
        alert(`An error occurred while loading work history: ${error.message}`);
    }
}

window.onload = function() {
    loadSkills();
    loadWorkHistory();
};

// Show the visitor info popup after 5 seconds
setTimeout(function() {
    document.getElementById('visitor-popup').style.display = 'block';
}, 5000);
