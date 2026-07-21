import { firebaseConfig, emailConfig } from './config.js';
import { fetchJson } from './json-loader.js';
import { renderSkills } from './skills-view.js';
import { renderWorkHistory } from './work-history-view.js';
import { renderPersonalInfo } from './personal-info-view.js';
import { renderProfile } from './profile-view.js';
import { renderProjects } from './projects-view.js';
import { renderEducation } from './education-view.js';
import { initAnalytics, logEvent } from './analytics.js';
import { initEmail } from './email-service.js';
initAnalytics(firebaseConfig);
initEmail(emailConfig);

logEvent('view_content');

document.getElementById('coffee-btn').addEventListener('click', function() {
    logEvent('schedule_selected');
    window.open('https://calendly.com/vahidgr-xtr0/30min', '_blank');
});

window.onload = async function() {
    try {
        const personalInfo = await fetchJson('personal-info.json');
        renderPersonalInfo(document.getElementById('personal-info-container'), personalInfo);
    } catch (error) {
        alert(`An error occurred while loading personal info: ${error.message}`);
    }

    try {
        const profile = await fetchJson('profile.json');
        renderProfile(
            document.getElementById('summary-container'),
            document.getElementById('interests-container'),
            profile
        );
    } catch (error) {
        alert(`An error occurred while loading profile: ${error.message}`);
    }

    try {
        const skillsData = await fetchJson('skills.json');
        renderSkills(document.getElementById('skills-container'), skillsData.skills);
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }

    try {
        const workData = await fetchJson('work-history-featured.json');
        renderWorkHistory(document.getElementById('work-history-container'), workData.jobs);
    } catch (error) {
        alert(`An error occurred while loading work history: ${error.message}`);
    }

    try {
        const projectsData = await fetchJson('projects-featured.json');
        renderProjects(document.getElementById('projects-container'), projectsData.projects);
    } catch (error) {
        alert(`An error occurred while loading projects: ${error.message}`);
    }

    try {
        const earlierWorkData = await fetchJson('work-history-earlier.json');
        renderWorkHistory(document.getElementById('earlier-work-history-container'), earlierWorkData.jobs);
    } catch (error) {
        alert(`An error occurred while loading earlier work history: ${error.message}`);
    }

    try {
        const earlierProjectsData = await fetchJson('projects-earlier.json');
        renderProjects(document.getElementById('earlier-projects-container'), earlierProjectsData.projects);
    } catch (error) {
        alert(`An error occurred while loading earlier projects: ${error.message}`);
    }

    try {
        const educationData = await fetchJson('education.json');
        renderEducation(document.getElementById('education-container'), educationData.education);
    } catch (error) {
        alert(`An error occurred while loading education: ${error.message}`);
    }
};

