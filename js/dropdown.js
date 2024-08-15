document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    console.log('Number of dropdowns found:', dropdowns.length);
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropbtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Dropdown button clicked');
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Sidebar functionality
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    console.log('Sidebar toggle found:', !!sidebarToggle);
    console.log('Sidebar found:', !!sidebar);
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            console.log('Sidebar toggle clicked');
            sidebar.classList.toggle('open');
            console.log('Sidebar open class toggled. Current classes:', sidebar.classList.toString());
        });
    } else {
        console.log('Sidebar toggle or sidebar not found');
    }

    // Close dropdowns and sidebar when clicking outside
    window.addEventListener('click', (e) => {
        console.log('Window clicked');
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            }
        });

        if (sidebar && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            console.log('Clicked outside sidebar, closing it');
            sidebar.classList.remove('open');
        }
    });
});
