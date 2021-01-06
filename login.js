//Not used

// const name = document.getElementById('name')
// const password = document.getElementById('password')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (name.value === '' || name.value == null) {
//         messages.push('Name is required.')
//     }

//     if (password.lenght <= 6) {
//         messages.push('Password must be longer than 6 characters.')
//     }

//     if (password.lenght <= 20) {
//         messages.push('Password must be less than 20 characters.')
//     }

//     if(password.value === 'password') {
//         messages.push('Password cannot be password') 
//     }

//     if (messages.lenght > 0) {
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }
// })

// FUNKCIONALNI DEO KODA.

function login() {
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (uname == '') {
        alert("Molimo Vas unesite vasu E-mail adresu.");
    }
    else if (pwd == '') {
        alert("Unesite Vasu sifru.");
        return false;
    }
    else if (!filter.test(uname)) {
        alert("Molimo vas unesite pravu E-mail adresu.");
        return false;
    }
    else if (pwd.length < 4 || pwd.length > 20) {
        alert("Sifra mora da ima izmedju 4 i 20 karaktera.");
        return false;
    }
    else {
        alert('Hvala vam na Login-ovanju, vracamo vas na sajt!');
        document.getElementById("submit").addEventListener("click", function (event) {
            event.preventDefault()
        });
        window.open("index.html");
    }
}

// if (function login() == true) {
//     window.open("www.google.com");
// }