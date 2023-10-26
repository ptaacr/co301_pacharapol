function solution(number){
    if(number !== parseInt(number, 10)) return 'Input must be an integer';
  
    const binaryNumber = number.toString(2);
    
    //Creating an Array of length of each binary item
    console.log(binaryNumber.split('1'))
    const arr = binaryNumber.split('1').map((binaryGap, index, binaryArr) => {
        console.log(binaryGap.length, index, binaryArr)
        //  return binaryArr[index + 1] != undefined ? binaryGap.length : 0;
    });
    return Math.max.apply(Math, arr);
  }
console.log(solution(1041))