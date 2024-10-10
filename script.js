async function loadSkills() {
    try {
        const response = await fetch('skills.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        const skillsContainer = document.getElementById('skills-container');
        
        data.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('skill');

            const skillName = document.createElement('span');
            skillName.textContent = skill.name;

            const skillBar = document.createElement('div');
            skillBar.classList.add('skill-bar');

            const skillLevel = document.createElement('div');
            skillLevel.classList.add('skill-level');
            skillLevel.style.width = skill.level;

            skillBar.appendChild(skillLevel);
            skillDiv.appendChild(skillName);
            skillDiv.appendChild(skillBar);
            skillsContainer.appendChild(skillDiv);
        });
    } catch (error) {
        alert(`An error occurred while loading skills: ${error.message}`);
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

function animateSkillBars() {
    // Add animation class to all skill bars after the page loads
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(skillBar => {
        skillBar.classList.add('animate');
    });
};

// Load work history when the page loads
window.onload = function() {
    loadSkills(); // Call to load skills (from the earlier example)
    loadWorkHistory(); // Call to load work history
    animateSkillBars();
};
