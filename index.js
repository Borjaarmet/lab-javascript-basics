// iteration 1

let Hacker1 = "Borja";
console.log(`the driver´s name is ${Hacker1}`);

let Hacker2 = "Stephanie";
console.log(`the navigator´s name is ${Hacker2}`);

// iteration 2

if(Hacker1.length > Hacker2.length){
  console.log(`The driver has the longest name, it has ${Hacker1.length} characters.`);
}else if (Hacker1.length < Hacker2.length){
  console.log(`The navigator has the longest name, it has ${Hacker2.length} characters.`);
}else{
  console.log(`Wow, you both have equally long names,${Hacker1.length} characters!.`);
}

/*
// iteration 3

let upperName = Hacker1.toUpperCase();
let result="";
  for (let i = 0; i < upperName.length; i++) {
   result= (upperName.charAt(i) + " ");
   console.log(result);
   
  }

 

function reverse(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--)
    result += string[i];
  console.log(result);
}
reverse(Hacker1);

  

