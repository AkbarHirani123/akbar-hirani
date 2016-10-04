var add = document.getElementById("add-box");
var addBoxes = document.getElementById("add-input-boxes");

add.addEventListener("click", addBox );

function addBox(){
	var arr1 = new Array(),
		arr3 = new Array();
	if(!addBoxes.hasChildNodes()){
		var newdiv = document.createElement('div');
		newdiv.className = "padd"
		newdiv.innerHTML = "Enter Number: <input type='text' name='myInputs[]'>";
		addBoxes.appendChild(newdiv);

		sortArr();
	}else {
		arr1=addBoxes.childNodes;
		arr3=document.getElementsByName("myInputs[]");
		for(var i=0; i<arr3.length; i++){
			if(arr3[i].value == "" || arr3[i].value == null){
				sortArr();
				alert("Enter a number in the input box first");
				arr3[i].focus();
				return;
			}
		}
		var newdiv = document.createElement('div');
		newdiv.className = "padd"
		newdiv.innerHTML = "Enter Number: <input type='text' name='myInputs[]'>";
		addBoxes.appendChild(newdiv);

		sortArr();
	}
}

function sortArr() {
	var arr = document.getElementsByName("myInputs[]");
	var sorted=document.getElementById("sorted");
	var str = "";
		arr2 = new Array();
	for (var i = 0; i < arr.length; i++) {
		str = arr[i].value.replace (/[A-Za-z]/g, "");
		arr2.push(parseFloat(str));

	}
	str="Sorted Array:";
	arr2.sort(function (a,b){ return a - b; });
	for (var i = 0; i < arr2.length; i++) {
		if(!isNaN(arr2[i])){
			str = str+"</br>"+arr2[i];
		}
	}

	sorted.innerHTML=str;
	arr[arr.length-1].focus();
}

function printTime(){
	var now = new Date();
	var hours = now.getHours();
	var mins = now.getMinutes();
	var seconds = now.getSeconds();
	var amPm="";
	if(hours>12) {
		hours=hours-12;
		amPm = "PM";
	}else {
		amPm="AM";
	}
	if (hours<10) hours="0"+hours;
	if (mins<10) mins="0"+mins;
	if (seconds<10) seconds="0"+seconds;
	var time=document.getElementById("time");
	time.innerHTML= ""+hours+":"+mins+":"+seconds+" "+amPm;
}

setInterval("printTime()",1000);
