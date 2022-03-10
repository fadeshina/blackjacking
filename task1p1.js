menu = [];
menu["hotdogs"] = 4.00;
menu["fries"] = 3.50;
menu["soda"]= 1.50;
menu["sauerkraut"] = 1.00;

for (food in menu){
document.getElementById(food).innerHTML = (food + " $" + (menu[food]*100/100).toFixed(2));
}

function total (){
  h =document.getElementById("hotdogsq").value;
  ht = h*(menu.hotdogs); 
  document.getElementById("hq").innerHTML = h; 
  f =document.getElementById("friesq").value;
  ft = f*(menu.fries);  
  console.log(ft)
  document.getElementById("fq").innerHTML = f; 
  s =document.getElementById("sodaq").value;
  st = s*(menu.soda); 
  document.getElementById("sq").innerHTML = s; 
  sa =document.getElementById("sauerkrautq").value;
  sat = sa*(menu.sauerkraut);
  document.getElementById("saq").innerHTML = sa; 
  totals = ((ht+ft+st+sat)*100/100).toFixed(2);
  document.getElementById("total").innerHTML = "$" + totals;
}