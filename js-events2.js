var add = document.getElementById("add-box");

add.addEventListener("click", addBox );

function addBox(){
	var newdiv = document.createElement('div');
	newdiv.className = "padd"
	newdiv.innerHTML = "Enter Number: <input type='text' name='myInputs[]'>";
	document.getElementById("add-input-boxes").appendChild(newdiv);

	sortArr();
}

function sortArr() {
	var arr = document.getElementsByName("myInputs[]");
	var sorted=document.getElementById("sorted");
	var str = "";
		arr2 = new Array();
	for (var i = 0; i < arr.length; i++) {
		str = arr[i].value.replace (/[A-Za-z$-]/g, "");
		arr2.push(parseInt(str, 10));

	}
	arr2.sort(function(a, b){return a-b});
	for (var i = 0; i < arr2.length; i++) {
		if(!isNaN(arr2[i])){
			if(i===0){ str="Sorted Array:</br>"+arr2[i]; }
			else{
				str = str+"</br>"+arr2[i];
			}
		}
	}

	sorted.innerHTML=str;
}