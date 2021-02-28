function Start1(Price, Name) {
 var Bid = Number(Price);
 var Education = Number(document.getElementById("edu").value);
 var Family = Number(document.getElementById("fam").value);
 var Skill = 0;
 var Age = 1;
 var i = 0;
 do {
     if(document.skillss.skill[i].checked == true){
         Skill += Number(document.skillss.skill[i].value); }
    i++;
 }
 while (i < 4);

i = 0;

 do {
     if(document.agess.age[i].checked == true){
         Age += Number(document.agess.age[i].value); }
    i++;
 } 
 while (i < 3);


 Bid = (((Bid * Education * Family) + Skill) * Age);
  
     if(document.reputation.rep[0].checked == true){
      Bid = Bid * document.reputation.rep[0].value; }
     
     if(document.reputation.rep[1].checked == true){
      Bid = Bid * document.reputation.rep[1].value; }
     
     if(document.reputation.rep[2].checked == true){
      Bid = Bid - document.reputation.rep[2].value; }
  
  alert("From starting bid " + Price + "$ " + Name + "'s price is " + Bid + "$");
}
