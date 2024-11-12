function handleCredentialResponse(response) {
    const userObject = jwt_decode(response.credential);

}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleCredentialResponse
    });
    google.accounts.id.prompt();
};

function registerUser() {
    const name = document.querySelector('.signup .itemInput[type="text"]').value;
    const email = document.querySelector('.signup .itemInput[type="email"]').value;
    const password = document.querySelector('.signup .itemInput[type="password"]').value;

    let users = JSON.parse(localStorage.getItem("users")) || [];


    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("Email đã được đăng ký. Vui lòng sử dụng email khác.");
    } else {

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công!");

        showContent1();
    }
}

function loginUser() {
    const email = document.querySelector('.login .itemInput[type="email"]').value;
    const password = document.querySelector('.login .itemInput[type="password"]').value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
    } else {
        alert("Thông tin đăng nhập không chính xác. Vui lòng thử lại.");
    }
}

function showContent2() {
    const content1 = document.querySelector('.content1');
    const content2 = document.querySelector('.content2');

    content1.style.display = "none";
    content2.style.display = "block";
}

function showContent1() {
    const content1 = document.querySelector('.content1');
    const content2 = document.querySelector('.content2');

    content1.style.display = "block";
    content2.style.display = "none";
}

document.querySelector('.signup .btnLogin button').addEventListener('click', registerUser);

document.querySelector('.login .btnLogin button').addEventListener('click', loginUser);


function showContent2() {

    const content1 = document.querySelector('.content1');
    const content2 = document.querySelector('.content2');

    content1.classList.add('hide');
    content2.classList.add('show');


    setTimeout(() => {
        content1.style.display = 'none';
    }, 500);
}


function showContent1() {
    const content1 = document.querySelector('.content1');
    const content2 = document.querySelector('.content2');
    content2.classList.remove('show');
    content1.classList.remove('hide');


    content1.style.display = 'block';
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '',
        cookie: true,
        xfbml: true,
        version: 'v12.0'
    });

    FB.AppEvents.logPageView();
};


function loginWithFacebook() {
    FB.login(function (response) {
        if (response.authResponse) {
            console.log('Đăng nhập thành công!');

            FB.api('/me', function (userInfo) {
                console.log(userInfo);
            });
        } else {
            console.log('Đăng nhập thất bại!');
        }
    }, { scope: 'public_profile,email' });
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.querySelector(".eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.innerHTML = "&#128064;";
    } else {
        passwordField.type = "password";
        eyeIcon.innerHTML = "&#128065;";
    }
}
function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.querySelector(".eye-icon2");


    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.innerHTML = "&#128064;";
    } else {
        passwordField.type = "password";
        eyeIcon.innerHTML = "&#128065;";
    }
}
