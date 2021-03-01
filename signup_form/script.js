const form = document.getElementById ('form');

form.addEventListener( 'submit', e => {
        e.preventDefault();

        const first = form['firstname'].value;
        const last = form['lastname'].value;
        const email = form['email'].value;
        const password = form['password'].value;

        if (first === '') {
            addErrorTo('firstname', 'First name is required');
        }
        else 
            removeErrorFrom('firstname');

        if (last === '') {
            addErrorTo('lastname', 'Last name is required');
        }
        else 
            removeErrorFrom('lastname');

        if (email === '') {
            addErrorTo('email', 'email is required');
        }
        else if (!isValid(email))  {
            addErrorTo('email', 'email is invalid');
        }
        else 
            removeErrorFrom('email');

        if (password === '') {
            addErrorTo('password', 'password is required');
        }
        else 
            removeErrorFrom('password');
});

function addErrorTo (field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerHTML = message;
    small.style.opacity = '1';
}

function removeErrorFrom (field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');

    const small = formControl.querySelector('small');
    small.innerHTML = message;
    small.style.opacity = '0';

}

const isValid = () => {

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

