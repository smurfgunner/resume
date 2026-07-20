let _config = null;

export function initEmail(config) {
    _config = config;
    emailjs.init({ publicKey: config.publicKey });
}

export function sendVisitorInfo({ company, position }) {
    return emailjs.send(_config.serviceId, _config.templateId, {
        company,
        position,
        time: new Date().toLocaleString()
    });
}
