document.addEventListener('DOMContentLoaded', function() {
    // Get the base URL of the current page
    const baseUrl = document.location.href.split('/').slice(0, -1).join('/');
    
    fetch(`${baseUrl}/components/header.html`)
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
