var newInput = document.createElement('input')
var container = document.querySelector('section')
container.prepend(newInput)
newInput.id = 'myInput'
newInput.placeholder = 'Zoeken op gebouwen.'

var inputs = document.querySelector('#myInput')

inputs.addEventListener('keyup', myFunction)

function myFunction () {
	var input, filter, ul, li, a, i;
	input = document.getElementById('myInput');
	filter = input.value.toLowerCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName('li');
	
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}
	

export { myFunction }