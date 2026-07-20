export function renderSkills(container, skills) {
    skills.forEach((skill, index) => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.style.opacity = '0';

        const skillName = document.createElement('span');
        skillName.textContent = skill.name;

        skillDiv.appendChild(skillName);
        container.appendChild(skillDiv);

        setTimeout(() => {
            skillDiv.style.opacity = '1';
        }, 200 * (index + 1));
    });
}
