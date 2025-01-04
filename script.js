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

// Funktion, um die Benachrichtigung anzuzeigen
window.onload = function() {
    // Benachrichtigung anzeigen
    var notification = document.getElementById("notification");
    notification.classList.add("show");

    // Benachrichtigung nach 5 Sekunden automatisch verschwinden lassen
    setTimeout(function() {
        notification.classList.remove("show");
    }, 10000); // 5000 Millisekunden = 5 Sekunden
};

function toggleAccordion(id) {
    var content = document.getElementById(id);
    var allContents = document.querySelectorAll('.accordion-content');
  
    allContents.forEach(function(item) {
      if (item.id !== id) {
        item.style.display = 'none';
      }
    });
  
    // Toggle das aktuelle Element
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
