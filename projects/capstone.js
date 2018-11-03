/*const _ = {
  clamp (num,lower,upper){

    if (num < lower){
      return lower;
    } else if (num > upper){
      return upper;
    } else{
      return num;
    }

  },
};*/

const _ = {
  clamp (number,lower,upper){
    let lowerClampedValue = Math.max(number,lower);
    let clampedValue = Math.min(lowerClampedValue,upper);
    return clampedValue;
  },
  inRange (num,startNum,endNum){

    if (typeof endNum === "undefined"){
      endNum = startNum;
      startNum = 0;
    }
    if (startNum > endNum){
      let temp = endNum;
      endNum = startNum;
      startNum = temp;
    }
    let isInRange = (startNum <= num && num < endNum)

    return isInRange;
  },
  words (string){
    let words = string.split(" ");
    return words;

  },
  pad (string,length){
    let currentLength = string.length;
    let targetLength = length;

    if (targetLength < currentLength){
            return string;
    }

    let startPaddingLength = Math.floor((targetLength - currentLength)/2);
    let endPaddingLength = targetLength - currentLength -  					  startPaddingLength;

    let space = " ";
    let paddedString = space.repeat(startPaddingLength) + 		string + space.repeat(endPaddingLength);

    return paddedString;
  },
  has (object,key){

    let spotty = object[key] ? true : false;
    let hasValue = spotty;

    return hasValue;
  },
  invert (object) {

    let invertedObject = {}

    for (let value in object) {
      let originalValue = object.value;
      invertedObject.originalValue = value;
    }
    return invertedObject;
  },
  findKey (object,predicate) {

    for (let everyValue in object) {
      let value = object.everyValue;
      //console.log(value);
      let predicateReturnValue =   predicate(object[everyValue]);
      //console.log(predicateReturnValue);
      if (predicateReturnValue){
        return everyValue;
      }
        return undefined;
    }
  },
  drop (arr,n) {

    if (n === undefined){
      n = 1;
    }

    let droppedArray = arr.splice(n);
    return droppedArray;

  },
  dropWhile (someArr,predicate) {

    //console.log(someArr);
    let droppedArray = []

     let dropNumber = someArr.findIndex((element,i) => {
        if (!predicate(someArr[i], i, someArr)) {
          droppedArray = someArr.slice(i, someArr.length);
          //console.log(droppedArray);
        }
     })
        return droppedArray;
  },
  chunk (arr,size) {

    if (size === undefined) {
      size = 1;
    }
    let arrayChunks = [];

    for (let i = 0; i < arr.length; i = i + size) {

         let arrayChunk = arrayChunks.push(arr.slice(i,i + size));
         //console.log(arrayChunk);

           }
         return arrayChunks;
  }

  }




// Do not write or modify code below this line.
module.exports = _;
