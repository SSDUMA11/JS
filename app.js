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
