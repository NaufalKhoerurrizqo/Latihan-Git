const form = document.getElementById('form-registrasi');
const firstnm = document.getElementById('first');
const lastnm = document.getElementById('last');
const workType = document.getElementById('worktype');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');

function showError(inputId, message) {
    const errorElement = document.getElementById(`${inputId}-error`);
    errorElement.innerText=message;
}

function hideError(inputId) {
    const errorElement = document.getElementById(`${inputId}`);
    errorElement.innerText='';
}

form.addEventListener('submit', function (obj) {
    obj.preventDefault();

    if(first.value =='') {
        showError('first', 'Nama Awal Harus di Isi')
    } else {
        hideError('first');
    }

    if(last.value =='') {
        showError('last', 'Nama Akhir Harus di Isi')
    } else {
        hideError('last');
    }

    if(worktype.value =='') {
        showError('worktype', 'WorkType Harus di Isi')
    } else {
        hideError('worktype');
    }

    if(number.value =='') {
        showError('number', 'Phone Number Harus di Isi')
    } else {
        hideError('number');
    }

    if(email.value =='') {
        showError('email', 'Email Harus di Isi')
    } else {
        hideError('email');
    }

    if(password.value =='') {
        showError('password', 'Password Harus di Isi');
    } else if (password.value.length < 6) {
        showError('password', 'Password minimal 6 karakter')
    } else {
        hideError('password');
    }
})