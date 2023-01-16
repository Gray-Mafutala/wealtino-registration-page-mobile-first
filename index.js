const menuBtn = document.querySelector('.menu-btn');
const themeChooseBox = document.querySelector('.theme-switcher');
const btnthemeBlueLight = document.querySelector('.theme-blue-light');
const btnthemeSalmonLight = document.querySelector('.theme-salmon-light');
const mainTitle = document.querySelector('.hero-title');
const outlineImg = document.querySelector('.outline-img');


// Apply-now btn and login and registration forms
const applyNowBtn = document.querySelector('.apply-now');
const loginForm = document.querySelector('.login-form');
const registrationForm = document.querySelector('.registration-form');

// Close form buttons
const closeRegistrationFormBtn = document.querySelector('.registration-form .close-form-btn');
const closeLoginFormBtn = document.querySelector('.login-form .close-form-btn');

// Button to switch to login and registration form
const showLogFormBtn = document.querySelector('.registration-form .btn-to-switch');
const showRegFormBtn = document.querySelector('.login-form .btn-to-switch');

// Paragraph to display a message to help the user fill in the inputs correctly
const logMsgLoginForm = document.querySelector('.login-form .log-input');
const logMsgRegistrationForm = document.querySelector('.registration-form .log-input');

// ============= To show choose-theme-box and apply a theme
menuBtn.addEventListener('click', () => {
    themeChooseBox.classList.toggle('active');
});

btnthemeBlueLight.addEventListener('click', () => {
    mainTitle.textContent = 'Invest for your future family. Now.';
    document.body.classList.remove('background-salmon-theme');
    outlineImg.setAttribute('src', "assets/img/young-mens.png");

    themeChooseBox.classList.remove('active');
    btnthemeSalmonLight.classList.remove('active');
    btnthemeBlueLight.classList.add('active');
});

btnthemeSalmonLight.addEventListener('click', () => {
    mainTitle.textContent = 'Turn your portofolio into pension saving';
    document.body.classList.add('background-salmon-theme');
    outlineImg.setAttribute('src', "assets/img/crypto-woman.png");

    themeChooseBox.classList.remove('active');
    btnthemeBlueLight.classList.remove('active');
    btnthemeSalmonLight.classList.add('active');
});



// ============= To close Registration and Login Form
closeRegistrationFormBtn.addEventListener('click', () => {
    registrationForm.classList.remove('active');
    document.body.classList.remove('body-fixed');
});

closeLoginFormBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
    document.body.classList.remove('body-fixed');
});



// ============= To show registration or login form when clicking on "apply-now" btn
let lastActiveForm = 'registration';
applyNowBtn.addEventListener('click', () => {
    if (lastActiveForm === 'registration') {
        registrationForm.classList.add('active');
    } else {
        loginForm.classList.add('active');
    }
    document.body.classList.add('body-fixed');
});



// ============= To switch between registration and login forms
showLogFormBtn.addEventListener('click', () => {
    registrationForm.classList.remove('active');
    loginForm.classList.add('active');
    lastActiveForm = 'login';
});
showRegFormBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
    registrationForm.classList.add('active');
    lastActiveForm = 'registration';
})

