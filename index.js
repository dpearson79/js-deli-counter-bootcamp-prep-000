var katzDeli = [];
var number = 0
function takeANumber (katzDeliLine){
number ++
  katzDeliLine.push(number)
return "Welcome, You are number "+ number +"."

}

function nowServing (deliLine){
var number;

if(deliLine.length === 0){
  return "There is nobody waiting to be served!"
}

number = deliLine.shift()
return "Currently serving "+ number + "."
}

function currentLine (katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }

  var myString = `The line is currently: 1. ${katzDeliLine[0]}`

  for(let i = 1; i<katzDeliLine.length;i++){
  myString += `, ${i+1}. ${katzDeliLine[i]}`
}
return myString
}