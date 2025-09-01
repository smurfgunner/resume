async function loadSkills() {
    try {
        // Fetch the skills data from the JSON file
        const response = await fetch('skills.json');
        if (!response.ok) {
            throw new Error(`Error fetching skills: ${response.status}`);
        }

        const data = await response.json();
        const skillsContainer = document.getElementById('skills-container');

        // Loop through the skills and dynamically create the skill bars
        data.skills.forEach((skill, index) => {
            // Create skill elements
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('skill');
            skillDiv.style.opacity = '0'; // Initial opacity for fade-in effect

            const skillName = document.createElement('span');
            skillName.textContent = skill.name;

            // const skillBar = document.createElement('div');
            // skillBar.classList.add('skill-bar');

            // const skillLevel = document.createElement('div');
            // skillLevel.classList.add('skill-level');
            // skillLevel.style.width = '0%'; // Initially set the width to 0%

            // Append the skill name and the bar
            // skillBar.appendChild(skillLevel);
            skillDiv.appendChild(skillName);
            // skillDiv.appendChild(skillBar);
            skillsContainer.appendChild(skillDiv);

            // Delay the appearance and bar animation
            setTimeout(() => {
                skillDiv.style.opacity = '1'; // Fade in effect
                skillLevel.style.width = skill.level; // Set the actual width from JSON
            }, 200 * (index + 1)); // Each skill appears 400ms after the previous one
        });

    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
}

// Function to generate star ratings with Font Awesome
function generateStarRating(rating) {
    const maxStars = 5;
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half star if rating is .5 or more
    const emptyStars = maxStars - fullStars - halfStar; // Empty stars

    const starDiv = document.createElement('div');
    starDiv.classList.add('star-rating');

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        const fullStar = document.createElement('i');
        fullStar.classList.add('fas', 'fa-star'); // Full star icon
        starDiv.appendChild(fullStar);
    }

    // Add half star if applicable
    if (halfStar) {
        const halfStarEl = document.createElement('i');
        halfStarEl.classList.add('fas', 'fa-star-half-alt'); // Half star icon
        starDiv.appendChild(halfStarEl);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        const emptyStar = document.createElement('i');
        emptyStar.classList.add('far', 'fa-star'); // Empty star icon
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
            // Create job elements
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

            // Append the job details to the container
            jobDiv.appendChild(jobTitle);
            jobDiv.appendChild(jobLocation);
            jobDiv.appendChild(jobTasks);

            // Create app links with ratings
            if (job.appstore && job.appstore.length > 0) {
                const appLinksDiv = document.createElement('div');
                appLinksDiv.classList.add('apps');

                job.appstore.forEach(app => {
                    const appLink = document.createElement('a');
                    appLink.href = app.link;
                    appLink.textContent = app.app;
                    appLink.target = '_blank';
                    appLink.style.marginLeft = '12px'; // Space between app name and stars

                    // Create the star rating component
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

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Load work history when the page loads
window.onload = function() {
    loadSkills(); // Call to load skills (from the earlier example)
    loadWorkHistory(); // Call to load work history
};

// Wait 10 seconds before showing the popup
// setTimeout(function() {
//     document.getElementById('visitor-popup').style.display = 'block';
// }, 5000);
