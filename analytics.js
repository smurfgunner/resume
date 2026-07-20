let _analytics = null;

export function initAnalytics(config) {
    firebase.initializeApp(config);
    _analytics = firebase.analytics();
}

export function logEvent(eventName, eventParams) {
    _analytics?.logEvent(eventName, eventParams);
}
