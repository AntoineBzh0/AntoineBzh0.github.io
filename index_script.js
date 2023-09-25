var numeric = [
	["9/22/23","Coming","Soon",""],
	["9/29/23","Antoine & Kev","Heloise & Xav",""], //same
	["10/6/23","Antoine & Xav","Keke & Heloise",""],
	["10/13/23","Heloise et Xav","Antoine & Keke",""], 
	["10/20/23","Keke & Heloise","Antoine & Xav",""],//same
	["10/27/23","Antoine & Kev","Heloise & Xav",""], //same
	["11/4/23","Antoine & Xav","Keke & Heloise",""],
	["11/11/23","Heloise et Xav","Antoine & Keke",""], 
	["11/18/23","Keke & Heloise","Antoine & Xav",""],//same
	["11/25/23","Antoine & Kev","Heloise & Xav",""], //same
	["12/01/23","Antoine & Xav","Keke & Heloise",""],
	["12/08/23","Heloise et Xav","Antoine & Keke",""], 
	["12/15/23","Keke & Heloise","Antoine & Xav",""] //same
];

var i = 0;
var today = new Date();
var ecartMax = new Date();
var ecartMin = new Date();
var vDate = new Date();

ecartMax.setDate(today.getDate()+3);
ecartMin.setDate(today.getDate()-4);

for (i; i < numeric.length; i++) {
	
	vDate = new Date(numeric[i][0]);
	
	if (vDate < ecartMax && vDate > ecartMin){
		document.getElementById('date').innerHTML = new Date(numeric[i][0]).toLocaleDateString();
		document.getElementById('aspi').innerHTML = numeric[i][1];
		document.getElementById('sdb').innerHTML = numeric[i][2];
		document.getElementById('repos').innerHTML = numeric[i][3];
		// Elements de la n+1 semaine
		document.getElementById('Ndate').innerHTML = new Date(numeric[i+1][0]).toLocaleDateString();
		document.getElementById('Naspi').innerHTML = numeric[i+1][1];
		document.getElementById('Nsdb').innerHTML = numeric[i+1][2];
		document.getElementById('Nrepos').innerHTML = numeric[i+1][3];
		// Elements de la n+2 semaine
		document.getElementById('N2date').innerHTML = new Date(numeric[i+2][0]).toLocaleDateString();
		document.getElementById('N2aspi').innerHTML = numeric[i+2][1];
		document.getElementById('N2sdb').innerHTML = numeric[i+2][2];
		document.getElementById('N2repos').innerHTML = numeric[i+2][3];
		i = numeric.length;
	}
}
