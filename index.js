/* =====> 1. To show theme-switcher, apply the chosen theme, 
    and change title and bottom image */
const menuBtn = document.querySelector(".menu-btn");
const themeSwitcher = document.querySelector(".theme-switcher");
const btnthemeBlueLight = document.querySelector(".theme-blue-light");
const btnthemeSalmonLight = document.querySelector(".theme-salmon-light");
const mainTitle = document.querySelector(".hero-title");
const heroImg = document.querySelector(".hero-img");

const PATH_IMG_YOUNG_MENS = "url('../../assets/img/young-mens.png')";
const PATH_IMG_CRYPTO_WOMAN = "url('../../assets/img/crypto-woman.png')";

// show or hide the theme-switcher
menuBtn.addEventListener("click", () => {
    themeSwitcher.classList.toggle("active");
});
menuBtn.addEventListener("focusout", () => {
    themeSwitcher.classList.remove("active");
});

// apply blue-light-theme
btnthemeBlueLight.addEventListener("click", () => {
    mainTitle.textContent = "Invest for your future family. Now.";
    document.body.classList.remove("background-salmon-theme");
    document.body.style.setProperty("--bg-img-url", PATH_IMG_YOUNG_MENS);
    heroImg.setAttribute("src", PATH_IMG_YOUNG_MENS.slice(9, -2));

    btnthemeSalmonLight.classList.remove("active");
    btnthemeBlueLight.classList.add("active");
});
// apply salmon-light-theme
btnthemeSalmonLight.addEventListener("click", () => {
    mainTitle.textContent = "Turn your portofolio into pension saving";
    document.body.classList.add("background-salmon-theme");
    document.body.style.setProperty("--bg-img-url", PATH_IMG_CRYPTO_WOMAN);
    heroImg.setAttribute("src", PATH_IMG_CRYPTO_WOMAN.slice(9, -2));

    btnthemeBlueLight.classList.remove("active");
    btnthemeSalmonLight.classList.add("active");
});
//================================================


/* =====> 2. To close Registration and Login Form */
// login and registration forms
const loginForm = document.querySelector(".login-form");
const registrationForm = document.querySelector(".registration-form");

// btn "X" to close login and registration forms
const closeRegistrationFormBtn = document.querySelector(".registration-form .close-form-btn");
const closeLoginFormBtn = document.querySelector(".login-form .close-form-btn");

closeRegistrationFormBtn.addEventListener("click", () => {
    registrationForm.classList.remove("active");
    registrationForm.reset();
    clearFormField(registrationForm.fullname);
    clearFormField(registrationForm.email);
    clearFormField(registrationForm.password);
    document.body.classList.remove("fixed");
});

closeLoginFormBtn.addEventListener("click", () => {
    loginForm.classList.remove("active");
    loginForm.reset();
    clearFormField(loginForm.email);
    document.body.classList.remove("fixed");
});
//================================================


/* =====> 3. To show Registration and Login Form */
// functions to show registration or login form
const toShowLoginForm = () => {
    closeRegistrationFormBtn.click();
    loginForm.classList.add("active");
    loginForm.email.focus();

    registrationForm.classList.remove("last-displayed-form");
    loginForm.classList.add("last-displayed-form");

    document.body.classList.add("fixed");
};
const toShowRegistrationForm = () => {
    closeLoginFormBtn.click();
    registrationForm.classList.add("active");
    registrationForm.fullname.focus();

    loginForm.classList.remove("last-displayed-form");
    registrationForm.classList.add("last-displayed-form");

    document.body.classList.add("fixed");
};

// to show registration or login form when clicking on "apply-now" btn
const applyNowBtn = document.querySelector(".apply-now");
let lastActiveForm = "registration";
applyNowBtn.addEventListener("click", () => {
    if (lastActiveForm === "registration") {
        toShowRegistrationForm();
    }
    else {
        toShowLoginForm();
    }
});

// to switch between registration and login forms
const showLogFormBtn = document.querySelector(".registration-form .btn-to-switch");
const showRegFormBtn = document.querySelector(".login-form .btn-to-switch");
showLogFormBtn.addEventListener("click", () => {
    toShowLoginForm();
    lastActiveForm = "login";
});

showRegFormBtn.addEventListener("click", () => {
    toShowRegistrationForm();
    lastActiveForm = "registration";
});
//================================================


/* =====> 4. Checking the validity of field values */
// functions to instruct user to fill in a field OR delete the notifiers
const clearFormField = (field) => {
    const label = document.querySelector(`label[for=${field.id}]`);
    field.classList.remove("invalid-value");
    label.setAttribute("data-hint", "");
};
const showTooltip = (field, msg) => {
    const label = document.querySelector(`label[for=${field.id}]`);
    field.classList.add("invalid-value");
    label.setAttribute("data-hint", msg);
};

// for login-form fields
const regexValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
loginForm.email.addEventListener("input", (e) => {
    if ((e.target.value.length === 0) || regexValidEmail.test(e.target.value)) {
        clearFormField(loginForm.email);
    }
    else {
        showTooltip(loginForm.email, "Invalid email");
    }
});

//for registration-form fields
registrationForm.fullname.addEventListener("input", (e) => {
    const regexIsFullname = /^[a-z]{2,} [a-z]{2,}$/gi;
    if ((e.target.value.length === 0) || regexIsFullname.test(e.target.value)) {
        clearFormField(registrationForm.fullname);
    }
    else {
        showTooltip(registrationForm.fullname, "Write your name and surname separated by a space.");
    }
});

registrationForm.email.addEventListener("input", (e) => {
    if ((e.target.value.length === 0) || regexValidEmail.test(e.target.value)) {
        clearFormField(registrationForm.email);
    }
    else {
        showTooltip(registrationForm.email, "Invalid email");
    }
});

registrationForm.password.addEventListener("input", (e) => {
    /* min. 8 symbols, 1 num, 1 upper and lower case letter and 1 special character */
    const regexValidPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>?])[a-zA-Z\d!@#$%^&*()\-_=+{};:,<.>?]{8,}$/;
    if ((e.target.value.length === 0) || regexValidPwd.test(e.target.value)) {
        clearFormField(registrationForm.password);
    }
    else {
        showTooltip(registrationForm.password, "Min. 8 characters, one number, one upper and lower case letter, and one special character.");
    }
});
