var c = document.getElementById('canvas');
var ctx = c.getContext("2d");

//Voiture
ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(100,200);
ctx.lineTo(100,150);
ctx.lineTo(250,150);
ctx.lineTo(250,200);
ctx.lineTo(300,200);
ctx.lineTo(300,250);
ctx.lineTo(50,250);
ctx.lineTo(50,200);
ctx.closePath();
ctx.fillStyle = "#00AA4B";
ctx.fill();
//Roues
ctx.beginPath();
ctx.strokeStyle = "#cdcdcd";
ctx.fillStyle="#cdcdcd";
/*
La méthode .arc() permet d'ajouter un arc de cercle  au tracé.
Les deux premières valeurs ajoutées entre les parenthèses correspondent aux position x
et y du centre de l'arc.
La troisième valeur et le radius, à savoir le rayon du cercle.
La quatième valeur est l'angle de départ de l'arc de cercle, mesurée dans le sens horaire
à partir de l'axe x.
La cinquième valeur correspond à l'angle de fin. On multiplie la constante Math.PI par
deux afin d'avoir un cercle complet.
A noter l'utilisation (facultative) içi d'un Booléen auquel on attribut la valeur False,
ce qui signifie que l'arc sera déssiné dans le sens horaire.
*/
ctx.arc(100,265,15,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(250,265,15,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();
