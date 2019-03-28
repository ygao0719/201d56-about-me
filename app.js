'use strict';


var numCorrect = 0;


var userName = prompt('Hey, welcome to my about-me! My name is Yuan, what should I call you?');
alert('Nice to meet you, ' + userName + '!');
console.log('User entered their username as \'' + userName + '\'.');
alert('Next, I\'m going to ask you a few questions about myself, so you can get to know me.');


// My drive CODE
yesNoQuestions();
myFavNumber();
countryLived();
alert('You got ' + numCorrect + ' out of 7 questions correct, ' + userName + ' ! Better luck next time.');

function yesNoQuestions(){
  var place = prompt('Am I in Seattle?');
  if (place.toLowerCase()==='y' || place.toLowerCase()==='yes'){
    console.log('Yes. I am in Seattle');
    alert('Great, you are right!');
    numCorrect ++;
  }else {
    console.log('No. I am in Seattle');
    alert ('Sorry, you are wrong!');
  }
  
  var degree = prompt('Do I have a degree on computer science?');
  if (degree.toLowerCase() === 'y' || degree.toLowerCase() ==='yes'){
    console.log('yes. I do');
    alert('Great, you are right!');
    numCorrect++;
  }else {
    console.log('No. I do');
    alert ('Sorry, you are wrong!');
  }

  var pet= prompt('Do I like dog?');
  if (pet.toLowerCase() === 'y' || pet.toLowerCase() === 'yes'){
    console.log('yes. I do');
    alert('Great, you are right!');
    numCorrect++;
  }else {
    console.log('No. I do');
    alert ('Sorry, you are wrong!');
  }

  var habit = prompt('Do I like swimming?');
  if (habit.toLowerCase() === 'y' || habit.toLowerCase() === 'yes'){
    console.log('yes. I do');
    alert('Great, you are right!');
    numCorrect++;
  }else {
    console.log('No. I do');
    alert ('Sorry, you are wrong!');
  }

  var food = prompt('Do I like eating Chinese food?');
  if (food.toLowerCase() === 'y' || food.toLowerCase() === 'yes'){
    console.log('yes. I do');
    alert('Great, you are right!');
    numCorrect++;
  }else {
    console.log('No. I do');
    alert ('Sorry, you are wrong!');
  }
}

function myFavNumber(){
  var num = '';
  var limit = 4;
  var numGuess = 0;
  while (numGuess < limit){
    num = prompt('Guess! What is my favorite number?');
    numGuess++;
    if (num > 9){
      alert('Too high. Try agian. ');
      console.log('The user\'s number is too high');
    }else if (num < 9){
      alert('Too low. Try again ');
      console.log('The use\'s number is too low');
    }else if (num === 9){
      alert('You are right. 9 is my number.');
      console.log('The use\'s number is right');
      numCorrect++;
      break;
    }
  }
}

function countryLived(){
  var seventhCorrect = ['china', 'jordan', 'kuwait'];
  for(var i = 0; i < 6; i ++){
    var country = prompt('Can you guess a country that I have lived in besides U.S.?');
    if (seventhCorrect.includes(country.toLowerCase())){
      alert('You are right!');
      console.log('user is right');
      numCorrect++;
      break;
    }else{
      alert('Sorry, try it again.');
      console.log('user is wrong. ');
    }
  }
}
