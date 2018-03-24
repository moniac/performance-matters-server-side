function updateIndicator() {
	var h1 = document.querySelector('body > h1');
		h1.innerHTML = 'Er is geen internet verbinding!'
}

function updateIndicatorOnline() {
	var h1 = document.querySelector('body > h1');
	h1.innerHTML = 'Verwoeste gebouwen van Amsterdam'
}

window.addEventListener('offline', updateIndicator)

window.addEventListener('online',  updateIndicatorOnline)

export { updateIndicator, updateIndicatorOnline }