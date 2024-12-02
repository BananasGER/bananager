function showPage(pageId) {
    // Alle Seiten ausblenden
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Zeige die ausgewählte Seite an
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

function toggleMode() {
    const body = document.body;
    const button = document.getElementById('modeButton');
    
    // Toggle between dark and light mode classes
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent = '☀️ Light Mode'; // Button zeigt "Dark Mode"
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = '🌙 Dark Mode'; // Button zeigt "Light Mode"
    }
}