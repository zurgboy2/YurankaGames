document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const isEventPage = path.includes('/event/');
    const headerPath = isEventPage ? '../components/header.html' : 'components/header.html';

    fetch(headerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error loading header:', error));
});
