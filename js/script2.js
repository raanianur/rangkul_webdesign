const nav = document.querySelector("nav");

window.addEventListener ("scroll", function() {
	nav.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})


function handleGetFormData() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return { name, city, email, zipCode, status };
}

function isNumber(input) {
    return !isNaN(input);
}

function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

function validateFormData(data) {
    return data !== null && isNumber(data.zipCode) && data.status;
}

function submit(event) {
    event.preventDefault();

    const formData = handleGetFormData();

    const warningDiv = document.getElementById("warning");
    if (!validateFormData(formData)) {
        warningDiv.textContent = "Periksa form anda sekali lagi";
        return;
    }

    warningDiv.textContent = "";
}

const form = document.getElementById("submit-form");
form.addEventListener("submit", submit);


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}