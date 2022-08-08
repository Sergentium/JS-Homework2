let name = prompt("What is your name?");
let age = +prompt ("How old are you?");

if (age < 18) {
    alert ("You are not allowed to visit this website!");
} else if (age >= 18 && age <= 22) {
   let questionUser = confirm ("Are you sure you want to continue?");  
if (questionUser) {
    alert ("Welcome,"+ " " +name);
} else {
    alert ("You are not allowed to visit this website!");
} 
}else {
    alert (`Welcome, ${name}`);
}
