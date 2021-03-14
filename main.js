function assoss() {



	document.getElementById("assoss").style.visibility = "hidden";
	document.getElementById("cours").style.visibility = "hidden";
	document.getElementById("nom").style.visibility = "visible";
	document.getElementById("prenom").style.visibility = "visible";
	document.getElementById("number").style.visibility = "visible";
	document.getElementById("valider").style.visibility = "visible";
	
}

function valider(){
	document.getElementById("chargement").style.visibility = "visible";
	document.getElementById("nom").style.visibility = "hidden";
	document.getElementById("prenom").style.visibility = "hidden";
	document.getElementById("number").style.visibility = "hidden";
	document.getElementById("valider").style.visibility = "hidden";

	setTimeout(fin_chargement, 4000);
}


	


function fin_chargement() {
	document.getElementById("chargement").style.visibility = "hidden";
	document.getElementById("bienvenue").style.visibility = "visible";

	setTimeout(planning, 3000);
}

function planning(){
	document.getElementById("bienvenue").style.visibility = "hidden";
	document.getElementById("btn_planning").style.visibility = "visible";

	setTimeout(normal, 8000);

}

function normal(){
	document.getElementById("assoss").style.visibility = "visible";
	document.getElementById("cours").style.visibility = "visible";
	document.getElementById("btn_planning").style.visibility = "hidden";

}

function cours(){
	document.location.href = "cours.html";
}
