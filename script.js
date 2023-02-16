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
blackSquare.className = 'blackSquare';
divHeader.appendChild(ulHeader);
ulHeader.appendChild(blackSquare);

for (let index = 0; index < 3; index +=1 ) {
	const headerSquare = document.createElement('p');
	headerSquare.className = 'headerSquare';
	headerSquare.style.backgroundColor = 'white';
	ulHeader.appendChild(headerSquare);
}

// main
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

divMain.addEventListener('click', () => {
	const elementClick = event.srcElement;
	elementClick.style.backgroundColor = 'black';
});