function doFirst(){
	/*
	Drag and drop with two boxes

	pic = document.getElementById('puppy');
	pic.addEventListener("dragstart", startDrag, false);
	pic.addEventListener("dragend", endDrag, false);

	leftbox = document.getElementById('leftbox');
	leftbox.addEventListener("dragenter", dragenter, false);
	leftbox.addEventListener("dragleave", dragleave, false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("drop", dropped, false);
	rightbox = document.getElementById('rightbox');*/

	//drag and drop with multiple boxes
	pic = document.getElementById('puppy');
	parentID = pic.parentNode.id;
	pic.addEventListener("dragstart", startDrag, false);
	pic.addEventListener("dragend", endDrag, false);

	oldCode = 'Drag and drop here';
	code = document.getElementById(pic.parentNode.id).innerHTML;

	sections = document.getElementsByTagName('section');
	for (var i = 0; i < sections.length; i++) {
    	sections[i].addEventListener('dragenter',dragenter, false);
		sections[i].addEventListener("dragleave", dragleave, false);
		sections[i].addEventListener("dragover", function(e){e.preventDefault();}, false);
		sections[i].addEventListener("drop", dropped, false);
	}
}

function startDrag(e){
	e.dataTransfer.setData('Text', code);
}

function dragenter(e){
	e.preventDefault();

	if(this.tagName == 'SECTION'){
		this.style.background = 'SkyBlue';
		this.style.border = '3px solid #AAA';
	}
}

function dragleave(e){
	e.preventDefault();

	console.log(this.tagName);
	if(this.tagName == 'SECTION'){
		this.innerHTML = oldCode;

		this.style.background = 'White';
		this.style.border = '3px solid';
	}
}

function dropped(e){
	e.preventDefault();
	this.innerHTML = code;
	this.style.background = 'White';
	this.style.border = '3px solid';
}

function endDrag(e){
	pic = e.target;
	pic.style.visibility='hidden';
}




window.addEventListener("load",doFirst,false);