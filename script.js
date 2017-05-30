document.body.style.backgroundColor = "red";

document.getElementById("title").style.backgroundColor = "blue";

document.body.style.fontStyle = "sans-serif";

document.getElementById("nickname").innerHTML = "Nance";
document.getElementById("favorites").innerHTML = "reading";
document.getElementById("hometown").innerHTML = "Houston";

var el = document.createElement('div');
el.innerHTML = '<img src="wonder-woman.jpg">';
document.body.appendChild(el);


