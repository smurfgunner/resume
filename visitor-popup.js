import { logEvent } from './analytics.js';
import { sendVisitorInfo } from './email-service.js';

export function initVisitorPopup() {
    setTimeout(() => {
        document.getElementById('visitor-popup').style.display = 'flex';
    }, 5000);

    document.getElementById('visitor-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const company = document.getElementById('company').value;
        const title = document.getElementById('title').value;

        logEvent('visitor_info', { company, title });

        sendVisitorInfo({ company, position: title }).catch(function(err) {
            console.error('EmailJS error:', err);
        });

        document.getElementById('visitor-form').style.display = 'none';
        document.getElementById('form-text').textContent = 'Thank You! 🥳';
    });

    document.getElementById('cancel-btn').addEventListener('click', function() {
        logEvent('refused_info_submission');
        document.getElementById('visitor-popup').style.display = 'none';
    });
}
