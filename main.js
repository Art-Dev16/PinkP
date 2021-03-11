function assoss() {



	document.getElementById("assoss").style.visibility = "hidden";
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



}
