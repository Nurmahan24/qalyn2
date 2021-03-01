function Start1(Price, Name, lovel) {
var Name = Name;
var lovel = lovel;
var Bid = Number(Price);

 const Run = (Name, Price) => {
        if (Name.length == 0) {
            alert("Please enter Name");
        }
        else if (Price == 0){
            alert("Don't forget about starting bid!");
        }  else if (Price != 0 && Name.length != 0) {
             var Skill = 0;

 var Age = 1;
 let i = 0;
 Skill = 0;

 do {
     if(document.skillss.skill[i].checked == true){
         Skill += Number(document.skillss.skill[i].value); }
    i++;
 }
 while (i < 4);

 for (i = 0; i < 3; i++) {
     if(document.agess.age[i].checked == true){
         Age += Number(document.agess.age[i].value); }
 } 


 Bid = (((Bid * Number(document.getElementById("edu").value) * Number(document.getElementById("fam").value)) + Skill) * Age);
  
     if(document.reputation.rep[0].checked == true){
      Bid = Bid * document.reputation.rep[0].value; }
     
     if(document.reputation.rep[1].checked == true){
      Bid = Bid * document.reputation.rep[1].value; }
     
     if(document.reputation.rep[2].checked == true){
      Bid = Bid - document.reputation.rep[2].value; }

      if (lovel.length == 0){
          lovel = "empty";
      }
  
  alert("From starting bid " + Price + "$ " + Name + "'s price is " + Bid + "$ " + "loveletter is <" + lovel + ">");
        }
    }

        Run(Name, Price);
}
