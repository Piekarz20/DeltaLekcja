const form = document.querySelector('form');
const display = document.querySelector('#display');

form.addEventListener('submit', (evt) => {
	evt.preventDefault();
	delta();
});

function delta() {
	const rownanie = document.querySelector('#rownanie').value;
	const wspolczynniki = parseRownanie(rownanie);

	if (wspolczynniki.length !== 3) {
		display.innerHTML = 'To nie jest równanie kwadratowe';
	} else {
		let a = wspolczynniki[0];
		let b = wspolczynniki[1];
		let c = wspolczynniki[2];

		const delta = b * b - 4 * a * c;

		display.innerHTML = 'Delta: ' + delta;
	}
}

function parseRownanie(rownanie) {
	const wyrazenie = /([+/-]?\d*)x\^2([+/-]\d*)x([+/-]\d+)/;
	const matches = rownanie.match(wyrazenie);

	if (matches === null) {
		return [];
	}
	let wspolczynniki = matches.slice(1).map(function (wspolczynniki) {
		if (wspolczynniki === '') {
			return 1;
		} else if (wspolczynniki === '-') {
			return -1;
		} else {
			return parseInt(wspolczynniki);
		}
	});

	return wspolczynniki;
}
