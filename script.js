	let containerDiv = document.querySelector(".container");
	let startBtn = document.querySelector(".start");
	let drawBtn = document.querySelector(".draw");
	let demoDiv = document.querySelector(".demo");
	let boxDiv = document.createElement("div");
	let containerHeight = 500;
	let containerWidth = 600;
	let gridNumber;
	
	//First Initial
	boxDiv.classList.add("box");
	for(let number = 1; number <= 100; number++) {
		containerDiv.appendChild(boxDiv);
		boxDiv.style.cssText = "height:" + 48 + "px;width:" + 58 + "px;background:#ddd;display:inline-block;border:1px solid #ccc;";
		containerDiv.innerHTML += "";
	}
	
	function resetFunc () {
	containerDiv.innerHTML = "";
		gridNumber = prompt("How Many Grid in a Row? ", "25");
		let boxHeight = containerHeight / gridNumber - 2;
		let boxWidth = containerWidth / gridNumber - 2;
		boxDiv.classList.add("box");
		
		for(let number = 1; number <= gridNumber*gridNumber; number++) {
			containerDiv.appendChild(boxDiv);
			boxDiv.style.cssText = "height:" + boxHeight + "px;width:" + boxWidth + "px;background:#ddd;display:inline-block;border:1px solid #ccc;";
			containerDiv.innerHTML += "";
		}
	}
	startBtn.addEventListener("click", resetFunc);
	
	function drawFunc() {
		let boxClass = document.querySelectorAll(".box");
		let totalNumber = boxClass.length;
		for(let i = 0; i < totalNumber; i++) {
			boxClass[i].addEventListener("mouseover", function () {
				//boxClass[i].classList.add("hover");
				
				boxClass[i].style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
			});
		}
	}
	drawBtn.addEventListener("click", drawFunc);
