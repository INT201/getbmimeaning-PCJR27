const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  bmi = weight/(height*height)
  return bmi

 }
 function getBMIMeaning(weight, height) {
  let BMI = calculateBMI(weight, height)
  if(BMI <18.5){
    console.log("Underweight")
  } else if(BMI >18.4 && BMI <25.0){
    console.log("Normal weight")
  }else if (BMI >25.0){
    console.log("Overweight")}
 }
module.exports = getBMIMeaning
