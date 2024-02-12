function loadPage(page) {
    const content = {
        home: 'Tervetuloa yrityksemme sivustolle!',
        about: '<h2>Meistä</h2><p>Yrityksemme tarjoaa...</p>',
        contact: '<h2>Yhteystiedot</h2><p>Ota yhteyttä...</p>',
        staff: '<h2>Henkilökunta</h2><div id="staff_list">Ladataan...</div>'
    };

    document.getElementById('main_content').innerHTML = content[page] || 'Sivua ei löydy';

    if (page === 'staff') {
        fetchStaffData();
    }
}

function fetchStaffData() {
    fetch('/api/staff')
        .then(response => response.json())
        .then(data => {
            const staffList = data.map(person =>
                `<li>${person.name}, ${person.title}, ${person.email}</li>`
            ).join('');
            document.getElementById('staff_list').innerHTML = `<ul>${staffList}</ul>`;
        });
}

// Oletuksena ladataan kotisivu
loadPage('home');