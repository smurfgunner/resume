export function renderEducation(container, education) {
    education.forEach(entry => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${entry.institution}</strong> • ${entry.date} <br> ${entry.degree}`;
        container.appendChild(p);
    });
}
