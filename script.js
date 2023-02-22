const divFullDocument = document.createElement('div');
divFullDocument.className = 'divFullDoc';
const divHeader = document.createElement('div');
divHeader.className = 'divHeader';
const divMain = document.createElement('div');
divMain.className = 'divMain';
document.body.appendChild(divFullDocument);
divFullDocument.appendChild(divHeader);
divFullDocument.appendChild(divMain);

// header

const title = document.createElement('h1');
title.className = 'titlePixels';
title.innerText = 'Pixels Art';
divHeader.appendChild(title);

const ulHeader = document.createElement('ul');
ulHeader.className = 'ulHeader';
const blackSquare = document.createElement('p');
blackSquare.style.backgroundColor = 'black';
blackSquare.id = 'selected';
blackSquare.className = 'headerSquare';
divHeader.appendChild(ulHeader);
ulHeader.appendChild(blackSquare);

const standardColorList = ['red', 'green', 'blue'];
const getlocalItens = getLocal();
for (let index = 0; index < 3; index +=1 ) {
	const headerSquare = document.createElement('p');
	headerSquare.className = 'headerSquare';
	if( getlocalItens.length > 0) {
		headerSquare.style.backgroundColor = getlocalItens[index];
		ulHeader.appendChild(headerSquare);
	} else {
		headerSquare.style.backgroundColor = standardColorList[index];
		ulHeader.appendChild(headerSquare);
	}
}

// main
const randomColorButton = document.createElement('button');
randomColorButton.id = 'button';
randomColorButton.innerHTML = 'RANDOM';
divMain.appendChild(randomColorButton);

for (let index = 0; index < 5; index +=1 ) {
	const mainSquare = document.createElement('ul');
	mainSquare.className = 'ulMain';
	mainSquare.id = `square${index}`;
	mainSquare.style.backgroundColor = 'white';
	divMain.appendChild(mainSquare);
	for (let index = 0; index < 5; index += 1) {
		const mainSquareChild = document.createElement('p');
		mainSquareChild.className = 'mainSquare';
		mainSquareChild.id = `${index}`;
		mainSquareChild.style.backgroundColor = 'white';
		mainSquare.appendChild(mainSquareChild);
	}
}

divMain.addEventListener('click', (event) => {
	const elementClick = event.target;
	if (elementClick.className == 'mainSquare'){
		const getSelectedColor = document.getElementById('selected').style.backgroundColor;
		elementClick.style.backgroundColor = getSelectedColor;
	}
});

divHeader.addEventListener('click', (event) => {
	const elementClick = event.target;
	if(elementClick.className == 'headerSquare') {
		for(let index = 0; index < 4; index += 1) {
			const allHeader = document.querySelectorAll('.headerSquare')[index];
			allHeader.id = '';
			elementClick.id = 'selected';
		}
	}
});

const cleanButton = document.createElement('button');
cleanButton.innerHTML = 'CLEAR';
cleanButton.id = 'button';
divMain.appendChild(cleanButton);

cleanButton.addEventListener('click', () => {
	const getAll = document.querySelectorAll('.mainSquare');
	getAll.forEach((element) => {
		element.style.backgroundColor = 'white';
	});
});

function randomRGBColor () {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

function getLocal() {
	const getItens = localStorage.getItem('colors');
	return getItens ? JSON.parse(getItens) : [];
}

function setLocalFunc (color) {
	// localStorage.setItem('colors');
	// const getItens = getLocal();
	// const newLocal = [...getItens, color];
	localStorage.setItem('colors',JSON.stringify(color));
	// console.log(getItens);
}


randomColorButton.addEventListener('click', () => {
	let colorList = [];
	const allHeader = document.querySelectorAll('.headerSquare');
	for(let index = 1; index < 4; index += 1) {
		allHeader[index].style.backgroundColor = randomRGBColor();
		colorList.push(allHeader[index].style.backgroundColor);
	}
	setLocalFunc(colorList);
});