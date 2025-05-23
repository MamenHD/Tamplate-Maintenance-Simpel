// Language data
const languages = {
    en: {
        title: "We'll be back soon!",
        message: "Sorry for the inconvenience but we're performing some maintenance at the moment. If you need to you can always <a href='https://github.com/MamenHD'>contact us</a>, otherwise we'll be back online shortly!",
        signature: "— MamenHD"
    },
    id: {
        title: "Kami akan segera kembali!",
        message: "Maaf atas ketidaknyamanannya, kami sedang melakukan pemeliharaan. Jika perlu, Anda selalu dapat <a href='https://github.com/MamenHD'>menghubungi kami</a>, kami akan segera kembali online!",
        signature: "— MamenHD"
    }
};

// DOM elements
const titleElement = document.getElementById('title');
const messageElement = document.getElementById('message');
const signatureElement = document.getElementById('signature');
const enBtn = document.getElementById('en-btn');
const idBtn = document.getElementById('id-btn');

// Function to change language
function changeLanguage(lang) {
    titleElement.textContent = languages[lang].title;
    messageElement.innerHTML = languages[lang].message;
    signatureElement.textContent = languages[lang].signature;

    // Update active button style
    if (lang === 'en') {
        enBtn.style.fontWeight = 'bold';
        enBtn.style.backgroundColor = '#dc8100';
        enBtn.style.color = 'white';
        idBtn.style.fontWeight = 'normal';
        idBtn.style.backgroundColor = '#f0f0f0';
        idBtn.style.color = '#333';
    } else {
        idBtn.style.fontWeight = 'bold';
        idBtn.style.backgroundColor = '#dc8100';
        idBtn.style.color = 'white';
        enBtn.style.fontWeight = 'normal';
        enBtn.style.backgroundColor = '#f0f0f0';
        enBtn.style.color = '#333';
    }
}

// Event listeners for buttons
enBtn.addEventListener('click', () => changeLanguage('en'));
idBtn.addEventListener('click', () => changeLanguage('id'));

// Initialize with English
changeLanguage('en');