function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	canvas.strokeRect(0,0,700,400);
	canvas.fillRect(50,50,600,300);
	canvas.clearRect(100,100,500,200);
	canvas.strokeStyle="red";
	canvas.strokeRect(75,75,550,250);

	var g = canvas.createLinearGradient(150,200,550,200);
	g.addColorStop(.0, "white");
	//g.addColorStop(.5, "red");
	g.addColorStop(1, "black");

	canvas.fillStyle=g;
	canvas.fillRect(150,150,400,100);

	canvas.fillStyle="black";

	canvas.shadowOffsetX = 10;
	canvas.shadowOffsetY = 10;
	canvas.shadowBlur = 6;
	canvas.shadowColor = 'rgba(150,150,150,.8)';

	canvas.font = "bold 36px Tahoma";
	canvas.textAlign = "center";
	canvas.fillText("This is a test font!", 350,140);

	canvas.shadowColor = "transparent";

	var startX = 150;
	var endX = 550;
	var startY = 250;
	var endY = 300;
	var r = (endY-startY)/2;
	var n = (endX-startX)/(r*2);
	var cX = 0,
		cY = 0;
	console.log("r is " + r + "n is " +n);

	for(var i=0; i<n; i++){
		if(i == 0){
			cX = startX+(r*(i+1));
		}else {
			cX = cX+(2*r);
		}
		canvas.beginPath();
		canvas.arc(cX,startY+r, r, 0, 2*Math.PI);
		canvas.stroke();
	}

}

window.addEventListener("load", doFirst, false);