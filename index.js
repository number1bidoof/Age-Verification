// defines the users 
const Myage = document.getElementById('age');
const MyButton = document.getElementById('enter');
const MyText = document.getElementById('result');
let age;
MyButton.onclick = function(){
    age = Myage.value;
    age = Number(age);
    if (age == 100) {
        MyText.innerHTML = "You can enter the website, but your about to die soon :\("
    } else if (age <= 0 ){
        MyText.innerHTML = "How are you that YOUNG big bruh, your not even born yet anyways still not allowed to enter"
    } else if (age > 100 && age < 1000) {
        MyText.innerHTML = "Your too old for this website"
    } else if (age >= 1000) {
        MyText.innerHTML = "How are you older than 1000 years old big bruh? is that even possible? STILL not allowed to enter this website "
    } else if (age < 18 && age >= 16) {
        MyText.innerHTML = " You are really close to being able to access the website, but you are still too young :("
    } else  if (age < 16) {
        MyText.innerHTML = "You cannot enter the website :("
    } else {
        MyText.innerHTML = "You can enter the website :)"
    }
}