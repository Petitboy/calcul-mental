
// Variables générales : score, reponse, start, fin, calcul
const affichageCalcul = document.querySelector('#affichageCalcul');
const affichageFin = document.querySelector('#affichageFin');
const affichageResults = document.querySelector('#affichageResults');
const affichageResults2 = document.querySelector('#affichageResults2');
const reponse = document.querySelector('#reponse');
const submit = document.querySelector('#submit');
const affichageAide = document.querySelector('#affichageAide');
const checkboxResults = document.querySelector('#results');
const checkboxResults2 = document.querySelector('#results2');

// Variables nombres de calculs et score
var score = 0;
const affichageScore = document.querySelector('#affichageScore');
var count = 0;
var countLimit = 10;
var countAffichage = count+1;
const affichageCount = document.querySelector('#affichageCount');

// Variables pour les intervales premier et deuxième nombre
var firstNumbers = [];
var secondNumbers = [];
var results = [];
var type ='';

reset();

submit.addEventListener('click', check);

checkboxResults.addEventListener('change', ($event) => {
			if ($event.target.checked) {
				affichageResults.style.color = 'black';				
			} else {
				affichageResults.style.color = '#8AEEE7';
			}
		});
		
checkboxResults2.addEventListener('change', ($event) => {
			if ($event.target.checked) {
				affichageResults2.style.color = 'black';				
			} else {
				affichageResults2.style.color = '#8AEEE7';
			}
		});

// FONCTIONS

function reset() {
	count = 0;
	score = 0;
	viderChaines();
	submit.disabled = true;
	reponse.value = "";
	nettoyageAffichage();	
	affichageAide.style.color = "#8AEEE7";
	affichageResults.style.color = '#8AEEE7';
	affichageResults2.style.color = '#8AEEE7';
	checkboxResults.checked = false;
	checkboxResults2.checked = false;
}

function viderChaines() {
	firstNumbers = [];
	secondNumbers = [];
	results = [];
}

function nettoyageAffichage() {
	affichageCalcul.textContent = " ";
	affichageScore.textContent = "";
	affichageFin.textContent = " ";
	affichageCount.textContent = "";
	affichageResults.textContent = "";
	affichageResults2.textContent = "";
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumbers(countLimit, num1min, num1max, num2min, num2max, condition1, condition2) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber + secondNumber >= condition1) 
		&& (firstNumber + secondNumber <= condition2)) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber + secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers1(countLimit, num1min, num1max, num2min, num2max) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		firstNumbers.push(firstNumber);
		secondNumbers.push(secondNumber);
		var result = firstNumber + secondNumber;
		results.push(result);
		i++;
	}
}

function getRandomNumbers11(countLimit, num1min, num1max, num2min, num2max) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = (getRandomInt(num2min, num2max+1))*10-1;
		firstNumbers.push(firstNumber);
		secondNumbers.push(secondNumber);
		var result = firstNumber + secondNumber;
		results.push(result);
		i++;
	}
}

function getRandomNumbers2(countLimit, num1min, num1max, num2min, num2max, condition1, condition2, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if (((firstNumber % modulo) + secondNumber >= condition1) 
		&& ((firstNumber % modulo) + secondNumber <= condition2)
		&& (firstNumber + secondNumber <=100)) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber + secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers3(countLimit, num1min, num1max, num2min, num2max, condition1, condition2, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if (((firstNumber % modulo) + (secondNumber % modulo) >= condition1) 
		&& ((firstNumber % modulo) + (secondNumber % modulo) <= condition2)
		&& ((firstNumber - (firstNumber % modulo)) + (secondNumber - (secondNumber % modulo)) >= (condition1*10))
		&& ((firstNumber - (firstNumber % modulo)) + (secondNumber - (secondNumber % modulo)) <= (condition2*10))) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber + secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers4(countLimit, num1min, num1max, num2min, num2max, condition1, condition2, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if (((firstNumber % modulo) + (secondNumber % modulo) >= condition1) 
		&& ((firstNumber % modulo) + (secondNumber % modulo) <= condition2)
		&& ((firstNumber - (firstNumber % modulo)) + (secondNumber - (secondNumber % modulo)) >= 20)
		&& ((firstNumber - (firstNumber % modulo)) + (secondNumber - (secondNumber % modulo)) <= 100)
		&& (firstNumber + secondNumber <=100)) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber + secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers5(countLimit, num1min, num1max, num2min, num2max) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if (firstNumber > secondNumber) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers6(countLimit, num1min, num1max, num2min, num2max, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber % modulo) >= secondNumber) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers7(countLimit, num1min, num1max, num2min, num2max, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber % modulo) <= secondNumber) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers8(countLimit, num1min, num1max, num2min, num2max, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber % modulo) >= (secondNumber % modulo)
		&& ((firstNumber - (firstNumber % modulo)) >= (secondNumber - (secondNumber % modulo)))) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers81(countLimit, num1min, num1max, num2min, num2max, modulo, modulo2) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if (
		(firstNumber % modulo) >= (secondNumber % modulo)
		&&(firstNumber % modulo2) >= (secondNumber % modulo2)
		&& ((firstNumber - (firstNumber % modulo2)) >= (secondNumber - (secondNumber % modulo2)))
		) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}		
	}
}

function getRandomNumbers811(countLimit, num1min, num1max, num2min, num2max) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if (
		(firstNumber) >= (secondNumber*100)
		) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber*100);
			var result = firstNumber - (secondNumber*100);
			results.push(result);
			i++;
		}		
	}
}

function getRandomNumbers8111(countLimit, num1min, num1max, num2min, num2max) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		firstNumbers.push(firstNumber);
		secondNumbers.push(secondNumber);
		var result = firstNumber - secondNumber;
		results.push(result);
		i++;	
	}
}

function getRandomNumbers9(countLimit, num1min, num1max, num2min, num2max, modulo) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber % modulo) <= (secondNumber % modulo)
		&& ((firstNumber - (firstNumber % modulo)) > (secondNumber - (secondNumber % modulo)))) {
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber - secondNumber;
			results.push(result);
			i++;
		}
	}
}

function getRandomNumbers91(countLimit, num1min, num1max, num2min, num2max) {
	var i = 0;
	while(i<countLimit) {
		var firstNumber = getRandomInt(num1min, num1max+1);		
		var secondNumber = getRandomInt(num2min, num2max+1);
		if ((firstNumber*secondNumber) <= 1000)
		{
			firstNumbers.push(firstNumber);
			secondNumbers.push(secondNumber);
			var result = firstNumber * secondNumber;
			results.push(result);
			i++;
		}
	}
}

function newCalculs(num1, num2) {
	affichageCalcul.textContent = num1[count] + ' + ' + num2[count] + ' = ';
	affichageCount.textContent = countAffichage;
	affichageScore.textContent = score;
	affichageFin.textContent = " " ;
	reponse.value = " ";
}

function newCalculs2(num1, num2) {
	affichageCalcul.textContent = num1[count] + ' - ' + num2[count] + ' = ';
	affichageCount.textContent = countAffichage;
	affichageScore.textContent = score;
	affichageFin.textContent = " " ;
	reponse.value = " ";
}

function newCalculs3(num1, num2) {
	affichageCalcul.textContent = num1[count] + ' x ' + num2[count] + ' = ';
	affichageCount.textContent = countAffichage;
	affichageScore.textContent = score;
	affichageFin.textContent = " " ;
	reponse.value = " ";
}

function addition1() {
		reset();
		type = 'addition';
		getRandomNumbers(10, 1, 9, 1, 9, 2, 9);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition11() {
		reset();
		type = 'addition';
		getRandomNumbers1(10, 1, 99, 1, 99, 2, 9);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition2() {
		reset();
		type = 'addition';
		getRandomNumbers(10, 1, 9, 1, 9, 10, 18);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition3() {
		reset();
		type = 'addition';
		getRandomNumbers2(10, 10, 99, 1, 9, 2, 9, 10);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition4() {
		reset();
		type = 'addition';
		getRandomNumbers2(10, 10, 99, 1, 9, 10, 18, 10);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition41() {
		reset();
		type = 'addition';
		getRandomNumbers11(10, 10, 99, 1, 3);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition5() {
		reset();
		type = 'addition';
		getRandomNumbers3(10, 10, 99, 10, 99, 2, 9, 10);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition6() {
		reset();
		type = 'addition';
		getRandomNumbers4(10, 10, 99, 10, 99, 10, 18, 10);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function addition7() {
		reset();
		type = 'addition';
		getRandomNumbers10(10, 10, 99, 10, 99, 10, 18, 10);
		newCalculs(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction1() {
		reset();
		type = 'soustraction';
		getRandomNumbers5(10, 1, 9, 1, 9);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction2() {
		reset();
		type = 'soustraction';
		getRandomNumbers6(10, 10, 99, 1, 9, 10);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction3() {
		reset();
		type = 'soustraction';
		getRandomNumbers7(10, 10, 99, 1, 9, 10);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction4() {
		reset();
		type = 'soustraction';
		getRandomNumbers8(10, 10, 99, 10, 99, 10);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction41() {
		reset();
		type = 'soustraction';
		getRandomNumbers81(10, 100, 999, 10, 99, 100, 10);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction42() {
		reset();
		type = 'soustraction';
		getRandomNumbers811(10, 100, 999, 1, 9);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction43() {
		reset();
		type = 'soustraction';
		getRandomNumbers8111(10, 100, 999, 10, 99);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function soustraction5() {
		reset();
		type = 'soustraction';
		getRandomNumbers9(10, 10, 99, 10, 99, 10);
		newCalculs2(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function multiplication1() {
		reset();
		type = 'multiplication';
		getRandomNumbers91(10, 1, 9, 1, 999);
		newCalculs3(firstNumbers, secondNumbers);
		submit.disabled = false;
		countAffichage = count+1;
		affichageCount.textContent = "" + countAffichage;
}

function check() {
	count++;
	countAffichage = count+1;
	affichageCount.textContent = countAffichage;
	let userGuess = Number(reponse.value);
	if (userGuess === results[count-1]) {
		score++;
		affichageScore.textContent = score;
		switch (type) {
				case 'addition':
					affichageResults.innerHTML += firstNumbers[count-1] + '+' + secondNumbers[count-1] + '=' + results[count-1] + '<br>';
					affichageResults2.innerHTML += results[count-1] + ', ';
					break;
				case 'soustraction':
					affichageResults.innerHTML += firstNumbers[count-1] + '-' + secondNumbers[count-1] + '=' + results[count-1] + '<br>';
					affichageResults2.innerHTML += results[count-1] + ', ';
					break;
				case 'multiplication':
					affichageResults.innerHTML += firstNumbers[count-1] + 'x' + secondNumbers[count-1] + '=' + 
					firstNumbers[count-1]*(secondNumbers[count-1]-secondNumbers[count-1]%100) + '+' + 
					firstNumbers[count-1]*(secondNumbers[count-1]%100-secondNumbers[count-1]%10) + '+' + 
					firstNumbers[count-1]*(secondNumbers[count-1]%10) + '=' +	results[count-1] + '<br>';
					affichageResults2.innerHTML += results[count-1] + ', ';
					break;
				}
		reponse.focus();
		if (count !== countLimit) {
			switch (type) {
				case 'addition': 
					newCalculs(firstNumbers, secondNumbers, count);
					break;
				case 'soustraction':
					newCalculs2(firstNumbers, secondNumbers, count);
					break;
				case 'multiplication':
					newCalculs3(firstNumbers, secondNumbers, count);
					break;
				}
		} else {
			stopGame();
		}
	}
		else if (userGuess !== results[count-1]) {
			affichageScore.textContent = score;
			switch (type) {
				case 'addition': 
					affichageResults.innerHTML += firstNumbers[count-1] + '+' + secondNumbers[count-1] + '=' + results[count-1] + '<br>';
					affichageResults2.innerHTML += results[count-1] + ', ';
					break;
				case 'soustraction':
					affichageResults.innerHTML += firstNumbers[count-1] + '-' + secondNumbers[count-1] + '=' + results[count-1] + '<br>';
					affichageResults2.innerHTML += results[count-1] + ', ';
					break;
				case 'multiplication':
					affichageResults.innerHTML += firstNumbers[count-1] + 'x' + secondNumbers[count-1] + '=' + 
					firstNumbers[count-1]*(secondNumbers[count-1]-secondNumbers[count-1]%100) + '+' + 
					firstNumbers[count-1]*(secondNumbers[count-1]%100-secondNumbers[count-1]%10) + '+' + 
					firstNumbers[count-1]*(secondNumbers[count-1]%10) + '=' +	results[count-1] + '<br>';
					affichageResults2.innerHTML += results[count-1] + ', ';
					break;
				}
			
			reponse.focus();
			if (count !== countLimit) {
				switch (type) {
				case 'addition': 
					newCalculs(firstNumbers, secondNumbers, count);
					break;
				case 'soustraction':
					newCalculs2(firstNumbers, secondNumbers, count);
					break;
				case 'multiplication':
					newCalculs3(firstNumbers, secondNumbers, count);
					break;
				}
			} else {
				stopGame();
			}
	}
	else if (count === countLimit) {
		stopGame();
	}
}

function stopGame() {
	let pourcentage = Math.round((score/countLimit)*100);
	affichageFin.textContent = pourcentage + " %";
	affichageScore.textContent = score;
	viderChaines();
	submit.disabled = true;
	affichageCount.textContent = count;
	score = 0;
	count = 0;
}

function aide() {
	viderChaines();
	nettoyageAffichage();
	reset();
	affichageAide.style.color = "black";
}

function afficherResultats() {
	
}


















