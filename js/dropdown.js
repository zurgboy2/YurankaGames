document.addEventListener('DOMContentLoaded', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        // Close the dropdown when clicking outside
        window.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    });
});