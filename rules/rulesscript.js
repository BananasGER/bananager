function toggleGroup(groupId) {
    const group = document.getElementById(groupId);
    group.classList.toggle("open");
}

function toggleLanguage() {
    const germanBox = document.getElementById("lang-de");
    const englishBox = document.getElementById("lang-en");

    if (germanBox.classList.contains("active")) {
        germanBox.classList.remove("active");
        englishBox.classList.add("active");
    } else {
        germanBox.classList.add("active");
        englishBox.classList.remove("active");
    }
}
