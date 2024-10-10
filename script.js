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

window.onload = loadSkills;
