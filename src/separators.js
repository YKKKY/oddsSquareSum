'use strict';

function printOddSumArray(numbers) {

    const oddsArray=buildOddsArray(numbers);
    const oddsSquareArray=buildOddsSquareArray(oddsArray);
    const oddSquareSum=buildOddsSquareSum(oddsSquareArray);
    console.log(oddSquareSum);
}

function buildOddsArray(numbers){
    return numbers.filter(input=>input%2===1);

}
function buildOddsSquareArray(oddsArray){

    return oddsArray.map(odds=>Math.pow(odds,2));
}
function buildOddsSquareSum(oddsSquareArray){

    return  oddsSquareArray.reduce((prv,next)=>{return prv+next})
}

module.exports = {
    printOddSumArray,
    buildOddsArray,
    buildOddsSquareArray,
    buildOddsSquareSum

}
/*
function printOddSumArray(numbers){

    const oddsSum=numbers.filter(number=>number%2===1).map(odd=>odd*odd).reduce((prv,next)=>{return prv+next});
  console.log(oddsSum);
}*/
