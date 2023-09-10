var numeric = [
	["3/2/23","Antoine & Kev","MrjLaine & Flo","MrjRie"], //same
	["3/18/23","Antoine & MrjRie","Kev & Flo","MrjLaine"],
	["3/25/23","Kev & MrjLaine","MrjRie & Antoine","Flo"],
	["4/1/23","MrjRie & Antoine","MrjLaine & Flo","Kev"],
	["4/8/23","MrjLaine & Flo","MrjRie & Kev","Antoine"],
	["4/15/23","Antoine & Kev","MrjLaine & Flo","MrjRie"],
	["4/22/23","MrjRie & Flo","Antoine & Kev","MrjLaine"],
	["4/29/23","Antoine & Kev","MrjRie & MrjLaine","Flo"],
	["5/6/23","MrjRie & MrjLaine","Antoine & Flo","Kev"],
	["5/13/23","Kev & Flo","MrjRie & MrjLaine","Antoine"],
	["5/20/23","Antoine & MrjLaine","Kev & Flo","MrjRie"],
	["5/27/23","Kev & Flo","Antoine & MrjRie","MrjLaine"],
	["6/3/23","Antoine & MrjRie","Kev & MrjLaine","Flo"],
	["6/10/23","MrjLaine & Flo","Antoine & MrjRie","Kev"],
	["6/17/23","MrjRie & Kev","MrjLaine & Flo","Antoine"],
	["6/24/23","MrjLaine & Flo","Antoine & Kev","MrjRie"],
	["7/1/23","Antoine & Kev","MrjRie & Flo","MrjLaine"],
	["7/8/23","MrjRie & MrjLaine","Antoine & Kev","Flo"],
	["7/15/23","Antoine & Flo","MrjRie & MrjLaine","Kev"],
	["7/22/23","MrjRie & MrjLaine","Kev & Flo","Antoine"],
	["7/29/23","Kev & Flo","Antoine & MrjLaine","MrjRie"], 
	["8/5/23","Antoine & MrjRie","Kev & Flo","MrjLaine"],
	["8/12/23","Kev & MrjLaine","Antoine & MrjRie","Flo"],
	["8/19/23","Antoine & MrjRie","MrjLaine & Flo","Kev"],
	["8/26/23","MrjLaine & Flo","MrjRie & Kev","Antoine"],
	["9/2/23","Antoine & Kev","MrjLaine & Flo","MrjRie"], //same
	["9/9/23","This is","the end...","Adele"],
	["9/16/23","One more","night!!!","..Daft Punk"],
	["9/23/23","One more","night!!!","..Daft Punk"]
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
