function doFirst(){
	barSize=575;
	myMovie=document.getElementById('myMovie');
	playButton=document.getElementById('playbutton');
	bar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');

	playButton.addEventListener("click", playOrPause, false);
	bar.addEventListener("click", clickedBar, false);
}

function playOrPause() {
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML="Play";
		window.clearInterval(updateBar);
	}else{
		myMovie.play();
		playButton.innerHTML="Pause";
		updateBar=setInterval(update, 200);
	}
}

function update() {
	if(!myMovie.ended){
		var size=parseInt(myMovie.currentTime*barSize/myMovie.duration);
		progressBar.style.width=size+'px';
	}else {
		progressBar.style.width='0px';
		playButton.innerHTML="Play";
		window.clearInterval(updateBar);
	}
}

function clickedBar(e) {
	if(!myMovie.paused && !myMovie.ended){
		var mouseX=e.pageX-bar.offsetLeft;
		var newtime = mouseX*myMovie.duration/barSize;
		myMovie.currentTime=newtime;
		progressBar.style.width=mouseX+'px';
	}
}

window.addEventListener('load', doFirst, false);

function another() {
	barSize=360;
	video = document.getElementById('video');

	playB = document.getElementById('play-pause');
	muteB = document.getElementById("mute");
	full = document.getElementById('full-screen');

	seekBar = document.getElementById('seek-bar');
	volumeBar = document.getElementById('volume-bar');

	playB.addEventListener("click", function() {
		if(!video.paused && !video.ended) {
			video.pause();
			playB.innerHTML="Play";
		}else {
			video.play();
			playB.innerHTML="Pause";
		}
	});
	
	muteB.addEventListener("click", function() {
 		if (video.muted == false) {
		    video.muted = true;
		    muteB.innerHTML = "Unmute";
		} else {
		    video.muted = false;
		    muteB.innerHTML = "Mute";
		}
	});

	full.addEventListener("click", function() {
		if (video.webkitRequestFullscreen) {
		    video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});

	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);
		// Update the video time
		video.currentTime = time;
	});

	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;
		// Update the slider value
		seekBar.value = value;
		if(video.ended){
			seekBar.value = 0;
		}
	});

	// Pause the video when the slider handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play the video when the slider handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});

	volumeBar.addEventListener("change", function() {
	// Update the video volume
		video.volume = volumeBar.value;
	});

	// KEY PRESS EVENTS

	document.getElementById('video-container').addEventListener("keypress", keyPressHappened);
}

function keyPressHappened(e){
	if(e.which==102){
		if (video.webkitRequestFullscreen) {
		    video.webkitRequestFullscreen(); // Chrome and Safari
		}
	}
}
window.addEventListener('load', another, false);













