export function renderProfile(summaryContainer, interestsContainer, profile) {
    const summaryP = document.createElement('p');
    summaryP.innerHTML = profile.summary;
    summaryContainer.appendChild(summaryP);

    const interestsP = document.createElement('p');
    interestsP.innerHTML = profile.interests;
    interestsContainer.appendChild(interestsP);
}
