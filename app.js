//task-1
console.log('You can ignore single and double quotes like this:\\\'\\\'\\\"\\\"');

//task-2
alert('Please enter your data');

let userName = prompt("Enter your name", 'Name');
alert(`Your name is: ${userName}`)

let surName = prompt("Enter your surname", 'surname');
alert(`Your full name: ${userName} ${surName}`)

let yourAge = ',your age is:';

let userAge = prompt("How old are you?", 'Age');
alert(`Your full name: ${userName} ${surName} ${yourAge} ${userAge}`)

let userAdmin = confirm('Are you admin?');
alert(`Your full name: ${userName} ${surName} ${yourAge} ${userAge}, admin status is: ${userAdmin}`);

//============================================

// console.log(Boolean (alert("5")));//false (alert нічого не повертає, пустий рядок стає 0, а 0- false )
// console.log(true > false); // true (true=1, false=0, 1>0 , тому true)
// console.log(true > 5); // false (true=1, 5=5, 1>5(невірно) , тому false)
// console.log(true < "5");// true (true=1, "5"=5, 1<5(вірно) , тому true)
// console.log(true > null); // true (true=1, null=0, 1>0(вірно) , тому true)

