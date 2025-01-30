// defines the users 
const Myage = document.getElementById('age');
const MyButton = document.getElementById('enter');
const MyText = document.getElementById('result');
let age;
MyButton.onclick = function(){
    age = Myage.value;
    age = Number(age);
    if (age < 10) {
        MyText.innerHTML = "your too young for this website"
    } else  if (age == 100) {
        MyText.innerHTML = "You can enter the website, but its your last year doing so"
    } else if (age == 0) {
        MyText.innerHTML = "How are you that YOUNG big bruh, your not even born yet anyways still not allowed to enter"
    } else if (age > 100) {
        MyText.innerHTML = "Your too old for this website"
    } else if (age == 1000) {
        MyButton.innerHTML = "How are you 1000 years old big bruh? is that even possible? STILL not allowed to enter this website "
    } else {
        MyText.innerHTML = "you can enter the website"
    }
}