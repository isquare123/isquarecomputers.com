<script>
    // Select the toggle button
    const themeToggleButton = document.getElementById('theme-toggle');

    // Add click event listener to the button
    themeToggleButton.addEventListener('click', () => {
        // Toggle the "dark-theme" class on the <body> element
        document.body.classList.toggle('dark-theme');

        // Update button text based on the current theme
        const isDarkTheme = document.body.classList.contains('dark-theme');
        themeToggleButton.textContent = isDarkTheme ? 'Toggle Light Theme' : 'Toggle Dark Theme';

        // Optionally save theme preference in local storage
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });

    // Apply saved theme preference on page load
    window.addEventListener('load', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggleButton.textContent = 'Toggle Light Theme';
        }
    });
</script>
