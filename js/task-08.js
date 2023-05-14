const loginForm = document.querySelector('.login-form');
console.log(loginForm);

loginForm.addEventListener('submit', onSubmit);

function onSubmit (event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert("Please fill in all the fields!");
        
        if (email.value === '') {
            email.focus();
        }
        else {
            password.focus();
        }
        return;
    }

    let loginFormData = {};
    loginFormData.email = email.value;
    loginFormData.password = password.value;

    console.log(loginFormData);

    event.currentTarget.reset();
}

// ----------------------------------------------------------------------------------------------------------------------

// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
// а значення поля - значенням властивості.Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
