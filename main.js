import { firebaseConfig, emailConfig } from './config.js';
import { fetchJson } from './json-loader.js';
import { renderSkills } from './skills-view.js';
import { renderWorkHistory } from './work-history-view.js';
import { initAnalytics, logEvent } from './analytics.js';
import { initEmail } from './email-service.js';
import { initVisitorPopup } from './visitor-popup.js';

initAnalytics(firebaseConfig);
initEmail(emailConfig);

logEvent('view_content');

document.getElementById('coffee-btn').addEventListener('click', function() {
    logEvent('schedule_selected');
    window.open('https://calendly.com/vahidgr-xtr0/30min', '_blank');
});

window.onload = async function() {
    try {
        const skillsData = await fetchJson('skills.json');
        renderSkills(document.getElementById('skills-container'), skillsData.skills);
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }

    try {
        const workData = await fetchJson('work-history.json');
        renderWorkHistory(document.getElementById('work-history-container'), workData.jobs);
    } catch (error) {
        alert(`An error occurred while loading work history: ${error.message}`);
    }
};

initVisitorPopup();
