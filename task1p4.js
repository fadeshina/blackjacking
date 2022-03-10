function menu (item1,item2,item3,item4) {
    this.hotdogs = item1;
    this.fries = item2;
    this.soda = item3;
    this.sauerkraut = item4;
    this.show = showMenu;
    }
  item = new menu (4.00,3.50,1.50,1.00);
  function showMenu () {
    for (food in  item){
        document.getElementById(food).innerHTML = (food + " $" + (item[food]*100/100).toFixed(2));
        }
  }
   
    
    function total (){
      h =document.getElementById("hotdogsq").value;
      ht = h*(item.hotdogs); 
      document.getElementById("hq").innerHTML = h; 
      f =document.getElementById("friesq").value;
      ft = f*(item.fries);  
      console.log(ft)
      document.getElementById("fq").innerHTML = f; 
      s =document.getElementById("sodaq").value;
      st = s*(item.soda); 
      document.getElementById("sq").innerHTML = s; 
      sa =document.getElementById("sauerkrautq").value;
      sat = sa*(item.sauerkraut);
      document.getElementById("saq").innerHTML = sa; 
      totals = ((ht+ft+st+sat)*100/100).toFixed(2);
      document.getElementById("total").innerHTML = "$" + totals;
    }