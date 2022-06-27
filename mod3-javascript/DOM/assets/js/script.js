function ChangeMode(){
    const button = document.getElementById("mode-selector");
    const body = document.getElementsByTagName("body");
    const footer = document.getElementsByTagName("footer");
    const h1 = document.getElementById("page-title");

    for(element of body){
        element.classList.toggle("dark-mode");
    }
    for(element of footer){
        element.classList.toggle("dark-mode");
    }
    button.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");

    if (body[0].classList.contains("dark-mode")) {
		button.innerHTML = "Light Mode";
		h1.innerHTML = "Dark Mode ON";
		return;
	}

	button.innerHTML = "Dark Mode";
	h1.innerHTML = "Light Mode ON";
}

const button = document.getElementById("mode-selector");

button.addEventListener("click", ChangeMode);