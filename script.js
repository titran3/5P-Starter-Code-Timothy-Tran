let button1 = document.querySelector(".button1");
let boba = document.querySelector(".boba");
let soda = document.querySelector(".soda");
let matcha = document.querySelector(".matcha");
let water = document.querySelector(".water");
let arrow = document.querySelector(".arrow");
let nav = document.querySelector("nav");
let age = 1;
let hour = 1;
button1.onclick = function() {
	let hourInput = document.querySelector(".hourInput").value;
    let ageInput = document.querySelector(".ageInput").value;
    let q1 = document.querySelector(".q1");
    if (hourInput <= 12 && ageInput <= 15) {
    	let q2 = document.querySelector(".q2");
        q2.style.display = "block";
        q1.style.display = "none";
        age = ageInput;
        hour = ageInput;
        
    }
    else if (hourInput <= 24 && ageInput <= 100 ) {
    	let q2 = document.querySelector(".q2");
        q2.style.display = "block";
        q1.style.display = "none";
        age = ageInput;
        hour = ageInput;
    } else if (hourInput > 12 && ageInput >= 15 ) {
    	let q3 = document.querySelector(".q3");
        q3.style.display = "block";
        q1.style.display = "none";
        age = ageInput;
        hour = ageInput;
        
    } else if (hourInput > 24 && ageInput <= 100 ) {
    	let q3 = document.querySelector(".q3");
        q3.style.display = "block";
        q1.style.display = "none";}
    age = ageInput;
        hour = ageInput;
};

arrow.onclick = function() {
    nav.style.display = "flex";
};

boba.onclick = function() {
    let questions = document.querySelector(".questions");
    let results = document.querySelector(".result");
    let result = document.querySelector(".results");
    let pop = document.querySelector(".pop");
	questions.style.display = "none";
    results.style.display = "block";
    pop.style.display = "block";
    result.innerHTML = "Since you're "+ age +" and listen to music "+hour+" hours per day, you're POP!";
};
water.onclick = function() {
    let questions = document.querySelector(".questions");
    let results = document.querySelector(".result");
    let result = document.querySelector(".results");
	let country = document.querySelector(".country");
	questions.style.display = "none";
        results.style.display = "block";
        country.style.display = "block";
    result.innerHTML = "Since you're "+ age +" and listen to music "+hour+" hours per day, you're Country!";
};
matcha.onclick = function() {
    let questions = document.querySelector(".questions");
    let results = document.querySelector(".result");
    let result = document.querySelector(".results");
	let rnb = document.querySelector(".rnb");
	questions.style.display = "none";
        results.style.display = "block";
    	result.innerHTML = "Since you're "+ age +" and listen to music "+hour+" hours per day, you're RnB!";
        rnb.style.display = "block";
};
soda.onclick = function() {
    let questions = document.querySelector(".questions");
    let results = document.querySelector(".result");
    let result = document.querySelector(".results");
	let rap = document.querySelector(".rap");
	questions.style.display = "none";
    results.style.display = "block";
    rap.style.display = "block";
    result.innerHTML = "Since you're "+ age +" and listen to music "+hour+" hours per day, you're Rap!";
};
