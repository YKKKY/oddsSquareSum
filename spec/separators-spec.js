'use strict';

var main= require('../src/separators.js');

describe('oddArray', function() {

  it('oddArray', function() {
    let  input =[1,2,3,4,5];
    const expectText =[1,3,5];

    expect(main.buildOddsArray(input)).toEqual(expectText);
  });

  it('oddSquare',function(){

    const input=[1,3,5];
    const expectText =[1,9,25];

    expect(main.buildOddsSquareArray(input)).toEqual(expectText);
  });

  it('oddSquareSum',function(){

    const input=[1,9,25];
    const expectText =35;

    expect(main.buildOddsSquareSum(input)).toEqual(expectText);
  });
  it('should print correct text', () => {

    const inputs=[1,2,3,4,5];
    spyOn(console, 'log');

    main.printOddSumArray(inputs);

   const expectText=35;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

});
