function showPage(pageId) {

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });


    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

function toggleMode() {
    const body = document.body;
    const button = document.getElementById('modeButton');
    

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


window.onload = function() {
    // Benachrichtigung anzeigen
    var notification = document.getElementById("notification");
    notification.classList.add("show");


    setTimeout(function() {
        notification.classList.remove("show");
    }, 10000);
};

function toggleAccordion(id) {
    var content = document.getElementById(id);
    var allContents = document.querySelectorAll('.accordion-content');
  
    allContents.forEach(function(item) {
      if (item.id !== id) {
        item.style.display = 'none';
      }
    });
  

    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
