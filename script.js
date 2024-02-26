var playArea = document.getElementById(`playArea`);
var snapPoints = [];
window.onload = function(){
	let columns = 3;
	let rows = 3;
	for(let i1 = 0; i1 < columns; i1++) {
		for(let i2 = 0; i2 < rows; i2++) {
			if(i1==2 && i2==2) {
				var light = document.createElement(`div`);
				light.classList.add(`grid`);
				light.classList.add(`blank`);
				light.id = `blankgrid`;
				playArea.appendChild(light);
				continue;
			}
			var light = document.createElement(`div`);
			light.classList.add(`grid`);
			light.id = `${i1},${i2}`;
			playArea.appendChild(light);
			light.addEventListener('click', move);
		}
	}
	let allGrids = document.getElementsByClassName(`grid`);
	for(const light of allGrids) {
		let location = light.id.split(',');
		light.style.background = `url("yoink.png") ${location[1]*light.clientWidth}px ${location[0]*light.clientHeight}px`;
		light.style.backgroundSize = `50vh`;
	}
}

function move(event) {
	let blankLocation = document.getElementById(`blankgrid`);
	if(event.target.offsetLeft == blankLocation.offsetLeft || event.target.offsetTop == blankLocation.offsetTop) {
			//console.log(event.target.offsetTop + event.target.clientHeight + event.target.clientHeight/20, blankLocation.offsetTop);
			//if(event.target.offsetLeft + event.target.clientWidth + event.target.clientWidth/20 == blankLocation.offsetLeft || event.target.offsetTop + event.target.clientHeight + event.target.clientHeight/20 == blankLocation.offsetTop){
				blankLocation.style.background = event.target.style.background;
				event.target.style.background = ``;
				event.target.removeEventListener(`click`, move);
				blankLocation.id = event.target.id;
				event.target.id = `blankgrid`;
				blankLocation.addEventListener(`click`, move);
			//}
	}
}
