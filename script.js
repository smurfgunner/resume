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

            const skillBar = document.createElement('div');
            skillBar.classList.add('skill-bar');

            const skillLevel = document.createElement('div');
            skillLevel.classList.add('skill-level');
            skillLevel.style.width = '0%'; // Initially set the width to 0%

            // Append the skill name and the bar
            skillBar.appendChild(skillLevel);
            skillDiv.appendChild(skillName);
            skillDiv.appendChild(skillBar);
            skillsContainer.appendChild(skillDiv);

            // Delay the appearance and bar animation
            setTimeout(() => {
                skillDiv.style.opacity = '1'; // Fade in effect
                skillLevel.style.width = skill.level; // Set the actual width from JSON
            }, 1000 * (index + 1)); // Each skill appears 1000ms after the previous one
        });

    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
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
            jobTitle.textContent = job.title;

            const jobLocation = document.createElement('p');
            jobLocation.textContent = `${job.location} • ${job.dates}`;

            const jobTasks = document.createElement('ul');
            job.tasks.forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.textContent = task;
                jobTasks.appendChild(taskItem);
            });

            // Append the job details to the container
            jobDiv.appendChild(jobTitle);
            jobDiv.appendChild(jobLocation);
            jobDiv.appendChild(jobTasks);
            workHistoryContainer.appendChild(jobDiv);
        });
    } catch (error) {
        alert(`An error occurred while loading work history: ${error.message}`);
    }
}

// Load work history when the page loads
window.onload = function() {
    loadSkills(); // Call to load skills (from the earlier example)
    loadWorkHistory(); // Call to load work history
};
