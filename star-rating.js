export function createStarRating(rating) {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = maxStars - fullStars - halfStar;

    const starDiv = document.createElement('div');
    starDiv.classList.add('star-rating');

    for (let i = 0; i < fullStars; i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        starDiv.appendChild(star);
    }

    if (halfStar) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star-half-alt');
        starDiv.appendChild(star);
    }

    for (let i = 0; i < emptyStars; i++) {
        const star = document.createElement('i');
        star.classList.add('far', 'fa-star');
        starDiv.appendChild(star);
    }

    return starDiv;
}
